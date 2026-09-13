#!/usr/bin/env python3
"""Rasterize the book cover from the PDF and write site + OG JPEGs."""
from __future__ import annotations

from pathlib import Path

import pymupdf
from PIL import Image

ROOT = Path("/tmp/extropyengine.com")
PDF = ROOT / "public/docs/Unfuck_The_World_For_A_Dollar.pdf"
DOCS_COVER = ROOT / "public/docs/unfuck-cover.jpg"
SITE_COVER = ROOT / "public/cover.jpg"
OG = ROOT / "public/og.jpg"
CARD = ROOT / "public/cover-card.jpg"


def jpeg(im: Image.Image, dest: Path, quality: int = 88) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    rgb = im.convert("RGB")
    rgb.save(dest, "JPEG", quality=quality, optimize=True, progressive=True)


def main() -> None:
    doc = pymupdf.open(PDF)
    pix = doc[0].get_pixmap(dpi=300, alpha=False)
    cover = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)

    jpeg(cover, DOCS_COVER, 90)

    web = cover.copy()
    web.thumbnail((1400, 1815), Image.Resampling.LANCZOS)
    jpeg(web, SITE_COVER, 86)

    # 1200×630 share card: full-bleed black, cover standing in the middle.
    card = Image.new("RGB", (1200, 630), (11, 10, 9))
    fitted = cover.copy()
    fitted.thumbnail((460, 590), Image.Resampling.LANCZOS)
    x = (1200 - fitted.width) // 2
    y = (630 - fitted.height) // 2
    card.paste(fitted, (x, y))
    jpeg(card, CARD, 86)
    jpeg(card, OG, 86)
    print("cover", cover.size, "web", web.size, "card", card.size)


if __name__ == "__main__":
    main()
