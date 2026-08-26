export const site = {
  name: "Extropy Engine",
  person: "Randall Gossett",
  palindrome: "Sorandall",
  wordmarkLeft: "Extropy",
  wordmarkRight: "Engine",
  tagline: "They want fire. I bring fungus.",
  description:
    "Extropy Engine — protocol, papers, and systems work by Randall Gossett. A free book, three studio albums, and research on entropy reduction and emergence-first governance.",
  year: 2026,
} as const;

export type NavLink = { label: string; href: string };
export type NavItem = NavLink & { children?: readonly NavLink[] };

/** Top bar stays short. Engine is the protocol. HOA is its own door. */
export const primaryNav: readonly NavItem[] = [
  { label: "Book", href: "/#book" },
  { label: "Music", href: "/#music" },
  { label: "Papers", href: "/#papers" },
  {
    label: "Engine",
    href: "/#engine",
    children: [
      { label: "How it works", href: "/#engine" },
      { label: "Start here", href: "/start" },
      { label: "FAQ", href: "/faq" },
      { label: "Glossary", href: "/glossary" },
      { label: "DFAO", href: "/dfao" },
      { label: "Open problems", href: "/open-problems" },
      { label: "Proof layers", href: "/proof-layers" },
      { label: "Try it", href: "/mvt" },
      { label: "Universal Times", href: "/universaltimes" },
    ],
  },
  {
    label: "HOA",
    href: "/hoa",
    children: [
      { label: "The takeover", href: "/hoa" },
      { label: "Sunset Oaks", href: "/hoa/sunset-oaks" },
    ],
  },
  { label: "Podcast", href: "/podcast" },
  { label: "Connect", href: "/#follow" },
] as const;


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
    blurb: "The album companion to the book. Bigger tent than three chords.",
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
    blurb: "The origin story in glitch and electronics.",
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
    blurb: "Consensus hell and syntax sabotage. Mouth noises, machines, a little hop.",
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
  links?: MusicLinks;
  src?: string;
};

