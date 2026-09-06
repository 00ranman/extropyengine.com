#!/usr/bin/env python3
"""Editorial PDF for the Distributed Charter."""
from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
MD = ROOT / "public/docs/DISTRIBUTED_CHARTER.md"
OUT = ROOT / "public/docs/Distributed_Charter.pdf"

INK = (18, 16, 14)
PAPER = (245, 241, 232)
RULE = (42, 140, 132)
MUTED = (90, 84, 76)
ACCENT = (28, 118, 110)

SANS = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
SANS_B = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
SERIF_B = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
MONO = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"


class CharterPDF(FPDF):
    def header(self):
        if self.page_no() == 1:
            return
        self.set_y(12)
        self.set_font("Sans", "", 8)
        self.set_text_color(*MUTED)
        self.cell(0, 6, "EXTROPY ENGINE  ·  DISTRIBUTED CHARTER", align="L")
        self.set_text_color(*RULE)
        self.cell(0, 6, "NOT THE CODEX", align="R", new_x="LMARGIN", new_y="NEXT")
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
        self.cell(0, 6, "extropyengine.com/charter", align="L")
        self.cell(0, 6, str(self.page_no()), align="R")


def main() -> None:
    text = MD.read_text(encoding="utf-8")
    pdf = CharterPDF(format="Letter", unit="mm")
    pdf.set_auto_page_break(auto=True, margin=20)
    pdf.add_font("Sans", "", SANS)
    pdf.add_font("Sans", "B", SANS_B)
    pdf.add_font("Serif", "", SERIF)
    pdf.add_font("Serif", "B", SERIF_B)
    pdf.add_font("Mono", "", MONO)
    pdf.set_margins(18, 22, 18)
    pdf.add_page()
    pdf.set_fill_color(*PAPER)

    # Cover block
    pdf.set_fill_color(*INK)
    pdf.rect(0, 0, 216, 78, "F")
    pdf.set_xy(18, 18)
    pdf.set_font("Sans", "", 9)
    pdf.set_text_color(42, 180, 168)
    pdf.cell(0, 6, "EXTROPY ENGINE  ·  6 SEPTEMBER 2026", new_x="LMARGIN", new_y="NEXT")
    pdf.set_x(18)
    pdf.set_font("Serif", "B", 28)
    pdf.set_text_color(245, 241, 232)
    pdf.multi_cell(0, 12, "Distributed Charter")
    pdf.set_x(18)
    pdf.set_font("Sans", "", 11)
    pdf.set_text_color(180, 190, 186)
    pdf.multi_cell(0, 6, "How the meters couple when rooms actually use them.\nNot Codex v2.1. Not a bag. Not payroll.")
    pdf.set_y(86)
    pdf.set_text_color(*INK)

    in_code = False
    code_buf: list[str] = []

    def flush_code():
        nonlocal code_buf
        if not code_buf:
            return
        pdf.set_fill_color(28, 26, 24)
        pdf.set_text_color(220, 230, 226)
        pdf.set_font("Mono", "", 8.5)
        block = "\n".join(code_buf)
        pdf.multi_cell(0, 4.6, block, padding=3)
        pdf.ln(2)
        pdf.set_text_color(*INK)
        code_buf = []

    lines = text.splitlines()
    # skip title lines already on cover
    skip_title = True
    for raw in lines:
        line = raw.rstrip()
        if skip_title:
            if line.startswith("# "):
                continue
            if line.startswith("**Extropy") or line.startswith("Randall") or line.startswith("Not Codex") or line.startswith("A follow"):
                continue
            if line.startswith("If a later"):
                skip_title = False
            else:
                if line == "---":
                    continue
                if not line:
                    continue
                skip_title = False

        if line.startswith("```"):
            if in_code:
                flush_code()
                in_code = False
            else:
                in_code = True
            continue
        if in_code:
            code_buf.append(line)
            continue

        if line == "---":
            pdf.ln(2)
            pdf.set_draw_color(*RULE)
            pdf.line(18, pdf.get_y(), 192, pdf.get_y())
            pdf.ln(4)
            continue

        if line.startswith("## "):
            pdf.ln(4)
            pdf.set_font("Serif", "B", 15)
            pdf.set_text_color(*ACCENT)
            pdf.multi_cell(0, 7, line[3:])
            pdf.set_text_color(*INK)
            pdf.ln(1)
            continue

        if line.startswith("|") and "---" not in line:
            cells = [c.strip() for c in line.strip("|").split("|")]
            pdf.set_font("Sans", "", 8)
            w = 174 / max(len(cells), 1)
            for c in cells:
                pdf.cell(w, 6, c[:42], border=0)
            pdf.ln(6)
            continue
        if line.startswith("|"):
            continue

        if line.startswith("- "):
            pdf.set_font("Serif", "", 11)
            pdf.set_x(22)
            pdf.multi_cell(0, 5.4, "•  " + line[2:])
            continue

        if not line:
            pdf.ln(2)
            continue

        # strip simple markdown
        clean = line.replace("**", "").replace("*", "")
        pdf.set_font("Serif", "", 11)
        pdf.set_text_color(*INK)
        pdf.multi_cell(0, 5.5, clean)
        pdf.ln(0.6)

    pdf.output(OUT)
    print(OUT, OUT.stat().st_size)


if __name__ == "__main__":
    main()
