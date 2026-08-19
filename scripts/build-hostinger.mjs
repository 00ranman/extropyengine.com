#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";

const result = spawnSync("npx", ["vite", "build", "--mode", "hostinger"], {
  stdio: "inherit",
  env: process.env,
});

const ready =
  existsSync(".output/public/index.html") &&
  existsSync(".output/public/universaltimes/index.html") &&
  existsSync(".output/public/.htaccess");

if (ready) {
  console.log("Hostinger static output ready at .output/public");
  process.exit(0);
}

process.exit(result.status === 0 ? 1 : (result.status ?? 1));
