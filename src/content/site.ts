export const site = {
  name: "Lladnaros",
  person: "Randall Gossett",
  palindrome: "Sorandall",
  tagline: "They want fire. I bring fungus.",
  description:
    "Music, writing, and systems theory by Randall Gossett. Three studio albums, a free book, and papers on extropy, entropy reduction, and emergence-first governance.",
  year: 2026,
} as const;

export const nav = [
  { label: "The Book", href: "/#book" },
  { label: "Music", href: "/#music" },
  { label: "Papers", href: "/#papers" },
  { label: "Suite", href: "/#suite" },
  { label: "Connect", href: "/#follow" },
  { label: "Universal Times", href: "/universaltimes" },
] as const;

export const startBar = {
  label: "Start Here",
  entries: [
    { label: "Money", href: "/start/money" },
    { label: "AI", href: "/start/ai" },
    { label: "Governance", href: "/start/governance" },
    { label: "Physics", href: "/start/physics" },
  ],
  extras: [
    { label: "Glossary", href: "/glossary" },
    { label: "Open Problems", href: "/open-problems" },
    { label: "Proof Layers", href: "/proof-layers" },
    { label: "MVT", href: "/mvt" },
  ],
} as const;

export const book = {
  title: "Unf*ck the World for a Dollar",
  tagline: "They want fire. I bring fungus.",
  byline: "A book by Randall Gossett & Perplexity Computer.",
  description:
    "A field manual for surviving a glitched culture without losing your mind, your ethics, or your sense of humor. Free to read — honor system. If it hits, tip what it’s worth to you.",
  pdf: "/docs/Unfuck_The_World_For_A_Dollar.pdf",
  epub: "/docs/Unfuck_The_World_For_A_Dollar.epub",
  audio:
    "https://elevenreader.io/audiobooks/unf-ck-the-world-for-a-dollar-audiobook/fst6SabYYioSI1EfquSo",
  tip: "https://cash.app/$00nerd/1",
  cover: "/cover.jpg",
} as const;

export const spotifyArt = (hash: string) =>
  `https://i.scdn.co/image/ab67616d0000b273${hash}`;

export type MusicLinks = {
  spotify: string;
  apple: string;
  youtube: string;
};

export type Album = {
  year: number;
  title: string;
  tracks: number;
  blurb: string;
  art: string;
  links: MusicLinks;
  kind?: "album" | "ep";
};

export const albums: Album[] = [
  {
    year: 2026,
    title: "The Lladnaros EP",
    tracks: 7,
    kind: "ep",
    blurb: "Systems theory smuggled in as sound. If the machine can copy you, you were compressible.",
    art: spotifyArt("4de872d92d4f2385a55828c1"),
    links: {
      spotify: "https://open.spotify.com/album/6N5LplkywFAyXAXlX8J4kb",
      apple: "https://music.apple.com/us/album/the-lladnaros-ep/6786489841",
      youtube: "https://music.youtube.com/playlist?list=OLAK5uy_mEnJiMmWzeucRciwgbi7eYOd6Nj7-KReY",
    },
  },
  {
    year: 2026,
    title: "Unf*ck the World for a Dollar",
    tracks: 18,
    blurb: "The album companion to the book.",
    art: spotifyArt("d2bdf809d89a7f17b3066060"),
    links: {
      spotify: "https://open.spotify.com/album/6zfPqSX9aI6xSg5wibMUlq",
      apple: "https://music.apple.com/us/album/unf-ck-the-world-for-a-dollar/1881847933",
      youtube: "https://music.youtube.com/browse/MPREb_PL8FalMLQzm",
    },
  },
  {
    year: 2025,
    title: "The Glitch Was Me",
    tracks: 25,
    blurb: "The origin story in glitch form.",
    art: spotifyArt("f2ab9a76673f72fd5248fa08"),
    links: {
      spotify: "https://open.spotify.com/album/0KASNP03vhiZLTENy3sg8s",
      apple: "https://music.apple.com/us/album/the-glitch-was-me/1844756326",
      youtube: "https://music.youtube.com/browse/MPREb_9lssob7lsKb",
    },
  },
  {
    year: 2025,
    title: "Patterns and Mouth Noises",
    tracks: 14,
    blurb: "Consensus hell and syntax sabotage.",
    art: spotifyArt("9681bd6f34e00e40444dc16c"),
    links: {
      spotify: "https://open.spotify.com/album/12RvKFIT6zbj64UekqdYDZ",
      apple: "https://music.apple.com/us/album/patterns-and-mouth-noises/1832465671",
      youtube: "https://music.youtube.com/browse/MPREb_nCdXQ6PJ0Ry",
    },
  },
];

