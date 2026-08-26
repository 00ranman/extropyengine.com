export const hoaPage = {
  title: "Get rid of the HOA",
  kicker: "Neighborhood · in English",
  lead: "They have one dude in a truck and a PDF. That’s the whole empire. One photo, reused three times. That’s not power. That’s a monopoly on the scorebook. We keep our own book. When the book is full of work they didn’t do, they’re a costume. Paper if the vote is there. Attrition if it isn’t. You always have the second.",
} as const;

export const hoaNotLegal =
  "Not a lawyer. In Texas the written neighborhood rules stick to the house until enough owners vote the number in those papers and someone records it at the county. Signing up does not erase that overnight. Keep paying the old dues so they cannot lien you. When you go for the stamp, that’s a real attorney, not a thread.";

export const hoaStory = [
  "You already know the machine. Roster. Dues. Work order. Somebody signs it closed. That’s an HOA. The bug is the somebody: one inspector, one truck, one photo. The roster doesn’t get the pen until next year’s circus.",
  "So we copy the parts people already understand — and we steal the pen.",
  "You register. Name, street, I’m in. Same as joining this group or a rec league. That’s the front door. People want a roster and later a checking account. Fine. We give them one. The difference is the board is not the admin.",
  "A ledger is a scorebook nobody gets to take home and white-out. Decentralized just means that. Every closed work order — grass, beds, lights — is a receipt they don’t own. That pile is the valuable part. Their fine is a screenshot. Our book is the season. Data is power because it’s the only thing they were ever actually selling you: the right to their spreadsheet. We keep ours.",
  "Jobs go on the list like a work order. A neighbor takes it. Other neighbors sign it closed. If it isn’t done, it isn’t in the book. The rule can run itself: if it’s signed, it counts. That’s a smart contract. Not a coin. A work order the clerk can’t lose behind the copier.",
  "Keep writing the old check so they cannot lien the house. That’s protecting the deed while we empty the job jar.",
  "They have the gavel. We have the jobs. That’s the paradox. You don’t beat the paper on day one. You make the office pointless until the paper is arguing with an empty building. Attrition. Fungus. Not eggs.",
] as const;

export const hoaDoors = [
  {
    title: "The paper door",
    body: "Enough owners vote the number in your documents. A lawyer files it. The county stamps it. Official dissolve. Slow. Real. Use it when you have the count.",
  },
  {
    title: "The attrition door",
    body: "We already did the jobs. The scorebook is ours. They’re a bill for a service nobody uses. Legal still says they exist. Function says they don’t. That’s how you beat a monopoly that owns the stamp: you outlast the function. This door is never locked.",
  },
] as const;

export const hoaJobs = [
  { job: "Common grass / landscaping", how: "Work order. A neighbor or a crew takes it. Before and after. Neighbors sign it closed — or they don’t, and it never hits the book." },
  { job: "Lights, gates, fountains", how: "Dead bulb is a job. Buy the part. Sign it closed. No next-quarter packet." },
  { job: "Drainage / trash / bulk pickup", how: "The ditch, the pile, the dumpster. Same list." },
  { job: "Pool / amenity", how: "Whoever actually shows up. Hours on the door are a job, not a vibe." },
  { job: "Neighbor disputes", how: "Fence, parking, noise. Mediate. Both sides sign off. That’s work. Boards hide from it. It still goes in the book." },
  { job: "Vendors they sit on", how: "If a neighbor can do it and it gets signed closed, the vendor theater dies of unemployment." },
  { job: "What stays on their paper — for now", how: "Liens, foreclosure, architectural control in the deed. We don’t cosplay those. Taking the jobs is how the gavel goes quiet. Changing the gavel is the paper door." },
] as const;

export const hoaSmart = {
  title: "The work order that runs itself",
  lead: "You already know a work order. A smart contract is that, with no clerk who can lose it.",
  body: [
    "If the common is signed closed, it hits the book. If it isn’t, it doesn’t. No “next quarter.” No cousin’s landscaper.",
    "If two neighbors sign a light as fixed, the job closes. If they don’t, it stays open. That’s the whole trick.",
    "The rule sits where both sides can see it. Changing it is a vote of the people who registered — not a silent board edit. That’s the ledger. That’s why the data is worth something: it isn’t theirs.",
    "You do not need to care what chain it sits on. You need if-then, and a book they can’t white-out.",
  ],
} as const;

