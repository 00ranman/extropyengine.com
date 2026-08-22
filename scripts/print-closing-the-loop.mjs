import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
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
await page.waitForTimeout(800);

await page.pdf({
  path: out,
  format: "Letter",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
  tagged: true,
});

await browser.close();
console.log("wrote", out);
