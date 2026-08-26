export const hoaPage = {
  title: "Neighborhood MESO",
  kicker: "Extropy Engine · HOA wrapper",
  lead: "This is the Engine you already have. The HOA is a skin: the jobs an association already does, posted as LocalFlow, confirmed, XP minted. You run it on an old laptop. You become a node. The neighborhood is a MESO DFAO. Crews under it are MICROs. That is the product.",
} as const;

export const hoaWrap = [
  { hoa: "Common grass / landscape", engine: "LocalFlow job · grounds. Post. Do. Confirm. SignalFlow proposes ΔS. XP mints if it holds." },
  { hoa: "Lights, gates, access", engine: "Job · access. Dead bulb is a loop. Confirmation is the receipt." },
  { hoa: "Drainage / storm / freeze", engine: "Job · storm. Same loop. Evidence on the DAG." },
  { hoa: "Trash / bulk / dumpster", engine: "Job · waste." },
  { hoa: "Pool / amenity hours", engine: "Job · amenity. Whoever actually shows up." },
  { hoa: "Neighbor dispute", engine: "Job · mediate. Both sides sign off. Not a ticket from a truck." },
  { hoa: "Vendor / work order", engine: "A MICRO crew. Nested under the MESO. Same confirm, same mint." },
  { hoa: "Meetings / votes", engine: "Governance in this DFAO. Votes stay in this room. IT decays if you vanish." },
  { hoa: "Dues / liens / deed rules", engine: "Not this wrapper. Those stay on the recorded paper until that paper changes. The Engine tracks work. It does not forge a gavel." },
] as const;

export const hoaNode = {
  title: "Become a node",
  need: "Docker Desktop once. Then one line in Terminal. First run builds; later runs just start. Sandbox handshake today is HTTPS, not libp2p. The loop is real. The boxed kit is later.",
  line: "curl -fsSL https://raw.githubusercontent.com/00ranman/extropy-engine/main/scripts/join-hoa-meso.sh | bash",
  after: [
    "Clones github.com/00ranman/extropy-engine into ~/extropy-engine if it is not there.",
    "Starts the Engine: SignalFlow, loop ledger, XP mint, DFAO registry, node handshake.",
    "Loads the HOA MESO preset — job types above, scale MESO, phase SHADOW.",
    "Asks the neighborhood name. That is the DFAO. You are a node on it. Next laptop does the same and joins.",
    "Post a job. Someone does it. Confirm. XP mints on verified ΔS > 0. That is the association, running.",
  ],
  windows: "Windows: Docker Desktop + WSL or Git Bash, then the same line.",
  stop: "cd ~/extropy-engine && docker compose --profile sandbox down",
  href: "https://github.com/00ranman/extropy-engine/blob/main/presets/hoa-meso/README.md",
} as const;
