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
  {
    label: "Music",
    href: "/#music",
    children: [
      { label: "Albums & singles", href: "/#music" },
      { label: "Lyrics", href: "/lyrics" },
    ],
  },
  { label: "Papers", href: "/#papers" },
  {
    label: "Engine",
    href: "/#engine",
    children: [
      { label: "How it works", href: "/#engine" },
      { label: "Watch", href: "/#film" },
      { label: "Start here", href: "/start" },
      { label: "Letter key", href: "/key" },
      { label: "Fiat residual", href: "/rho" },
      { label: "FAQ", href: "/faq" },
      { label: "Glossary", href: "/glossary" },
      { label: "Ledger", href: "/#ledger" },
      { label: "The pipe", href: "/#wire" },
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
  { label: "Research Pod", href: "/research-pod" },
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
    title: "Weaponized Transparency",
    desc: "Talking about systems while fucking with them. Observation into ammunition — watching as a real lever. Not the observer effect. That mapping is not in the song. Schrödinger’s cat was a joke at people who applied quantum to a cat. Quantum does not apply to the macro.",
    art: spotifyArt("4de872d92d4f2385a55828c1"),
    links: {
      spotify: "https://open.spotify.com/search/Lladnaros%20Weaponized%20Transparency",
      apple: "https://music.apple.com/us/search?term=Lladnaros%20Weaponized%20Transparency",
      youtube: "https://music.youtube.com/search?q=Lladnaros%20Weaponized%20Transparency",
    },
  },
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
    tag: "Working lock · 29 Aug 2026",
    title: "Working Formula Sheet",
    href: "/docs/Extropy_Engine_Formula_Sheet.pdf",
  },
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
      "Same loop: post, do, confirm. Not a separate religion. Not “the errand app but indoor.”",
      "Sensors can hang evidence. They do not mint. Mint still wants a closed loop.",
    ],
  },
  quests: {
    title: "What a quest is",
    kicker: "Quest market",
    lines: [
      "Default grain: two to five minutes. Decomposition at the edge, not a priesthood.",
      "Reward can escalate if it sits. Validation-neighborhoods take blind slices. Volunteer role, not a class of people.",
      "Bigger work is a graph of small ones. Farming a 3-minute task is expensive because F exists.",
    ],
  },
  merchant: {
    title: "What a shop sees",
    kicker: "Emergent Product",
    formula: "EP = XP × L",
    lines: [
      "You do not have to work for the shop. CT is not mopping their floors. It is whether this door can count on you. Regular groceries. A pattern they can order stock against. A node of demand. Shopping five stores at random, boom weeks and ramen weeks, is higher entropy for that house. Do what you want. Random is allowed. Random is just a worse L here.",
      "Three standings, not one pile. XP is global — every closed loop that survived, leaking 0.99ⁿ. Changing how XP works is planetary. Cash-out is a lose-condition; if a room votes that in, they forked. This is not Randall’s engine. He wrote the loop. DFAOs run their rooms. CT is this community. This DFAO can vote how CT is scored inside this room. That vote does not rewrite CT next door. L is this moment at this till: this-door CT against the house slider. The slider is how much of that CT may count and how much of the ticket the layer may touch. Hand-set or optional auto from this till’s own proofs and load. Either way it writes a vertex. House can override or kill. Domain bands can feed that till as ZKPs — yes or no per instrument — shown to this door. A cheap or greedy slider still writes upward into that house’s own EP and the next fractal.",
      "EP = XP × L, born and burned in the same sale. Early mesh: a penny, maybe five cents off. That is the point. It is supposed to start small. As the same people keep closing loops here, and as neighboring DFAOs start signing each other’s books, L rises because this door actually knows you. Habits can become modifiers later — walk vs Hummer — if a DFAO votes that into their L. Day one is not a carbon priesthood.",
      "Cash skipped the old barter trap — the blacksmith who does not need your wheat today. Then cash became the thing people extract. This layer is the trade math without a matching want, and without a pile you can farm. Fiat still rings the rest until the mesh is dense enough that the layer can clear what you owe. Obsolete fiat is an attractor after that, not a year-one switch. Fridge does not lock. A house that juices L to harvest standing is farming; F, contest, and late burn still apply.",
    ],
  },
} as const;

export const engineGame = {
  kicker: "The game",
  title: "It's just a UI for your life",
  lead: "Picture what's on paper as a game that's going worldwide. You can log on through the internet you already have. That's not the only way, and it's not the correct way. Correct way: a cheap laptop, clone the repo, you're a node. Somebody else does the same thing. Nearby, you talk node to node — you don't even have to go through the internet. The internet is there so you can reach people who aren't next door. ZKPs talk to each other. That's the client. This website is not that network.",
  why: "This is a game. The world already runs on unintended consequences. No special risk here. You don't need the whole object. You need the part for your seat. Other people check it. Then more people talk. Then more people do it. Play it on the life you're already living.",
} as const;

