#!/usr/bin/env python3
"""Rebuild Unf*ck the World for a Dollar, Codex lock edition."""
from __future__ import annotations

import html
import re
from pathlib import Path

import fitz

ROOT = Path("/tmp/extropyengine.com")
SRC = Path("/workspace/attachments/Unfuck_The_World_For_A_Dollar (3).pdf")
LOCK = ROOT / "scripts" / "unfuck_lock"
HTML_OUT = ROOT / "public" / "docs" / "unfuck-the-world.html"
COVER = ROOT / "public" / "docs" / "unfuck-cover.jpg"


def pdf_pages(path: Path) -> list[str]:
    doc = fitz.open(path)
    pages = []
    for p in doc:
        pages.append(p.get_text("text") or "")
    return pages


SKIP_LINE = re.compile(
    r"^(UNFUCK THE WORLD( FOR A DOLLAR)?|FOR A DOLLAR|By Randall Gossett|"
    r"with Perplexity Computer|TABLE OF CONTENTS|Table of Contents)$",
    re.I,
)


def clean_page(text: str, n: int) -> str:
    lines = []
    for raw in text.splitlines():
        s = raw.strip()
        if not s:
            if lines and lines[-1] != "":
                lines.append("")
            continue
        if s.isdigit() and 1 <= int(s) <= 500:
            continue
        if SKIP_LINE.match(s):
            continue
        if s in {"PART I: THE DIAGNOSIS", "PART II: THE THESIS"} and n <= 7:
            continue
        lines.append(s)
    t = "\n".join(lines)
    t = t.replace("\u00ad", "")
    t = re.sub(r"(\w)[\u2010\u2011\u2012\u2013\-]\n(\w)", r"\1\2", t)
    t = re.sub(r"(\w)[\u2010\u2011]\s+(\w)", r"\1\2", t)
    return t.strip()


def paras(text: str) -> str:
    blocks = re.split(r"\n\s*\n", text)
    out = []
    for b in blocks:
        b = re.sub(r"\s*\n\s*", " ", b.strip())
        b = re.sub(r" {2,}", " ", b)
        if b:
            out.append(b)
    return "\n\n".join(out)


def splice(body: str, start_pat: str, end_pat: str, replacement: str, keep_end: bool = True) -> str:
    sm = re.search(start_pat, body)
    if not sm:
        print("WARN splice miss start", start_pat[:50])
        return body
    em = re.search(end_pat, body[sm.end() :])
    if not em:
        print("WARN splice miss end", end_pat[:50])
        return body
    abs_end = sm.end() + (em.start() if keep_end else em.end())
    return body[: sm.start()] + replacement.strip() + "\n\n" + body[abs_end:]


