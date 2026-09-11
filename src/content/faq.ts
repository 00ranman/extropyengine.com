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
  lead: "First: ΔS is a proxy that updates. Constants in physics were proxies too. Then the rest of the attacks.",
} as const;

export const faqSections: FaqSection[] = [
  {
    heading: "The measuring stick",
    items: [
      {
        id: "proxy-not-si",
        q: "Social domains are not thermodynamics. You dressed a vibe in ΔS.",
        a: "ΔS here is a bits-equivalent proxy inside a declared boundary. Not SI social heat. Not XP. Landauer is a conversion floor for information erased, not a license to add a mediation to a heat bath. Physics constants were proxies that survived attack. They will move again when better data arrives. Same honesty: the stick updates. A new vertex cites the old one. The old row stays. A DAG does not edit. It does not delete. It branches. ‘Late burn’ is a later mark on that chain, not a time machine emptying a wallet. Standing already leaked; a decade on, an ordinary mint is dust. The mark is bookkeeping plus whatever new delta sat on the citation.",
        also: [
          { label: "Letter key", href: "/key" },
          { label: "ΔS", href: "/key", hash: "delta-s" },
        ],
      },
      {
        id: "who-types-the-number",
        q: "Who punches in the social number? That is just a tribe with extra syntax.",
        a: "A person talks to the packager on their box in ordinary language. SignalFlow scours prior closes on that class and proposes ΔS. Humans do not type the mint. Both edges can refuse the proposal. Later evidence attaches a new vertex. Edge models that disagree on a hash flag a fake. Convergence is the bet, not a claim that day-one weights are physics. Local rooms can bias a mapper. That is named. Contest and late marks are how it gets expensive. If a room’s mapper is a clique, say so and fork the door. Do not pretend the eight domains arrived from heaven.",
        also: [
          { label: "Engine", href: "/#engine" },
          { label: "Open problems", href: "/open-problems" },
        ],
      },
      {
        id: "not-the-story",
        q: "Edge AIs are trained on opposite tribes. You just recoded the jersey.",
        a: "The mint does not score how you got there. Not the model. Not the jersey. Not the speech you gave yourself. SignalFlow packages a claim. The graph scores what closed: both edges, evidence, a later vertex if it leaked. Two AIs trained on opposite sermons can propose two ΔS numbers. Those are claims. They are not the outcome. Compare this close to other closes of that class. Methodology is noise. Ideology is noise. Most people already want Z — the work actually happened. They fight about the path. This is how the path gets leftover.",
        also: [
          { label: "Truth engine", href: "/web3/truth" },
          { label: "FAQ measuring stick", href: "/faq", hash: "who-types-the-number" },
        ],
      },
      {
        id: "stories-stay",
        q: "Humans are storytellers. You can't kill the story.",
        a: "Nobody is killing the story. Tell it. Share it. Build a room with it. Songs, sermons, jokes — keep them. The rule is: the story is not the ruler. Do not put narrative on the measuring stick. Do not mint a jersey. The close is what happened. The story is what you said about it. Mix those and you recapture the metric. Separate them and you can still talk.",
        also: [
          { label: "Truth engine", href: "/web3/truth" },
          { label: "Not the jersey", href: "/faq", hash: "not-the-story" },
        ],
      },
      {
        id: "late-moral-panic",
        q: "Late burn lets a future mob rewrite the past.",
        a: "A future mood cannot overwrite the row. It can add a cited vertex if later causal evidence exists. A moral fashion with no new edge is noise. Poisoned groundwater is a new edge. ‘We decided mediation is icky now’ is not. The protocol does not owe you a constitution that freezes 2026 morals. It owes you an append-only book and a mapper you can attack.",
        also: [
          { label: "Meter math", href: "/math" },
        ],
      },
      {
        id: "xp-small",
        q: "If standing takes years to go to dust, won't whales own the till?",
        a: "Only if each loop mints a fat number. Leak is ~1% of remaining every 10 days. Steady pile ≈ 10-day inflow ÷ 0.01. Ten fat lawns in 10 days becomes a pile that still moves a couple of years later. So an ordinary MICRO close targets 0.01–1 XP, not 100. F already taxes repeats. Slam-shut mints zero. At the drawer, EP cannot exceed this ticket times H_cap. XP is not dollars. IT does not use XP at all.",
        also: [
          { label: "Defaults", href: "/defaults" },
          { label: "Letter key", href: "/key" },
        ],
      },
    ],
  },
  {
    heading: "What this is",
    items: [
      {
        id: "what",
        q: "What is the Extropy Engine?",
        a: "An audit loop. A UI for the life you're already living. Faces: LocalFlow, HomeFlow, quests, GrantFlow, shops. SignalFlow packages the claim. The kernel mints. Cheap laptop, clone the repo, you're a node. Not a coin you buy. Not a church. Not two apps.",
        also: [
          { label: "Engine", href: "/#engine" },
          { label: "Watch", href: "/#film" },
          { label: "Enter", href: "/start" },
        ],
      },
      {
        id: "letters",
        q: "R, F, ΔS, w · E, Tₛ — what do the letters actually mean?",
        a: "R is rarity of the action class, not reputation. F is Frequency of Decay (repeats pay less), not falsifiability — that is script-ℱ. ΔS is verified entropy reduction, not XP. w · E is weighted emergence: the eight-domain weight vector dotted with this loop’s effort vector. That is the product inside the mint, which is why PHOTON 404 can say the English. It is not a fifth letter. Tₛ is the slam window for this loop: instant confirm pays 0. log(1/Tₛ) is that clock. 0.99ⁿ is a different clock. Full stop-sign: /key.",
        also: [
          { label: "Letter key", href: "/key" },
          { label: "Mint formula", href: "/glossary", hash: "xp-formula" },
        ],
      },
      {
        id: "explain",
        q: "How do I explain this without saying entropy token?",
        a: "Verified change in a system. Causal evidence on a DAG. Standing from that evidence. Standing is not money — it can change access. ΔS is the measurement proxy. XP is world standing. CT_W is the town web. H_cap is this till this pocket, Auto from signed cash. S is you here. β is CAT or on-duty. L = clip(H_cap · S · κ · CT_W · β, 0, 1). EP = XP · L + λ · L, then it burns. CAT is skill. IT is this-proposal standing, burned in the tally.",        also: [
          { label: "Ledger", href: "/#ledger" },
          { label: "Three clocks", href: "/glossary", hash: "three-clocks" },
          { label: "Open problems", href: "/open-problems" },
        ],
      },
      {
        id: "overlay",
        q: "Do we have to start a new civilization for this to work?",
        a: "No. You convert one that already exists. Overlay. Shops, licenses, neighborhoods, the job you already have, the handshake already on the wire. You do not wait for a sealed utopia. You put both-edges, contest, leak, and a DAG on infrastructure people already use. Checks on power that is already there. Greenfield is a fantasy of a clean page. This is a layer.",
        also: [
          { label: "Overlay", href: "/glossary", hash: "overlay" },
          { label: "Neighborhood MESO", href: "/hoa" },
          { label: "Enter", href: "/start" },
        ],
      },
      {
        id: "not-the-wrap-episode",
        q: "Won't someone fork CT, wrap it for cash, list it, and get paid?",
        a: "That is fail-closed in the background. It is not the plot. Anyone can fork a file. If they wire standing to money they left the language. κ hits 0. There is no buyer for a meter that does not transfer. A clerk listing CT is not a market. Do not spend the episode on a rogue grocery. The story is the close: both edges, evidence, a later vertex if it leaked.",
        also: [
          { label: "Meter math", href: "/math" },
        ],
      },
      {
        id: "people-suck",
        q: "Why would this work if people suck?",
        a: "It does not require people to be good. Most systems fail because they do. They try to teach virtue, or they hope the next cohort is nicer. People game what they can touch. This loop is built for that: both edges, late burn, decay, cash still buys milk. You do not need a moral majority. You need enough nodes in a place that closed loops outrun the puff. That is a local threshold, not a conversion of the species. Fungus, not fire. The rest of the street can ignore it.",
        also: [
          { label: "Overlay", href: "/glossary", hash: "overlay" },
          { label: "Enter", href: "/start" },
          { label: "Neighborhood MESO", href: "/hoa" },
        ],
      },
      {
        id: "imported-cat",
        q: "Does a doctor have to re-earn being a doctor in here?",
        a: "No. The license is opening evidence: a CAT record, issuer = the old board, lane = the practice. Not XP. Not a throne. Once they are in, this graph is what continues — cases, teaching, loops they actually close. Retired weight that can issue new CATs and argue rarity in that lane is that DAG history, not the framed diploma. Same for electricians, teachers, welders. Doctor is one example. If the paper was a lie, contest and late burn still apply. The license gets them in the door. It does not give them the house.",
        also: [
          { label: "CAT", href: "/glossary", hash: "cat" },
          { label: "Overlay", href: "/glossary", hash: "overlay" },
          { label: "Lane", href: "/glossary", hash: "lane" },
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
          { label: "Yes or no at the door", href: "/#zkp" },,
          { label: "Digital Autarky", href: "/glossary", hash: "digital-autarky" },
        ],
      },
      {
        id: "zkp",
        q: "Isn't a zero-knowledge proof just showing someone your ID?",
        a: "That's the mix-up. Handing the bartender the license is showing him the information — birthday, street, photo, name. He doesn't need any of that. He needs 21 or not. Your phone looks at the license on YOUR side and answers one question. The till gets yes or no. The bar's book records that a check happened. Anyone who later wants WHO writes a look vertex. Do not write “chip versus photocopy.” That line is noise. ZKP circuits are not in Codex v2.1. 2.1 is the current Codex. Today the handshake is signatures.",
        also: [
          { label: "Yes or no at the door", href: "/#zkp" },,
          { label: "ZKP", href: "/glossary", hash: "zkp" },
          { label: "DID", href: "/glossary", hash: "did" },
        ],
      },
      {
        id: "game",
        q: "This is untested. Why throw a ledger at the world?",
        a: "Because this is a game. The world already runs on unintended consequences. No special risk here. Log on through the internet you already have. Correct way: cheap laptop, clone the repo, you're a node. Next person does the same. Nearby you talk node to node. Internet is for people who aren't next door. ZKPs talk to each other. You get the part for your seat. Other people check it. Then more people talk. Then more people do it. Play it on the life you're already living.",
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
        a: "Emergent Product. Till spark. EP = XP · L + λ · L, then it burns. L = clip(H_cap · S · κ · CT_W · β, 0, 1).",
        also: [
          { label: "Emergent Product", href: "/glossary", hash: "emergent-product" },
          { label: "Ledger", href: "/#ledger" },
        ],
      },
      {
        id: "cat-ct-it",
        q: "What are CAT, CT, and IT?",
        a: "CAT is a skill record: lane + level + issuer. Feeds β when on-duty. CT is community standing on the web — same number at compatible tills — idle leak ~1% every 10 days (0.99ⁿ). Activity on that web resets the clock. CT does not travel. IT is this-proposal standing, clip(H_gov · S_gov · κ · CT_W · β_gov, 0, 1), burned in the tally. Not a pile. None of these are bags.",
        also: [
          { label: "CAT", href: "/glossary", hash: "cat" },
          { label: "CT", href: "/glossary", hash: "ct" },
          { label: "IT", href: "/key#it" },
          { label: "Ledger", href: "/#ledger" },
        ],
      },
      {
        id: "formula",
        q: "What is the actual XP formula?",
        a: "XP = R × F × ΔS × (w · E) × log(1/Tₛ). Canonical v3.1.2. Reputation never enters it. Tₛ is the slam window: instant confirm pays 0. Δt is clipped to the action class so waiting is not a mint. F is repeats. 0.99ⁿ is standing after settlement. Three clocks.",
        also: [
          { label: "The mint", href: "/glossary", hash: "xp-formula" },
          { label: "Tₛ", href: "/glossary", hash: "ts" },
          { label: "Three clocks", href: "/glossary", hash: "three-clocks" },
        ],
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
        a: "There isn’t one. SignalFlow plus evidence (duration, who looks, whether it recurs) propose a provisional bits-equivalent. You do not type in a score. Lookers attach — parts of the claim, more than once, later. Then it hits the mint formula. Not a 1/10 validator caste. Not in the canon.",
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
        a: "For an audit system that exists to keep auditing, that sentence is a catch-22. You cannot show the forest before you plant it. Pieces have been beaten to death in other machines. Two nodes exchanging a packet is the garage. As of 7 Sep 2026 the public list is 16 live gaps — 12 open, 4 specified but untested — not the old 65-item engineering inventory.",
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
        a: "No. The protocol does not walk the light cone. Late mint is citation-gated: a new vertex has to exist that names causal parents and hangs evidence. No citation, no edge, no XP. Infinite downstream is cosmology, not a query. You get the delta of the proxy, not a second full paycheck. Hop-weight is not frozen in Codex v2.1. Do not invent a fraction.",
        also: [
          { label: "Late mint", href: "/glossary", hash: "late-mint" },
          { label: "Citation-gated", href: "/glossary", hash: "citation-gated" },
          { label: "0.99ⁿ", href: "/#decay" },
        ],
      },
      {
        id: "burn",
        q: "If the president is later a disaster, can the teacher’s XP be destroyed?",
        a: "Late mint first. Same machine both ways. A later huge ΔS — Nobel, a society-scale fix — writes a citation-gated delta *now*. n starts at 0 on that delta. You do not inflate a 1996 pile and then leak it. Ordinary remaining standing is half gone in ~1.9 years and dust in a decade. That is when decades later still has weight: the new cited delta, not the old dust. Late burn slashes remaining plus children, and marks the chain. Treating “it can take your XP away in 30 years” as the headline skips the logistics.",
        also: [
          { label: "Late mint", href: "/glossary", hash: "late-mint" },
          { label: "Late burn", href: "/glossary", hash: "late-burn" },
          { label: "0.99ⁿ", href: "/#decay" },
        ],
      },
      {
        id: "decay",
        q: "1% every 10 days — so it lasts forever?",
        a: "No. 1% of what is left, each 10 days. Remaining after n idle 10-day ticks is 0.99ⁿ. Half-life ≈ 69 ticks (~1.9 years, half still there). ~1 year ≈ 69%. ~5 years ≈ 16%. ~8 years ≈ 5%. A decade is dust. It never hits zero in the reals. Counting 20,000 days is the wrong arithmetic. Decay is a leak. Late mint is the long-horizon mechanism that can still move a number, and only for a later huge, cited ΔS. Late burn of ordinary remaining pile is a mark on a vertex, not a sword.",
        also: [{ label: "XP decay", href: "/glossary", hash: "xp-decay" }, { label: "0.99ⁿ", href: "/#decay" }],
      },
      {
        id: "clawback",
        q: "If most of it already leaked, do you claw the old XP back?",
        a: "No. You don’t collect what decay already ate. You mark the vertex BURNED and slash remaining dust. At ten years that remaining is already dust. The DAG does not forget. The wallet does not get a 1996-shaped hole.",
        also: [{ label: "Late burn", href: "/glossary", hash: "late-burn" }],
      },
      {
        id: "thirty",
        q: "Is there a settle window? A 40-day verification?",
        a: "No. That was leftover from when settle meant final. Close mints. Leak starts. Late burn has no expiry. Looking is a vertex. A silence timer is not a looker. H_cap still reads 10 days of this till’s signed cash (two 5-day weeks of books). That is cash, not a check that the lawn got mowed. No months. No 30. No 40. Weeks are 5 days. IT is not a leak pile. XP decay is ~1% every 10 days of remaining.",
      },
      {
        id: "three-clocks",
        q: "Tₛ = 1 makes XP = 0. Is the formula broken? Are F, Tₛ, and 0.99ⁿ the same clock?",
        a: "Not broken. Tₛ = 1 means you slammed the loop shut (Δt ≈ 0). log(1/Tₛ) = 0 is the anti-farm, on purpose. People read “decay factor = 1” as “full payout.” That is how decay usually works. This term is elapsed time of this loop, Tₛ = exp(−λ min(Δt, Δt_cap)), so log(1/Tₛ) = λ·clip(Δt). Three clocks: Tₛ this loop, F repeating the class, 0.99ⁿ standing after close. Do not “fix” it with log(1+1/Tₛ). That pays slam-bots. Cap Δt so stalling does not print. Rarity-splitting 400 fake classes is a DAG job, not this term.",
        also: [
          { label: "Three clocks", href: "/glossary", hash: "three-clocks" },
          { label: "Tₛ", href: "/glossary", hash: "ts" },
          { label: "XP decay", href: "/glossary", hash: "xp-decay" },
        ],
      },
    ],
  },
  {
    heading: "The loop",
    items: [
      {
        id: "flows",
        q: "So this is just LocalFlow and SignalFlow?",
        a: "No. Those are two packages. HomeFlow is the household. Quest market is the 2–5 minute grain. GrantFlow is discovery plus proposer. Validation-neighborhoods take blind slices. Identity writes did:key. PSLL is the diary. xp-formula / xp-mint / loop-ledger / dag-substrate are the book. LocalFlow is errands. SignalFlow routes claims. Collapsing the Engine into those two is a reading error.",
        also: [
          { label: "The git", href: "/#stack" },
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
        a: "Yes. You are still spending dollars. EP = XP · L + λ · L. The rest rings in cash. The fridge does not lock.",
        also: [{ label: "Emergent Product", href: "/glossary", hash: "emergent-product" }],
      },
      {
        id: "if-then",
        q: "Isn’t a smart contract just crypto?",
        a: "Smart contracts. Not crypto. No exchange. No JPEG. No transfer of standing. The listed-chain version is dumb because the ‘then’ is move a bag. Here the then is mint, Auto H_cap from this till, flip β, print a remainder. Tokenomics without a pool. That is the brag. Break it.",
        also: [{ label: "Smart contracts", href: "/smart-contracts" }],
      },
      {
        id: "on-ramp",
        q: "You said no fiat on-ramp. So this replaces money?",
        a: "No. No on-ramp means cash cannot mint XP. People keep spending dollars. The Engine is a tracking layer: bits-equivalent proxies, fine-tuned as like-cases stack, so the ΔS of this kind of exchange gets less wrong. A vertex can settle some of the ticket. That is not EP = this many dollars. Mom-and-pop first. Repeat-farming is F. Keep the other job or don’t.",
        also: [{ label: "Engine — shop view", href: "/#engine" }],
      },
      {
        id: "l-farm",
        q: "Can a shop (or a DFAO) just crank L and extract XP?",
        a: "That’s the economic attack. L is community CT against this till’s Auto H_cap. Same CT at every compatible till. There is no slider. H_cap comes from this door’s signed cash after 10 days of training (remainder 0 until then). Both edges still accept the estimate. Cash rings the rest. A house that wants no overlay unplugs the node.",
        also: [
          { label: "Emergent Product", href: "/glossary", hash: "emergent-product" },
          { label: "Open problems", href: "/open-problems" },
        ],
      },
      {
        id: "not-a-job",
        q: "Do I have to work at every shop to get L?",
        a: "No. CT is community standing on the web. L is how hard this house lets that standing hit the ticket. Regular groceries can move CT_W. Shopping five stores at random is allowed. It is just worse coupling for the web. Do what you want.",
        also: [
          { label: "L", href: "/glossary", hash: "l" },
          { label: "CT", href: "/glossary", hash: "ct" },
        ],
      },
      {
        id: "who-turns-knobs",
        q: "Who is allowed to change XP, CT, and L?",
        a: "Different floors. L = clip(H_cap · S · κ · CT_W · β, 0, 1). CT_W is the same community meter at every compatible till. H_cap is Auto this pocket. S is you here. A wrap that broke the rules, or another mesh, is the only way the laundromat does not read the grocery.",
        also: [
          { label: "Letter key", href: "/key" },
          { label: "Engine — shop view", href: "/#engine" },
        ],
      },
      {
        id: "l-zkp",
        q: "How do domain bands meet Auto H at the till?",
        a: "You may show this door domain bands as ZKPs. Those bands plus CT_W go against Auto H_cap and become L for this ticket. H reads this till’s signed cash after the training pocket. Looking at a graph to hunt WHO still writes a vertex.",
        also: [
          { label: "L", href: "/glossary", hash: "l" },
          { label: "ZKP", href: "/glossary", hash: "zkp" },
        ],
      },
    ],
  },
  {
    heading: "Retirement, rest, the own lawn",
    items: [
      {
        id: "own-lawn",
        q: "Do I only earn XP working a job, or helping a neighbor?",
        a: "No. You mow your own lawn, you mint if the loop is real. Hiring a neighbor is not cooler math. The grass is shorter either way. Same ΔS class. The hire is two households on one close: they cut, you posted. You do not mint their cut. They do not mint your yard as a paycheck. A self-close is one house taking care of itself. F still taxes every Saturday. Sensors hang evidence. They do not mint. You do not type a score. A job is one way a loop shows up. It is not the box.",
        also: [
          { label: "HomeFlow", href: "/glossary", hash: "homeflow" },
          { label: "XP", href: "/glossary", hash: "xp" },
        ],
      },
      {
        id: "lookers",
        q: "So my neighbor says yeah and it prints? One validator?",
        a: "No. There is no validator class and no one-stamp close. A claim mints at close. Looking is a vertex. Different lookers can sign different parts — front strip, height, before/after, duration — three times, ten times, a year later. Weight stacks. A cartel of three houses puffing each other is a later burn, not a feature. SignalFlow proposes ΔS. You never type the number. Late lookers are the machine. One buddy on the porch is evidence, not a gavel.",
        also: [
          { label: "Late mint / burn", href: "/faq", hash: "late-first" },
          { label: "Looking", href: "/#zkp" },
        ],
      },
      {
        id: "retire",
        q: "What if I retire? Or get sick? Or take a vacation? Do I starve when I stop “working”?",
        a: "People rarely retire into a coma. They keep a house, a garden, grandkids, a body, a street. That still mints if it is real and lookers can attach. Standing you already have does not vanish on a Friday. XP leaks ~1% of remaining every 10 days — half still there at ~1.9 years. You live on that, plus whatever living still writes. Sick: you are not clawed for being sick. Care is a loop for the person who shows up. Vacation: rest is not a hole. Recovery is biological. You do not need a PTO token. If you vanish from every loop including your own house, standing fades like anyone else’s.",
        also: [
          { label: "XP decay", href: "/glossary", hash: "xp-decay" },
          { label: "Rest / retirement", href: "/glossary", hash: "rest" },
          { label: "0.99ⁿ", href: "/#decay" },
        ],
      },
      {
        id: "pto",
        q: "So is there PTO? Sick days? A vacation balance?",
        a: "Not as a separate pile you spend. Standing from loops that closed is what you already accrued. Buying at a compatible door can move CT_W. That same CT_W is what the next compatible till reads. Cash still cannot mint XP.",
        also: [
          { label: "CT", href: "/glossary", hash: "ct" },
          { label: "Emergent Product", href: "/glossary", hash: "emergent-product" },
          { label: "At the till", href: "/faq", hash: "milk" },
        ],
      },
      {
        id: "not-a-job",
        q: "This still sounds like work-score capitalism with extra steps.",
        a: "That’s the training. Clock in, clock out, rest is a hole, only what you sold to someone else counted. This measures anything you can self-report, have a sensor report, submit as a claim, or tell an assistant — then have lookers attach, in parts, later. Not a vibe. Not a diary that prints. SignalFlow proposes. The box was the job’s. Living was never inside it.",
        also: [
          { label: "SignalFlow", href: "/glossary", hash: "signalflow" },
          { label: "UI for your life", href: "/glossary", hash: "ui-for-your-life" },
        ],
      },
    ],
  },
  {
    heading: "Not its job",
    items: [
      {
        id: "not-the-verdict",
        q: "Does the Engine decide trials? Replace twelve jurors?",
        a: "No. It can hold a public audit trail: claim, evidence, both edges, later burn if the story was theater. That is a better evidence graph than a two-week performance. It does not mint a verdict. Unanimous twelve is a captured metric — the scored thing is agreement. You can hate that model and still not put a gavel on XP. CAT stays off the mint. A diagnosis is a stamp, not a second physics.",
        also: [
          { label: "Letter key", href: "/key" },
          { label: "Liquidity paper", href: "/papers/liquidity-and-decay" },
        ],
      },
      {
        id: "kids-disabled",
        q: "Do kids get no XP? Is the system ruthless to disabled people?",
        a: "No. That is NotebookLM fanfic. A child can have a did:key. A closed loop they actually did can mint. That can stand in for some allowance. They also do not carry adult bills; do not write a Black Mirror episode that forgets that. Someone with Down syndrome greeting at a door is a loop if that door says the loop closed. If they cannot close one, standing does not print. Care is not the mint’s job. A DFAO, a church, a desk can be the room that tracks volunteer loops and pays the care in cash and time. The Engine does not write a morality constitution for the weakest. The community can. Looking at a graph to hunt WHO still writes a vertex.",
        also: [
          { label: "DFAO", href: "/dfao" },
          { label: "Instead", href: "/instead" },
        ],
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
        a: "You don't apply. The node writes a keypair on first boot. That's a did:key — W3C, no registrar, no company. Backup data/keys/node.pem. Lose it and you're a new node. ZKPs are what you show: band, confirmed this loop, unique in this room, not slashed. The till gets yes or no, not your diary. Keys stay on the box. Don't punch the database at the WAN. One captured node can lie about itself; it cannot silently rewrite a neighbor's DAG. Sybil: identity is cheap, standing is not. Unique-in-DFAO stops fifty votes from one person. Looking is a vertex. Today the handshake is signatures. ZKP circuits are not in Codex v2.1. 2.1 is the current Codex.",
        also: [
          { label: "The node", href: "/#node" },
          { label: "Yes or no at the door", href: "/#zkp" },,
          { label: "DID", href: "/glossary", hash: "did" },
          { label: "ZKP", href: "/glossary", hash: "zkp" },
        ],
      },
      {
        id: "wire",
        q: "TCP? A new protocol? What does Web3 do here?",
        a: "TCP and QUIC already move packets. Don't invent ExtropyTCP. Web3 (libp2p, gossipsub, DHTs) reinvented discovery and a global shout — gossip as truth. That's not this pattern. LAN first: next door talks node to node. Internet is for people who aren't next door. Keys on the box. Proof on the wire, not the diary. Looking writes a vertex. Causal DAG, both edges agree — not a lottery for a block. Today the handshake is HTTPS + signatures. libp2p + Noise later is still a pipe. The overlay is the thing.",
        also: [
          { label: "The pipe", href: "/#wire" },
          { label: "The node", href: "/#node" },
          { label: "LAN-first", href: "/glossary", hash: "lan-first" },
        ],
      },
      {
        id: "listen",
        q: "Where do I listen / read?",
        a: "Book, papers, and two live podcasts are on this site. Talk RSS: https://extropyengine.com/podcast/feed.xml. Research Pod RSS (automated, unsigned, AI audio overviews): https://extropyengine.com/podcast-log/feed.xml. Old-meter drafts: https://extropyengine.com/podcast-redacted/feed.xml — trail, not the Codex. Spotify, YouTube, and Apple listings exist for the talk show.",
        also: [
          { label: "Podcast", href: "/podcast" },
          { label: "Research Pod", href: "/research-pod" },
          { label: "Lyrics", href: "/lyrics" },
          { label: "Closing the Loop", href: "/papers/closing-the-loop" },
          { label: "Glossary", href: "/glossary" },
        ],
      },
    ],
  },
];
