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
npm run dev              # preview
npm run build            # Vercel / SSR
npm run build:hostinger  # static files for Hostinger
```

### Hostinger — extropyengine.com

The site is built as static HTML and published to the `hostinger` branch on every push to `main`. Hostinger then serves that branch.

1. In hPanel open **extropyengine.com**.
2. Remove the current **redirect to lladnaros.com**.
3. **Advanced → Git** (or Websites → Git). Connect GitHub, pick `00ranman/lladnaros.com`, branch **`hostinger`**, deploy into `public_html`.
4. Turn on **auto-deploy** so each GitHub push goes live.
5. Confirm SSL is on (Hostinger → SSL).

After that, edit `src/content/site.ts` or `src/content/essays.ts`, push to `main`, and the domain updates itself.

`extropyengine.com` currently 301s to lladnaros.com — that redirect has to come off or visitors will never see this remake.

## Pages

- `/` — book, music, papers, suite, connect
- `/start` plus `/start/money`, `/start/ai`, `/start/governance`, `/start/physics`
- `/glossary`, `/open-problems`, `/proof-layers`, `/mvt`
- `/universaltimes` — live hydrogen-anchored dual clock
- `/docs` — spec and paper index

Built by Randall Gossett. Original conspirator: Perplexity Computer. This remake: Grok Build.
They want fire. I bring fungus.
