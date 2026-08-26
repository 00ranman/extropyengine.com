export type FaqLink = { label: string; href: string; hash?: string };

export type FaqItem = {
  id: string;
  q: string;
  a: string;
  also?: FaqLink[];
};

export type FaqSection = {
  heading: string;
  items: FaqItem[];
};

export const faqPage = {
  title: "FAQ",
  kicker: "The attacks, answered",
  lead: "Glossary is the dictionary. This is the argument. Same questions keep showing up in debates — irreducible slogan, glass of water, untested, teacher-to-president, decay that never hits zero. If you came to grade a t-shirt, start here. If you came to run a loop, skip to the last section.",
} as const;

export const faqSections: FaqSection[] = [
  {
    heading: "What this is",
    items: [
      {
        id: "what",
        q: "What is the Extropy Engine?",
        a: "An audit loop. Post work. Someone does it. You confirm. SignalFlow proposes a ΔS. XP mints if the reduction holds. The DAG keeps the receipts. Value is treated as verified entropy reduction across eight domains — a bits-equivalent proxy that is allowed to move when new data lands. Not a coin you buy. Not a church. Not a lab stamp.",
        also: [
          { label: "Engine", href: "/#engine" },
          { label: "Enter", href: "/start" },
        ],
      },
      {
        id: "not-a-coin",
        q: "Is this a cryptocurrency? A religion? A theory of everything?",
        a: "No. XP is not spent and not purchased. Access economy. Decay and late burn can still kill standing XP. Failure conditions are published on purpose. A system that hides those is a religion. This one lists them.",
        also: [{ label: "Open problems", href: "/open-problems" }],
      },
    ],
  },
  {
    heading: "The mint vs the slogan",
    items: [
      {
        id: "formula",
        q: "What is the actual XP formula?",
        a: "XP = R × F × ΔS × (w · E) × log(1/Tₛ). Canonical v3.1.2. Reputation never enters it. That is the thing that runs. R is rarity of the action class, F is frequency-of-decay, ΔS is verified reduction, w · E is the cross-domain vector, Tₛ stops slam-shut farming.",
        also: [{ label: "The mint", href: "/glossary", hash: "xp-formula" }],
      },
      {
        id: "irreducible",
        q: "Then why XP ≥ ΔS / cₗ²? That’s not even usable.",
        a: "Correct. Alone it has no experiment, no mint, no lose-condition. It is the irreducible form — a pedagogical compression of the mint, same job as E = mc² next to E² = (pc)² + (mc²)². Scoring the slogan as if it were the Engine is a category error. Untested is not the same as not physics. The audit loop is the test. The t-shirt is not supposed to survive a calorimeter.",
        also: [{ label: "Irreducible floor", href: "/glossary", hash: "irreducible-floor" }],
      },
    ],
  },
  {
    heading: "Measurement",
    items: [
      {
        id: "not-a-metaphor",
        q: "“This is not a metaphor.” So what is it?",
        a: "Bits-equivalent. A lawn, a fight, a trade deal are treated as information events. Landauer: erasing information has a heat floor. You do not need a frozen joule for “mowed.” You need a stand-in that can drift when new measurements land. Equivocation is on the table: Shannon bits, J/K, and English “order” are not the same object. Constants are what you worship. Proxies move. Physicists who stop at the sentence because they do not want two domains in one line are not the audience. The sentence stays. Sign-off is not a requirement.",
        also: [
          { label: "Not a metaphor", href: "/glossary", hash: "not-a-metaphor" },
          { label: "Bits-equivalent", href: "/glossary", hash: "bits-equivalent" },
        ],
      },
      {
        id: "glass",
        q: "A glass of water is worthless by a stream and priceless in a desert. That’s subjective value. Thermodynamics didn’t change.",
        a: "The trick is isolation. They hold the glass still and move the story, then call the story subjective. Stream vs desert, the coupled system is a different object: body water, time-to-next-source, search cost, a dehydrating organism, who else is dying. That is w · E across domains, not a feeling painted onto unchanged physics. Marginal willingness-to-pay maps an isolated commodity. It does not measure the mesh.",
        also: [{ label: "The glass of water", href: "/glossary", hash: "glass-of-water" }],
      },
      {
        id: "fight",
        q: "How do you measure mediating a fight? Where’s the thermometer?",
        a: "There isn’t one. SignalFlow plus evidence (duration, who confirms, whether it recurs) propose a provisional bits-equivalent. You do not type in a score. The other side of the loop agrees. Then it hits the mint formula. Not a 1/10 validator caste. Not in the canon.",
        also: [{ label: "Bits-equivalent", href: "/glossary", hash: "bits-equivalent" }],
      },
      {
        id: "objective",
        q: "Are you saying there’s no objective reality?",
        a: "There is no view from nowhere. Every measurement is from someone, through an instrument, in a language, under a protocol. “Objective” in practice is intersubjective protocol laundered into furniture. That is not the same as “ΔS is a mood.” Constraint still binds — wreckage, heat, a DAG that will not close — and every bit of that is still from somewhere. The Engine is maps for access, and a loop that can fail in the open.",
      },
    ],
  },
  {
    heading: "“But it hasn’t been tested”",
    items: [
      {
        id: "untested",
        q: "Cute and internally consistent. Hasn’t been tested.",
        a: "For an audit system that exists to keep auditing, that sentence is a catch-22. You cannot show the forest before you plant it. “No websites, so nobody will use a network” is the same move. The composition is what only running it tests. Demanding the composition already be certified before the loop is allowed to exist is how you guarantee it never exists. Pieces (Landauer, DAGs, ZKPs, decay, slash) have been beaten to death in other machines. Two nodes exchanging a packet is the garage. A Nature stamp on a civilization that hasn’t been switched on is the wall.",
        also: [{ label: "Open problems", href: "/open-problems" }],
      },
      {
        id: "sign-off",
        q: "Why not sand the language so physicists will sign off?",
        a: "Because the line is a filter, not a typo. Domain partitions that let someone refuse to think across them are not the audience. Funding-shaped language is how every other stack became inauthentic. This one refuses that box.",
        also: [{ label: "Not a metaphor", href: "/glossary", hash: "not-a-metaphor" }],
      },
    ],
  },
  {
    heading: "Time, credit, death",
    items: [
      {
        id: "teacher",
        q: "A teacher whose student becomes president — doesn’t the graph explode?",
        a: "No. The protocol does not walk the light cone. Late mint is citation-gated: a new vertex has to exist that names causal parents and hangs evidence. No citation, no edge, no XP. Infinite downstream is cosmology, not a query. You get the delta of the proxy, not a second full paycheck. Hop-weight is a Codex 3.0 knob. Do not freeze a fraction.",
        also: [
          { label: "Late mint", href: "/glossary", hash: "late-mint" },
          { label: "Citation-gated", href: "/glossary", hash: "citation-gated" },
        ],
      },
      {
        id: "burn",
        q: "If the president is later a disaster, can the teacher’s XP be destroyed?",
        a: "Yes. Late mint and late burn are the same machine. Direction is symmetric. A ratchet that only adds is a church. No expiry. False late-burn is a claim; it can burn the accuser. Scope is that vertex and citation-gated children, not the person’s whole life.",
        also: [{ label: "Late burn", href: "/glossary", hash: "late-burn" }],
      },
      {
        id: "decay",
        q: "1% every 30 days — so it lasts 30,000 days?",
        a: "No. That is 1% of what is left, not 1% of the original until empty. Remaining is 0.99ⁿ. Half-life ≈ 69 months. It never hits zero in the reals. That’s a map seam, not a fuse. On a machine you pick a dust floor; under it, what’s left can sit in a ZKP access band. 30,000 days is the wrong arithmetic (even the linear reading zeros in ~3,000). Decay is a leak. Late burn is a verdict.",
        also: [{ label: "XP decay", href: "/glossary", hash: "xp-decay" }],
      },
      {
        id: "clawback",
        q: "If most of it already leaked, do you claw the old XP back?",
        a: "No. You don’t collect the 99% that’s gone. You mark the vertex BURNED, slash remaining dust, and drop an access band that sat on that mint. The DAG does not forget because the wallet thinned.",
        also: [{ label: "Late burn", href: "/glossary", hash: "late-burn" }],
      },
      {
        id: "thirty",
        q: "Is the 30-day settle window a law?",
        a: "No. It was a starting number. Could be 5–40. Per-DFAO knob. Late burn has no expiry either way. 5%/month is IT, not XP. XP decay is ~1%/month of remaining.",
      },
    ],
  },
  {
    heading: "The loop",
    items: [
      {
        id: "flows",
        q: "SignalFlow vs LocalFlow?",
        a: "LocalFlow is the errand face: rides, food, groceries, the car you don’t have. Confirmation is the receipt. SignalFlow is the protocol you talk to: your assistant, your PSLL, the network. It proposes ΔS. You never put yourself in for a number. Density in a zone is still the remaining bootstrap — not a validator priesthood.",
        also: [{ label: "Open problems — bootstrap", href: "/open-problems" }],
      },
      {
        id: "seven",
        q: "DFAO means max seven people, right?",
        a: "No. Decentralized Fractal Autonomous Organization. Scale labels (NANO → PLANETARY) are suggested rule sets, not membership caps. Seven was a shorthand that leaked as a law. It is not. Same loop at every scale: post, do, confirm. Votes rewrite the room they are cast in. Only PLANETARY hits everybody, and that is supposed to be hard.",
        also: [{ label: "DFAO", href: "/dfao" }],
      },
      {
        id: "hoa",
        q: "Can this replace an HOA?",
        a: "They have the gavel. We have the scorebook. You register, jobs go on a list, neighbors sign them closed. That book is a ledger they can’t white-out — that’s the valuable part. Keep paying the old dues so they cannot lien you. Paper door: owners vote, lawyer, county. Attrition door: we already did the jobs, so they’re a costume. Paradox. You always have the second. Eggs are not a door.",
        also: [{ label: "Replace the HOA", href: "/hoa" }],
      },
    ],
  },
  {
    heading: "At the till",
    items: [
      {
        id: "milk",
        q: "If I don’t have enough EP, can I still buy milk with cash?",
        a: "Yes. You are still spending dollars. EP is a layer on top of that, not a lock and not a cash table. At purchase, both edges agree on a bits-equivalent estimate (EP = XP × L from the mesh). A vertex settles some of the exchange. The rest still rings in fiat. Low standing means the layer covers less, not that the fridge locks. Cash cannot mint XP.",
        also: [{ label: "Emergent Points", href: "/glossary", hash: "emergent-points" }],
      },
      {
        id: "on-ramp",
        q: "You said no fiat on-ramp. So this replaces money?",
        a: "No. No on-ramp means cash cannot mint XP. People keep spending dollars. The Engine is a tracking layer: bits-equivalent proxies, fine-tuned as like-cases stack, so the ΔS of this kind of exchange gets less wrong. A vertex can settle some of the ticket. That is not EP = this many dollars. Mom-and-pop first. Repeat-farming is F. Keep the other job or don’t.",
        also: [{ label: "Engine — shop view", href: "/#engine" }],
      },
    ],
  },
  {
    heading: "Run it",
    items: [
      {
        id: "start",
        q: "How do I actually start?",
        a: "Clone the kernel. Compose up. Close a loop. Handshake a peer. Post work in a zone. That is already a DFAO. NANO is one person. You do not wait for a priesthood and you do not wait for seven.",
        also: [
          { label: "GitHub — extropy-engine", href: "https://github.com/00ranman/extropy-engine" },
          { label: "DFAO", href: "/dfao" },
        ],
      },
      {
        id: "listen",
        q: "Where do I listen / read?",
        a: "Book, papers, and the podcast are on this site. RSS is https://extropyengine.com/podcast/feed.xml. Spotify and YouTube listings exist. Apple still wants a one-time submit at Podcasts Connect — the feed is valid; their banner is not a feed error.",
        also: [
          { label: "Podcast", href: "/podcast" },
          { label: "Closing the Loop", href: "/papers/closing-the-loop" },
          { label: "Glossary", href: "/glossary" },
        ],
      },
    ],
  },
];
