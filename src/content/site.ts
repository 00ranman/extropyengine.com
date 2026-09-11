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