def lock_phrases(t: str) -> str:
    pairs = [
        (
            "Put on some music — Radiohead, obviously, because when you're trying to assassinate your own creation you need the appropriate level of existential dread — and I started trying to fuck it up.",
            "Put on some music. Not the kind that cheers you up. And I started trying to fuck it up.",
        ),
        (
            "There's coffee. There's Radiohead. (There's always Radiohead.)",
            "There's coffee. There's a cursor blinking.",
        ),
        ("The Multi-Token Economy — Six Tokens, Zero Bullshit", "Records and Meters — Nothing You Can Bag"),
        ("The Multi-Token Economy — Six Tokens, Zero", "Records and Meters — Nothing You Can Bag"),
        ("six-token economy", "records-and-meters stack"),
        ("six token types", "record and meter types"),
        ("six tokens", "records and meters"),
        ("Six Tokens, Zero Bullshit", "Records and Meters"),
        ("Chapter 13: Six Tokens", "Chapter 13: Records and Meters"),
        ("Token Glossary", "Records and Meters"),
        ("the token economy", "the ledger"),
        ("token economy", "ledger"),
        ("token-economy", "ledger"),
        ("Contribution Tokens", "CT (local standing)"),
        ("Capability Tokens", "Capability records"),
        ("Influence Tokens", "governance weight"),
        ("Domain Tokens", "domain claims"),
        ("Emergence Points", "Emergent Product"),
        ("If XP is your experience level, CT is your gold coins. You earn gold by doing quests. You spend gold at the shop. Spending gold doesn't lower your level.",
         "XP is standing. CT is this door. Neither is gold. The shop does not take a bag."),
        ("They earn CT for doing that work.", "They earn standing for doing that work."),
        ("The R component runs through the reputation microservice and xp-formula package.",
         "The R component is rarity. It runs through xp-formula. It is not reputation."),
        ("L ≥ 1 always, so EP can never reduce what XP says you did. It can only amplify the local recognition.",
         "L is in [0, 1]. A stranger at this door can sit at zero. Zero times XP is no discount."),
        ("where L ≥ 1 is the local merchant multiplier set by the local DFAO or merchant network.",
         "where L is in [0, 1], local coupling at this door."),
        ("L ≥ 1, set per local DFAO or", "L in [0, 1], set per local DFAO or"),
        ("You also cannot transfer it without friction (δ = 0.02 per transfer, remember?).",
         "You cannot transfer it. There is no transfer, so there is no transfer friction."),
        ("Can be transferred with lower friction than XP", "Does not transfer. Standing is not a wire."),
        ("Manages all six token types (XP, CT, EP, Γ, DT, CAT), implements decay (λ = 0.01/30 cycles), friction (δ = 0.02), and token interactions.",
         "Manages records and meters (XP, CT, CAT, IT, EP). Decay on standing. No transfer friction, because nothing transfers. DT and Γ are not types."),
        ("with Perplexity Computer", ""),
        ("& PERPLEXITY COMPUTER", ""),
        ("BY RANDALL GOSSETT & PERPLEXITY COMPUTER", "BY RANDALL GOSSETT"),
        ("governance token", "governance weight"),
        ("CT Purchasing-Power Formula", "till expression EP = XP × L"),
        ("The 10-Level Reputation Ladder", "Routing, Not Purchasing Power"),
        ("Appendix B: Routing, Not Purchasing Power", "Appendix B: Routing, Not Purchasing Power"),
        ("DT (Domain Token) — See Appendix D.", "Domain (filter) — See Appendix D. DT is retired."),
        ("CT (Contribution Token) — See Appendix D.", "CT (local standing) — See Appendix D."),
        ("IT (Influence Token) — See Appendix D.", "IT (governance weight) — See Appendix D."),
        ("CAT (Capability Token) — See Appendix D.", "CAT (capability record) — See Appendix D."),
        ("creates new XP tokens when claims SETTLE", "records new XP standing when claims SETTLE"),
        ("Token-economy constant", "standing constant"),
        ("λ (lambda, XP decay rate) — Token-economy constant", "λ (lambda, XP decay rate) — standing constant"),
        ("Radiohead", "the same three songs"),
    ]
    for a, b in pairs:
        t = t.replace(a, b)
    t = re.sub(r"\n{3,}", "\n\n", t)
    return t


WORD = r"(?:[A-Z][A-Za-z0-9'’/\-]{1,},?|—|–|\b(?:and|of|the|to|for|from|as|in|on|vs|by|or|a|A)\b)"
CH_TITLE = re.compile(rf"^(Chapter \d+:\s+{WORD}(?:\s+{WORD}){{1,18}})")
TRAIL_BODY = re.compile(
    r"\s+(?:What|Let's|Let’s|Here's|Here’s|Here['’]s|Quick|Every|Theory|We|I'm|I’m|I've|I’ve|One|Look|Okay|Yeah|When|This|I)$"
)