export const engineSignal = {
  kicker: "SignalFlow",
  title: "You do not score yourself",
  lead: "SignalFlow is one layer. It is not the Engine. LocalFlow is one face. It is not the Engine. The protocol you talk to is your assistant — ChatGPT, Claude, Gemini, or a model on your own box — plus your PSLL plus the network. That is how a claim gets packaged.",
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
  zkp: "The DID is the name. A ZKP is what you show — not the file. Prove one question: 21 or not, band ≥ n, confirmed this loop, not slashed, unique in this room. The till gets yes or no. Not your diary. Not the XP pile. ZKP circuits are not in Codex v2.1. 2.1 is the current Codex. Today the handshake is signatures. Same job, thinner proof later.",
  points: [
    { t: "On the box", d: "Keys, PSLL, postgres if you run the full stack — stay local. Do not punch the database at the WAN. You pull git. Nobody remote-admins you unless you handed them the key." },
    { t: "On the wire", d: "LAN talks node to node. WAN is TLS. Handshake is a signed hello plus capabilities. One captured node can lie about its own claims. It cannot quietly rewrite a neighbor's DAG. Other nodes check signatures and causal parents." },
    { t: "Sybil", d: "did:key is cheap on purpose. KYC is not the defense. Standing costs work. A new DID has no XP, no IT, no vote weight. Unique-in-DFAO ZKP is how one person does not vote fifty times in the same room. F punishes farmed loops." },
    { t: "Fake work", d: "Both edges have to agree. Evidence hangs on the vertex. Late burn still hits. Repeat-farming is F. A MICRO can puff a lawn. The DAG plus burn is how we live with that — not a speech about honesty." },
    { t: "Looking", d: "A common person can walk the DAG. They cannot do it silently. A look is a vertex. Stalking-shaped bursts can slash. Tills still get yes/no." },
  ],
  today: "Neighborhood-app writes did:key on first boot. Handshake is HTTPS + signatures, not production P2P. ZKP circuits are not in Codex v2.1.",
} as const;

export const engineWire = {
  kicker: "The pipe",
  title: "TCP is fine. Gossip-as-truth is not.",
  lead: "Don't invent ExtropyTCP. Packets already move. Web3 reinvented discovery, identity, and a global shout. That's not this pattern.",
  points: [
    { t: "Pipe", d: "TCP or QUIC. HTTPS today. libp2p + Noise later if it helps the handshake. Still a pipe. Not a new Layer 4." },
    { t: "LAN first", d: "Next door talks node to node. No DHT for neighbors. The internet is for people who aren't next door." },
    { t: "Proof", d: "ZKP on the wire. Diary on disk. The till gets yes or no. Not the file." },
    { t: "Looking", d: "A fetch is a vertex. Silent GET is a detectable act. That's not HTTP's default. That's the overlay." },
    { t: "Truth", d: "Causal DAG. Both edges agree. Not a lottery for a block. Not gossip as consensus." },
  ],
  today: "Sandbox handshake: HTTPS + Ed25519 signed JSON. Hello, capabilities, DAG replay, heartbeat. No DHT. No NAT magic.",
} as const;

export const engineFilm = {
  kicker: "The schematic",
  title: "Entropy economics",
  lead: "Seven minutes. Consensus vs coherence. The mint. Yes or no at the door. 0.99ⁿ. Watch it here. This is not a paper. Not a podcast.",
  src: "/video/entropy-economics.mp4",
  poster: "/video/entropy-economics.jpg",
  duration: "7:13",
} as const;