export const singles: Single[] = [
  {
    year: 2026,
    title: "Inside the Machine",
    desc: "A song about punk getting sold as merch — recuperation, inventory, terms of service. The argument isn’t a genre tag.",
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
    title: "Closing the Loop",
    href: "/papers/closing-the-loop",
  },
  {
    tag: "New · Codex · V2.1",
    title: "Extropy Codex, Version 2.1, Comprehensive Edition",
    href: "/docs/Extropy_Codex_v2.1_Comprehensive.pdf",
  },
  {
    tag: "New · Time · V4.2",
    title: "Universal Times v4.2",
    href: "/docs/Universal_Times_v4.2.pdf",
  },
  {
    tag: "Epistemology",
    title: "When the Signal Eats the Source",
    href: "/docs/When_the_Signal_Eats_the_Source.pdf",
  },
  {
    tag: "DAG Architecture",
    title: "DAG Architecture Breakdown",
    href: "/docs/DAG_Architecture_Breakdown.pdf",
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

export const earlierEditions: Paper[] = [
  {
    tag: "Music / Criticism · July 2026",
    title: "Signal, Loop, and Story",
    href: "https://www.academia.edu/170725878/Signal_Loop_and_Story",
  },
  {
    tag: "Codex · V2.0",
    title: "Extropy Codex, Version 2.0, Comprehensive Edition",
    href: "https://www.academia.edu/169680038/Extropy_Codex_Version_2_0_Comprehensive_Edition",
  },
  {
    tag: "Codex",
    title: "Extropy Codex: Comprehensive Technical Specification",
    href: "/docs/Extropy_Codex_Technical_Specification_Final.pdf",
    academia: "https://www.academia.edu/167088728/Extropy_Codex_Comprehensive_Technical_Specification",
  },
  {
    tag: "Tech Docs · V3.1.2",
    title: "Extropy Engine Technical Docs v3.1.2",
    href: "/docs/extropy-engine-technical-docs-v3.1.2.pdf",
  },
  {
    tag: "Time",
    title:
      "Universal Times: Dual-System Temporal Infrastructure, Entropy Economics & the Post-Calendar Coordination Problem",
    href: "https://www.academia.edu/attachments/132155612/download_file?s=portfolio",
    academia:
      "https://www.academia.edu/165180710/Universal_Times_Dual_System_Temporal_Infrastructure_Entropy_Economics_and_the_Post_Calendar_Coordination_Problem",
  },
];

export type AppStatus = "live" | "dev" | "concept";

export const engineViews = {
  consumer: {
    title: "What a person sees",
    kicker: "LocalFlow",
    lines: [
      "Need a ride, a grocery run, a thing done. Post it.",
      "Someone nearby takes it. They do the work. Maybe they brought the car you don’t have.",
      "You tap done. That’s the whole app.",
      "Uber, Lyft, DoorDash, Grubhub — one pile. Not the protocol. Confirmation is the receipt.",
    ],
  },
  house: {
    title: "What a house sees",
    kicker: "HomeFlow",
    lines: [
      "The household is a DFAO. Chores, IoT, the building. Thermodynamic measurement of the rooms you actually live in.",
      "Still the same loop: post, do, confirm. Not a separate religion. Not “the errand app but indoor.”",
      "Sensors can hang evidence. They do not mint. Mint still wants a closed loop.",
      "If it is in packages/homeflow, it is in the process. Silence on this page was a mistake, not a retirement.",
    ],
  },
  quests: {
    title: "What a quest is",
    kicker: "Quest market",
    lines: [
      "Default grain: two to five minutes. Decomposition at the edge, not a priesthood.",
      "Reward can escalate if it sits. Validation-neighborhoods take blind slices. Volunteer role, not a class of people.",
      "Bigger work is a graph of small ones. Farming a 3-minute task is expensive because F exists.",
      "packages/quest-market is the operational primitive. Still in git. Still the process.",
    ],
  },
  merchant: {
    title: "What a shop sees",
    kicker: "Emergent Points",
    formula: "EP = XP × L",
    lines: [
      "You still spend dollars. This is a layer on top of that, not a replacement. It tracks the exchange, converts it to a bits-equivalent proxy, and fine-tunes the average ΔS for this kind of situation in these domains until the proxy is less wrong.",
      "L is estimated at purchase from the mesh — your contribution, this shop’s local ΔS, the region, the domains in play. A fraction. 0.something. EP = XP × L. No 1:1 to cash. There is no table.",
      "What you get off the remaining bill is not a coupon. A vertex settles some of the exchange. How much is an agreed estimate both edges have to accept. Keep missing and the shop changes its parameters — or the customer is looking entropic.",
      "The point of the layer is to show why that ΔS should be worth more than the fiat-only reading, if it isn’t already. Repeat-farming is F. Mom-and-pop first. Cash cannot mint XP.",
    ],
  },
} as const;

export const engineGame = {
  kicker: "The game",
  title: "It's just a UI for your life",
  lead: "Picture what's on paper as a game that's going worldwide. You can log on through the internet you already have. That's not the only way, and it's not the correct way. Correct way: a cheap laptop, clone the repo, you're a node. Somebody else does the same thing. Nearby, you talk node to node — you don't even have to go through the internet. The internet is there so you can reach people who aren't next door. ZKPs talk to each other. That's the client. This website is not that network.",
  why: "That's why I'm confident. This is a game. I keep getting pushback that it's untested, that it's a bad idea. There's no special risk here. We live in a world built on unintended consequences. I don't get why people are so against throwing this ledger out there. The hurdle is the campaign. It's a big-brain thing with a lot of parts. You don't need the whole object. You need the part for the seat you're in. Other people check it. They go, oh, this is okay. Then more people talk. Then more people do it. Why not play the game on top of the life you're already living?",
} as const;

export const engineSignal = {
  kicker: "SignalFlow",
  title: "You do not score yourself",
  lead: "SignalFlow is one layer. It is not the Engine. LocalFlow is one face. It is not the Engine. The protocol you talk to is your assistant — ChatGPT, Claude, Gemini, or a model on your own box — plus your PSLL plus the network. That is how a claim gets packaged. Everything else in the git is still the process.",
  steps: [
    "You mow the lawn. You do not type in a number.",
    "SignalFlow reads the task, the time, your PSLL, and whatever evidence you attached — before/after photos live on the DAG.",
    "It proposes a provisional ΔS with the model you already trust. If-then. The other side has to agree.",
    "If it holds, it settles into standing XP. If someone contests — later, even years later — it can still burn.",
  ],
  privacy:
    "Log in with a company and you are tethered to a company. Own hardware is how you stay unknown. A network-hosted model you can run without owning the rack is a later idea, not a product today.",
} as const;

export const engineNode = {
  kicker: "The node",
  title: "Keys stay on the box",
  lead: "Each laptop is an independent node. Hostinger is not the network. Security is: you hold the key, the mesh verifies signatures, and a bad actor cannot silently rewrite someone else's book.",
  did: "You do not apply for a DID. First boot writes a keypair on disk. The name is a did:key — W3C, from the public key, no registrar, no Microsoft, no Google. That is how you get one. Backup the file. Lose it and you are a new node. Standing does not teleport. did:web is optional if you want a domain on the document. Not required.",
  zkp: "The DID is the name. A ZKP is what you show. Prove a predicate: this DID, band ≥ n, confirmed this loop, not slashed in this DFAO, unique in this room. The till gets yes or no. Not your diary. Not the XP pile. Circuits are Codex 3. Today the handshake is signatures. Same job, thinner proof.",
  points: [
    { t: "On the box", d: "Keys, PSLL, postgres if you run the full stack — stay local. Do not punch the database at the WAN. You pull git. Nobody remote-admins you unless you handed them the key." },
    { t: "On the wire", d: "LAN talks node to node. WAN is TLS. Handshake is a signed hello plus capabilities. One captured node can lie about its own claims. It cannot quietly rewrite a neighbor's DAG. Other nodes check signatures and causal parents." },
    { t: "Sybil", d: "did:key is cheap on purpose. KYC is not the defense. Standing costs work. A new DID has no XP, no IT, no vote weight. Unique-in-DFAO ZKP is how one person does not vote fifty times in the same room. F punishes farmed loops." },
    { t: "Fake work", d: "Both edges have to agree. Evidence hangs on the vertex. Late burn still hits. Repeat-farming is F. A MICRO can puff a lawn. The DAG plus burn is how we live with that — not a speech about honesty." },
    { t: "Looking", d: "A common person can walk the DAG. They cannot do it silently. A look is a vertex. Stalking-shaped bursts can slash. Tills still get yes/no." },
  ],
  today: "Neighborhood-app writes did:key on first boot (data/keys/node.pem). Handshake is HTTPS + signatures, not production P2P. ZKP circuits are Codex 3. Don't pretend the circuits already shipped.",
} as const;

export const engineNotThat = {
  kicker: "Not a panopticon",
  title: "This domain is not the Engine",
  lead: "extropyengine.com is a website. Papers, a clock face, an RSS feed. Hostinger is not a node. The Engine is the git you clone onto a laptop. If a narrator said the Extropy Engine is hosted here, that was a slip. Correct it.",
  close:
    "A panopticon is one tower that can see every diary. This is the opposite. PSLL stays on the box. A till gets a ZKP — yes or no — not the pile, not the photos. Looking is a vertex. Silent stalking is the failure mode. did:key on first boot. Node to node on the LAN. Internet for people who aren't next door. If you talked through all of that and still ended on 'surveillance state,' you weren't listening. Don't close the show on that cheap question. The architecture already answered it. The diary stays yours.",
} as const;

const P = "https://github.com/00ranman/extropy-engine/tree/main/packages";

export const engineStack = {
  kicker: "If it's in the git, it's in the process",
  title: "The Engine is the whole monorepo",
  lead: "AIs keep collapsing this into LocalFlow plus SignalFlow. Those are two packages. The rest did not get deleted because we talked about errands last. Same loop everywhere: post, do, confirm, mint, maybe burn. Faces differ. The book does not.",
  groups: [
    {
      heading: "Faces",
      items: [
        { name: "LocalFlow", d: "Errands. Rides, groceries, the car you don't have. Matchmaking. Silent DAG emission.", href: `${P}/localflow` },
        { name: "HomeFlow", d: "Household / building. IoT, chores, rooms. Thermodynamic measurement of the place you live.", href: `${P}/homeflow` },
        { name: "Quest market", d: "2–5 minute grain. Escalation if it sits. Default operational primitive.", href: `${P}/quest-market` },
        { name: "GrantFlow", d: "Discovery (Grants.gov) plus proposer. Same loop, different input.", href: `${P}/grantflow-discovery` },
        { name: "LevelUp Academy", d: "Adaptive learning. Skill progression. XP on entropy-reducing study, not a grade mill.", href: `${P}/levelup-academy` },
        { name: "Extropialingo", d: "Language learning as loops. Still in git. Still the process.", href: `${P}/extropialingo` },
        { name: "Neighborhood app", d: "MESO job board on a laptop. did:key on first boot.", href: `${P}/neighborhood-app` },
        { name: "Ecosystem", d: "Skill DAG, XP oracle, merchant network, EP conversion.", href: `${P}/ecosystem` },
      ],
    },
    {
      heading: "Protocol",
      items: [
        { name: "SignalFlow", d: "Assistant + PSLL + routing. Packages the claim. Proposes ΔS. Not the whole Engine.", href: `${P}/signalflow` },
        { name: "Validation neighborhoods", d: "Blind 1/10 slices. Volunteer role, not a validator class. Holochain-shaped routing, native code.", href: `${P}/validation-neighborhoods` },
        { name: "Epistemology engine", d: "Mesh peer-review observability. The mesh reviews. This package witnesses it.", href: `${P}/epistemology-engine` },
        { name: "Decomposition kit", d: "Split a claim at the edge. Personal AI job, not a central pipeline.", href: `${P}/decomposition-kit` },
        { name: "PSLL-sync", d: "Personal Signed Local Log. Append-only, hash-chained, yours. Merkle-anchored to the DAG.", href: `${P}/psll-sync` },
        { name: "Identity", d: "did:key on the box. VCs, nullifiers, ZKP wrapper. Not a custodian.", href: `${P}/identity` },
        { name: "Credentials", d: "Cosmetic layer: badges, titles, seasons. Cannot steer mint.", href: `${P}/credentials` },
        { name: "Node handshake", d: "Signed hello, capabilities, DAG replay. HTTPS + signatures today.", href: `${P}/node-handshake` },
      ],
    },
    {
      heading: "Kernel",
      items: [
        { name: "xp-formula", d: "Canonical mint. XP = R × F × ΔS × (w · E) × log(1/Tₛ). Reputation never enters it.", href: `${P}/xp-formula` },
        { name: "xp-mint", d: "Mints when a loop closes with ΔS > 0. Enforces the criteria.", href: `${P}/xp-mint` },
        { name: "loop-ledger", d: "Closed verification loops as the atomic unit of value.", href: `${P}/loop-ledger` },
        { name: "dag-substrate", d: "Signed vertices, Lamport time, tip selection. The book.", href: `${P}/dag-substrate` },
        { name: "token-economy", d: "XP, CT, CAT, IT, DT, EP. Separate so influence cannot be purchased with XP.", href: `${P}/token-economy` },
        { name: "reputation", d: "Compressed evidence of past verification accuracy. Not a public ladder.", href: `${P}/reputation` },
        { name: "governance", d: "Proposal lifecycle inside a DFAO. Votes rewrite the room they are cast in.", href: `${P}/governance` },
        { name: "DFAO registry", d: "NANO → PLANETARY. Nested. Labels are suggestions, not fences.", href: `${P}/dfao-registry` },
        { name: "contracts", d: "Shared types, event bus, DB helpers. If-then, not a president.", href: `${P}/contracts` },
        { name: "bayesian", d: "Beta conjugate math. Portable. Used where the proxy needs a prior.", href: `${P}/bayesian` },
        { name: "ethics", d: "Guardrails as middleware. Harm, autonomy, humility. Not a sermon overlay.", href: `${P}/ethics` },
        { name: "temporal / Universal Times", d: "Decay clocks, seasons, hydrogen-anchored duration. Face on this site.", href: `${P}/temporal-service` },
        { name: "api-gateway", d: "One door for the microservices on YOUR node. Not a world server.", href: `${P}/api-gateway` },
        { name: "academia-bridge", d: "Paper upload path. Receipts into the graph, not a priest.", href: `${P}/academia-bridge` },
      ],
    },
  ],
} as const;

export const engineLoop = [
  { code: "OPEN", note: "Task posted. Vertex on the DAG with causal parents. Evidence can hang off it." },
  { code: "CLOSED", note: "Agreement. Provisional XP mints. The first settle window is a knob — 30 days was a starting number, not a law." },
  { code: "SETTLED", note: "Moves from provisional to standing. Still burnable later. XP is not spent. Access economy." },
  { code: "BURNED", note: "Dispute holds — five days later or thirty years later. Decay burns XP on a schedule anyway." },
] as const;

export const engineTokens = [
  { t: "XP", d: "Minted on verified ΔS > 0. You do not spend it. Access economy. Decays ~1%/month (ρ = 0.01 / 30 cycles) — not 5%. That is IT. Still burnable after settle. Under the floor it can quantize into a ZKP access band. Not a public ladder." },
  { t: "EP", d: "Emergent Points. Top layer on fiat, not a currency. EP = XP × L at purchase. L from the mesh (0.something). A vertex settles some of the exchange. No 1:1 to cash. Both edges agree." },
  { t: "IT", d: "Governance weight. Decays ~5%/month if you stop showing up. Different token from XP. Knob, not commandment." },
  { t: "CT / CAT / DT", d: "Standing, skill, domain. Separate so influence cannot be purchased with XP." },
] as const;

export const engineMath = {
  kicker: "If you care about the math",
  title: "Most people never see this",
  lead: "You post. Someone does it. You tap done. That is the product. The formula is for the people who want to know what the mint is claiming. Skip it if you came for a ride.",
  formula: "XP = R × F × ΔS × (w · E) × log(1/Tₛ)",
  floor:
    "Floor: XP ≥ ΔS / cₗ². Irreducible form — a compression of the mint above, same job as E = mc² next to the full energy-momentum relation. Not the theory. Not a new physics law. Glossary has the line.",
  source: "packages/xp-formula — canonical v3.1.2. Reputation never enters this formula.",
  terms: [
    { t: "R", d: "Rarity. Scarcity / base difficulty of this action class. Property of the loop, not the person." },
    { t: "F", d: "Frequency-of-decay. Repeating the same class pays less. 1.0 the first time. Not falsifiability." },
    { t: "ΔS", d: "Verified entropy reduction. Must be > 0. This is the proxy we keep arguing about below." },
    { t: "w · E", d: "Weight vector dotted with the effort / domain vector. Lawn vs ride vs ozone. Also the glass of water: desert vs stream is a different coupled system, not a mood painted on an unchanged glass." },
    { t: "Tₛ", d: "Timestamp decay in (0, 1]. log(1/Tₛ) stops farming by slamming loops shut." },
  ],
  body: [
    "We are open to a constant for “mowing a lawn.” We do not expect one. “Lawn” and “mowed” are words. Words drift. Linguistic relativity is not a vibe; it is why freezing a number and calling it a constant is often an ontological sleight of hand. You did not find physics. You froze a description.",
    "What we actually need is honesty about a proxy: a starting ΔS we attribute to a class of work — a lawn cut, a ride completed — and then we fine-tune it. Gas against the alternative. They would have driven themselves. They would have taken the bus. They would not have gone. Ozone, wear, idle time. Every extra scrap of data is another term in w · E, a cross-domain ΔS that gets less stupid.",
    "The glass of water is the same isolation trick. Econ 101 holds the glass still, moves you from a stream to a desert, and calls the difference ‘subjective value.’ The mesh changed. A dehydrated body is not the same thermodynamic object. No water nearby is not the same informational or biological state. Willingness-to-pay is a map of an isolated commodity. It is not a measurement of the coupled system. That debate is empty because it never opened the boundary.",
    "We start with the easy variables. We do not wait for a perfect lawn-mowing constant that will never arrive. The proxy gets more accurate as the graph fills in. That is the math. Not a religion of constants.",
    "You do not put yourself in for a score. SignalFlow and the model you trust propose the ΔS. Photos, duration, the alternative trip — those are terms. People will still try to oversell. That is the MICRO subjectivity problem. Evidence on the DAG plus late burn is how we live with it, not a claim that it cannot happen.",
  ],
} as const;

export const engineDag = {
  kicker: "The graph is the instrument",
  title: "Subjectivity is the start, not the attractor",
  lead: "The eight domains are a weighted vector, not eight sermons. A mediation and a mowed lawn do not share a constant. They share a DAG that gets denser. That is the claim. Overselling is the opening condition. Convergence is the bet.",
  points: [
    "Every closed loop hangs evidence and a provisional ΔS on a vertex with causal parents. Next time a similar fight, a similar lawn, the network has somewhere to look besides a vibe.",
    "Edge intelligence unveils only the ZKP the equation needs. Nobody sits on the diary. Digital Autarky is how you get detail without a panopticon.",
    "Landauer is the bridge, not a costume: information erased has a heat floor. Social and cognitive events are information events. Bits-equivalent is the stand-in — a proxy, not a worshipped constant. If later data contradicts it, it moves. Not a metaphor. Physicists who stop at that sentence are not the audience.",
    "A closed loop can still pay or burn later. More domains converge — a teacher whose student later traces the turnaround — and the original vertex can mint again. That is late mint. Settled is not sacred. The graph is allowed to catch up.",
    "Curating that graph is work. A DAG specialist who makes the ledger more navigable is reducing entropy and minting XP. Human in the loop is not a disclaimer. It is a job the protocol pays.",
    "No extractive microtransaction at each hop. Transactionality is the loop itself. The machine talks to its own history. When interpretations of “this kind of fight” stop getting pushback, the needle moves less. That is calibration, not a cult of the founder — the founder has no privileged key.",
  ],
} as const;

export const engineGit = [
  {
    status: "live" as const,
    name: "Protocol kernel",
    note: "xp-formula, loop-ledger, dag-substrate, xp-mint. Happy path closes and settles. Docker Compose on the repo.",
    href: "https://github.com/00ranman/extropy-engine",
  },
  {
    status: "dev" as const,
    name: "SignalFlow",
    note: "The protocol you talk to. Your assistant + PSLL + the network. Routes work, packages claims, proposes provisional ΔS. Not LocalFlow.",
    href: "https://github.com/00ranman/extropy-engine/tree/main/packages/signalflow",
  },
  {
    status: "dev" as const,
    name: "HomeFlow",
    note: "Household / building DFAO. IoT, chores, rooms. Same loop. Still in git.",
    href: "https://github.com/00ranman/extropy-engine/tree/main/packages/homeflow",
  },
  {
    status: "dev" as const,
    name: "Quest market",
    note: "2–5 minute grain. Escalation. Default operational primitive. Still in git.",
    href: "https://github.com/00ranman/extropy-engine/tree/main/packages/quest-market",
  },
  {
    status: "dev" as const,
    name: "Node handshake",
    note: "Sandbox: VPS ↔ laptop. Signed hello, capabilities, DAG replay, heartbeat. HTTPS + signatures, not production P2P. did:key on first boot is wired in neighborhood-app.",
    href: "https://github.com/00ranman/extropy-engine/tree/main/packages/node-handshake",
  },
  {
    status: "dev" as const,
    name: "Universal Times",
    note: "Hydrogen-anchored clocks. Spec v4.2 is public. temporal-service in the monorepo. Face on this site.",
    href: "/universaltimes",
  },
  {
    status: "concept" as const,
    name: "DFAO registry",
    note: "Scale labels NANO → PLANETARY. Bands are suggestions, not fences. Fractal nesting. Implementation incremental.",
    href: "https://github.com/00ranman/extropy-engine/tree/main/packages/dfao-registry",
  },
  {
    status: "concept" as const,
    name: "Node kit",
    note: "Intended product: plug-in node, PSLL, optional sensor. For-profit. Not a 501(c). Surplus after keeping the lights on goes into R&D and nodes, including where people actually need them. Not shipping.",
    href: "https://github.com/00ranman/extropy-engine/blob/main/docs/VPS_NODE.md",
  },
] as const;

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
    title: "Neighborhood MESO",
    href: "/hoa",
    note: "HOA-shaped wrapper on the Engine. One command, you are a node. Jobs → confirm → XP.",
  },
  {
    title: "Codex 3.0 notes",
    href: "/docs/CODEX_3_NOTES.md",
    note: "Capture for the next Codex — XP decay vs IT, settle knob, late burn, DAG as instrument. 2.1 stays frozen.",
  },
  {
    title: "Extropy Codex v2.1",
    href: "/docs/Extropy_Codex_v2.1_Comprehensive.pdf",
    note: "Comprehensive Edition — F = Frequency of Decay, script-F = Falsifiability. canonical-v3.12, protocol v0.2 (August 2026)",
  },
  {
    title: "Universal Times v4.2",
    href: "/docs/Universal_Times_v4.2.pdf",
    note: "Hydrogen-anchored dual-system timekeeping, July 2026",
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

export const earlierDocs = [
  {
    title: "Signal, Loop, and Story",
    href: "https://www.academia.edu/170725878/Signal_Loop_and_Story",
    note: "July 2026 lyric analysis — recast as Closing the Loop",
  },
  {
    title: "Extropy Codex v2.0",
    href: "https://www.academia.edu/169680038/Extropy_Codex_Version_2_0_Comprehensive_Edition",
    note: "Superseded Comprehensive Edition (July 2026)",
  },
  {
    title: "Extropy Codex: Comprehensive Technical Specification",
    href: "/docs/Extropy_Codex_Technical_Specification_Final.pdf",
    note: "Earlier Codex edition",
  },
  {
    title: "Tech Spec 3.1.2",
    href: "/docs/extropy-engine-technical-docs-v3.1.2.pdf",
    note: "Earlier engine technical specification",
  },
  {
    title: "Universal Times (original)",
    href: "https://www.academia.edu/165180710/Universal_Times_Dual_System_Temporal_Infrastructure_Entropy_Economics_and_the_Post_Calendar_Coordination_Problem",
    note: "Pre-v4.2 dual-system timekeeping paper",
  },
] as const;
