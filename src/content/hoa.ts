export const hoaPage = {
  title: "Get rid of the HOA",
  kicker: "Neighborhood · in English",
  lead: "The HOA only works because it’s the only office. One board. One truck. One photo. That’s why a teacher gets fined for a flowerbed the week school starts, and why they can send the same picture three times. We don’t beat that by becoming a meaner board. We become the people who actually do the work. When that is who keeps the place running, they are gone — on paper if the vote is there, in practice if it isn’t. You always have the second door.",
} as const;

export const hoaNotLegal =
  "Not a lawyer. In Texas the written neighborhood rules stick to the house until enough owners vote the number in those papers and someone records it at the county. Signing up for our group does not erase that overnight. Keep paying the old dues so they cannot lien you. When you are ready to change the papers, that’s a real attorney, not a Facebook thread.";

export const hoaStory = [
  "You already know how this machine works. There’s a roster. There’s dues. There’s a work order. Somebody signs it closed. That’s an HOA. The problem is the somebody is one inspector in a truck and the roster doesn’t get a vote until next year’s circus.",
  "So we copy the parts people already understand — and we take the jobs.",
  "You register. Name, street, I’m in this neighborhood. Same energy as joining this Facebook group or a rec league. That’s the “central” bit: a list of who we are, later a checking account so we can buy mulch without Venmo-ing a stranger. People need a front door. We give them one.",
  "Jobs go on a list like a work order. Common grass. Lights. The ditch. Flowerbeds the week school starts. A neighbor takes it. Other neighbors sign it closed. If it isn’t done, it stays open. Nobody invoices you from the driver’s seat.",
  "The rule can run itself: if the work is confirmed, it counts. If it isn’t, it doesn’t. That’s all a smart contract is. Not a coin. A work order that nobody can quietly un-close.",
  "We keep writing the old HOA check so they cannot put a lien on the house. That’s just protecting the deed while we empty their job jar.",
] as const;

export const hoaDoors = [
  {
    title: "The paper door",
    body: "Enough owners vote the number in your neighborhood documents. A lawyer files it. The county stamps it. That’s how you dissolve them the official way. Slow. Real. Use it when you have the count.",
  },
  {
    title: "The work door",
    body: "We already did every job they were supposed to do. Grass, lights, beds, disputes. Neighbors signed the work orders. They have nothing left to “manage.” They’re a bill for a service nobody uses. That’s dissolving them in practice. This door is never locked. If the vote never comes, you still used it.",
  },
] as const;

export const hoaJobs = [
  { job: "Common grass / landscaping", how: "Work order. A neighbor or a crew takes it. Before and after. Neighbors sign it closed — or they don’t, and it stays open." },
  { job: "Lights, gates, fountains", how: "Dead bulb is a job. Buy the part. Sign it closed. No next-quarter packet." },
  { job: "Drainage / trash / bulk pickup", how: "The ditch, the pile, the dumpster. Same list." },
  { job: "Pool / amenity", how: "Whoever actually shows up. Hours on the door are a job, not a vibe." },
  { job: "Neighbor disputes", how: "Fence, parking, noise. Mediate. Both sides sign off. That’s work. Boards hide from it." },
  { job: "Vendors they sit on", how: "If a neighbor can do it and it gets signed closed, the vendor theater dies of unemployment." },
  { job: "What stays on the old paper — for now", how: "Liens, foreclosure, architectural control in the deed. We don’t fake those. Taking the jobs is how we make the gavel irrelevant. Changing the gavel is the paper door." },
] as const;

export const hoaSmart = {
  title: "The work order that runs itself",
  lead: "You already know a work order. A smart contract is that, with no clerk who can lose it.",
  body: [
    "If the common is signed closed, it counts. If it isn’t, nothing counts. No “we’ll discuss it next quarter.” No cousin’s landscaper.",
    "If two neighbors sign a light as fixed, the job closes. If they don’t, it stays open. That’s the whole trick.",
    "The rule sits where both sides can see it. Changing the rule is a vote of the people who registered — not a silent board edit.",
    "You do not need to care what chain it sits on. You need if-then. That’s how we stop arguing about whether the work happened.",
  ],
} as const;

