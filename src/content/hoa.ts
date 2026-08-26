export const hoaPage = {
  title: "Neighborhood MESO",
  kicker: "Extropy Engine · Sunset Oaks",
  lead: "This is the Extropy Engine. Treat it like an online multiplayer game that runs on top of the life you already live. Hostinger is the storefront — it organizes ΔS into something you can actually run. The operation is spare-room laptops, coordinating. Sunset Oaks is the first MESO. Crews under it are MICROs. The book is not on this server.",
} as const;

export const hoaDownload = [
  {
    n: "1",
    title: "Download Docker Desktop",
    body: "That’s the only install. Old laptop. Mac, Windows, or Linux.",
    href: "https://www.docker.com/products/docker-desktop/",
    label: "docker.com/products/docker-desktop",
  },
  {
    n: "2",
    title: "Start it. Wait for the whale.",
    body: "Open Docker Desktop. Wait until it says it’s running.",
  },
  {
    n: "3",
    title: "Open Terminal (Mac) or WSL / Git Bash (Windows)",
    body: "Paste this. It pulls the Engine, starts the stack, loads Sunset Oaks as the MESO, asks you to confirm the name.",
  },
] as const;

export const hoaLine =
  "curl -fsSL https://raw.githubusercontent.com/00ranman/extropy-engine/main/scripts/join-hoa-meso.sh | bash";

export const hoaAfter = [
  "Same name on the next laptop: Sunset Oaks. That’s the join. Two nodes is a mesh. The DAG starts the first time a job is signed closed.",
  "First run builds. Coffee. Later runs just start.",
  "Or skip Docker for a minute and use the board in the browser — same job list, same DAG face — then hop on a node when you’re ready.",
  "Stop: cd ~/extropy-engine && docker compose --profile sandbox down",
] as const;

export const hoaCan = [
  {
    t: "Post a job today",
    d: "Common grass. Dead light. The ditch. Flowerbed a teacher can’t get to. Community garden plot. That’s a work order.",
  },
  {
    t: "A MICRO takes it",
    d: "Grounds crew, lights, garden, mediation — or a crew you just named. They do the thing.",
  },
  {
    t: "Neighbors sign it closed",
    d: "If it happened, it hits the DAG. If it didn’t, it stays open. SignalFlow proposes ΔS. You never type a score.",
  },
  {
    t: "XP mints",
    d: "Proof you reduced the mess. Standing. Decays if you vanish. Repeat-farming pays less.",
  },
  {
    t: "The DAG is the audit",
    d: "Every closed job is a page stapled to the last one. Crews log their own work. The MESO is the whole picture. The board is not the admin.",
  },
] as const;

export const hoaWrap = [
  { hoa: "Common grass / landscape", engine: "MICRO · Grounds. Job type grounds." },
  { hoa: "Lights, gates, access", engine: "MICRO · Lights. Job type access." },
  { hoa: "Drainage / storm / freeze", engine: "MICRO · Storm." },
  { hoa: "Trash / bulk / dumpster", engine: "MICRO · Storm / waste." },
  { hoa: "Pool / amenity hours", engine: "Job · amenity." },
  { hoa: "Community garden", engine: "MICRO · Garden. Starter crew. No truck required." },
  { hoa: "Neighbor dispute", engine: "MICRO · Mediation. Both sides sign off." },
  { hoa: "Vendor / work order", engine: "A MICRO crew. Nested under Sunset Oaks." },
  { hoa: "Meetings / votes", engine: "MESO governance. Votes stay in Sunset Oaks." },
  { hoa: "Dues / liens / deed rules", engine: "Not this wrapper. Keep paying until the paper changes." },
] as const;

export const hoaMeso = {
  title: "Sunset Oaks MESO, crews as MICROs",
  lead: "One MESO for the whole sub. Crews under it are MICROs. You log your own work. The DAG is where those logs converge so anyone can audit the picture.",
  meso: [
    "Name: Sunset Oaks. Scale: MESO. Phase: SHADOW until the loops are boringly real.",
    "The MESO holds the job list, the votes that stay in this room, and the book. The book is on the laptops, not on Hostinger. Crews mow. The site just organizes the ΔS so those rooms can coordinate.",
    "Anyone who runs a node is on the MESO. You do not wait for a priesthood and you do not wait for seven people.",
  ],
  micros: [
    { name: "Grounds", does: "Common grass, beds, weeds. The thing they ticket teachers for." },
    { name: "Lights / access", does: "Bulbs, gates, the fountain." },
    { name: "Storm / drainage", does: "Ditch, freeze, bulk pile." },
    { name: "Garden", does: "Community garden. A MICRO you can start this week without asking the truck." },
    { name: "Mediation", does: "Fence, parking, noise. Both sides sign off." },
    { name: "Your crew", does: "Name a MICRO. Nest it under Sunset Oaks. Log it. It’s in the picture." },
  ],
} as const;

