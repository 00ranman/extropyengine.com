export const hoaPage = {
  title: "Do the HOA’s jobs",
  kicker: "Neighborhood · in English",
  lead: "You already pay them. Then you still mow, still call about the light, still mediate the fence. The takeover is not a riot and it is not a new board with the same minutes. It is taking every job they are supposed to do, doing it, and having neighbors confirm it actually happened. When that is the thing that keeps the place running, the association is a leftover bill.",
} as const;

export const hoaNotLegal =
  "Not legal advice. In Texas the written neighborhood rules (the declaration / CC&Rs) stick to the house until owners vote the percentage in that document and record it at the county. Starting a new group does not erase that. Keep paying dues so they cannot lien you. Talk to a Texas property lawyer before anyone tries to change the paperwork.";

export const hoaJobs = [
  { job: "Common grass / landscaping", how: "Post the mow. A neighbor or a crew takes it. Photos before and after. Neighbors confirm it is done. If it is not done, it does not count." },
  { job: "Lights, gates, fountains", how: "Dead bulb is a job. Someone buys the part, puts it in, confirms. Same for a stuck gate. No waiting for the next board packet." },
  { job: "Drainage / trash / bulk pickup", how: "The ditch, the pile, the dumpster that never got swapped. Post it. Do it. Confirm it." },
  { job: "Pool / amenity open-and-close", how: "Whoever actually shows up. Hours on the door are a job, not a vibe." },
  { job: "Neighbor disputes", how: "Fence, parking, noise. Mediate. Confirm both sides signed off. That is work. It is also the thing boards hide from." },
  { job: "Vendors the board sits on", how: "If a neighbor can do it cheaper and it gets confirmed, the vendor theater dies of unemployment." },
  { job: "What we do not grab yet", how: "Liens, foreclosure, architectural control written into the deed. Those stay with the recorded paperwork until a real vote changes it. Taking the jobs is not stealing the gavel." },
] as const;

export const hoaSmart = {
  title: "Smart contracts, in English",
  lead: "A smart contract is not a coin and it is not a personality. It is a rule that runs itself.",
  body: [
    "If the common is confirmed mowed, credit posts. If it is not confirmed, nothing posts. No “we’ll discuss it next quarter.” No treasurer who likes their cousin’s landscaper.",
    "If two neighbors confirm a light is fixed, the job closes. If they don’t, it stays open. That is the whole trick.",
    "The rule lives on a computer both sides can check. Changing the rule is a vote in this neighborhood group — not a silent board edit.",
    "You do not need to understand Ethereum. You need to understand if-then. The software is how we stop arguing about whether the work happened.",
  ],
} as const;

export const hoaSteps = [
  {
    n: "01",
    title: "Start doing the jobs this week.",
    body: "Pick one: the common, a dead light, the ditch. Put it on a list. A neighbor takes it. You walk by and say yes, that is done — or no, it is not. That is the group. You do not wait for seven people, a lawyer, or a Wyoming filing.",
  },
  {
    n: "02",
    title: "Keep paying the HOA bill.",
    body: "Skip dues and they lien the house. We run next to the dollar, same as at the grocery. The new group tracks who actually did the work. It does not void the old bill overnight.",
  },
  {
    n: "03",
    title: "Use the rights you already have.",
    body: "Texas already makes them hold open meetings, run elections, and take a petition if they skip the annual meeting (Property Code Chapter 209). Read your neighborhood’s own documents for how many owners it takes to change the rules. That number is how the paperwork eventually moves. Not a Facebook pile-on.",
  },
  {
    n: "04",
    title: "When people trust the list, let the rules bind.",
    body: "Which jobs get posted. How confirmation works. Who runs the little computer. Still not “we are the HOA.” We are the ones doing the jobs. The HOA is still the name on the county paper until owners change that paper.",
  },
  {
    n: "05",
    title: "Bank account later, if you need one.",
    body: "Wyoming is the state with a DAO-style law — not Montana. A nonprofit version (DUNA) fits a neighborhood better than a for-profit LLC. A plain Texas nonprofit is often simpler because you live here. That is a checking account and some liability protection. It does not kill the old rules by itself. Lawyer. Not a weekend Discord.",
  },
  {
    n: "06",
    title: "They become irrelevant when they have no jobs left.",
    body: "If we mow, light, drain, mediate, and open the amenity — and it is confirmed — they are a fee with no function. That is the takeover. If enough owners later vote the percentage in the documents, a lawyer records the change at the county. If they never vote, you still kept the place. They can keep sending invoices until it looks stupid.",
  },
] as const;

export const hoaClone = {
  title: "If you want the software",
  body: "The neighborhood list can start on paper. When you want the if-then rules to run themselves, clone the kernel and start a node on a laptop or a cheap server. You do not need that to mow the first common.",
  href: "https://github.com/00ranman/extropy-engine",
  docs: [
    { label: "Playbook", href: "https://github.com/00ranman/extropy-engine/blob/main/docs/HOA_DFAO.md" },
    { label: "Articles template", href: "https://github.com/00ranman/extropy-engine/blob/main/docs/articles/NEIGHBORHOOD_DFAO.md" },
    { label: "Bylaws", href: "https://github.com/00ranman/extropy-engine/blob/main/docs/articles/BYLAWS.md" },
    { label: "Run a node", href: "https://github.com/00ranman/extropy-engine/blob/main/docs/VPS_NODE.md" },
  ],
} as const;

export const hoaFb = `We're paying dues and then still doing their jobs. That's the whole complaint.

So we just start doing the jobs. Grass. Lights. The ditch. A neighbor takes it. Other neighbors say yeah, that's actually done — or no, it isn't. If it isn't, it doesn't count. No board meeting. No "we'll look at it next quarter."

Keep paying the HOA bill so they can't lien your house. When we're the ones keeping the place running, they're a leftover fee.

Don't egg anybody's truck. Mow the grass.

https://extropyengine.com/hoa`;
