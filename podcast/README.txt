Drop podcast MP3s here. Git deploy copies this folder to the site.

Apple / Pocket Casts / YouTube Music / etc. subscribe to:

  https://extropyengine.com/podcast/feed.xml

The feed rebuilds whenever you push. Do not upload through Hostinger's
file manager — the next Git push overwrites public_html.

GitHub web: repo → public/podcast → Add file → Upload.
Or drop the files in chat.

Naming
------
  2026-08-24-the-loop-is-the-product.mp3     ← date + slug (preferred)
  whatever-you-want.mp3                      ← title from the filename

Optional sidecar (same name, .json) for title/summary:

  {
    "title": "The loop is the product",
    "summary": "One sitting. What the engine actually does.",
    "explicit": true,
    "season": 1,
    "episode": 1
  }

cover.jpg is the show art (1400×1400). Replace it if you want a different square.
Owner email in the RSS is podcast@extropyengine.com — change it in
scripts/podcast-feed.mjs before submitting the show to Apple.
