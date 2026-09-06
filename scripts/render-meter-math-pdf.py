#!/usr/bin/env python3
from pathlib import Path
import re

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
MD = ROOT / "public/docs/METER-MATH.md"
OUT = ROOT / "public/docs/Meter_Math.pdf"

INK = (18, 16, 14)
RULE = (42, 140, 132)
MUTED = (90, 84, 76)
ACCENT = (28, 118, 110)
TEAL = (42, 180, 168)

SANS = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
SANS_B = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
SERIF_B = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
MONO = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"


def clean(s: str) -> str:
    s = s.replace("**", "").replace("`", "")
    s = s.replace("\\mathrm{", "").replace("\\text{", "").replace("\\mathrm", "")
    s = s.replace("\\,", " ").replace("\\;", " ").replace("\\ ", " ")
    s = s.replace("\\times", "×").replace("\\cdot", "·").replace("\\clip", "clip")
    s = s.replace("\\exp", "exp").replace("\\min", "min").replace("\\log", "log")
    s = s.replace("\\Delta", "Δ").replace("\\rho", "ρ").replace("\\kappa", "κ")
    s = s.replace("\\beta", "β").replace("\\lambda", "λ")
    s = s.replace("\\Sigma", "Σ").replace("\\in", "∈")
    s = s.replace("\\ge", "≥").replace("\\leq", "≤").replace("\\ge", "≥")
    s = s.replace("^{n}", "ⁿ").replace("^{m}", "ᵐ").replace("_{W}", "_W")
    s = s.replace("_{s}", "ₛ").replace("_{mint}", "_mint")
    s = re.sub(r"\\[a-zA-Z]+", "", s)
    s = s.replace("{", "").replace("}", "").replace("[", "").replace("]", "")
    s = s.replace("\\\\", " ").replace("\\", "")
    return re.sub(r"\s+", " ", s).strip()


class Doc(FPDF):
    def header(self):
        if self.page_no() == 1:
            return
        self.set_y(12)
        self.set_font("Sans", "", 8)
        self.set_text_color(*MUTED)
        self.cell(0, 6, "EXTROPY ENGINE  ·  METER MATH", align="L")
        self.set_text_color(*RULE)
        self.cell(0, 6, "TOKENOMICS  ·  NOT A BAG", align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(*RULE)
        self.set_line_width(0.3)
        self.line(18, 20, 192, 20)

    def footer(self):
        self.set_y(-14)
        self.set_draw_color(*RULE)
        self.line(18, self.get_y(), 192, self.get_y())
        self.set_y(-12)
        self.set_font("Sans", "", 8)
        self.set_text_color(*MUTED)
        self.cell(0, 6, "extropyengine.com/docs/METER-MATH.md", align="L")
        self.cell(0, 6, str(self.page_no()), align="R")


def main() -> None:
    lines = MD.read_text(encoding="utf-8").splitlines()
    pdf = Doc(format="Letter", unit="mm")
    pdf.set_auto_page_break(auto=True, margin=20)
    pdf.add_font("Sans", "", SANS)
    pdf.add_font("Sans", "B", SANS_B)
    pdf.add_font("Serif", "", SERIF)
    pdf.add_font("Serif", "B", SERIF_B)
    pdf.add_font("Mono", "", MONO)
    pdf.set_margins(18, 22, 18)
    pdf.add_page()

    pdf.set_fill_color(*INK)
    pdf.rect(0, 0, 216, 72, "F")
    pdf.set_xy(18, 16)
    pdf.set_font("Sans", "", 9)
    pdf.set_text_color(*TEAL)
    pdf.cell(0, 6, "EXTROPY ENGINE  ·  6 SEPTEMBER 2026", new_x="LMARGIN", new_y="NEXT")
    pdf.set_x(18)
    pdf.set_font("Serif", "B", 28)
    pdf.set_text_color(245, 241, 232)
    pdf.multi_cell(0, 12, "Meter Math")
    pdf.set_x(18)
    pdf.set_font("Sans", "", 11)
    pdf.set_text_color(180, 190, 186)
    pdf.multi_cell(0, 6, "How the meters couple. CT is community-web standing.\nReputation lives in CT. H starts at 0.5. EP dies in the sale.")
    pdf.set_y(80)

    in_math = False
    math_buf: list[str] = []
    skip_h1 = True

    def flush_math():
        nonlocal math_buf
        if not math_buf:
            return
        block = clean(" ".join(math_buf))
        pdf.set_fill_color(28, 26, 24)
        pdf.set_text_color(220, 230, 226)
        pdf.set_font("Mono", "", 9)
        pdf.multi_cell(0, 6, "  " + block)
        pdf.ln(2)
        pdf.set_text_color(*INK)
        math_buf = []

    for raw in lines:
        line = raw.rstrip()
        if skip_h1 and line.startswith("# "):
            skip_h1 = False
            continue

        if line.startswith("$$") or line.strip() == "\\[" or line.strip() == "\\]":
            continue
        if line.startswith("\\[") or line == "\\[":
            in_math = True
            math_buf = []
            continue
        if line.startswith("\\]") or line == "\\]":
            in_math = False
            flush_math()
            continue
        if in_math or (line.startswith("\\") and "mathrm" in line):
            math_buf.append(line)
            if line.endswith("\\]"):
                in_math = False
                flush_math()
            continue

        if line.startswith("```"):
            continue
        if line == "---":
            pdf.ln(2)
            pdf.set_draw_color(*RULE)
            pdf.line(18, pdf.get_y(), 192, pdf.get_y())
            pdf.ln(4)
            continue
        if line.startswith("### "):
            pdf.set_font("Sans", "B", 12)
            pdf.set_text_color(*ACCENT)
            pdf.multi_cell(0, 7, line[4:])
            pdf.set_text_color(*INK)
            pdf.ln(1)
            continue
        if line.startswith("## "):
            pdf.ln(3)
            pdf.set_font("Serif", "B", 15)
            pdf.set_text_color(*ACCENT)
            pdf.multi_cell(0, 8, line[3:])
            pdf.set_text_color(*INK)
            pdf.ln(1)
            continue
        if line.startswith("|") and "---" not in line:
            cells = [clean(c) for c in line.strip("|").split("|")]
            pdf.set_font("Sans", "", 7.5)
            n = max(len(cells), 1)
            w = 174 / n
            for c in cells:
                pdf.cell(w, 5.5, c[:40])
            pdf.ln(5.5)
            continue
        if line.startswith("|"):
            continue
        if line.startswith("- "):
            pdf.set_font("Serif", "", 10.5)
            pdf.set_x(22)
            pdf.multi_cell(166, 5.2, "•  " + clean(line[2:]))
            continue
        if not line:
            pdf.ln(1.6)
            continue
        pdf.set_font("Serif", "", 10.5)
        pdf.set_text_color(*INK)
        pdf.multi_cell(0, 5.3, clean(line))
        pdf.ln(0.4)

    flush_math()
    pdf.output(OUT)
    print(OUT, OUT.stat().st_size)


if __name__ == "__main__":
    main()
