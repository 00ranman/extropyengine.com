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

/** Top bar stays short. Depth lives under Engine / Music / Papers. */
export const primaryNav: readonly NavItem[] = [
  {
    label: "Engine",
    href: "/how-it-runs",
    children: [
      { label: "How it runs", href: "/how-it-runs" },
      { label: "Call / build", href: "/build" },
      { label: "Start here", href: "/start" },
      { label: "Web3", href: "/web3" },
      { label: "Clone a node", href: "/web3/node" },
      { label: "The loop", href: "/web3/loop" },
      { label: "Identity", href: "/web3/identity" },
      { label: "Governance", href: "/web3/governance" },
      { label: "Tokenomics", href: "/tokenomics" },
      { label: "Math", href: "/math" },
      { label: "Letter key", href: "/key" },
      { label: "Defaults", href: "/defaults" },
      { label: "Docs", href: "/docs" },
      { label: "Open problems", href: "/open-problems" },
      { label: "FAQ", href: "/faq" },
      { label: "Glossary", href: "/glossary" },
      { label: "DFAO", href: "/dfao" },
      { label: "Charter", href: "/charter" },
      { label: "Try it", href: "/mvt" },
      { label: "Universal Times", href: "/universaltimes" },
      { label: "HOA", href: "/hoa" },
      { label: "Sunset Oaks", href: "/hoa/sunset-oaks" },
      { label: "Connect", href: "/#follow" },
    ],
  },
  { label: "Book", href: "/book" },
  {
    label: "Papers",
    href: "/papers",
    children: [
      { label: "All papers", href: "/papers" },
      { label: "Closing the loop", href: "/papers/closing-the-loop" },
      { label: "Liquidity paper", href: "/papers/liquidity-and-decay" },
    ],
  },
  {
    label: "Music",
    href: "/music",
    children: [
      { label: "Albums & singles", href: "/music" },
      { label: "Lyrics", href: "/lyrics" },
      { label: "Podcast", href: "/podcast" },
      { label: "Research Pod", href: "/research-pod" },
      { label: "Redacted", href: "/redacted" },
    ],
  },
  { label: "Docs", href: "/docs" },
] as const;

// NOTE: remainder of site.ts content follows in companion commit — DO NOT SHIP THIS STUB
export const book = { title: "", tagline: "", byline: "", description: "", pdf: "", epub: "", audio: "", tip: "", cover: "" } as const;
export const spotifyArt = (hash: string) => `https://i.scdn.co/image/ab67616d0000b273${hash}`;
export type MusicLinks = { spotify: string; apple: string; youtube: string };
export type Album = { year: number; title: string; tracks: number; blurb: string; art: string; links: MusicLinks; kind?: "album" | "ep" };
export const albums: Album[] = [];
export type Single = { year: number; title: string; desc: string; art: string; links?: MusicLinks; src?: string };
export const singles: Single[] = [];
export const artistLinks = [] as const;
export type Paper = { tag: string; title: string; href: string; academia?: string };
export const papers: Paper[] = [];
export const earlierEditions: Paper[] = [];
export type AppStatus = "live" | "dev" | "concept";
export const engineViews = { consumer: { title: "", kicker: "", lines: [] as string[] }, house: { title: "", kicker: "", lines: [] as string[] }, quests: { title: "", kicker: "", lines: [] as string[] }, merchant: { title: "", kicker: "", formula: "", lines: [] as string[] } } as const;
export const engineGame = { kicker: "", title: "", lead: "", why: "" } as const;
export const engineSignal = { kicker: "", title: "", lead: "", steps: [] as string[], privacy: "" } as const;
export const engineNode = { kicker: "", title: "", lead: "", did: "", zkp: "", points: [] as { t: string; d: string }[], today: "" } as const;
export const engineWire = { kicker: "", title: "", lead: "", points: [] as { t: string; d: string }[], today: "" } as const;
export const engineFilm = { kicker: "", title: "", lead: "", src: "", poster: "", duration: "" } as const;
export const engineNotThat = { kicker: "", title: "", lead: "", zkpKicker: "", zkpLead: "", chip: "", loopTitle: "", loop: [] as { t: string; d: string }[], photocopy: "", close: "" } as const;
export const engineStack = { kicker: "", title: "", lead: "", groups: [] as { heading: string; items: { name: string; d: string; href: string }[] }[] } as const;
export const engineLoop = [] as const;
export const engineDecay = { kicker: "", title: "", lead: "", rows: [] as { t: string; d: string }[], body: [] as string[] } as const;
export const engineTokens = [] as const;
export const engineMath = { kicker: "", title: "", lead: "", formula: "", floor: "", source: "", terms: [] as { t: string; d: string }[], body: [] as string[] } as const;
export const engineDag = { kicker: "", title: "", lead: "", points: [] as string[] } as const;
export const engineGit = [] as const;
export const socials = [] as const;
export const docsIndex = [] as const;
export const earlierDocs = [] as const;
export const docsPages = [] as const;
export const docsFiles = [] as const;
export const docsPapers = [] as const;