export type Single = {
  year: number;
  title: string;
  desc: string;
  art: string;
  links: MusicLinks;
};

export const singles: Single[] = [
  {
    year: 2026,
    title: "Inside the Machine",
    desc: "Punk rock as merch. The rebellion was always for sale, and the left repackaged it as their own.",
    art: spotifyArt("c5943e8bc994579a352bfee3"),
    links: {
      spotify: "https://open.spotify.com/search/Lladnaros%20Inside%20the%20Machine",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20Inside%20the%20Machine",
      youtube: "https://music.youtube.com/browse/MPREb_JNNF2oQdqOq",
    },
  },
  {
    year: 2026,
    title: "Fake Slop",
    desc: "Clowning the people who dismiss AI music without listening. The medium isn't the message — the message is.",
    art: spotifyArt("b1cf7b7204dd0a6e4f7f8ff8"),
    links: {
      spotify: "https://open.spotify.com/search/Lladnaros%20Fake%20Slop",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20Fake%20Slop",
      youtube: "https://music.youtube.com/browse/MPREb_QD9B9qAvaBQ",
    },
  },
  {
    year: 2025,
    title: "Procedural Ghostride",
    desc: "There's no conspiracy. It's just incentives running the show with no driver. That's the scary part.",
    art: spotifyArt("fd4a3cbf66778ccbae490ea0"),
    links: {
      spotify: "https://open.spotify.com/search/Lladnaros%20Procedural%20Ghostride",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20Procedural%20Ghostride",
      youtube: "https://music.youtube.com/browse/MPREb_f7FCnmlmLiq",
    },
  },
  {
    year: 2025,
    title: "No One’s Lying",
    desc: "Everyone’s telling their truth. The truths don’t fit. Welcome to consensus collapse.",
    art: spotifyArt("7104a2cb05f376b50d5675ae"),
    links: {
      spotify: "https://open.spotify.com/search/Lladnaros%20No%20One%20Lying",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20No%20One%20Lying",
      youtube: "https://music.youtube.com/browse/MPREb_RlDp0FzJL4B",
    },
  },
  {
    year: 2025,
    title: "Kill the Arc",
    desc: "Trained to read everything as narrative — conflict, resolution, hero. Drop the arc and the world stops making the wrong kind of sense.",
    art: spotifyArt("7d747071abf8273075292291"),
    links: {
      spotify: "https://open.spotify.com/search/Lladnaros%20Kill%20the%20Arc",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20Kill%20the%20Arc",
      youtube: "https://music.youtube.com/browse/MPREb_JRiUL7fCl8p",
    },
  },
  {
    year: 2025,
    title: "Clap if You’re Programmed",
    desc: "A roll call for everyone running someone else’s code.",
    art: spotifyArt("7514d55cd0f21570a019f6f3"),
    links: {
      spotify: "https://open.spotify.com/search/Lladnaros%20Clap%20if%20Programmed",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20Clap%20if%20Programmed",
      youtube: "https://music.youtube.com/browse/MPREb_i68cAhcswmq",
    },
  },
  {
    year: 2025,
    title: "Civilizational Facepalm",
    desc: "Left, right, doesn't matter — everyone's running TikTok-tier reasoning and rationalizing the result. The facepalm is bipartisan.",
    art: spotifyArt("8498fb050928b439bc5f829a"),
    links: {
      spotify: "https://open.spotify.com/search/Lladnaros%20Civilizational%20Facepalm",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20Civilizational%20Facepalm",
      youtube: "https://music.youtube.com/browse/MPREb_8aXwLKiQ3a7",
    },
  },
  {
    year: 2025,
    title: "What is God? (Really)",
    desc: "Reframing God as entropy reduction. Not a being — a direction.",
    art: spotifyArt("0ce6e66e89007268851014be"),
    links: {
      spotify: "https://open.spotify.com/search/Lladnaros%20What%20is%20God",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20What%20is%20God",
      youtube: "https://music.youtube.com/browse/MPREb_BrwfCt4Fpjo",
    },
  },
  {
    year: 2025,
    title: "Stan (Recursive Variant)",
    desc: "Devotion as a closed loop. The fan as the algorithm’s training data.",
    art: spotifyArt("6fd5ed206ebfeb4a4a068b3e"),
    links: {
      spotify: "https://open.spotify.com/search/Lladnaros%20Stan%20Recursive",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20Stan%20Recursive",
      youtube: "https://music.youtube.com/browse/MPREb_SDgvD1LQkS5",
    },
  },
  {
    year: 2025,
    title: "Cult of Disagreement",
    desc: "Religion, politics, pop fandoms — pick your flavor, it's all cult. The disagreement is the doctrine.",
    art: spotifyArt("388ab0ca2862e574e1aeb9f6"),
    links: {
      spotify: "https://open.spotify.com/search/Lladnaros%20Cult%20of%20Disagreement",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20Cult%20of%20Disagreement",
      youtube: "https://music.youtube.com/browse/MPREb_h9aVHSssVdX",
    },
  },
  {
    year: 2025,
    title: "I Wrote This With My Eyes Closed",
    desc: "I'm right because I'm trying to be wrong. Assume you're wrong first — that's how you get to right.",
    art: spotifyArt("7d931ac997b671340205d3a7"),
    links: {
      spotify: "https://open.spotify.com/search/Lladnaros%20Eyes%20Closed",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20Eyes%20Closed",
      youtube: "https://music.youtube.com/browse/MPREb_h2syhVxEHIW",
    },
  },
  {
    year: 2025,
    title: "Paradox Eater",
    desc: "A middle finger to the Copenhagen interpretation. Bohr, your wave function can collapse on its own.",
    art: spotifyArt("a04c89b4a08aeb606521fd0d"),
    links: {
      spotify: "https://open.spotify.com/search/Lladnaros%20Paradox%20Eater",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20Paradox%20Eater",
      youtube: "https://music.youtube.com/browse/MPREb_yeVvTZZ5Vxt",
    },
  },
  {
    year: 2025,
    title: "In The Loop",
    desc: "We're hamsters mashing buttons for pellets. We just call the wheel social media.",
    art: spotifyArt("d917b2270bf72957ea473cd2"),
    links: {
      spotify: "https://open.spotify.com/track/7bZkjTRaI0TG8Y01SJWsUq",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20In%20The%20Loop",
      youtube: "https://music.youtube.com/browse/MPREb_VZWfcMIgEui",
    },
  },
  {
    year: 2025,
    title: "The Real Magic",
    desc: "What’s left after you stop pretending. The trick that isn’t one.",
    art: spotifyArt("275a8022b4ebf1692f4132e6"),
    links: {
      spotify: "https://open.spotify.com/track/75SGzqJg1nDpZbw4c6MmB3",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20The%20Real%20Magic",
      youtube: "https://music.youtube.com/browse/MPREb_XruCUBTRkUi",
    },
  },
];

