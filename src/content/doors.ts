export type Door = {
  id: string;
  label: string;
  title: string;
  line: string;
  href: string;
};

export const doors: Door[] = [
  {
    id: "money",
    label: "Money",
    title: "Why reward systems are broken",
    line: "Points, likes, karma, salary, GDP — every metric you were handed can be gamed. This path is what happens if value is anchored to finished work both sides can check.",
    href: "/start/money",
  },
  {
    id: "ai",
    label: "AI",
    title: "Why current AI alignment fails",
    line: "Alignment treats the model as the problem. The systems training it have no coherent definition of useful work. You cannot align to a broken compass.",
    href: "/start/ai",
  },
  {
    id: "governance",
    label: "Governance",
    title: "Why institutions drift",
    line: "Organizations end up optimizing for their own survival instead of the job they were built for. This path is the room-level fix, not a new country.",
    href: "/start/governance",
  },
  {
    id: "physics",
    label: "Measurement",
    title: "What if value is measurable?",
    line: "Not a vibe. Not a vote. Not a market price. This path is the claim that useful work is a drop in disorder you can put evidence under — and argue with later.",
    href: "/start/physics",
  },
];
