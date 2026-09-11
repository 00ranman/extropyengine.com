#!/usr/bin/env python3
"""House-style PDF for Extropy Engine Technical Specification v3.5."""
from __future__ import annotations

import re
from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
MD = ROOT / "public/docs/SPEC_v3.5.md"
OUT = ROOT / "public/docs/extropy-engine-technical-docs-v3.5.pdf"

INK = (18, 16, 14)
PAPER = (245, 241, 232)
RULE = (42, 140, 132)
MUTED = (90, 84, 76)
ACCENT = (28, 118, 110)
TEAL = (42, 180, 168)
CODE_BG = (28, 26, 24)
CODE_FG = (220, 230, 226)

SANS = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
SANS_B = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
SERIF_B = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
MONO = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"

LEFT = 18
RIGHT = 192
WIDTH = 174
TOP = 26
BOTTOM = 20
HEADER_RULE_Y = 17


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
    s = s.replace("\\,", "")
    s = re.sub(r"\\[a-zA-Z]+", "", s)
    s = s.replace("{", "").replace("}", "")
    return re.sub(r"\s+", " ", s).strip()


class SpecPDF(FPDF):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.cover = True

    def header(self):
        self.set_fill_color(*PAPER)
        self.rect(0, 0, self.w, self.h, "F")
        if self.cover:
            return
        self.set_xy(LEFT, 10)
        self.set_font("Sans", "", 8)
        self.set_text_color(*MUTED)
        self.cell(WIDTH - 32, 5, "EXTROPY ENGINE  ·  TECHNICAL SPECIFICATION v3.5", align="L")
        self.set_text_color(*RULE)
        self.cell(32, 5, "CANONICAL", align="R")
        self.set_draw_color(*RULE)
        self.set_line_width(0.3)
        self.line(LEFT, HEADER_RULE_Y, RIGHT, HEADER_RULE_Y)

    def footer(self):
        self.set_y(-16)
        self.set_draw_color(*RULE)
        self.set_line_width(0.3)
        self.line(LEFT, self.get_y(), RIGHT, self.get_y())
        self.set_y(-13)
        self.set_font("Sans", "", 8)
        self.set_text_color(*MUTED)
        self.cell(0, 6, "extropyengine.com/docs/SPEC_v3.5.md", align="L")
        self.cell(0, 6, str(self.page_no()), align="R")


def body_font(pdf: SpecPDF, text: str, size: float = 10.5) -> None:
    pdf.set_font("Sans" if "ℱ" in text else "Serif", "", size)


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
        weights = [0.32, 0.68]
    elif n == 3:
        weights = [0.28, 0.16, 0.56]
    elif n == 4:
        weights = [0.22, 0.22, 0.22, 0.34]
    else:
        weights = [1 / n] * n
    col_w = [WIDTH * w for w in weights]
    floor = pdf.h - BOTTOM - 6
    for i, row in enumerate(rows):
        wrapped = [wrap_cell(pdf, c, col_w[j]) for j, c in enumerate(row)]
        h = max(len(w) for w in wrapped) * 4.1 + 2.0
        if pdf.get_y() + h > floor:
            pdf.add_page()
        y0 = pdf.get_y()
        if i == 0:
            pdf.set_fill_color(28, 118, 110)
            pdf.set_text_color(245, 241, 232)
            pdf.set_font("Sans", "B", 8)
        elif i % 2 == 0:
            pdf.set_fill_color(236, 232, 224)
            pdf.set_text_color(*INK)
            pdf.set_font("Sans", "", 8)
        else:
            pdf.set_fill_color(*PAPER)
            pdf.set_text_color(*INK)
            pdf.set_font("Sans", "", 8)
        pdf.rect(LEFT, y0, WIDTH, h, "F")
        x = LEFT
        for j, parts in enumerate(wrapped):
            pdf.set_xy(x + 1.1, y0 + 0.9)
            pdf.multi_cell(col_w[j] - 2.0, 4.1, "\n".join(parts), border=0)
            x += col_w[j]
        pdf.set_y(y0 + h)
    pdf.set_text_color(*INK)
    pdf.ln(2)


