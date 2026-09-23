#!/usr/bin/env python3
"""Letter PDF of What an Order Book Does to a Claim."""
from pathlib import Path
import re

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
MD = ROOT / "public/docs/What_an_Order_Book_Does_to_a_Claim.md"
OUT = ROOT / "public/docs/What_an_Order_Book_Does_to_a_Claim.pdf"

INK = (18, 16, 14)
RULE = (42, 140, 132)
MUTED = (90, 84, 76)
TEAL = (42, 180, 168)
CREAM = (245, 241, 232)

SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf"
SERIF_B = "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"
SERIF_I = "/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf"
SERIF_BI = "/usr/share/fonts/truetype/liberation/LiberationSerif-BoldItalic.ttf"
SANS = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
SANS_B = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"


def strip_link(s: str) -> str:
    return re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s)


class Doc(FPDF):
    def header(self):
        if self.page_no() == 1:
            return
        self.set_y(12)
        self.set_font("Sans", "", 8)
        self.set_text_color(*MUTED)
        self.cell(0, 6, "RANDALL GOSSETT  ·  WORKING PAPER", align="L")
        self.set_text_color(*RULE)
        self.cell(0, 6, "22 SEP 2026", align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(*RULE)
        self.set_line_width(0.3)
        self.line(18, 20, 198, 20)

    def footer(self):
        self.set_y(-14)
        self.set_draw_color(*RULE)
        self.line(18, self.get_y(), 198, self.get_y())
        self.set_y(-12)
        self.set_font("Sans", "", 8)
        self.set_text_color(*MUTED)
        self.cell(0, 6, "extropyengine.com/papers/what-an-order-book-does", align="L")
        self.cell(0, 6, str(self.page_no()), align="R")


def main() -> None:
    lines = [strip_link(ln.rstrip()) for ln in MD.read_text(encoding="utf-8").splitlines()]
    pdf = Doc(format="Letter", unit="mm")
    pdf.set_auto_page_break(auto=True, margin=20)
    pdf.add_font("Serif", "", SERIF)
    pdf.add_font("Serif", "B", SERIF_B)
    pdf.add_font("Serif", "I", SERIF_I)
    pdf.add_font("Serif", "BI", SERIF_BI)
    pdf.add_font("Sans", "", SANS)
    pdf.add_font("Sans", "B", SANS_B)
    pdf.set_margins(18, 24, 18)
    pdf.add_page()

    pdf.set_fill_color(*INK)
    pdf.rect(0, 0, 216, 78, "F")
    pdf.set_xy(18, 18)
    pdf.set_font("Sans", "", 9)
    pdf.set_text_color(*TEAL)
    pdf.cell(0, 6, "RANDALL GOSSETT   ·   WORKING PAPER   ·   22 SEPTEMBER 2026", new_x="LMARGIN", new_y="NEXT")
    pdf.set_x(18)
    pdf.ln(4)
    pdf.set_font("Serif", "B", 26)
    pdf.set_text_color(*CREAM)
    pdf.multi_cell(180, 11, "What an Order Book Does to a Claim")
    pdf.set_x(18)
    pdf.ln(2)
    pdf.set_font("Sans", "", 11)
    pdf.set_text_color(186, 196, 192)
    pdf.multi_cell(180, 6, "Liquidity, demurrage, and decay.\nA certificate you can sell stops being a check.")
    pdf.set_y(88)

    def para(text: str, size: float = 11, leading: float = 5.6) -> None:
        pdf.set_x(18)
        pdf.set_text_color(*INK)
        pdf.set_font("Serif", "", size)
        pdf.multi_cell(180, leading, text, markdown=True)
        pdf.ln(2.4)

    def heading(text: str) -> None:
        if pdf.get_y() > 240:
            pdf.add_page()
        pdf.ln(3)
        pdf.set_x(18)
        pdf.set_font("Serif", "B", 16)
        pdf.set_text_color(*INK)
        pdf.multi_cell(180, 8, text)
        pdf.set_draw_color(*RULE)
        pdf.set_line_width(0.4)
        y = pdf.get_y()
        pdf.line(18, y, 58, y)
        pdf.ln(3.5)

    buf: list[str] = []
    started = False

    def flush() -> None:
        nonlocal buf
        if not buf:
            return
        para(" ".join(buf))
        buf = []

    for line in lines:
        if not started:
            if line.startswith("# "):
                started = True
            continue
        if line.startswith("## "):
            flush()
            heading(line[3:].strip())
            continue
        if line.startswith("- "):
            flush()
            para("•  " + line[2:].strip(), size=10.5, leading=5.3)
            continue
        if not line.strip():
            flush()
            continue
        if line.startswith("Randall Gossett.") or line.startswith("Liquidity, demurrage"):
            continue
        buf.append(line.strip())
    flush()

    pdf.output(OUT)
    print("wrote", OUT, "pages", pdf.page)


if __name__ == "__main__":
    main()
