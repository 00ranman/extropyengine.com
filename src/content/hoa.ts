export const hoaPage = {
  title: "Neighborhood MESO",
  kicker: "Extropy Engine · start today",
  lead: "This is the Extropy Engine. The HOA is a skin on it. You download one thing, paste one line, name the street. Your laptop is a node. The next laptop is a node. The book they share is a DAG — think of it as the season’s receipts, stapled in order, so nobody can pull page three. Jobs an association already does get posted, done, signed closed. XP mints when the work is real. That is the association, running, today. The lawyer comes later if you want letterhead.",
} as const;

export const hoaDownload = [
  {
    n: "1",
    title: "Download Docker Desktop",
    body: "That’s the only install. It is how an old laptop runs the Engine without you becoming a sysadmin. Mac, Windows, or Linux.",
    href: "https://www.docker.com/products/docker-desktop/",
    label: "docker.com/products/docker-desktop",
  },
  {
    n: "2",
    title: "Start it. Wait for the whale.",
    body: "Open Docker Desktop. Wait until it says it’s running. First time it will nag you. That’s fine.",
  },
  {
    n: "3",
    title: "Open Terminal (Mac) or WSL / Git Bash (Windows)",
    body: "Paste this. One line. It pulls the Engine from GitHub, starts the stack, loads the HOA job list, asks the neighborhood name.",
  },
] as const;

export const hoaLine =
  "curl -fsSL https://raw.githubusercontent.com/00ranman/extropy-engine/main/scripts/join-hoa-meso.sh | bash";

export const hoaAfter = [
  "Same name on the next laptop. That’s the join. Two nodes is already a mesh. The DAG starts the first time a job is signed closed.",
  "First run builds. Coffee. Later runs just start.",
  "Stop anytime: cd ~/extropy-engine && docker compose --profile sandbox down",
] as const;

export const hoaCan = [
  {
    t: "Post a job today",
    d: "Common grass. Dead light. The ditch. Flowerbed a teacher can’t get to. That’s a work order. LocalFlow is the face — you don’t have to say protocol.",
  },
  {
    t: "Someone takes it",
    d: "A neighbor, a kid with a mower, a MICRO crew. They do the thing. Before/after if it helps.",
  },
  {
    t: "Neighbors sign it closed",
    d: "If it happened, it hits the book. If it didn’t, it stays open. Nobody invoices you from a Canyon at 8:30. SignalFlow proposes how much disorder got reduced. You never type a score.",
  },
  {
    t: "XP mints",
    d: "Proof you actually reduced the mess. Not a coupon. Not dollars. Standing. It decays if you vanish. Repeat-farming pays less.",
  },
  {
    t: "The DAG grows",
    d: "Every closed job is a page stapled to the last one. That’s the valuable part. Their fine is a screenshot. Our book is the season. More laptops = more copies of the scorebook. The board is not the admin.",
  },
] as const;

export const hoaWrap = [
  { hoa: "Common grass / landscape", engine: "Job · grounds. Post, do, sign closed. XP if it holds." },
  { hoa: "Lights, gates, access", engine: "Job · access. Dead bulb is a loop." },
  { hoa: "Drainage / storm / freeze", engine: "Job · storm." },
  { hoa: "Trash / bulk / dumpster", engine: "Job · waste." },
  { hoa: "Pool / amenity hours", engine: "Job · amenity. Whoever actually shows up." },
  { hoa: "Neighbor dispute", engine: "Job · mediate. Both sides sign off." },
  { hoa: "Vendor / work order", engine: "A MICRO crew under the MESO. Same loop." },
  { hoa: "Meetings / votes", engine: "Governance in this neighborhood DFAO. Votes stay here." },
  { hoa: "Dues / liens / deed rules", engine: "Not this wrapper. Keep paying the old bill so they cannot lien you. Paper changes when owners vote the paper." },
] as const;

export const hoaRoles = [
  {
    old: "Inspector in the truck",
    now: "Gone. Neighbors sign the work order. One photo from the driver’s seat is not the book.",
  },
  {
    old: "President / board vote",
    now: "No mint key. Big calls become if-then rules the neighborhood votes in. A smart contract is a vending machine for a decision: if the common is signed closed twice this month, it counts. No “we’ll look at it next quarter.” No clerk losing the paper behind the copier.",
  },
  {
    old: "Treasurer",
    now: "XP and IT track who showed up. A checking account is later, when you need mulch money. The Engine is not a bank on day one.",
  },
  {
    old: "Management company",
    now: "Vendor jobs are MICRO crews. If a neighbor can do it and it gets signed closed, the vendor theater dies of unemployment.",
  },
  {
    old: "Fines",
    now: "An open work order. Close it or it stays ugly in the book. Not a $200 PDF for a weed on a hydrant.",
  },
] as const;

export const hoaDoors = [
  {
    title: "Function, starting now",
    body: "Do the jobs. Build the DAG. Make the old office a letterhead with nothing left to manage. That’s how they go irrelevant even if a lawyer never files a thing. Attrition. Fungus. Not eggs.",
  },
  {
    title: "Paper, when you have the count",
    body: "Enough owners vote the number in your documents. Lawyer. County stamp. Optional wrapper for a checking account (Texas nonprofit, or Wyoming if you want the DAO-shaped filing). That’s letterhead. It is not required to run the Engine this week.",
  },
] as const;

export const hoaUrls = [
  { label: "HomeFlow (face)", href: "http://localhost:4015" },
  { label: "SignalFlow", href: "http://localhost:4002" },
  { label: "Loop ledger", href: "http://localhost:4003" },
  { label: "XP mint", href: "http://localhost:4005" },
  { label: "DFAO registry", href: "http://localhost:4009" },
  { label: "Node handshake", href: "http://localhost:4200" },
] as const;

export const hoaGit = {
  repo: "https://github.com/00ranman/extropy-engine",
  preset: "https://github.com/00ranman/extropy-engine/tree/main/presets/hoa-meso",
  script: "https://github.com/00ranman/extropy-engine/blob/main/scripts/join-hoa-meso.sh",
} as const;
