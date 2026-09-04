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

export const doors: Door[] = [
  {
    id: "till",
    tone: "#8b6914",
    ink: "#3d2a12",
    label: "Shops",
    title: "What changes at the register",
    line: "You still pay cash. If you show up here regularly, a little of the ticket can clear on standing. Starts as pennies. You cannot cash standing out.",
    href: "/start/money",
    next: { label: "What the letters mean", href: "/key" },
  },
  {
    id: "box",
    tone: "#3d6b5c",
    ink: "#1c2e28",
    label: "Software",
    title: "Why the model is not the product",
    line: "A model that only optimizes clicks has no definition of useful work. This protocol gives it closed loops to score against, on your machine.",
    href: "/start/ai",
    next: { label: "Run it", href: "/mvt" },
  },
  {
    id: "room",
    tone: "#5c4a7a",
    ink: "#2a2038",
    label: "Rooms",
    title: "How a community runs itself",
    line: "A DFAO is a room. It can vote how community standing works inside that room. It cannot change how global standing is minted. It cannot cash standing out.",
    href: "/start/governance",
    next: { label: "DFAO page", href: "/dfao" },
  },
  {
    id: "proxy",
    tone: "#3a6a74",
    ink: "#1a2c30",
    label: "Measurement",
    title: "What we are actually counting",
    line: "ΔS is a measured drop in disorder for one job, converted so different jobs can sit on one graph. It is an estimate with a paper trail. It is not a physics diploma.",
    href: "/start/physics",
    next: { label: "Instead of their markets", href: "/instead" },
  },
  {
    id: "letters",
    tone: "#4a6b48",
    ink: "#1e2c1c",
    label: "Letters",
    title: "What XP, CT, L, and EP mean",
    line: "XP is global standing from finished work. CT is standing at this shop. L is standing on this ticket. EP is XP times L and it burns when you check out.",
    href: "/key",
    next: { label: "Questions", href: "/faq" },
  },
  {
    id: "clone",
    tone: "#7a4a42",
    ink: "#2e1c1a",
    label: "Run it",
    title: "This website is not the Engine",
    line: "The Engine is a program you clone onto a laptop. Keys stay on that laptop. This site is the manual.",
    href: "/mvt",
    next: { label: "Engine section", href: "/#engine" },
  },
];