export const artistLinks = [
  { label: "Full Artist Page on Spotify", href: "https://open.spotify.com/artist/0A1tRZXeo8dFeEWFycvjUV" },
  { label: "Apple Music", href: "https://music.apple.com/us/artist/lladnaros/1832295144" },
  { label: "YouTube Music", href: "https://music.youtube.com/channel/UC3iGZhDXGibTldct5mwSUVg" },
  { label: "Amazon Music", href: "https://music.amazon.com/artists/B0FLWNSHT4/lladnaros" },
  { label: "iHeartRadio", href: "https://www.iheart.com/artist/lladnaros-47716118/" },
] as const;

export type Paper = {
  tag: string;
  title: string;
  href: string;
  academia?: string;
};

export const papers: Paper[] = [
  {
    tag: "New · Music / Criticism",
    title: "Signal, Loop, and Story",
    href: "https://www.academia.edu/170725878/Signal_Loop_and_Story",
  },
  {
    tag: "New · Time · V4.2",
    title: "Universal Times v4.2",
    href: "https://www.academia.edu/170494720/Universal_Times_v4_2",
  },
  {
    tag: "Codex",
    title: "Extropy Codex: Comprehensive Technical Specification",
    href: "/docs/Extropy_Codex_Technical_Specification_Final.pdf",
  },
  {
    tag: "Epistemology",
    title: "When the Signal Eats the Source",
    href: "/docs/When_the_Signal_Eats_the_Source.pdf",
  },
  {
    tag: "Tech Docs · V3.1.2",
    title: "Extropy Engine Technical Docs v3.1.2",
    href: "/docs/extropy-engine-technical-docs-v3.1.2.pdf",
  },
  {
    tag: "DAG Architecture",
    title: "DAG Architecture Breakdown",
    href: "/docs/DAG_Architecture_Breakdown.pdf",
  },
  {
    tag: "Time",
    title:
      "Universal Times: Dual-System Temporal Infrastructure, Entropy Economics & the Post-Calendar Coordination Problem",
    href: "https://www.academia.edu/attachments/132155612/download_file?s=portfolio",
    academia:
      "https://www.academia.edu/165180710/Universal_Times_Dual_System_Temporal_Infrastructure_Entropy_Economics_and_the_Post_Calendar_Coordination_Problem",
  },
  {
    tag: "Framework · V4",
    title:
      "The Framework: An Emergence-First Theory of Adaptation, Governance, and Everything in Between",
    href: "https://www.academia.edu/attachments/132017018/download_file?s=portfolio",
  },
  {
    tag: "Philosophy",
    title: "Reality Forks: A Recursive Guide to Rethinking Everything",
    href: "https://www.academia.edu/attachments/132024936/download_file?s=portfolio",
  },
  {
    tag: "GUT",
    title:
      "An Emergence-First Grand Unified Theory: Systems, Feedback, and Emergent Governance",
    href: "/docs/An_Emergence_First_Grand_Unified_Theory_v2_referenced.pdf",
  },
  {
    tag: "Theology",
    title: "God as Emergent Entropy Reduction: A Falsifiable Framework",
    href: "https://www.academia.edu/attachments/132032004/download_file?s=portfolio",
  },
];