def main() -> None:
    lines = MD.read_text(encoding="utf-8").splitlines()
    pdf = SpecPDF(format="Letter", unit="mm")
    pdf.set_auto_page_break(auto=True, margin=BOTTOM)
    pdf.add_font("Sans", "", SANS)
    pdf.add_font("Sans", "B", SANS_B)
    pdf.add_font("Serif", "", SERIF)
    pdf.add_font("Serif", "B", SERIF_B)
    pdf.add_font("Mono", "", MONO)
    pdf.set_margins(LEFT, TOP, 18)
    pdf.add_page()

    pdf.set_fill_color(*INK)
    pdf.rect(0, 0, pdf.w, 82, "F")
    pdf.set_xy(LEFT, 16)
    pdf.set_font("Sans", "", 9)
    pdf.set_text_color(*TEAL)
    pdf.cell(0, 6, "EXTROPY ENGINE  ·  11 SEPTEMBER 2026", new_x="LMARGIN", new_y="NEXT")
    pdf.set_x(LEFT)
    pdf.set_font("Serif", "B", 26)
    pdf.set_text_color(245, 241, 232)
    pdf.multi_cell(0, 11, "Technical Specification")
    pdf.set_x(LEFT)
    pdf.set_font("Sans", "B", 14)
    pdf.set_text_color(*TEAL)
    pdf.cell(0, 8, "v3.5", new_x="LMARGIN", new_y="NEXT")
    pdf.set_x(LEFT)
    pdf.set_font("Sans", "", 10)
    pdf.set_text_color(180, 190, 186)
    pdf.multi_cell(
        0,
        5.5,
        "Canonical engineering spec. Codex v2.1 stays signed.\n"
        "Not Codex 3. Not spec 4.0. Randall Gossett  ·  MIT",
    )
    pdf.set_y(90)
    pdf.set_text_color(*INK)
    pdf.cover = False

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
        pdf.set_text_color(*CODE_FG)
        pdf.set_font("Mono", "", 8)
        pdf.set_x(LEFT)
        pdf.multi_cell(WIDTH, 4.8, "  " + block.replace("\n", "\n  "), fill=True)
        pdf.ln(2)
        pdf.set_text_color(*INK)
        code_buf = []

    def flush_table() -> None:
        nonlocal table_buf
        if not table_buf:
            return
        draw_table(pdf, table_buf)
        table_buf = []

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
        else:
            flush_table()

        if not meta_done and line.startswith("**") and ":" in line:
            pdf.set_font("Sans", "", 9)
            pdf.set_text_color(*MUTED)
            pdf.multi_cell(WIDTH, 5, clean(line))
            continue
        if not meta_done and (
            line.startswith("Public copies:")
            or line.startswith("Letter key:")
            or line.startswith("Defaults:")
            or line.startswith("Gaps:")
        ):
            pdf.set_font("Sans", "", 8)
            pdf.set_text_color(*RULE)
            pdf.multi_cell(WIDTH, 4.5, clean(line))
            continue
        if line == "---":
            meta_done = True
            pdf.ln(2)
            pdf.set_draw_color(*RULE)
            y = pdf.get_y()
            if y > HEADER_RULE_Y + 4:
                pdf.line(LEFT, y, RIGHT, y)
            pdf.ln(4)
            continue

        if line.startswith("> "):
            text = clean(line[2:])
            body_font(pdf, text, 10.5)
            pdf.set_text_color(*MUTED)
            pdf.set_x(LEFT + 6)
            pdf.multi_cell(WIDTH - 6, 5.2, text)
            pdf.set_text_color(*INK)
            continue
        if line.startswith("### "):
            pdf.set_font("Sans", "B", 11.5)
            pdf.set_text_color(*ACCENT)
            pdf.multi_cell(0, 7, clean(line[4:]))
            pdf.set_text_color(*INK)
            pdf.ln(1)
            continue
        if line.startswith("## "):
            pdf.ln(3)
            pdf.set_font("Sans", "B", 14)
            pdf.set_text_color(*ACCENT)
            pdf.multi_cell(0, 8, clean(line[3:]))
            pdf.set_text_color(*INK)
            pdf.ln(1.2)
            continue

        if re.match(r"^\d+\.\s", line):
            text = clean(line)
            body_font(pdf, text, 10.5)
            pdf.set_x(LEFT + 4)
            pdf.multi_cell(WIDTH - 4, 5.2, text)
            continue
        if line.startswith("- "):
            text = "•  " + clean(line[2:])
            body_font(pdf, text, 10.5)
            pdf.set_x(LEFT + 4)
            pdf.multi_cell(WIDTH - 4, 5.2, text)
            continue
        if not line:
            pdf.ln(1.5)
            continue
        text = clean(line)
        body_font(pdf, text, 10.5)
        pdf.set_text_color(*INK)
        pdf.multi_cell(0, 5.3, text)
        pdf.ln(0.3)

    flush_table()
    flush_code()
    pdf.output(OUT)
    print(OUT, OUT.stat().st_size, "bytes,", pdf.page_no(), "pages")


if __name__ == "__main__":
    main()
