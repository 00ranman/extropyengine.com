# Lladnaros

Personal site for **Randall Gossett** — music, writing, and systems theory.

This remake keeps the original look (Cinzel + Space Mono, ember orange, fungus manifesto) but splits every piece of copy into data files so updates are a one-line edit instead of hunting through a 60KB HTML page.

## Update the site (this is the whole point)

All public copy lives in two files:

| File | What you change |
| --- | --- |
| [`src/content/site.ts`](src/content/site.ts) | Book links, albums, singles, papers, app suite, socials, nav |
| [`src/content/essays.ts`](src/content/essays.ts) | Start Here paths, glossary, open problems, MVT exercises, proof layers |

### Add a single

Open `src/content/site.ts` and push an object onto `singles`:

```ts
{
  year: 2026,
  title: "New Track",
  desc: "One-line hover description.",
  art: spotifyArt("SPOTIFY_IMAGE_HASH"),
  links: {
    spotify: "https://open.spotify.com/track/...",
    apple: "https://music.apple.com/...",
    youtube: "https://music.youtube.com/...",
  },
}
```

Same pattern for `albums`, `papers`, `suite`, and `socials`.

### Add a paper

```ts
{
  tag: "New · Epistemology",
  title: "Paper Title",
  href: "/docs/Your_Paper.pdf", // drop the file in public/docs/
}
```

### Replace the book

Drop new files in `public/docs/` and point `book.pdf` / `book.epub` at them in `site.ts`. Swap `public/cover.jpg` for a new cover.

## Local / deploy

```bash
npm install
npm run dev      # preview
npm run build    # production
```

Point the custom domain `lladnaros.com` at the host (Vercel / GitHub Pages via a static adapter if you add one). PDFs and the cover are already in `public/`.

## Pages

- `/` — book, music, papers, suite, connect
- `/start` plus `/start/money`, `/start/ai`, `/start/governance`, `/start/physics`
- `/glossary`, `/open-problems`, `/proof-layers`, `/mvt`
- `/universaltimes` — live hydrogen-anchored dual clock
- `/docs` — spec and paper index

Built by Randall Gossett. Co-conspirator: Perplexity Computer.
They want fire. I bring fungus.
