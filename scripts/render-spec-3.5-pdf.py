#!/usr/bin/env python3
"""Post-punk spec PDF. Dark paper, orange/cyan, no pink, no header rule through type."""
from __future__ import annotations

import re
from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
MD = ROOT / "public/docs/SPEC_v3.5.md"
OUT = ROOT / "public/docs/extropy-engine-technical-docs-v3.5.pdf"
FONTS = Path(__file__).resolve().parent / "fonts"

# Site palette. Primary is orange. Accent is cyan. No pink. No purple.
BG = (6, 6, 6)
INK = (243, 236, 225)
MUTED = (168, 158, 142)
DIM = (96, 90, 84)
ORANGE = (255, 90, 31)
CYAN = (34, 211, 238)
LIVE = (127, 255, 176)
SURFACE = (20, 12, 8)
CODE_BG = (16, 14, 12)
ROW = (22, 18, 14)
TH = (255, 90, 31)

LEFT = 20
RIGHT = 196
WIDTH = 176
TOP = 28
BOTTOM = 18
SPINE = 6


def clean(s: str) -> str:
    s = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s)
    s = s.replace("**", "").replace("`", "").replace("*", "")
    s = s.replace("\\mathrm{", "").replace("\\text{", "")
    s = s.replace("\\,", " ").replace("\\;", " ")
    s = s.replace("\\times", "×").replace("\\cdot", "·")
    s = s.replace("\\Delta", "Δ").replace("\\rho", "ρ").replace("\\kappa", "κ")
    s = s.replace("\\beta", "β").replace("\\lambda", "λ")
    s = s.replace("\\clip", "clip").replace("\\min", "min").replace("\\log", "log")
    s = s.replace("^{n}", "ⁿ").replace("_{W}", "_W").replace("_{s}", "ₛ")
    s = re.sub(r"\\[a-zA-Z]+", "", s)
    s = s.replace("{", "").replace("}", "")
    return re.sub(r"\s+", " ", s).strip()


class SpecPDF(FPDF):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.cover = True

    def header(self):
        self.set_fill_color(*BG)
        self.rect(0, 0, self.w, self.h, "F")
        # Left spine. Not a top rule. Cannot cut a line of type.
        self.set_fill_color(*ORANGE)
        self.rect(0, 0, 2.2, self.h, "F")
        self.set_fill_color(*CYAN)
        self.rect(2.2, 0, 0.7, self.h, "F")
        if self.cover:
            self.set_y(TOP)
            return
        self.set_xy(LEFT, 9)
        self.set_font("Mono", "", 7.5)
        self.set_text_color(*DIM)
        self.cell(WIDTH - 22, 5, "EXTROPY ENGINE  ·  TECHNICAL SPECIFICATION v3.5")
        self.set_text_color(*ORANGE)
        self.cell(22, 5, "v3.5", align="R")
        # Explicit: body always starts below the header band.
        self.set_y(TOP)

    def footer(self):
        if self.cover and self.page_no() == 1:
            return
        self.set_y(-14)
        self.set_font("Mono", "", 7.5)
        self.set_text_color(*DIM)
        self.set_x(LEFT)
        self.cell(WIDTH - 16, 5, "extropyengine.com/docs/SPEC_v3.5.md")
        self.set_text_color(*CYAN)
        self.cell(16, 5, str(self.page_no()), align="R")


def wrap_cell(pdf: SpecPDF, text: str, width: float) -> list[str]:
    pdf.set_font("Sans", "", 8)
    words = text.split()
    if not words:
        return [""]
    lines: list[str] = []
    cur = words[0]
    for w in words[1:]:
        trial = f"{cur} {w}"
        if pdf.get_string_width(trial) <= width - 2.2:
            cur = trial
        else:
            lines.append(cur)
            cur = w
    lines.append(cur)
    return lines


def draw_table(pdf: SpecPDF, rows: list[list[str]]) -> None:
    if not rows:
        return
    n = max(len(r) for r in rows)
    rows = [r + [""] * (n - len(r)) for r in rows]
    if n == 2:
        weights = [0.30, 0.70]
    elif n == 3:
        weights = [0.26, 0.18, 0.56]
    elif n == 4:
        weights = [0.22, 0.22, 0.22, 0.34]
    else:
        weights = [1 / n] * n
    col_w = [WIDTH * w for w in weights]
    floor = pdf.h - BOTTOM - 8
    for i, row in enumerate(rows):
        wrapped = [wrap_cell(pdf, c, col_w[j]) for j, c in enumerate(row)]
        h = max(len(w) for w in wrapped) * 4.2 + 2.4
        if pdf.get_y() + h > floor:
            pdf.add_page()
        y0 = pdf.get_y()
        if i == 0:
            pdf.set_fill_color(*TH)
            pdf.set_text_color(6, 6, 6)
            pdf.set_font("Sans", "B", 8)
        elif i % 2 == 0:
            pdf.set_fill_color(*ROW)
            pdf.set_text_color(*INK)
            pdf.set_font("Sans", "", 8)
        else:
            pdf.set_fill_color(*SURFACE)
            pdf.set_text_color(*INK)
            pdf.set_font("Sans", "", 8)
        pdf.rect(LEFT, y0, WIDTH, h, "F")
        x = LEFT
        for j, parts in enumerate(wrapped):
            pdf.set_xy(x + 1.2, y0 + 1.0)
            pdf.multi_cell(col_w[j] - 2.2, 4.2, "\n".join(parts), border=0)
            x += col_w[j]
        pdf.set_y(y0 + h)
    pdf.set_text_color(*INK)
    pdf.ln(2.5)