def peel_title(block: str) -> tuple[str, str]:
    s = block.strip()
    m = re.match(r"^(PART [IVX]+:(?:\s+[A-Z]{2,})+)", s)
    if m:
        rest = s[m.end() :].strip()
        rest = re.sub(r"^Or:\s+\S[^\n]{0,90}\s*", "", rest, count=1).strip()
        return m.group(1).strip(), rest
    if s.startswith("Preface:"):
        m = re.match(r"^(Preface:\s+The Revolution They Botched)", s)
        if m:
            return m.group(1), s[m.end() :].strip()
    if s.startswith("Appendix "):
        m = re.match(
            r"^(Appendix [A-Z]:\s+[A-Z][A-Za-z0-9 ,\-]{3,70}?)(?=\s+(?:This |There |If |The canonical))",
            s,
        )
        if m:
            return m.group(1).strip(), s[m.end() :].strip()
        m = re.match(r"^(Appendix [A-Z]:\s+[A-Z][A-Za-z ,\-]{3,50})", s)
        if m:
            return m.group(1).strip(), s[m.end() :].strip()
    m = CH_TITLE.match(s)
    if m:
        title = m.group(1).strip()
        if "→" in title or "XP =" in title:
            return "", s
        title = TRAIL_BODY.sub("", title).strip()
        title = re.split(r"\s+Here['’]s\b", title, maxsplit=1)[0].strip()
        title = re.split(r"\s+Let['’]s\b", title, maxsplit=1)[0].strip()
        rest = s[len(title) :].strip()
        if "Cognitive, Code" in title or "XP, CT" in title or title.endswith("as a"):
            return "", s
        rl = rest[:60].lower()
        if rl.startswith(("xp =", "open", "a causally", "fractal org", "unfucks the", "each functional")):
            return "", s
        return title, rest
    return "", s


def wrap_html(body: str) -> str:
    body = re.sub(r"(?<!\n)(?=Chapter \d+:)", "\n\n", body)
    body = re.sub(r"(?<!\n)(?=Appendix [A-Z]:)", "\n\n", body)
    body = re.sub(r"(?<!\n)(?=PART [IVX]+:)", "\n\n", body)
    parts = re.split(
        r"(?<=\n\n)(?=(?:Chapter \d+:|Appendix [A-Z]:|PART [IVX]+:|Preface:))",
        body,
    )
    chunks = []
    for part in parts:
        part = part.strip()
        if not part:
            continue
        title, rest = peel_title(part)
        if title.startswith("PART "):
            num, _, name = title.partition(":")
            chunks.append(
                f'<section class="partpage"><p class="part-kicker">{html.escape(num.strip())}</p>'
                f"<h1>{html.escape(name.strip())}</h1></section>"
            )
            if rest:
                paras_html = "".join(
                    f"<p>{html.escape(p)}</p>" for p in re.split(r"\n\s*\n", rest) if p.strip()
                )
                chunks.append(f'<section class="chapter">{paras_html}</section>')
            continue
        if title:
            paras_html = "".join(
                f"<p>{html.escape(p)}</p>" for p in re.split(r"\n\s*\n", rest) if p.strip()
            )
            if title.startswith("Chapter "):
                kicker = title.split(":", 1)[0]
                name = title.split(":", 1)[1].strip() if ":" in title else title
                chunks.append(
                    f'<section class="chapter"><p class="ch-kicker">{html.escape(kicker)}</p>'
                    f"<h2>{html.escape(name)}</h2>{paras_html}</section>"
                )
            else:
                chunks.append(
                    f'<section class="chapter"><h2>{html.escape(title)}</h2>{paras_html}</section>'
                )
            continue
        bits = "".join(
            f"<p>{html.escape(p.strip())}</p>" for p in re.split(r"\n\s*\n", part) if p.strip()
        )
        chunks.append(f'<section class="chapter">{bits}</section>')
    inner = "\n".join(chunks)
    return BOOK_HTML.replace("@@INNER@@", inner)