export const hoaSteps = [
  {
    n: "01",
    title: "Register. Take a job this week.",
    body: "Sign the roster. Pick one: the common, a dead light, a bed a teacher can’t get to. Put it on the list. A neighbor takes it. You walk by and sign it closed — or you don’t. That is the group. You do not wait for a lawyer to pull a weed.",
  },
  {
    n: "02",
    title: "Keep paying the old bill.",
    body: "Skip dues and they lien the house. We run next to the dollar. The book tracks who did the work. It does not void the old invoice overnight. Attrition isn’t a stunt. It’s boring on purpose.",
  },
  {
    n: "03",
    title: "Use the rights you already have.",
    body: "Texas already makes them hold open meetings, run elections, and take a petition if they skip the annual meeting. Chapter 209. Your documents say how many owners it takes to change the papers. That’s the paper door. Not a pile-on, and not eggs.",
  },
  {
    n: "04",
    title: "When people trust the book, let the rules bind.",
    body: "Which jobs get posted. How a work order closes. Who holds the checking account. Still not “we filed as the HOA.” We are the ones doing the jobs. The name on the county paper changes when owners change that paper.",
  },
  {
    n: "05",
    title: "A bank account when you need one.",
    body: "Usual machination: a nonprofit so the roster can buy mulch. Wyoming has a DAO-style statute, not Montana. A Texas nonprofit is often simpler because you live here. A checking account is not a magic eraser. Lawyer when you file.",
  },
  {
    n: "06",
    title: "They go when the book is ours.",
    body: "Paper door: vote, lawyer, county. Attrition door: the scorebook is full and their office is empty. Use the first when you have the count. Use the second every week until then. Paradox is the point. You always have the second. Don’t egg the truck. Sign the work order.",
  },
] as const;

export const hoaClone = {
  title: "If you want the software",
  body: "The roster can start on paper. When you want the work orders to close themselves, clone the kernel and run it on a laptop or a cheap server. You do not need that to mow the first common. You need it when the book has to outlive the board.",
  href: "https://github.com/00ranman/extropy-engine",
  docs: [
    { label: "Playbook", href: "https://github.com/00ranman/extropy-engine/blob/main/docs/HOA_DFAO.md" },
    { label: "Articles template", href: "https://github.com/00ranman/extropy-engine/blob/main/docs/articles/NEIGHBORHOOD_DFAO.md" },
    { label: "Bylaws", href: "https://github.com/00ranman/extropy-engine/blob/main/docs/articles/BYLAWS.md" },
    { label: "Run a node", href: "https://github.com/00ranman/extropy-engine/blob/main/docs/VPS_NODE.md" },
  ],
} as const;

export const hoaFb = `They have one dude in a truck and a PDF. That's the whole empire. One photo, reused three times on a senior. A teacher fined for a flowerbed the week school started. That's not power. That's a monopoly on the scorebook.

A ledger is just a scorebook nobody gets to take home and white-out. Decentralized means the board isn't the admin. Every closed job — grass, beds, lights — is a receipt they don't own. That pile is the valuable part. Their fine is a screenshot. Our book is the season. Data is power because it's the only thing they were ever selling you: the right to their spreadsheet. We keep ours.

You register like you joined this group. Jobs like work orders. Neighbors sign them closed. If it didn't happen, it isn't in the book. The rule can run itself: if it's signed, it counts. That's a smart contract. Not a coin. A work order the clerk can't lose behind the copier.

Keep writing the old dues check so they can't lien the house. That's the boring part. The fun part: they have the gavel, we have the jobs. That's the paradox. You don't beat the paper on day one. You empty the job jar until the paper is arguing with an empty building. Attrition. Fungus. Not eggs.

Paper door if enough owners vote and a lawyer stamps it. Attrition door is already unlocked. You always have that one.

Don't egg the truck. Sign up. Take a job. Put it in the book.

https://extropyengine.com/hoa`;