export const hoaSteps = [
  {
    n: "01",
    title: "Register. Take a job this week.",
    body: "Sign the roster. Pick one: the common, a dead light, a bed a teacher can’t get to. Put it on the list. A neighbor takes it. You walk by and sign it closed — or you don’t. That is the group. You do not wait for a lawyer or a Wyoming filing to pull a weed.",
  },
  {
    n: "02",
    title: "Keep paying the old bill.",
    body: "Skip dues and they lien the house. We run next to the dollar. The new roster tracks who did the work. It does not void the old invoice overnight.",
  },
  {
    n: "03",
    title: "Use the rights you already have.",
    body: "Texas already makes them hold open meetings, run elections, and take a petition if they skip the annual meeting. That’s Chapter 209. Read your own documents for how many owners it takes to change the papers. That’s the paper door. Not a pile-on.",
  },
  {
    n: "04",
    title: "When people trust the list, let the rules bind.",
    body: "Which jobs get posted. How a work order closes. Who holds the checking account. Still not “we filed as the HOA.” We are the ones doing the jobs. The name on the county paper changes when owners change that paper.",
  },
  {
    n: "05",
    title: "A bank account when you need one.",
    body: "That’s the usual machination: a nonprofit or an out-of-state DAO-style filing so the roster can buy mulch. Wyoming has that statute, not Montana. A Texas nonprofit is often simpler because you live here. A checking account is not a magic eraser on the old rules. Lawyer when you file. Not a weekend Discord.",
  },
  {
    n: "06",
    title: "They go when they have no jobs left.",
    body: "Paper door: vote, lawyer, county. Work door: we already did the jobs, so the office is empty. Use the first when you have the count. Use the second every week until then. You always have the second. If the vote never comes, they’re still gone in practice. Don’t egg the truck. Sign the work order.",
  },
] as const;

export const hoaClone = {
  title: "If you want the software",
  body: "The roster can start on paper. When you want the work orders to close themselves, clone the kernel and run it on a laptop or a cheap server. You do not need that to mow the first common.",
  href: "https://github.com/00ranman/extropy-engine",
  docs: [
    { label: "Playbook", href: "https://github.com/00ranman/extropy-engine/blob/main/docs/HOA_DFAO.md" },
    { label: "Articles template", href: "https://github.com/00ranman/extropy-engine/blob/main/docs/articles/NEIGHBORHOOD_DFAO.md" },
    { label: "Bylaws", href: "https://github.com/00ranman/extropy-engine/blob/main/docs/articles/BYLAWS.md" },
    { label: "Run a node", href: "https://github.com/00ranman/extropy-engine/blob/main/docs/VPS_NODE.md" },
  ],
} as const;

export const hoaFb = `The HOA only works because it's the only office. One board. One truck. One photo. That's why a teacher gets fined for a flowerbed the week school starts, and why they can hit somebody with the same picture three times.

We don't beat that by becoming a meaner board. We become the people who actually do the work.

You register. Same as joining this group. There's a roster. Later a checking account if we need one. Jobs go on a list like a work order. A neighbor takes it. Other neighbors sign it closed. If it isn't done, it stays open. Nobody invoices you from the driver's seat.

Keep writing the old dues check so they can't lien the house. That's just protecting the deed while we empty their job jar.

Two ways they go. The paper way: enough owners vote, a lawyer files it, the county stamps it. The work way: we already did the grass, the lights, the beds — they have nothing left to manage. That's dissolving them in practice. If the vote never comes, you still used the second door. You always have that door.

Don't egg the truck. Sign up. Take a job.

https://extropyengine.com/hoa`;
