import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve("/tmp/extropyengine.com");
const html = resolve(root, "public/docs/unfuck-the-world.html");
const pdfOut = resolve(root, "public/docs/Unfuck_The_World_For_A_Dollar.pdf");
const artPdf = resolve("/workspace/artifacts/Unfuck_The_World_For_A_Dollar.pdf");

mkdirSync(resolve("/workspace/artifacts"), { recursive: true });

const browser = await chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROMIUM || undefined,
});
const page = await browser.newPage();
await page.goto(`file://${html}`, { waitUntil: "networkidle", timeout: 120000 });
await page.emulateMedia({ media: "print" });
const opts = {
  path: pdfOut,
  format: "Letter",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
};
await page.pdf(opts);
await page.pdf({ ...opts, path: artPdf });
await browser.close();
console.log("wrote", pdfOut);