export const engineNotThat = {
  kicker: "Not a panopticon",
  title: "This domain is not the Engine",
  lead: "extropyengine.com is a website. Papers, a clock face, an RSS feed. Hostinger is not a node. The Engine is the git you clone onto a laptop. Keys stay on that laptop.",
  zkpKicker: "Yes or no. Not the license.",
  zkpLead:
    "The bartender needs one fact: old enough, or not. Handing him the license is the wrong machine. Birthday, street, photo, name. He does not need any of that. A zero-knowledge proof is the door asking one question and getting one bit back. The diary stays in the pocket.",
  chip:
    "Same shape as a password check that never sends the password. The till does not get a copy of your life. It gets allowed, or it does not. That is the whole trick. Notebooks that turn this into “chip versus photocopy” are mixing two objects. Drop that line. The door is enough.",
  loopTitle: "The door — five people, one question",
  loop: [
    {
      t: "You",
      d: "Hold the license. Diary stays in the pocket. Birthday, street, photo, name never leave your side.",
    },
    {
      t: "Your phone",
      d: "Looks at the license on YOUR side. Does not upload the ID. Answers one question. 21, or not.",
    },
    {
      t: "The till",
      d: "The bartender's device. Asks: 21? Gets yes or no. Not the birthday. Not the street. Not the photo. Not a copy of the license.",
    },
    {
      t: "The book",
      d: "The DAG. Records that a check happened at this door. Not a filing cabinet of everyone who walked in.",
    },
    {
      t: "Later lookers",
      d: "Health inspector, a cop, a nosy neighbor, an AI hunting a closer. They can see that checks happened. If they want WHO, that look writes a line. You find out someone went hunting. Silent peeking is a detectable act.",
    },
  ],
  photocopy:
    "The panopticon version of the same door: you hand over the wallet. They copy the license. They file it in a city cabinet. Anyone with a badge opens the drawer. You never know who looked. That is a surveillance state. This is a yes or no at the door.",
  close:
    "A panopticon is one tower that can see every diary. A surveillance state is a central log you cannot opt out of. This has neither. The PSLL is a file on your disk. The network sees a proof — yes or no — not the file, not the photos, not last year. Looking at a graph writes a vertex; a silent fetch is a detectable act. did:key on first boot, no registrar. Node to node on the LAN. Internet for people who aren't next door. That is not a watchtower with extra vocabulary. Treating a ledger you hold as a camera pointed at you is the category error.",
} as const;

const P = "https://github.com/00ranman/extropy-engine/tree/main/packages";