BOOK_HTML = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>Unf*ck the World for a Dollar — Randall Gossett</title>
<style>
@font-face { font-family: "EB Garamond"; src: url("../fonts/ebg-400.ttf") format("truetype"); font-weight: 400; font-style: normal; }
@font-face { font-family: "EB Garamond"; src: url("../fonts/ebg-400i.ttf") format("truetype"); font-weight: 400; font-style: italic; }
@font-face { font-family: "EB Garamond"; src: url("../fonts/ebg-700.ttf") format("truetype"); font-weight: 700; font-style: normal; }
@font-face { font-family: "IBM Plex Mono"; src: url("../fonts/plex-400.ttf") format("truetype"); font-weight: 400; }
:root {
  --paper: #f4efe4;
  --ink: #1a1612;
  --muted: #6a6158;
  --copper: #b85a28;
}
* { box-sizing: border-box; }
html, body {
  background: #f4efe4;
  color: var(--ink);
  font-family: "EB Garamond", "Times New Roman", serif;
  font-size: 11.5pt;
  line-height: 1.48;
  margin: 0;
}
/* Full-bleed paper. Chromium leaves @page margins white; paint the sheet ourselves. */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background: #f4efe4;
  z-index: -1;
}
@page { size: letter; margin: 0; }
@page :first { margin: 0; }
.cover {
  page-break-after: always;
  width: 8.5in;
  height: 11in;
  margin: 0;
  background: #0b0a09;
  color: #f4efe4;
  position: relative;
  overflow: hidden;
  z-index: 2;
}
.cover svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.cover .lockup { position: relative; z-index: 2; padding: 1.15in 0.9in 0.85in; height: 11in; box-sizing: border-box; display: flex; flex-direction: column; }
.cover .brand { font-family: "IBM Plex Mono", monospace; font-size: 8pt; letter-spacing: 0.28em; color: #c47a48; text-indent: 0; }
.cover h1 {
  font-size: 46pt; line-height: 0.95; font-weight: 700; letter-spacing: 0.02em;
  color: #e8a06a; margin: 1.5in 0 0.2in; border: 0; page-break-before: auto; padding: 0;
}
.cover h1 span { display: block; font-size: 22pt; letter-spacing: 0.18em; color: #f4efe4; margin-top: 0.18in; font-weight: 400; }
.cover .by { margin-top: auto; font-style: italic; font-size: 13pt; color: #d8cbb8; text-indent: 0; }
.cover .house { font-family: "IBM Plex Mono", monospace; font-size: 8pt; letter-spacing: 0.24em; color: #c47a48; margin-top: 0.35in; text-indent: 0; }
.titlepage { page-break-after: always; padding: 2.1in 0.95in 1.1in; text-align: center; }
.titlepage h1 {
  font-size: 26pt; letter-spacing: 0.04em; font-weight: 700; margin: 0 0 0.35in;
  page-break-before: auto; border: 0; color: var(--ink); padding: 0;
}
.titlepage .by { font-style: italic; font-size: 13pt; text-indent: 0; }
.titlepage .ed {
  font-family: "IBM Plex Mono", monospace; font-size: 8pt; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--muted); margin-top: 1.5in; text-indent: 0;
}
.front { page-break-after: always; padding: 0.95in 0.95in 1.1in; }
.toc { page-break-after: always; padding: 0.95in 0.95in 1.1in; }
.toc p { margin: 0.12em 0; text-align: left; font-size: 11.5pt; text-indent: 0; }
.toc .part { margin-top: 0.85em; color: var(--copper); font-variant: small-caps; letter-spacing: 0.12em; font-size: 10pt; }
.chapter { padding: 0.95in 0.95in 1.05in; }
.partpage {
  page-break-before: always; page-break-after: always;
  height: 11in; padding: 0 0.95in;
  box-sizing: border-box; overflow: hidden;
  display: flex; flex-direction: column; justify-content: center;
}
.part-kicker, .ch-kicker {
  font-family: "IBM Plex Mono", monospace; font-size: 8pt; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--copper); margin: 0 0 0.4in; text-indent: 0;
}
h1 { font-size: 22pt; color: var(--ink); letter-spacing: 0.04em; margin: 0; border: 0; padding: 0; page-break-before: auto; }
h2 { font-size: 16pt; page-break-before: auto; margin: 0 0 0.55in; line-height: 1.2; font-weight: 700; }
p { margin: 0 0 0.08em; text-align: justify; hyphens: auto; text-indent: 1.15em; }
.front p, .titlepage p, .toc p, .note, .ch-kicker, .part-kicker, .part h1,
.chapter h2 + p, .chapter p:first-of-type { text-indent: 0; }
.note { font-size: 10.5pt; color: var(--muted); font-style: italic; margin: 0.4em 0 1.1em; text-align: left; }
</style>
</head>
<body>
<div class="cover">
  <svg viewBox="0 0 612 792" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="612" height="792" fill="#0b0a09"/>
    <g fill="none" stroke="#c47a48" stroke-linecap="round" opacity="0.85">
      <path d="M40 760 C80 640, 90 520, 160 420 C220 340, 200 240, 280 160" stroke-width="1.6"/>
      <path d="M160 420 C210 400, 260 430, 310 380 C360 330, 390 260, 450 190" stroke-width="1.2"/>
      <path d="M280 160 C320 120, 380 110, 460 70" stroke-width="1.1"/>
      <path d="M90 620 C140 600, 180 630, 230 560 C270 510, 330 500, 370 440" stroke-width="1.1"/>
      <path d="M450 190 C500 160, 540 200, 590 140" stroke-width="0.9"/>
      <path d="M40 500 C100 470, 70 390, 130 330 C180 280, 150 210, 200 150" stroke-width="0.8"/>
      <path d="M370 440 C410 400, 470 420, 530 360 C560 330, 580 280, 600 240" stroke-width="0.9"/>
      <path d="M200 700 C260 650, 300 700, 360 620 C410 560, 480 570, 540 500" stroke-width="0.8"/>
      <path d="M130 330 C90 300, 70 250, 40 210" stroke-width="0.7"/>
      <path d="M310 380 C300 300, 340 250, 320 180" stroke-width="0.7"/>
    </g>
    <g fill="#c47a48" opacity="0.7">
      <circle cx="160" cy="420" r="2.2"/>
      <circle cx="280" cy="160" r="1.8"/>
      <circle cx="370" cy="440" r="1.6"/>
      <circle cx="450" cy="190" r="1.7"/>
      <circle cx="230" cy="560" r="1.4"/>
    </g>
  </svg>
  <div class="lockup">
    <p class="brand">EXTROPY ENGINE</p>
    <h1>UNF*CK<br/>THE WORLD<span>FOR A DOLLAR</span></h1>
    <p class="by">Randall Gossett</p>
    <p class="house">THEY WANT FIRE. I BRING FUNGUS.</p>
  </div>
</div>
<section class="titlepage">
  <h1>UNF*CK THE WORLD<br/>FOR A DOLLAR</h1>
  <p class="by">By Randall Gossett</p>
  <p class="ed">Edition 1.1 · Codex lock · Records and meters<br/>A contribution ledger. Not a bag.</p>
</section>
<section class="front">
  <p class="ch-kicker">A note on this edition</p>
  <h2>Not the six-token draft</h2>
  <p class="note">Token meant bag. We do not mint bags. Machine assistance is an instrument, not a co-author. If a line still talks like Square takes a cut, it is a corpse. Burn it.</p>
</section>
<section class="toc">
  <p class="ch-kicker">Contents</p>
  <h2>The book</h2>
  <p class="part">Part I — The Diagnosis</p>
  <p>Preface. The Revolution They Botched</p>
  <p>1. The System Is Rigged</p>
  <p>2. The Big Lie of Scarcity</p>
  <p>3. Comfort as Control</p>
  <p class="part">Part II — The Thesis</p>
  <p>4. Value Is Not Money</p>
  <p>5. Entropy Reduction as the Unit of All Value</p>
  <p>6. The Contribution Economy</p>
  <p>7. Abundance by Design</p>
  <p class="part">Part III — The Engine</p>
  <p>8. The XP Formula</p>
  <p>9. The Eight Domains of Entropy</p>
  <p>10. The Core Loop</p>
  <p>11. The DAG Substrate</p>
  <p>12. DFAOs</p>
  <p>13. Records and Meters — Nothing You Can Bag</p>
  <p>14. Temporal Mechanics</p>
  <p class="part">Part IV — The Defense</p>
  <p>15. Antifragility</p>
  <p>16. The Human Psychology Machine</p>
  <p>17. Game Theory and Nash Equilibria</p>
  <p>18. Sybil Resistance</p>
  <p class="part">Part V — The Ecosystem</p>
  <p>19. The Parallel Economy in Practice</p>
  <p>20. The Extropy Ecosystem</p>
  <p>21. Emergent Sovereignty</p>
  <p>22. Universal Time</p>
  <p class="part">Part VI — The Call</p>
  <p>23. One Dollar</p>
  <p>24. The Inevitable</p>
  <p class="part">Appendices</p>
  <p>A. Formula Reference</p>
  <p>B. Routing, Not Purchasing Power</p>
  <p>C. Common Misreadings</p>
  <p>D. Records and Meters</p>
</section>
@@INNER@@
</body>
</html>
"""


def main() -> None:
    pages = pdf_pages(SRC)
    body_pages = []
    for i, p in enumerate(pages, 1):
        if i <= 7:
            continue
        body_pages.append(clean_page(p, i))
    body = paras("\n\n".join(body_pages))

    ch13 = (LOCK / "ch13.txt").read_text()
    ts = (LOCK / "ts.txt").read_text()
    app_b = (LOCK / "app_b.txt").read_text()
    app_d = (LOCK / "app_d.txt").read_text()
    app_c_x = (LOCK / "app_c_extra.txt").read_text()
    tt = (LOCK / "tt.txt").read_text()

    body = splice(
        body,
        r"Chapter 13:\s*The Multi-Token Economy[\s\S]{0,80}Six Tokens",
        r"Chapter 14:\s*Temporal Mechanics",
        ch13,
    )
    body = splice(
        body,
        r"log\(1/T[ₛs]\)\s*[—-]\s*The Time Factor",
        r"Putting It Together:\s*A Worked Example",
        ts,
    )
    body = splice(
        body,
        r"Appendix B:\s*The 10-Level Reputation Ladder",
        r"Appendix C:\s*Common Misreadings",
        app_b,
    )
    # Appendix D: heading may have been phrase-locked already
    if "The canonical six." in body:
        body = splice(
            body,
            r"Appendix D:\s*(?:Token Glossary|Records and Meters)",
            r"Glossary\b",
            app_d,
            keep_end=True,
        )
    body = splice(
        body,
        r"The Temporal Token \(TT\)",
        r"What Universal Times Unfucks",
        tt + "\n\n",
        keep_end=True,
    )
    # extra misreadings before Appendix D if C still present
    if "Misreading 6:" not in body:
        body = body.replace(
            "If you live alone and someone tells you to “set up your household DFAO,” they are wrong, and probably trying to sell you something.",
            "If you live alone and someone tells you to “set up your household DFAO,” they are wrong, and probably trying to sell you something.\n\n"
            + app_c_x,
        )

    body = lock_phrases(body)
    # leftover Radiohead / perplexity
    if "Radiohead" in body:
        print("WARN Radiohead still present")
    if re.search(r"Perplexity Computer", body):
        print("WARN Perplexity still present")

    HTML_OUT.parent.mkdir(parents=True, exist_ok=True)
    HTML_OUT.write_text(wrap_html(body), encoding="utf-8")
    print("wrote", HTML_OUT, "chars", HTML_OUT.stat().st_size)


if __name__ == "__main__":
    main()
