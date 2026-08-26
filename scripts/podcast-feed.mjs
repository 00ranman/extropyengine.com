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
  email: "00ranman@gmail.com",
  description:
    "Talk, field notes, and loops from Randall Gossett. Entropy reduction. The website is not the Engine. The diary stays on the box.",
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

function appleText(s) {
  return String(s)
    .replace(/ΔS/g, "delta S")
    .replace(/Δ/g, "delta ")
    .replace(/[·•]/g, " ")
    .replace(/[—–]/g, "-")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"');
}

function stemOf(name) {
  return name.replace(/\.(mp3|m4a|aac)$/i, "");
}

function titleFromName(name) {
  const stem = stemOf(name);
  const dated = stem.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
  const raw = dated ? dated[2] : stem;
  return raw
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function pubFromName(name, mtime) {
  const stem = stemOf(name);
  const dated = stem.match(/^(\d{4}-\d{2}-\d{2})/);
  if (dated) return new Date(`${dated[1]}T12:00:00Z`);
  return new Date(mtime);
}

function rfc2822(d) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const pad = (n) => String(n).padStart(2, "0");
  return `${days[d.getUTCDay()]}, ${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} +0000`;
}

function durationOf(file) {
  let msg = "";
  try {
    msg = execFileSync("ffmpeg", ["-hide_banner", "-i", file, "-f", "null", "-"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (e) {
    msg = String(e.stderr || e.stdout || "");
  }
  const m = String(msg).match(/Duration:\s*(\d+):(\d+):(\d+(?:\.\d+)?)/);
  if (!m) return null;
  const sec = Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]);
  if (!Number.isFinite(sec) || sec <= 0) return null;
  const h = Math.floor(sec / 3600);
  const min = Math.floor((sec % 3600) / 60);
  const s = Math.round(sec % 60);
  return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function readSidecar(audioPath) {
  const jsonPath = audioPath.replace(/\.(mp3|m4a|aac)$/i, ".json");
  if (!existsSync(jsonPath)) return {};
  try {
    return JSON.parse(readFileSync(jsonPath, "utf8"));
  } catch {
    return {};
  }
}

export function scanEpisodes() {
  if (!existsSync(DIR)) return [];
  const files = readdirSync(DIR).filter((f) => {
    const low = f.toLowerCase();
    if (SKIP.has(low)) return false;
    return low.endsWith(".mp3") || low.endsWith(".m4a") || low.endsWith(".aac");
  });
  const episodes = files.map((file) => {
    const full = join(DIR, file);
    const st = statSync(full);
    const extra = readSidecar(full);
    const mime = file.toLowerCase().endsWith(".m4a") || file.toLowerCase().endsWith(".aac")
      ? "audio/mp4"
      : "audio/mpeg";
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
      mime,
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
      const body = xml(appleText(ep.summary || ep.title));
      const summary = `\n      <description>${body}</description>\n      <itunes:summary>${body}</itunes:summary>`;
      return `    <item>
      <title>${xml(appleText(ep.title))}</title>${summary}
      <pubDate>${xml(ep.pubDate)}</pubDate>
      <guid isPermaLink="false">${xml(ep.guid)}</guid>
      <link>${xml(abs(m.link))}</link>
      <enclosure url="${xml(ep.url)}" length="${ep.bytes}" type="${xml(ep.mime || "audio/mpeg")}"/>
      <itunes:author>${xml(m.author)}</itunes:author>
      <itunes:image href="${xml(abs(m.image))}"/>
      <itunes:explicit>${ep.explicit ? "true" : "false"}</itunes:explicit>${dur}${season}${episode}
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(m.title)}</title>
    <link>${xml(abs(m.link))}</link>
    <language>${xml(m.language)}</language>
    <copyright>&#169; ${new Date().getUTCFullYear()} ${xml(m.author)}</copyright>
    <description>${xml(appleText(m.description))}</description>
    <itunes:author>${xml(m.author)}</itunes:author>
    <itunes:summary>${xml(appleText(m.description))}</itunes:summary>
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
    <lastBuildDate>${rfc2822(new Date())}</lastBuildDate>
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