export const engineStack = {
  kicker: "The git",
  title: "One repo. That's the Engine.",
  lead: "github.com/00ranman/extropy-engine. Faces on this page. SignalFlow packages the claim. The kernel mints. Same loop everywhere: post, do, confirm. Packages are skeletons. Contracts are the truth. Clone it.",
  groups: [
    {
      heading: "Faces",
      items: [
        { name: "LocalFlow", d: "Errands. Rides, groceries, the car you don't have. Matchmaking. Silent DAG emission.", href: `${P}/localflow` },
        { name: "HomeFlow", d: "Household / building. IoT, chores, rooms. Thermodynamic measurement of the place you live.", href: `${P}/homeflow` },
        { name: "Quest market", d: "2–5 minute grain. Escalation if it sits. Default operational primitive.", href: `${P}/quest-market` },
        { name: "GrantFlow", d: "Discovery (Grants.gov) plus proposer. Same loop, different input.", href: `${P}/grantflow-discovery` },
        { name: "LevelUp Academy", d: "Adaptive learning. Skill progression. XP on entropy-reducing study, not a grade mill.", href: `${P}/levelup-academy` },
        { name: "Extropialingo", d: "Language learning as loops.", href: `${P}/extropialingo` },
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
        { name: "token-economy", d: "XP, CT, CAT, IT, EP. Records and meters. Influence cannot be purchased with XP. DT wallet slot is leftover.", href: `${P}/token-economy` },
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
  { code: "SETTLED", note: "Moves from provisional to standing. Still burnable later. XP is not spent. Access economy. Decay is already eating it." },
  { code: "BURNED", note: "A later verdict on that vertex. Same machine as late mint, the other way. Ordinary remaining pile after decades is dust. See the 0.99ⁿ note." },
] as const;

export const engineDecay = {
  kicker: "Think it through",
  title: "What 0.99ⁿ actually does",
  lead: "1% of what is left, about every 30 days. Not 1% of the original. Remaining after n months is 0.99ⁿ. Half-life ≈ 69 months. It never hits zero in the reals. That is a map seam, not a fuse.",
  rows: [
    { t: "~1 year", d: "≈ 89% of that mint still there" },
    { t: "~5.8 years", d: "half-life. ≈ 50%" },
    { t: "~8 years", d: "≈ 38%" },
    { t: "~20 years", d: "≈ 9%" },
    { t: "~30 years", d: "≈ 2.7% — dust of the original mint" },
  ],
  body: [
    "The long-horizon mechanism that still has weight is late mint, not late burn of a lawn. An ordinary loop, thirty years on, has leaked to a sliver. Clawing that sliver is a bookkeeping mark on a vertex. It is not a punishment that still moves a life.",
    "Late mint is the same machine going the other way: new evidence, citation-gated, a later huge ΔS — a student who becomes a Nobel, someone who actually fixes a broken piece of the world — can still write a delta into the original vertex. That is when thirty years later still matters. You get the delta of the proxy, not a second full paycheck, and only along asserted edges.",
    "Late burn of that same later-revealed harm is the symmetric case. It slashes remaining dust plus whatever new delta sat on that citation. It is not a time machine emptying the wallet. It does not reach back and un-mow the common. Treating “XP can be taken away in 30 years” as the headline, without the mint direction and without the 0.99ⁿ curve, is not the logistics.",
  ],
} as const;

export const engineTokens = [
  { t: "XP", d: "Global standing. The letters are XP. ΔS is the reduction. XP is the proxy on the ledger. You do not spend it. Access economy. Decays ~1%/month of remaining." },
  { t: "CT", d: "Community standing. This DFAO / this door. What you put in here. Feeds L. Not purchased with XP." },
  { t: "L", d: "Literal standing at this till. This-door CT against the house slider. Optional auto from this till’s proofs. Domain bands as ZKPs to this door." },
  { t: "EP", d: "Till spark. Emergent Product. EP = XP × L at the register, then it burns. Starts as pennies off. Not a currency. Not a bag." },
  { t: "CAT", d: "Skill record. Unique. Lane + level + issuer. Are you qualified to do this, and at what level. Not a pile." },
  { t: "IT", d: "Influence standing. Meter. Governance and demonstration weight more. Idle leak ~5%/month. Not Insight Token. Not a bag." },
  { t: "Lane", d: "Skill specialization on a signed record. Not a Domain Coin. Domain (the eight instruments) is an enum. Claiming a lane is a vertex, not a dropdown." },
] as const;

export const engineMath = {
  kicker: "If you care about the math",
  title: "Most people never see this",
  lead: "You post. Someone does it. You tap done. That is the product. The formula is for the people who want to know what the mint is claiming. Skip it if you came for a ride.",
  formula: "XP = R × F × ΔS × (w · E) × log(1/Tₛ)",
  floor:
    "Floor: XP ≥ ΔS / cₗ². Irreducible form — a compression of the mint above, same job as E = mc² next to the full energy-momentum relation. Not the theory. Not a new physics law. Glossary has the line.",
  source: "packages/xp-formula — canonical v3.1.2. Reputation never enters this formula. Tₛ is a slam window with a Δt cap; standing leak is 0.99ⁿ.",
  terms: [
    { t: "R", d: "Rarity. Scarcity / base difficulty of this action class. Property of the loop, not the person. Not reputation." },
    { t: "F", d: "Frequency of Decay. Repeating the same class pays less. 1.0 the first time. Not falsifiability (that is script-ℱ)." },
    { t: "ΔS", d: "Verified entropy reduction. Must be > 0. The proxy. Not XP." },
    { t: "w · E", d: "Weighted emergence. Dot product of the eight-domain weight vector and this loop’s effort vector. The English is the song line. The mint is the product. Not a fifth letter." },
    { t: "Tₛ", d: "Slam window, not recency. Tₛ = exp(−λ min(Δt, Δt_cap)). Instant close → log = 0 → XP = 0, on purpose. Cap Δt so stalling is not a mint. Standing leak is 0.99ⁿ, a different clock." },
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
    "A closed loop can still mint later. That is the long-horizon mechanism with weight: a later huge, cited ΔS — Nobel, a society-scale fix — writes a delta into the original vertex. Ordinary remaining pile at thirty years is ≈ 2.7% of that mint. Late burn of that dust is a mark on a vertex, not a sword. Settled is not sacred. The graph is allowed to catch up.",
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
    name: "Node handshake",
    note: "Two machines talk. Signed hello, capabilities, DAG replay, heartbeat. HTTPS + signatures today. Not production P2P.",
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
    name: "Node kit",
    note: "Plug-in node, PSLL, optional sensor. For-profit. Not shipping. If you can clone, you do not need the box.",
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
    title: "Extropy Codex v2.1",
    href: "/docs/Extropy_Codex_v2.1_Comprehensive.pdf",
    note: "Most recent signed Codex. Comprehensive Edition — F = Frequency of Decay, script-F = Falsifiability. canonical-v3.12, protocol v0.2 (August 2026)",
  },
  {
    title: "Working Formula Sheet",
    href: "/docs/Extropy_Engine_Formula_Sheet.pdf",
    note: "Working lock — records, meters, till spark. Tₛ is the slam window, not recency. Three clocks.",
  },
  {
    title: "Neighborhood MESO",
    href: "/hoa",
    note: "HOA-shaped wrapper on the Engine. One command, you are a node. Jobs → confirm → XP.",
  },
  {
    title: "Capture notes (not a Codex)",
    href: "/docs/CODEX_3_NOTES.md",
    note: "Unsigned working notes for a later edition. Not published. Not newer than 2.1. 2.1 is the current Codex.",
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
