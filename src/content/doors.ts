export type Door = {
  id: string;
  tone: string;
  ink: string;
  label: string;
  title: string;
  line: string;
  href: string;
  next: { label: string; href: string };
};

/** Home + /start. Color is the only maze. */
export const doors: Door[] = [
  {
    id: "till",
    tone: "#c9a227",
    ink: "#1a1408",
    label: "Till",
    title: "Cash still works",
    line: "Points, likes, GDP — gamed. Standing from a closed loop. Pennies off first.",
    href: "/start/money",
    next: { label: "Letters", href: "/key" },
  },
  {
    id: "box",
    tone: "#2dd4bf",
    ink: "#04201c",
    label: "Box",
    title: "The model is not the Engine",
    line: "You cannot align a machine to a compass that only measures engagement.",
    href: "/start/ai",
    next: { label: "Clone it", href: "/mvt" },
  },
  {
    id: "room",
    tone: "#a78bfa",
    ink: "#14081f",
    label: "Room",
    title: "Institutions leak",
    line: "A DFAO is a room that can vote its own CT. It cannot rewrite XP.",
    href: "/start/governance",
    next: { label: "DFAO", href: "/dfao" },
  },
  {
    id: "proxy",
    tone: "#22d3ee",
    ink: "#04161a",
    label: "Proxy",
    title: "ΔS is a proxy",
    line: "Bits-equivalent, versioned mapper, leakage on the claim. Not SI social heat.",
    href: "/start/physics",
    next: { label: "Meter math", href: "/docs/METER-MATH.md" },
  },
  {
    id: "letters",
    tone: "#86efac",
    ink: "#05210f",
    label: "Letters",
    title: "Stop remapping R and F",
    line: "XP, CT, L, EP, CAT, IT. Same alphabet. Different jobs.",
    href: "/key",
    next: { label: "FAQ", href: "/faq" },
  },
  {
    id: "clone",
    tone: "#fb7185",
    ink: "#1a060a",
    label: "Clone",
    title: "This site is not the Engine",
    line: "Laptop. Git. Happy path. Keys stay on the box.",
    href: "/mvt",
    next: { label: "The git", href: "/#engine" },
  },
];
