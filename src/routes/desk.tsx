import { useEffect, useMemo, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import {
  desk,
  deskAudience,
  deskIndustry,
  deskMentions,
  deskPipes,
  deskRules,
  deskTasks,
} from "@/content/desk";
import { faqSections } from "@/content/faq";
import { glossarySections } from "@/content/essays";
import { podcast } from "@/content/podcast";

export const Route = createFileRoute("/desk")({
  head: () => ({
    meta: [
      { title: "The desk — Extropy Engine" },
      {
        name: "description",
        content:
          "Live board for Extropy Engine: git, RSS, mentions, what the pages actually say. Not a control center. The site is not the Engine.",
      },
    ],
  }),
  component: DeskPage,
});

type Episode = { src: string; title: string; summary: string; pubDate: string; duration: string | null };
type Issue = { number: number; title: string; html_url: string; updated_at: string };
type Commit = { sha: string; html_url: string; commit: { message: string; author: { date: string } | null } };

function DeskPage() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [commits, setCommits] = useState<Commit[]>([]);
  const [pulled, setPulled] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [asked, setAsked] = useState("");

  useEffect(() => {
    let live = true;
    const stamp = () => {
      if (live) setPulled(new Date().toISOString());
    };

    fetch("/podcast/index.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((j: { episodes?: Episode[] } | null) => {
        if (live && j?.episodes?.length) setEpisodes(j.episodes.slice(0, 4));
      })
      .catch(() => {});

    fetch("https://api.github.com/repos/00ranman/extropy-engine/issues?state=open&per_page=6")
      .then((r) => (r.ok ? r.json() : []))
      .then((rows: Issue[]) => {
        if (live && Array.isArray(rows)) setIssues(rows.filter((i) => i && i.number));
      })
      .catch(() => {});

    fetch("https://api.github.com/repos/00ranman/extropyengine.com/commits?per_page=4")
      .then((r) => (r.ok ? r.json() : []))
      .then((rows: Commit[]) => {
        if (live && Array.isArray(rows)) setCommits(rows);
        stamp();
      })
      .catch(() => stamp());

    return () => {
      live = false;
    };
  }, []);

  const hits = useMemo(() => searchDesk(asked), [asked]);

  return (
    <SiteShell>
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16">
        <p className="font-mono text-[10px] tracking-[0.28em] text-primary uppercase">{desk.kicker}</p>
        <h1 className="font-display mt-2 text-[clamp(32px,5vw,52px)] tracking-[0.03em]">{desk.title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{desk.lead}</p>
        <p className="mt-3 font-mono text-[11px] tracking-[0.12em] text-dim">{desk.who}</p>
        <p className="mt-4 font-mono text-[11px] text-accent">
          {pulled
            ? `last pull ${new Date(pulled).toLocaleString()} · grounded to this site · no 77M guessing`
            : "pulling git + RSS…"}
        </p>

        <section className="mt-10">
          <h2 className="font-display text-xl tracking-[0.04em]">Ask the pages</h2>
          <p className="mt-2 max-w-2xl text-sm text-dim">
            Searches the FAQ and glossary on this site. It will not invent quantum. It will not
            close on a watchtower.
          </p>
          <form
            className="mt-4 flex flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setAsked(q.trim());
            }}
          >
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="observer effect, decay, panopticon, EP…"
              className="min-w-0 flex-1 border border-primary/30 bg-bg px-3 py-2 font-mono text-sm text-fg outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="border border-primary bg-primary/15 px-4 py-2 font-mono text-[11px] tracking-[0.16em] text-primary uppercase hover:bg-primary hover:text-ink"
            >
              Ask
            </button>
          </form>
          {asked ? (
            <div className="mt-4 space-y-3">
              {hits.length === 0 ? (
                <p className="text-sm text-dim">Nothing on these pages matches that. Try the FAQ.</p>
              ) : (
                hits.map((h) => (
                  <article key={h.href} className="border border-fg/12 px-4 py-3">
                    <Link to={h.href} hash={h.hash} className="font-display text-lg text-fg hover:text-primary">
                      {h.title}
                    </Link>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{h.body}</p>
                  </article>
                ))
              )}
            </div>
          ) : null}
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Board title="Latest drops" kicker="already on the site">
            {episodes.length ? (
              <ul className="space-y-3">
                {episodes.map((ep) => (
                  <li key={ep.src}>
                    <Link to="/podcast" className="text-fg hover:text-primary">
                      {ep.title}
                    </Link>
                    <span className="mt-1 block text-xs text-dim">
                      {ep.duration ?? ""} · {ep.pubDate.replace(/ \+.*/, "")}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-dim">
                Catalog is at{" "}
                <Link to="/podcast" className="text-primary hover:underline">
                  /podcast
                </Link>
                . RSS: {podcast.feedUrl}
              </p>
            )}
            <a
              href="https://open.spotify.com/search/Lladnaros%20Weaponized%20Transparency"
              className="mt-4 block text-sm text-muted hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              Weaponized Transparency — watching as a lever. Not the observer effect.
            </a>
          </Board>

          <Board title="Open on git" kicker="extropy-engine issues">
            {issues.length ? (
              <ul className="space-y-3">
                {issues.map((i) => (
                  <li key={i.number}>
                    <a href={i.html_url} className="text-fg hover:text-primary" target="_blank" rel="noreferrer">
                      #{i.number} {i.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-dim">No open issues, or GitHub hasn’t answered yet.</p>
            )}
            {commits.length ? (
              <ul className="mt-5 space-y-2 border-t border-fg/10 pt-4">
                {commits.map((c) => (
                  <li key={c.sha} className="text-xs text-dim">
                    <a href={c.html_url} className="text-muted hover:text-primary" target="_blank" rel="noreferrer">
                      {c.commit.message.split("\n")[0]}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </Board>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Board title="Mentions" kicker="live search, not a scrape">
            <p className="mb-3 text-sm text-dim">
              The empty zeros on the other desk were waiting for a refresh. These are the queries.
              Open them live.
            </p>
            <ul className="flex flex-wrap gap-2">
              {deskMentions.map((m) => (
                <li key={m.t}>
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block border border-primary/35 px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] text-primary uppercase hover:bg-primary hover:text-ink"
                  >
                    {m.t}
                  </a>
                </li>
              ))}
            </ul>
          </Board>

          <Board title="Work" kicker="real, not a sprint template">
            <ul className="space-y-4">
              {deskTasks.map((t) => (
                <li key={t.t}>
                  <p className="text-fg">{t.t}</p>
                  <p className="text-sm text-dim">{t.d}</p>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-primary uppercase">{t.when}</p>
                </li>
              ))}
            </ul>
          </Board>
        </div>

        <Board title="Industry" kicker="pinned. not 12 generic AI blogs" className="mt-8">
          <ul className="grid gap-4 sm:grid-cols-2">
            {deskIndustry.map((s) => (
              <li key={s.t}>
                <a href={s.href} className="text-fg hover:text-primary" target="_blank" rel="noreferrer">
                  {s.t}
                </a>
                <p className="mt-1 text-sm text-dim">{s.d}</p>
              </li>
            ))}
          </ul>
        </Board>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Board title="Pipes" kicker="canonical">
            <ul className="space-y-3">
              {deskPipes.map((p) => (
                <li key={p.t} className="flex flex-wrap items-baseline gap-x-3">
                  <a href={p.href} className="font-mono text-[12px] tracking-[0.12em] text-primary uppercase">
                    {p.t}
                  </a>
                  <span className="text-sm text-dim">{p.d}</span>
                </li>
              ))}
            </ul>
          </Board>
          <Board title="Audience" kicker="signal, not follower count">
            <ul className="space-y-3">
              {deskAudience.map((a) => (
                <li key={a.t}>
                  <a href={a.href} className="text-fg hover:text-primary" target="_blank" rel="noreferrer">
                    {a.t}
                  </a>
                  <p className="text-sm text-dim">{a.d}</p>
                </li>
              ))}
            </ul>
          </Board>
        </div>
      </div>
    </SiteShell>
  );
}

function Board({
  title,
  kicker,
  children,
  className = "",
}: {
  title: string;
  kicker: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`border border-fg/12 px-5 py-5 ${className}`}>
      <p className="font-mono text-[10px] tracking-[0.22em] text-primary uppercase">{kicker}</p>
      <h2 className="font-display mt-1 text-xl tracking-[0.04em]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

type Hit = { title: string; body: string; href: string; hash?: string; score: number };

function searchDesk(q: string): Hit[] {
  const needle = q.toLowerCase().trim();
  if (!needle) return [];
  const hits: Hit[] = [];

  for (const rule of deskRules) {
    if (rule.keys.some((k) => needle.includes(k))) {
      const [path, hash] = rule.href.split("#");
      hits.push({ title: "From the pages", body: rule.text, href: path || "/", hash, score: 100 });
    }
  }

  for (const sec of faqSections) {
    for (const item of sec.items) {
      const blob = `${item.q} ${item.a}`.toLowerCase();
      const score = scoreBlob(blob, needle);
      if (score > 0) hits.push({ title: item.q, body: item.a, href: "/faq", hash: item.id, score });
    }
  }

  for (const sec of glossarySections) {
    for (const e of sec.entries) {
      const blob = `${e.term} ${e.def}`.toLowerCase();
      const score = scoreBlob(blob, needle);
      if (score > 0) {
        hits.push({
          title: e.term,
          body: e.def,
          href: "/glossary",
          hash: e.id,
          score,
        });
      }
    }
  }

  hits.sort((a, b) => b.score - a.score);
  const seen = new Set<string>();
  return hits.filter((h) => {
    const k = `${h.href}#${h.hash ?? ""}#${h.title}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  }).slice(0, 4);
}

function scoreBlob(blob: string, needle: string) {
  const words = needle.split(/\s+/).filter((w) => w.length > 2);
  if (!words.length) return blob.includes(needle) ? 1 : 0;
  let n = 0;
  for (const w of words) if (blob.includes(w)) n += 1;
  return n;
}
