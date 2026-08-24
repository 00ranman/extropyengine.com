/**
 * Scan public/podcast/*.mp3 and write Apple-compatible RSS + a JSON index.
 * Drop an MP3 (optional sidecar .json) and rebuild / restart dev.
 */
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const DIR = join(process.cwd(), "public/podcast");
const SKIP = new Set(["cover.jpg", "cover.png", "feed.xml", "index.json", "readme.txt", "readme.md"]);

export const podcastMeta = {
  title: "Extropy Engine",
  author: "Randall Gossett",
  email: "podcast@extropyengine.com",
  description:
    "Talk, field notes, and loops from Randall Gossett. Entropy reduction. Not a newsletter.",
  language: "en-us",
  explicit: true,
  category: "Society & Culture",
  subcategory: "Philosophy",
  image: "/podcast/cover.jpg",
  link: "/podcast",
  feedPath: "/podcast/feed.xml",
};

function origin() {
  const host = process.env.VITE_PUBLIC_HOSTNAME || "extropyengine.com";
  return `https://${host.replace(/^https?:\/\//, "")}`;
}

function abs(path) {
  const o = origin();
  return path.startsWith("http") ? path : `${o}${path.startsWith("/") ? path : `/${path}`}`;
}

function xml(s) {
  return String(s).replace(/[&<>"']/g, (ch) => {
    if (ch === "&") return "\u0026amp;";
    if (ch === "<") return "\u0026lt;";
    if (ch === ">") return "\u0026gt;";
    if (ch === '"') return "\u0026quot;";
    return "\u0026apos;";
  });
}

function titleFromName(name) {
  const stem = name.replace(/\.mp3$/i, "");
  const dated = stem.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
  const raw = dated ? dated[2] : stem;
  return raw
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function pubFromName(name, mtime) {
  const stem = name.replace(/\.mp3$/i, "");
  const dated = stem.match(/^(\d{4}-\d{2}-\d{2})/);
  if (dated) return new Date(`${dated[1]}T12:00:00Z`);
  return new Date(mtime);
}

function rfc2822(d) {
  return d.toUTCString();
}

function durationOf(file) {
  try {
    const out = execFileSync(
      "ffprobe",
      ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file],
      { encoding: "utf8" },
    ).trim();
    const sec = Math.round(Number(out));
    if (!Number.isFinite(sec) || sec <= 0) return null;
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return h > 0
      ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      : `${m}:${String(s).padStart(2, "0")}`;
  } catch {
    return null;
  }
}

function readSidecar(mp3Path) {
  const jsonPath = mp3Path.replace(/\.mp3$/i, ".json");
  if (!existsSync(jsonPath)) return {};
  try {
    return JSON.parse(readFileSync(jsonPath, "utf8"));
  } catch {
    return {};
  }
}

export function scanEpisodes() {
  if (!existsSync(DIR)) return [];
  const files = readdirSync(DIR).filter(
    (f) => f.toLowerCase().endsWith(".mp3") && !SKIP.has(f.toLowerCase()),
  );
  const episodes = files.map((file) => {
    const full = join(DIR, file);
    const st = statSync(full);
    const extra = readSidecar(full);
    const pub = extra.pubDate ? new Date(extra.pubDate) : pubFromName(file, st.mtimeMs);
    const src = `/podcast/${file}`;
    return {
      file,
      src,
      url: abs(src),
      bytes: st.size,
      title: extra.title || titleFromName(file),
      summary: extra.summary || extra.description || "",
      pubDate: rfc2822(pub),
      pubMs: pub.getTime(),
      explicit: extra.explicit !== false,
      season: extra.season ?? null,
      episode: extra.episode ?? null,
      duration: extra.duration || durationOf(full),
      guid: extra.guid || createHash("sha1").update(file).digest("hex"),
    };
  });
  episodes.sort((a, b) => b.pubMs - a.pubMs);
  return episodes;
}

export function renderFeed(episodes = scanEpisodes()) {
  const m = podcastMeta;
  const items = episodes
    .map((ep) => {
      const dur = ep.duration ? `\n      <itunes:duration>${xml(ep.duration)}</itunes:duration>` : "";
      const season = ep.season != null ? `\n      <itunes:season>${xml(ep.season)}</itunes:season>` : "";
      const episode =
        ep.episode != null ? `\n      <itunes:episode>${xml(ep.episode)}</itunes:episode>` : "";
      const summary = ep.summary
        ? `\n      <description>${xml(ep.summary)}</description>\n      <itunes:summary>${xml(ep.summary)}</itunes:summary>`
        : `\n      <description>${xml(ep.title)}</description>`;
      return `    <item>
      <title>${xml(ep.title)}</title>${summary}
      <pubDate>${xml(ep.pubDate)}</pubDate>
      <guid isPermaLink="false">${xml(ep.guid)}</guid>
      <link>${xml(ep.url)}</link>
      <enclosure url="${xml(ep.url)}" length="${ep.bytes}" type="audio/mpeg"/>
      <itunes:author>${xml(m.author)}</itunes:author>
      <itunes:explicit>${ep.explicit ? "true" : "false"}</itunes:explicit>${dur}${season}${episode}
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(m.title)}</title>
    <link>${xml(abs(m.link))}</link>
    <language>${xml(m.language)}</language>
    <copyright>© ${new Date().getUTCFullYear()} ${xml(m.author)}</copyright>
    <description>${xml(m.description)}</description>
    <itunes:author>${xml(m.author)}</itunes:author>
    <itunes:summary>${xml(m.description)}</itunes:summary>
    <itunes:explicit>${m.explicit ? "true" : "false"}</itunes:explicit>
    <itunes:owner>
      <itunes:name>${xml(m.author)}</itunes:name>
      <itunes:email>${xml(m.email)}</itunes:email>
    </itunes:owner>
    <itunes:image href="${xml(abs(m.image))}"/>
    <itunes:category text="${xml(m.category)}">
      <itunes:category text="${xml(m.subcategory)}"/>
    </itunes:category>
    <itunes:type>episodic</itunes:type>
    <atom:link href="${xml(abs(m.feedPath))}" rel="self" type="application/rss+xml"/>
    <image>
      <url>${xml(abs(m.image))}</url>
      <title>${xml(m.title)}</title>
      <link>${xml(abs(m.link))}</link>
    </image>
${items}
  </channel>
</rss>
`;
}

export function writePodcastFeed() {
  if (!existsSync(DIR)) return { count: 0 };
  const episodes = scanEpisodes();
  writeFileSync(join(DIR, "feed.xml"), renderFeed(episodes));
  writeFileSync(
    join(DIR, "index.json"),
    JSON.stringify(
      {
        title: podcastMeta.title,
        feed: podcastMeta.feedPath,
        episodes: episodes.map(({ file, pubMs, guid, url, ...rest }) => rest),
      },
      null,
      2,
    ),
  );
  return { count: episodes.length };
}

export function podcastFeedPlugin() {
  return {
    name: "extropy-podcast-feed",
    buildStart() {
      writePodcastFeed();
    },
    configureServer(server) {
      writePodcastFeed();
      server.watcher.add(DIR);
      server.watcher.on("all", (_event, file) => {
        if (file && file.includes(`${join("public", "podcast")}`) && !file.endsWith("feed.xml") && !file.endsWith("index.json")) {
          writePodcastFeed();
        }
      });
    },
  };
}

const isMain = process.argv[1] && process.argv[1].endsWith("podcast-feed.mjs");
if (isMain) {
  const { count } = writePodcastFeed();
  console.log(`podcast feed: ${count} episode(s)`);
}