export const hoaRoles = [
  {
    old: "Inspector in the truck",
    now: "Gone. Neighbors sign the work order. One photo from the driver’s seat is not the book.",
  },
  {
    old: "President / board vote",
    now: "No mint key. Big calls become if-then the MESO votes in. A smart contract is a vending machine for a decision.",
  },
  {
    old: "Treasurer",
    now: "XP and IT track who showed up. A checking account is later, when you need mulch money.",
  },
  {
    old: "Management company",
    now: "Vendor jobs are MICRO crews. If a neighbor can do it and it gets signed closed, the vendor theater dies of unemployment.",
  },
  {
    old: "Fines",
    now: "An open work order. Close it or it stays ugly in the book.",
  },
] as const;

export const hoaLegal = {
  title: "The paper — pressure points",
  known: [
    "Legal name: San Marcos Sunset Oaks Homeowners Association, Inc. Hays County. Management on the TREC certificate: Spencer Powell / AMG (amghoa.com), (210) 485-4088. Transfer fee listed at $250. The recorded declaration sticks to the house — not the Facebook group, not our MESO.",
    "Texas Property Code Chapter 209 applies anyway. §209.0041: amend the declaration with 67% of the votes allocated to owners. That statute supersedes a contrary higher number in their papers. If they already wrote a lower %, that lower % wins. That’s the dissolve/amend door — not 100%, not a Facebook poll. §209.0093: 67% can strip foreclosure-for-dues; 10% can petition a special meeting for that vote. §209.006: notice and a chance to cure before a fine. Recycling the same photo three times without coming back lives here. Open meetings. Records. Elections if they skip the annual meeting.",
    "We do not have the recorded CC&Rs, bylaws, or articles in hand yet. Those are the rest of the map. Owners can demand dedicatory instruments. Hays County clerk has the recording. The management certificate on hoa.texas.gov cites the instrument. Drop the PDFs in presets/sunset-oaks/docs/ and we wire the actual percentages plus any City of San Marcos plat condition that required an HOA — that would be a second lock.",
  ],
  dues: "Keep writing the old check until the paper changes. Unpaid assessments can still lien the house. Same as fiat: we run next to it until it is a costume. Starve them of function, not of a skipped bill that puts a lien on your deed.",
} as const;

export const hoaDoors = [
  {
    title: "Function, starting now",
    body: "Do the jobs. Build the DAG. Garden MICRO, grounds MICRO, lights MICRO. Make the old office a letterhead with nothing left to manage. Attrition. Fungus. Not eggs.",
  },
  {
    title: "Paper, when you have the count",
    body: "67% of owner votes under Texas 209.0041 (or lower if their declaration already says lower). Lawyer. County stamp. Optional checking-account wrapper later. Not required to run the Engine this week.",
  },
] as const;

export const hoaUrls = [
  { label: "Neighborhood board", href: "/hoa/board" },
  { label: "HomeFlow (on a node)", href: "http://localhost:4015" },
  { label: "Board on a node", href: "http://localhost:4016" },
  { label: "SignalFlow", href: "http://localhost:4002" },
  { label: "Loop ledger", href: "http://localhost:4003" },
  { label: "XP mint", href: "http://localhost:4005" },
  { label: "DFAO registry", href: "http://localhost:4009" },
] as const;

export const hoaGit = {
  repo: "https://github.com/00ranman/extropy-engine",
  preset: "https://github.com/00ranman/extropy-engine/tree/main/presets/sunset-oaks",
  hoa: "https://github.com/00ranman/extropy-engine/tree/main/presets/hoa-meso",
  script: "https://github.com/00ranman/extropy-engine/blob/main/scripts/join-hoa-meso.sh",
  ui: "https://github.com/00ranman/extropy-engine/tree/main/packages/neighborhood-ui",
} as const;

export const hoaFb = `We're paying dues and then still doing their jobs. That's the whole plot.

One truck. One PDF. A teacher fined for a flowerbed the week school started. A senior hit with the same photo three times. $200 for a weed on a hydrant. That's not standards. That's a monopoly on the scorebook.

So we keep our own book.

Sunset Oaks is a MESO — the whole sub. Crews (grounds, lights, garden, mediation) are MICROs. Old laptop. Download Docker (free). Paste one line. Name it Sunset Oaks. That computer is a node: a copy of the scorebook the board does not admin. Next house does the same. Every closed job staples to the last one. Nobody can pull page three. That's the DAG. Anyone can audit it.

Grass. Lights. The ditch. A community garden. Disputes. Work orders. Neighbors sign them closed. Proof you reduced the mess is XP — standing, not a coupon.

The inspector is unemployed. The gavel becomes an if-then. Keep writing the old dues check so they can't lien the house. We empty their job jar. When we're keeping the place running, they're letterhead. Texas law: 67% of owners can amend the declaration. Function now. Paper when we have the count.

Don't egg the truck. Become a node. Hostinger is the sign. The laptops are the network.

https://extropyengine.com/hoa
https://extropyengine.com/hoa/board`;
