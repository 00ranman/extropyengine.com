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
        a: "An audit loop. A UI for the life you're already living. Faces: LocalFlow, HomeFlow, quests, GrantFlow, shops. SignalFlow packages the claim. The kernel mints. If it is in the git, it is in the process. Cheap laptop, clone the repo, you're a node. Not a coin you buy. Not a church. Not two apps.",
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
      {
        id: "hosted",
        q: "Is the Extropy Engine hosted on extropyengine.com?",
        a: "No. That's a website. Papers, a clock face, an RSS feed. Hostinger is not a node. The Engine is the git you clone onto a laptop. Keys stay on the box. Nearby, node to node. Internet is for people who aren't next door.",
        also: [
          { label: "This domain is not the Engine", href: "/#not-a-panopticon" },
          { label: "The node", href: "/#node" },
        ],
      },
      {
        id: "panopticon",
        q: "Isn't this just a panopticon? A surveillance state with extra steps?",
        a: "No. A panopticon is one tower that can see every diary. A surveillance state is a central log you cannot opt out of. This has neither. The PSLL is a file on your disk. The network sees a proof — yes or no — not the file, not the photos. Looking writes a vertex. A silent fetch is a detectable act. did:key on first boot, no registrar. Node to node on the LAN. That is a ledger you hold, not a camera pointed at you.",
        also: [
          { label: "Not a panopticon", href: "/#not-a-panopticon" },
          { label: "Digital Autarky", href: "/glossary", hash: "digital-autarky" },
        ],
      },
      {
        id: "game",
        q: "This is untested. Why throw a ledger at the world?",
        a: "Because this is a game. There's no special risk here. We live in a world built on unintended consequences. I don't get why people are so against throwing this ledger out there. You can log on through the regular internet. Correct way is a cheap laptop, clone the repo, you're a node. Next person does the same. Nearby you talk node to node. Internet is for people who aren't next door. ZKPs talk to each other. The hurdle is the campaign — big-brain thing, a lot of parts. You get the part for your seat. Other people check it. They go, oh, this is okay. Then more people talk. Then more people do it. Why not play the game on top of the life you're already living?",
        also: [
          { label: "Engine — the game", href: "/#engine" },
          { label: "UI for your life", href: "/glossary", hash: "ui-for-your-life" },
        ],
      },
    ],
  },
  {
    heading: "The mint vs the slogan",
    items: [
      {
        id: "xp-name",
        q: "XP means Extropy Points, right? Or experience points?",
        a: "The letters are XP. That is the name. Not Extropy Points. Not a branded expansion of experience points. You can hear “experience points” in a 1:1 life-to-game translation. That is a rhyme, not the definition. ΔS is the entropy reduction. XP is the proxy of that ΔS on the ledger — bits-equivalent — so like-cases can be compared. Saying XP “is” entropy reduction skips the proxy.",
        also: [
          { label: "XP", href: "/glossary", hash: "xp" },
          { label: "ΔS vs XP", href: "/glossary", hash: "delta-s-vs-xp" },
        ],
      },
      {
        id: "ep-name",
        q: "EP is Emergent Points, right? Or Epistemic Proof?",
        a: "Emergent Product. At the till: EP = XP × L. L is a fraction from standing, how often you actually patronize this place, local mesh, domains in play. May discount the fiat ticket. Not a currency. Not Epistemic Proof — that is a proof-layer token, letter collision, does not buy milk. “Points” oversold a punch-card. Product is the math: XP times L. The math of L is not frozen; it has been through iterations.",
        also: [
          { label: "Emergent Product", href: "/glossary", hash: "emergent-product" },
          { label: "Tokens", href: "/#tokens" },
        ],
      },
      {
        id: "cat-ct-it",
        q: "What are CAT, CT, and IT?",
        a: "CAT is Category: skills. Closer to an NFT than a fungible pile — is this person qualified to do this, and at what level. CT is Contribution Token: standing, reputation that is not a vibe. Feeds L at the till. IT is Influence Token, not Insight Token. Governance and demonstration work weights more. Obscure private labor still mints XP; it does not mint the same IT unless influence is the job. Everyone has some say. People who work that domain accrue more. IT decays ~5%/month if you vanish.",
        also: [
          { label: "CAT", href: "/glossary", hash: "cat" },
          { label: "CT", href: "/glossary", hash: "ct" },
          { label: "IT", href: "/glossary", hash: "it" },
          { label: "Tokens", href: "/#tokens" },
        ],
      },
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
        id: "observer-effect",
        q: "Weaponized Transparency — isn’t that the observer effect? Quantum?",
        a: "No. That reading is not in the work. Schrödinger’s cat was a reductio: apply the quantum recipe to a cat and you get an absurdity. That was the point. Quantum does not apply to the macro. The pop-sci version — I heard a spooky thing on The Big Bang Theory, this lyric says observation, therefore quantum — is a rhyme, not an argument. The lyric is talking about systems while fucking with them. Watching becomes ammunition in the ordinary sense: institutions, metrics, cameras, the song. Not ħ. Not collapse. If a narrator opens there, they invented a thesis and hung it on the author. The author does not think that way. The inference is theirs.",
        also: [
          { label: "Observer effect", href: "/glossary", hash: "observer-effect" },
          { label: "Weaponized Transparency", href: "/glossary", hash: "weaponized-transparency" },
        ],
      },
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
          { label: "0.99ⁿ", href: "/#decay" },
        ],
      },
      {
        id: "burn",
        q: "If the president is later a disaster, can the teacher’s XP be destroyed?",
        a: "Late mint first. Same machine both ways. A later huge ΔS — Nobel, a society-scale fix — can still write a citation-gated delta into the original vertex. That is when decades later still has weight. Late burn of later-revealed harm is the other direction. It slashes remaining dust plus that new delta. It does not empty the wallet. Ordinary XP thirty years on is ≈ 2.7% of the original mint (0.99³⁶⁰). Clawing a lawn from 1996 is bookkeeping. Treating “it can take your XP away in 30 years” as the headline, without the mint direction and without the curve, skips the logistics.",
        also: [
          { label: "Late mint", href: "/glossary", hash: "late-mint" },
          { label: "Late burn", href: "/glossary", hash: "late-burn" },
          { label: "0.99ⁿ", href: "/#decay" },
        ],
      },
      {
        id: "decay",
        q: "1% every 30 days — so it lasts 30,000 days?",
        a: "No. 1% of what is left, each ~30 days. Remaining after n months is 0.99ⁿ. Half-life ≈ 69 months (~5.8 years, half still there). ~8 years ≈ 38%. ~20 years ≈ 9%. ~30 years ≈ 2.7% — dust. It never hits zero in the reals. 30,000 days is the wrong arithmetic. Decay is a leak. Late mint is the long-horizon mechanism that can still move a number, and only for a later huge, cited ΔS. Late burn of ordinary remaining pile is a mark on a vertex, not a sword.",
        also: [{ label: "XP decay", href: "/glossary", hash: "xp-decay" }, { label: "0.99ⁿ", href: "/#decay" }],
      },
      {
        id: "clawback",
        q: "If most of it already leaked, do you claw the old XP back?",
        a: "No. You don’t collect what decay already ate. You mark the vertex BURNED and slash remaining dust. At 30 years that remaining is ≈ 2.7% of the original mint. The DAG does not forget. The wallet does not get a 1996-shaped hole.",
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
        q: "So this is just LocalFlow and SignalFlow?",
        a: "No. Those are two packages. HomeFlow is the household. Quest market is the 2–5 minute grain. GrantFlow is discovery plus proposer. Validation-neighborhoods take blind slices. Identity writes did:key. PSLL is the diary. xp-formula / xp-mint / loop-ledger / dag-substrate are the book. If it is still in github.com/00ranman/extropy-engine/packages, it is still the process. LocalFlow is errands. SignalFlow routes claims. Collapsing the Engine into those two is a reading error.",
        also: [
          { label: "The whole process", href: "/#stack" },
          { label: "GitHub — packages", href: "https://github.com/00ranman/extropy-engine/tree/main/packages" },
        ],
      },
      {
        id: "seven",
        q: "DFAO means max seven people, right?",
        a: "No. Decentralized Fractal Autonomous Organization. Scale labels (NANO → PLANETARY) are suggested rule sets, not membership caps. Seven was a shorthand that leaked as a law. It is not. Same loop at every scale: post, do, confirm. Votes rewrite the room they are cast in. Only PLANETARY hits everybody, and that is supposed to be hard.",
        also: [{ label: "DFAO", href: "/dfao" }],
      },
      {
        id: "hoa-meso",
        q: "Can a neighborhood run this like an HOA?",
        a: "Yes — as a MESO wrapper, not a deed eraser. The Engine is the same. HOA jobs become LocalFlow loops. You install Docker once, run one script, the laptop is a node, the neighborhood DFAO starts SHADOW, confirmed work mints XP. Liens and architectural control stay on the recorded paper until that paper changes.",
        also: [{ label: "Neighborhood MESO", href: "/hoa" }],
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
        also: [{ label: "Emergent Product", href: "/glossary", hash: "emergent-product" }],
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
        a: "Clone the kernel. For the neighborhood app today: git clone, cd packages/neighborhood-app, node server.mjs, open localhost:4016. That's the job board on your machine. Full Engine: Docker Desktop, then the join script. Handshake a peer. You do not wait for a priesthood and you do not wait for seven.",
        also: [
          { label: "GitHub — extropy-engine", href: "https://github.com/00ranman/extropy-engine" },
          { label: "Neighborhood MESO", href: "/hoa" },
          { label: "DFAO", href: "/dfao" },
        ],
      },
      {
        id: "did",
        q: "How do I get a DID? And what stops a bad actor on my node?",
        a: "You don't apply. The node writes a keypair on first boot. That's a did:key — W3C, no registrar, no company. Backup data/keys/node.pem. Lose it and you're a new node. ZKPs are what you show: band, confirmed this loop, unique in this room, not slashed. The till gets yes or no, not your diary. Keys stay on the box. Don't punch the database at the WAN. One captured node can lie about itself; it cannot silently rewrite a neighbor's DAG. Sybil: identity is cheap, standing is not. Unique-in-DFAO stops fifty votes from one person. Looking is a vertex. Today the handshake is signatures. Circuits are Codex 3.",
        also: [
          { label: "The node", href: "/#node" },
          { label: "DID", href: "/glossary", hash: "did" },
          { label: "ZKP reputation", href: "/glossary", hash: "zkp-reputation" },
        ],
      },
      {
        id: "listen",
        q: "Where do I listen / read?",
        a: "Book, papers, and the podcast are on this site. RSS is https://extropyengine.com/podcast/feed.xml. Spotify and YouTube listings exist. Apple still wants a one-time submit at Podcasts Connect — the feed is valid; their banner is not a feed error.",
        also: [
          { label: "Podcast", href: "/podcast" },
          { label: "Lyrics", href: "/lyrics" },
          { label: "Closing the Loop", href: "/papers/closing-the-loop" },
          { label: "Glossary", href: "/glossary" },
        ],
      },
    ],
  },
];