def glitch_word(pdf: SpecPDF, text: str, x: float, y: float, size: float) -> None:
    pdf.set_font("Brand", "", size)
    pdf.set_text_color(*CYAN)
    pdf.set_xy(x - 0.55, y + 0.35)
    pdf.cell(WIDTH, size * 0.38, text)
    pdf.set_text_color(*ORANGE)
    pdf.set_xy(x + 0.55, y - 0.35)
    pdf.cell(WIDTH, size * 0.38, text)
    pdf.set_text_color(*INK)
    pdf.set_xy(x, y)
    pdf.cell(WIDTH, size * 0.38, text)


def scanlines(pdf: SpecPDF, y0: float, y1: float) -> None:
    pdf.set_draw_color(255, 90, 31)
    pdf.set_line_width(0.08)
    y = y0
    while y < y1:
        pdf.set_draw_color(255, 90, 31)
        pdf.line(0, y, pdf.w, y)
        y += 2.15


def main() -> None:
    lines = MD.read_text(encoding="utf-8").splitlines()
    pdf = SpecPDF(format="Letter", unit="mm")
    pdf.set_auto_page_break(auto=True, margin=BOTTOM)
    pdf.add_font("Brand", "", str(FONTS / "Oxanium-700.ttf"))
    pdf.add_font("Display", "", str(FONTS / "Cinzel-700.ttf"))
    pdf.add_font("Mono", "", str(FONTS / "SpaceMono-Regular.ttf"))
    pdf.add_font("Mono", "B", str(FONTS / "SpaceMono-Bold.ttf"))
    pdf.add_font("Sans", "", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")
    pdf.add_font("Sans", "B", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf")
    pdf.add_font("Serif", "", "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf")
    pdf.set_margins(LEFT, TOP, 14)
    pdf.add_page()

    # Cover
    pdf.set_fill_color(*BG)
    pdf.rect(0, 0, pdf.w, pdf.h, "F")
    pdf.set_fill_color(*ORANGE)
    pdf.rect(0, 0, 2.2, pdf.h, "F")
    pdf.set_fill_color(*CYAN)
    pdf.rect(2.2, 0, 0.7, pdf.h, "F")
    scanlines(pdf, 0, 8)
    scanlines(pdf, pdf.h - 8, pdf.h)

    pdf.set_xy(LEFT, 28)
    pdf.set_font("Mono", "", 8)
    pdf.set_text_color(*CYAN)
    pdf.cell(0, 5, "EXTROPY ENGINE  ·  11 SEPTEMBER 2026")

    glitch_word(pdf, "EXTROPY", LEFT, 48, 34)
    pdf.set_xy(LEFT, 64)
    pdf.set_font("Brand", "", 34)
    pdf.set_text_color(*INK)
    pdf.cell(0, 14, "ENGINE")

    pdf.set_xy(LEFT, 86)
    pdf.set_font("Display", "", 16)
    pdf.set_text_color(*ORANGE)
    pdf.cell(0, 8, "Technical Specification")

    pdf.set_xy(LEFT, 98)
    pdf.set_font("Brand", "", 28)
    pdf.set_text_color(*CYAN)
    pdf.cell(0, 12, "v3.5")

    pdf.set_xy(LEFT, 118)
    pdf.set_font("Mono", "", 9)
    pdf.set_text_color(*MUTED)
    pdf.multi_cell(
        WIDTH,
        5.2,
        "Canonical engineering spec. Codex v2.1 stays signed.\n"
        "Not Codex 3. Not spec 4.0.\n"
        "Randall Gossett  ·  MIT",
    )

    pdf.set_xy(LEFT, 148)
    pdf.set_fill_color(*ORANGE)
    pdf.rect(LEFT, 148, 36, 0.6, "F")
    pdf.set_xy(LEFT, 154)
    pdf.set_font("Sans", "", 10.5)
    pdf.set_text_color(*INK)
    pdf.multi_cell(
        WIDTH,
        5.6,
        "A contribution ledger for verified entropy reduction. "
        "Intelligence, identity, and local context stay at the edge. "
        "The network is a handshake, a claim schema, and a DAG — not a supermind. "
        "Mint at close. Looking is a vertex. Late burn has no expiry.",
    )

    pdf.set_xy(LEFT, 252)
    pdf.set_font("Mono", "", 8)
    pdf.set_text_color(*DIM)
    pdf.cell(0, 5, "extropyengine.com/docs/SPEC_v3.5.md")

    pdf.cover = False
    pdf.add_page()

    skip_h1 = True
    in_code = False
    code_buf: list[str] = []
    table_buf: list[list[str]] = []
    meta_done = False

    def flush_code() -> None:
        nonlocal code_buf
        if not code_buf:
            return
        block = "\n".join(code_buf)
        pdf.set_fill_color(*CODE_BG)
        pdf.set_draw_color(*CYAN)
        pdf.set_line_width(0.3)
        pdf.set_text_color(*LIVE)
        pdf.set_font("Mono", "", 7.5)
        y = pdf.get_y()
        pdf.set_x(LEFT)
        pdf.multi_cell(WIDTH, 4.6, "  " + block.replace("\n", "\n  "), fill=True)
        pdf.set_draw_color(*CYAN)
        pdf.line(LEFT, y, LEFT, pdf.get_y())
        pdf.ln(2)
        pdf.set_text_color(*INK)
        code_buf = []

    def flush_table() -> None:
        nonlocal table_buf
        if not table_buf:
            return
        draw_table(pdf, table_buf)
        table_buf = []

    def body_font(text: str) -> None:
        pdf.set_font("Sans" if "ℱ" in text else "Serif", "", 10.5)
        pdf.set_text_color(*INK)

    for raw in lines:
        line = raw.rstrip()
        if skip_h1 and line.startswith("# "):
            skip_h1 = False
            continue

        if line.startswith("```"):
            if in_code:
                in_code = False
                flush_code()
            else:
                flush_table()
                in_code = True
                code_buf = []
            continue
        if in_code:
            code_buf.append(line if line else " ")
            continue

        if line.startswith("|"):
            if "---" in line:
                continue
            cells = [clean(c) for c in line.strip("|").split("|")]
            table_buf.append(cells)
            continue
        flush_table()

        if not meta_done and line.startswith("**") and ":" in line:
            continue
        if not meta_done and (
            line.startswith("Public copies:")
            or line.startswith("Letter key:")
            or line.startswith("Defaults:")
            or line.startswith("Gaps:")
        ):
            continue
        if line == "---":
            meta_done = True
            continue

        if line.startswith("> "):
            text = clean(line[2:])
            pdf.set_font("Serif", "", 10.5)
            pdf.set_text_color(*MUTED)
            pdf.set_x(LEFT + 5)
            pdf.set_draw_color(*ORANGE)
            y = pdf.get_y()
            pdf.multi_cell(WIDTH - 5, 5.2, text)
            pdf.line(LEFT, y, LEFT, pdf.get_y())
            pdf.set_text_color(*INK)
            continue
        if line.startswith("### "):
            pdf.ln(1.5)
            sub = clean(line[4:])
            pdf.set_font("Sans" if any(ord(c) > 127 for c in sub) else "Brand", "B" if any(ord(c) > 127 for c in sub) else "", 11)
            pdf.set_text_color(*CYAN)
            pdf.multi_cell(0, 6.5, sub)
            pdf.set_text_color(*INK)
            pdf.ln(0.8)
            continue
        if line.startswith("## "):
            pdf.ln(4)
            title = clean(line[3:])
            pdf.set_font("Sans" if "ℱ" in title else "Brand", "B" if "ℱ" in title else "", 13.5)
            pdf.set_text_color(*ORANGE)
            pdf.multi_cell(0, 7.5, title)
            pdf.set_fill_color(*CYAN)
            pdf.rect(LEFT, pdf.get_y(), 18, 0.5, "F")
            pdf.ln(2.2)
            pdf.set_text_color(*INK)
            continue

        if re.match(r"^\d+\.\s", line):
            text = clean(line)
            body_font(text)
            pdf.set_x(LEFT + 4)
            pdf.multi_cell(WIDTH - 4, 5.3, text)
            continue
        if line.startswith("- "):
            text = clean(line[2:])
            body_font(text)
            pdf.set_x(LEFT)
            pdf.set_text_color(*ORANGE)
            pdf.set_font("Mono", "", 10)
            pdf.cell(5, 5.3, ">")
            body_font(text)
            pdf.multi_cell(WIDTH - 5, 5.3, text)
            continue
        if not line:
            pdf.ln(1.4)
            continue
        text = clean(line)
        body_font(text)
        pdf.multi_cell(0, 5.4, text)
        pdf.ln(0.4)

    flush_table()
    flush_code()
    pdf.output(OUT)
    print(OUT, OUT.stat().st_size, "bytes,", pdf.page_no(), "pages")


if __name__ == "__main__":
    main()
