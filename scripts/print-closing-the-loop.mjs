import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";

const out = path.resolve("public/docs/Closing_the_Loop.pdf");
const url = process.env.PRINT_URL ?? "http://127.0.0.1:8080/print/closing-the-loop";

await mkdir(path.dirname(out), { recursive: true });

const browser = await chromium.launch({
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--font-render-hinting=none"],
});
const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
await page.emulateMedia({ media: "print" });
await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(1000);

await page.pdf({
  path: out,
  format: "Letter",
  printBackground: true,
  preferCSSPageSize: false,
  tagged: true,
  margin: { top: "0.7in", bottom: "0.7in", left: "0.72in", right: "0.72in" },
});

await browser.close();

execFileSync("python3", ["-c", `
from pypdf import PdfReader
import pikepdf
src = ${JSON.stringify(out)}
r = PdfReader(src)
drop = [i for i, p in enumerate(r.pages) if not (p.extract_text() or "").strip()]
pdf = pikepdf.open(src, allow_overwriting_input=True)
for i in reversed(drop):
    del pdf.pages[i]
pdf.save(src)
print("pages", len(pdf.pages), "dropped_blank", len(drop))
`])

console.log("wrote", out);