export type AppStatus = "live" | "dev" | "concept";

export type SuiteApp = {
  name: string;
  status: AppStatus;
  tag: string;
  blurb: string;
  body: string;
  repo?: string;
};

export const suite: SuiteApp[] = [
  {
    name: "Extropy Engine",
    status: "live",
    tag: "Core Protocol",
    blurb: "The root. Where verified entropy reduction becomes the sole basis of value.",
    body: "XP = R × F × ΔS × (w · E) × log(1/Tₛ). Reach, fidelity, entropy reduction, weighted utility, and time-decay compressed into a single physics-grounded value metric for any contribution, governance vote, or unit of work. Written in TypeScript. MIT licensed.",
    repo: "https://github.com/00ranman/extropy-engine",
  },
  {
    name: "XP-Net",
    status: "dev",
    tag: "Layer 1 Protocol",
    blurb: "DAG-based Layer 1 with Extropy Engine integration for entropy-anchored governance.",
    body: "Physics-based DAG Layer 1 protocol where consensus weight derives directly from verified entropy reduction. No proof-of-work, no proof-of-stake—proof-of-extropy. Integrates natively with the XP formula for on-chain governance.",
    repo: "https://github.com/00ranman/xp-net",
  },
  {
    name: "XP-DAG-Mesh",
    status: "dev",
    tag: "Layer 1 Protocol",
    blurb: "Physics-anchored DAG with entropy-weighted consensus. No blocks. Thermodynamic validation.",
    body: "The mesh layer. A blockless directed acyclic graph where every transaction is validated thermodynamically. Nodes earn weight by provable entropy reduction, not hashrate or stake. Designed for civilisation-scale throughput.",
    repo: "https://github.com/00ranman/xp-dag-mesh",
  },
  {
    name: "Universal Times",
    status: "dev",
    tag: "Temporal Infrastructure",
    blurb: "Hydrogen-anchored dual-system timekeeping for multi-planetary coordination.",
    body: "Universal Times v4.0. Replaces the calendar with a hydrogen-decay-anchored temporal DAG. Two parallel clocks: one for Earth-local civic scheduling, one for physics-absolute coordination across planets. Written in Rust.",
    repo: "https://github.com/00ranman/xp-timekeeping",
  },
  {
    name: "Master Control Hub",
    status: "dev",
    tag: "Ecosystem Orchestration",
    blurb: "Unified orchestration platform for physics-based civilization coordination.",
    body: "The dashboard that binds the constellation. Routes XP flows between all suite apps, visualises entropy reduction in real time, manages governance proposals, and coordinates cross-app state. The cockpit of the Extropy Engine.",
    repo: "https://github.com/00ranman/extropy-master-control-hub",
  },
  {
    name: "HomeFlow",
    status: "dev",
    tag: "Household Optimization",
    blurb: "Physics-based household coordination. From toilet paper to q-tips.",
    body: "Complete household coordination system that treats your home as a thermodynamic system. Tracks consumption rates, optimises restocking, coordinates chores via entropy-weighted task assignment. Proof that the framework scales down to daily life.",
    repo: "https://github.com/00ranman/homeflow",
  },
  {
    name: "LevelUp Academy",
    status: "dev",
    tag: "Adaptive Learning",
    blurb: "Physics-based adaptive learning with entropy reduction rewards and skill progression.",
    body: "An education platform where learning is measured by verified entropy reduction—not seat time. Adaptive difficulty, XP-weighted skill trees, and real-time feedback loops. Gamified not for dopamine but for actual demonstrated competence.",
    repo: "https://github.com/00ranman/levelup-academy",
  },
  {
    name: "Extropialingo",
    status: "dev",
    tag: "Language Learning",
    blurb: "Gamified Extropian language learning with physics-based XP rewards.",
    body: "Language acquisition rebuilt on physics. Lessons generate XP through verified entropy reduction in comprehension and production. Tracks fluency as a thermodynamic curve, not a streak counter. Revolutionary gamification that actually measures learning.",
    repo: "https://github.com/00ranman/extropialingo",
  },
  {
    name: "SignalFlow",
    status: "dev",
    tag: "AI Task Management",
    blurb: "AI-enhanced task management with an invisible validation mesh. The internet as truth engine.",
    body: "Task management meets epistemic infrastructure. An invisible validation mesh sits behind every workflow, scoring signal quality and routing attention to highest-entropy-reduction actions. AI-enhanced, physics-grounded, designed to transform the internet into a truth engine.",
    repo: "https://github.com/00ranman/signalflow",
  },
  {
    name: "Emergence Detector",
    status: "dev",
    tag: "Hardware · ESP32",
    blurb: "ESP32 device detecting emergent patterns in environmental data via LEDs and web dashboard.",
    body: "Hardware meets emergence theory. An ESP32 microcontroller that samples environmental data—temperature, humidity, light, sound—detects emergent patterns in real time, and visualises them through dynamic LED patterns and a companion web dashboard.",
    repo: "https://github.com/00ranman/esp32-emergence-detector",
  },
  {
    name: "AcademicXP",
    status: "concept",
    tag: "Peer Review Platform",
    blurb: "Peer review rebuilt on physics-based evaluation metrics.",
    body: "A platform where academic peer review is scored by the XP formula. Reviewer weight comes from verified entropy reduction in their own published work. Eliminates credential gatekeeping. Rewards rigorous critique. Paper quality measured thermodynamically.",
  },
  {
    name: "DFAO Governance",
    status: "concept",
    tag: "Decentralized Organization",
    blurb: "Decentralized Feedback-Aware Organization. Governance that adapts.",
    body: "The organisational layer. A decentralised feedback-aware organisation where every governance decision is weighted by the proposer’s verified entropy reduction. Adaptive goal evolution. Convergent validation. No politicians—just physics.",
  },
  {
    name: "Doctrine of Z",
    status: "concept",
    tag: "Philosophy · Framework",
    blurb: "The blueprint for emergent coherence.",
    body: "A philosophical operating system. The Doctrine of Z maps the territory between chaos and order, providing a formal grammar for how coherent systems emerge from noise. Not a religion—a recursive instruction set for reality.",
  },
  {
    name: "Whiteroom.exe",
    status: "dev",
    tag: "Stealth",
    blurb: "Details classified. Currently in build.",
    body: "Whiteroom.exe is under active development. Specifications are not yet public. Watch the GitHub for updates.",
    repo: "https://github.com/00ranman/whiteroom-exe",
  },
];

