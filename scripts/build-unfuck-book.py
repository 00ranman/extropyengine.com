#!/usr/bin/env python3
"""Rebuild Unf*ck the World for a Dollar, Codex lock edition."""
from __future__ import annotations

import html
import re
from pathlib import Path

import fitz

ROOT = Path("/workspace")
SRC = ROOT / "attachments" / "Unfuck_The_World_For_A_Dollar (3).pdf"
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


def wrap_html(body: str) -> str:
    parts = re.split(r"(?=(?:Chapter \d+:|Appendix [A-Z]:|PART [IVX]+:|Preface:|Glossary\n))", body)
    chunks = []
    for part in parts:
        part = part.strip()
        if not part:
            continue
        first, _, rest = part.partition("\n")
        title = first.strip()
        rest = rest.strip()
        paras_html = "".join(f"<p>{html.escape(p)}</p>" for p in re.split(r"\n\s*\n", rest) if p.strip())
        if re.match(r"^(Chapter|Appendix|PART|Preface|Glossary)", title):
            tag = "h1" if title.startswith("PART") else "h2"
            chunks.append(f"<section><{tag}>{html.escape(title)}</{tag}>{paras_html}</section>")
        else:
            bits = []
            for p in re.split(r"\n\s*\n", part):
                if p.strip():
                    bits.append(f"<p>{html.escape(p.strip())}</p>")
            chunks.append("<section>" + "".join(bits) + "</section>")
    inner = "\n".join(chunks)
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>Unf*ck the World for a Dollar — Randall Gossett</title>
<style>
@font-face {{ font-family: "EB Garamond"; src: url("../fonts/ebg-400.woff2") format("woff2"); font-weight: 400; }}
@font-face {{ font-family: "EB Garamond"; src: url("../fonts/ebg-400i.woff2") format("woff2"); font-weight: 400; font-style: italic; }}
@font-face {{ font-family: "EB Garamond"; src: url("../fonts/ebg-700.woff2") format("woff2"); font-weight: 700; }}
@font-face {{ font-family: "IBM Plex Mono"; src: url("../fonts/plex-400.woff2") format("woff2"); }}
:root {{
  --paper: #e6e0d4;
  --ink: #1a1612;
  --muted: #5c5348;
  --copper: #6b3a1f;
  --rule: #b7ab99;
}}
* {{ box-sizing: border-box; }}
html, body {{
  background: var(--paper);
  color: var(--ink);
  font-family: "EB Garamond", "Times New Roman", serif;
  font-size: 11.5pt;
  line-height: 1.42;
  margin: 0;
}}
@page {{
  size: letter;
  margin: 0.78in 0.82in 0.9in 0.82in;
}}
.cover {{
  page-break-after: always;
  text-align: center;
  padding-top: 0;
}}
.cover img {{
  width: 100%;
  height: auto;
  max-height: 9.4in;
  object-fit: contain;
}}
.titlepage {{
  page-break-after: always;
  padding-top: 2.4in;
  text-align: center;
}}
.titlepage h1 {{
  font-size: 28pt;
  letter-spacing: 0.04em;
  font-weight: 700;
  margin: 0 0 0.4in;
  page-break-before: auto;
}}
.titlepage .by {{
  font-style: italic;
  font-size: 13pt;
}}
.titlepage .ed {{
  font-family: "IBM Plex Mono", monospace;
  font-size: 8pt;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin-top: 1.4in;
}}
h1 {{
  font-size: 16pt;
  color: var(--copper);
  letter-spacing: 0.06em;
  page-break-before: always;
  margin: 0 0 0.45in;
  border-bottom: 0.6pt solid var(--rule);
  padding-bottom: 0.15in;
}}
h2 {{
  font-size: 14pt;
  page-break-before: always;
  margin: 0 0 0.35in;
}}
p {{
  margin: 0 0 0.55em;
  text-align: justify;
  hyphens: auto;
}}
.front p {{ text-align: left; }}
.toc p {{ margin: 0.15em 0; text-align: left; font-size: 11pt; }}
.note {{
  font-size: 10pt;
  color: var(--muted);
  font-style: italic;
  margin: 0.8em 0 1.2em;
}}
</style>
</head>
<body>
<div class="cover"><img src="unfuck-cover.jpg" alt="Cover"/></div>
<section class="titlepage">
  <h1>UNF*CK THE WORLD<br/>FOR A DOLLAR</h1>
  <p class="by">By Randall Gossett</p>
  <p class="ed">Edition 1.1 · Codex lock · Records and meters<br/>DT retired · EP burns · Tₛ is the slam window</p>
</section>
<section class="front">
  <h1>A note on this edition</h1>
  <p class="note">This is not the six-token draft. Token meant bag. We do not mint bags. Machine assistance is an instrument, not a co-author. If a line still talks like Square takes a cut, it is a corpse. Burn it.</p>
</section>
<section class="toc">
  <h1>Contents</h1>
  <p>Part I — The Diagnosis</p>
  <p>1. The System Is Rigged</p>
  <p>2. The Big Lie of Scarcity</p>
  <p>3. Comfort as Control</p>
  <p>Part II — The Thesis</p>
  <p>4. Value Is Not Money</p>
  <p>5. Entropy Reduction as the Unit of All Value</p>
  <p>6. The Contribution Economy</p>
  <p>7. Abundance by Design</p>
  <p>Part III — The Engine</p>
  <p>8. The XP Formula</p>
  <p>9. The Eight Domains of Entropy</p>
  <p>10. The Core Loop</p>
  <p>11. The DAG Substrate</p>
  <p>12. DFAOs</p>
  <p>13. Records and Meters — Nothing You Can Bag</p>
  <p>14. Temporal Mechanics</p>
  <p>Part IV — The Defense</p>
  <p>15–18. Antifragility, Psychology, Game Theory, Sybil</p>
  <p>Part V — The Ecosystem</p>
  <p>19–22. Parallel Economy, Extropy Ecosystem, Sovereignty, Time</p>
  <p>Part VI — The Call</p>
  <p>23. One Dollar</p>
  <p>24. The Inevitable</p>
  <p>Appendix A. Formula Reference</p>
  <p>Appendix B. Routing, Not Purchasing Power</p>
  <p>Appendix C. Common Misreadings</p>
  <p>Appendix D. Records and Meters</p>
</section>
{inner}
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
