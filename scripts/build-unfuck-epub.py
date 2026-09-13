#!/usr/bin/env python3
"""Build Unf*ck the World for a Dollar as EPUB 3 from the typeset HTML."""
from __future__ import annotations

import html as htmlmod
import re
import zipfile
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path("/tmp/extropyengine.com")
HTML = ROOT / "public/docs/unfuck-the-world.html"
COVER = ROOT / "public/docs/unfuck-cover.jpg"
OUT = ROOT / "public/docs/Unfuck_The_World_For_A_Dollar.epub"
ART = Path("/workspace/artifacts/Unfuck_The_World_For_A_Dollar.epub")

UID = "urn:uuid:b4768a4f-d661-4621-a38c-b275c20f620f"
TITLE = "Unf*ck the World for a Dollar"
AUTHOR = "Randall Gossett"
RECAP = re.compile(
    r"(— XP$|— OPEN$|— A$|— Fractal$|Cognitive, Code|XP, CT, CAT|Time as a$)"
)


def slug(s: str, n: int) -> str:
    t = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return (t or f"section-{n}")[:48]


def parse_sections(raw: str) -> list[dict]:
    body = raw.split("<body>", 1)[1].rsplit("</body>", 1)[0]
    chunks = re.split(r"(?=<section\b)", body)
    out: list[dict] = []
    seen: set[str] = set()
    for chunk in chunks:
        m = re.match(r'<section class="([^"]+)">(.*)</section>\s*$', chunk, re.S)
        if not m:
            continue
        kind, inner = m.group(1), m.group(2).strip()
        if kind == "cover":
            continue
        kicker = ""
        km = re.search(r'class="(?:ch-kicker|part-kicker)">([^<]+)', inner)
        if km:
            kicker = htmlmod.unescape(km.group(1)).strip()
        hm = re.search(r"<h[12]>([^<]+)</h[12]>", inner)
        heading = htmlmod.unescape(hm.group(1)).strip() if hm else ""
        if kind == "chapter" and heading and RECAP.search(heading):
            continue
        if kind == "chapter" and not heading:
            text = htmlmod.unescape(re.sub(r"<[^>]+>", " ", inner))
            text = re.sub(r"\s+", " ", text).strip()
            if text.startswith("Preface:"):
                m = re.match(r"(Preface: The Revolution They Botched)\s+(.*)", text, re.S)
                if m:
                    heading = m.group(1)
                    kicker = "Preface"
                    inner = (
                        f'<p class="kicker">Preface</p><h1>{htmlmod.escape(heading)}</h1>'
                        f"<p>{htmlmod.escape(m.group(2))}</p>"
                    )
            elif re.match(r"Chapter \d+:", text):
                continue
            elif len(text) < 200:
                continue
        key = (kicker + ":" + heading).lower()
        if heading and key in seen:
            continue
        if heading:
            seen.add(key)
        inner = re.sub(r"<h2>", "<h1>", inner)
        inner = re.sub(r"</h2>", "</h1>", inner)
        if kind == "partpage":
            inner = re.sub(r"<p class=\"part-kicker\">", '<p class="kicker">', inner)
            label = f"{kicker}: {heading}".strip(": ")
        elif kind == "toc":
            inner = re.sub(r"<p class=\"ch-kicker\">", '<p class="kicker">', inner)
            label = "Contents"
        elif kind == "titlepage":
            label = TITLE
        elif kind == "front":
            inner = re.sub(r"<p class=\"ch-kicker\">", '<p class="kicker">', inner)
            label = kicker or "A note on this edition"
        elif kind == "chapter":
            inner = re.sub(r"<p class=\"ch-kicker\">", '<p class="kicker">', inner)
            label = heading or kicker or "A note"
            if kicker and heading and not heading.startswith(kicker):
                label = f"{kicker}: {heading}"
        else:
            label = heading or kicker or kind
        out.append({"kind": kind, "kicker": kicker, "heading": heading, "label": label, "inner": inner})
    return out


CSS = """
@page { margin: 0.8em; }
html, body {
  margin: 0;
  padding: 0;
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.45;
  color: #1a1612;
}
.kicker {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.72em;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #b85a28;
  margin: 0 0 0.6em;
}
h1 {
  font-size: 1.45em;
  line-height: 1.2;
  margin: 0 0 0.9em;
  page-break-after: avoid;
}
h2 { font-size: 1.15em; margin: 1.1em 0 0.4em; }
p { margin: 0 0 0.7em; text-indent: 1.1em; }
.kicker, h1 + p, .front p, .toc p, .titlepage p, .note { text-indent: 0; }
.titlepage { text-align: center; margin-top: 2.5em; }
.titlepage h1 { font-size: 1.8em; }
.part { text-align: center; margin-top: 30%; }
.part h1 { letter-spacing: 0.08em; }
.toc p { margin: 0.25em 0; }
.toc .part { color: #b85a28; margin-top: 0.9em; font-variant: small-caps; }
.note { font-style: italic; color: #5c564e; }
body.cover, body.cover img { margin: 0; padding: 0; }
body.cover img { width: 100%; height: auto; }
"""


def xhtml(title: str, body_class: str, inner: str) -> bytes:
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="en" xml:lang="en">
<head>
  <meta charset="utf-8"/>
  <title>{htmlmod.escape(title)}</title>
  <link rel="stylesheet" type="text/css" href="../styles/book.css"/>