export const socials = [
  { label: "YouTube", href: "https://www.youtube.com/@Lladnaros" },
  { label: "X / Twitter", href: "https://x.com/lladnaros" },
  { label: "Threads", href: "https://www.threads.net/@decentframework" },
  { label: "Instagram", href: "https://www.instagram.com/decentframework" },
  { label: "Facebook", href: "https://www.facebook.com/Lladnaros" },
  { label: "TikTok", href: "https://www.tiktok.com/@lladnaros" },
  { label: "Reddit", href: "https://www.reddit.com/user/Few-Bluebird9443/" },
  { label: "GitHub", href: "https://github.com/00ranman" },
  { label: "Academia", href: "https://rgossett1.academia.edu" },
] as const;

export const docsIndex = [
  {
    title: "Signal, Loop, and Story",
    href: "https://www.academia.edu/170725878/Signal_Loop_and_Story",
    note: "Lyric analysis — music as systems argument (2026)",
  },
  {
    title: "Universal Times v4.2",
    href: "https://www.academia.edu/170494720/Universal_Times_v4_2",
    note: "Hydrogen-anchored dual-system timekeeping, July 2026",
  },
  {
    title: "Tech Spec 3.1.2",
    href: "/docs/extropy-engine-technical-docs-v3.1.2.pdf",
    note: "Full technical specification",
  },
  {
    title: "Extropy Codex",
    href: "/docs/Extropy_Codex_Technical_Specification_Final.pdf",
    note: "Comprehensive technical specification",
  },
  {
    title: "When the Signal Eats the Source",
    href: "/docs/When_the_Signal_Eats_the_Source.pdf",
    note: "Epistemology paper",
  },
  {
    title: "DAG Architecture Breakdown",
    href: "/docs/DAG_Architecture_Breakdown.pdf",
    note: "Architecture notes",
  },
  {
    title: "Emergence-First GUT",
    href: "/docs/An_Emergence_First_Grand_Unified_Theory_v2_referenced.pdf",
    note: "Grand unified theory",
  },
  {
    title: "Unf*ck the World for a Dollar",
    href: "/docs/Unfuck_The_World_For_A_Dollar.pdf",
    note: "The book (PDF)",
  },
] as const;