</head>
<body class="{body_class}" epub:type="bodymatter">
{inner}
</body>
</html>
""".encode("utf-8")


def main() -> None:
    sections = parse_sections(HTML.read_text())
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    files: list[tuple[str, bytes, int]] = []

    files.append(("mimetype", b"application/epub+zip", zipfile.ZIP_STORED))
    files.append((
        "META-INF/container.xml",
        b"""<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="EPUB/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>
""",
        zipfile.ZIP_DEFLATED,
    ))
    files.append((
        "META-INF/com.apple.ibooks.display-options.xml",
        b"""<?xml version="1.0" encoding="UTF-8"?>
<display_options>
  <platform name="*"><option name="specified-fonts">true</option></platform>
</display_options>
""",
        zipfile.ZIP_DEFLATED,
    ))

    cover_bytes = COVER.read_bytes()
    files.append(("EPUB/images/cover.jpg", cover_bytes, zipfile.ZIP_STORED))
    files.append(("EPUB/styles/book.css", CSS.encode(), zipfile.ZIP_DEFLATED))
    files.append((
        "EPUB/text/cover.xhtml",
        xhtml(
            TITLE,
            "cover",
            '<div epub:type="cover"><img src="../images/cover.jpg" alt="Unf*ck the World for a Dollar"/></div>',
        ),
        zipfile.ZIP_DEFLATED,
    ))

    spine = []
    nav_items = []
    ncx_items = []
    for i, sec in enumerate(sections, 1):
        name = f"s{i:02d}-{slug(sec['label'], i)}.xhtml"
        bclass = "part" if sec["kind"] == "partpage" else sec["kind"]
        files.append((f"EPUB/text/{name}", xhtml(sec["label"], bclass, sec["inner"]), zipfile.ZIP_DEFLATED))
        sid = f"s{i:02d}"
        spine.append((sid, name))
        if sec["kind"] in {"chapter", "partpage", "titlepage", "toc", "front"}:
            nav_items.append((sec["label"], name))
            ncx_items.append((sec["label"], name, i))

    nav = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<!DOCTYPE html>',
           '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="en">',
           "<head><meta charset=\"utf-8\"/><title>Contents</title>",
           '<link rel="stylesheet" type="text/css" href="styles/book.css"/></head>',
           '<body epub:type="frontmatter"><nav epub:type="toc" id="toc"><h1>Contents</h1><ol>']
    for label, href in nav_items:
        nav.append(f'<li><a href="text/{href}">{htmlmod.escape(label)}</a></li>')
    nav.append("</ol></nav></body></html>")
    files.append(("EPUB/nav.xhtml", "\n".join(nav).encode(), zipfile.ZIP_DEFLATED))

    ncx = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">',
        "<head>",
        f'<meta name="dtb:uid" content="{UID}"/>',
        '<meta name="dtb:depth" content="1"/>',
        '<meta name="dtb:totalPageCount" content="0"/>',
        '<meta name="dtb:maxPageNumber" content="0"/>',
        "</head>",
        f"<docTitle><text>{htmlmod.escape(TITLE)}</text></docTitle>",
        "<navMap>",
    ]
    for label, href, i in ncx_items:
        ncx.append(
            f'<navPoint id="np{i}" playOrder="{i}"><navLabel><text>{htmlmod.escape(label)}</text></navLabel>'
            f'<content src="text/{href}"/></navPoint>'
        )
    ncx.append("</navMap></ncx>")
    files.append(("EPUB/toc.ncx", "\n".join(ncx).encode(), zipfile.ZIP_DEFLATED))

    manifest = [
        '<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>',
        '<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>',
        '<item id="css" href="styles/book.css" media-type="text/css"/>',
        '<item id="cover-image" href="images/cover.jpg" media-type="image/jpeg" properties="cover-image"/>',
        '<item id="cover" href="text/cover.xhtml" media-type="application/xhtml+xml"/>',
    ]
    for sid, name in spine:
        manifest.append(f'<item id="{sid}" href="text/{name}" media-type="application/xhtml+xml"/>')
    spine_xml = '\n    '.join(f'<itemref idref="{sid}"/>' for sid, _ in spine)

    opf = f"""<?xml version="1.0" encoding="UTF-8"?>
<package version="3.0" xmlns="http://www.idpf.org/2007/opf" unique-identifier="bookid">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="bookid">{UID}</dc:identifier>
    <dc:title>{htmlmod.escape(TITLE)}</dc:title>
    <dc:creator>{AUTHOR}</dc:creator>
    <dc:language>en</dc:language>
    <dc:publisher>Extropy Engine</dc:publisher>
    <dc:date>{now[:10]}</dc:date>
    <meta property="dcterms:modified">{now}</meta>
    <meta name="cover" content="cover-image"/>
  </metadata>
  <manifest>
    {chr(10).join(manifest)}
  </manifest>
  <spine toc="ncx">
    <itemref idref="cover"/>
    {spine_xml}
  </spine>
  <guide>
    <reference type="cover" title="Cover" href="text/cover.xhtml"/>
  </guide>
</package>
"""
    files.append(("EPUB/content.opf", opf.encode(), zipfile.ZIP_DEFLATED))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    ART.parent.mkdir(parents=True, exist_ok=True)
    for dest in (OUT, ART):
        with zipfile.ZipFile(dest, "w") as z:
            for name, data, compress in files:
                info = zipfile.ZipInfo(name)
                info.compress_type = compress
                z.writestr(info, data)
    print("wrote", OUT, "bytes", OUT.stat().st_size, "sections", len(sections))
    for s in sections:
        print(" -", s["kind"], s["label"][:70])


if __name__ == "__main__":
    main()
