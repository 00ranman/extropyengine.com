export type EssayBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ol"; items: string[] }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Essay = {
  slug: string;
  pathLabel: string;
  title: string;
  blocks: EssayBlock[];
  failHref?: string;
};

export const startIntro = {
  title: "Enter",
  lead: "You don't need to understand the whole system to use it. Four doors. Pick the one that matches the glitch. The framework meets you there.",
};

export const entryPaths = [
  {
    id: "A",
    title: "Why Reward Systems Are Broken",
    href: "/start/money",
    blurb:
      "Points, likes, karma, salary, GDP — every metric you've been handed was designed to be gamed. What happens when you anchor value to something that can't be faked?",
  },
  {
    id: "B",
    title: "Why Current AI Alignment Fails",
    href: "/start/ai",
    blurb:
      "Alignment research treats AI as a control problem. But the real failure is that the systems training AI have no coherent definition of value. You can't align to a broken compass.",
  },
  {
    id: "C",
    title: "Why Institutions Drift Into Entropy",
    href: "/start/governance",
    blurb:
      "Every organization eventually optimizes for its own survival instead of its mission. That's not corruption — it's thermodynamics. Here's the structural fix.",
  },
  {
    id: "D",
    title: "What If Value Comes From Physics?",
    href: "/start/physics",
    blurb:
      "Not philosophy. Not consensus. Not markets. What if the thing that makes something actually valuable is measurable entropy reduction — and we've been ignoring it?",
  },
] as const;

export const essays: Record<string, Essay> = {
  money: {
    slug: "money",
    pathLabel: "Entry Path A — Money",
    title: "Why Reward Systems Are Broken",
    failHref: "/open-problems",
    blocks: [
      {
        type: "p",
        text: "Every system you interact with runs on metrics. Salary measures hours, not impact. Likes measure attention, not quality. GDP measures transactions, not wellbeing. Grades measure compliance, not understanding.",
      },
      {
        type: "p",
        text: "These aren't bugs. They're features — of systems designed before anyone understood Goodhart's Law: when a measure becomes a target, it ceases to be a good measure.",
      },
      { type: "h2", text: "The Problem Isn't Greed. It's Architecture." },
      {
        type: "p",
        text: "People aren't broken. The incentive layers they operate inside are. When you reward publication count, you get p-hacked papers. When you reward engagement, you get outrage bait. When you reward quarterly earnings, you get strip-mined futures.",
      },
      {
        type: "p",
        text: "This isn't a moral failing. It's a thermodynamic one. The metrics have no anchor to reality.",
      },
      {
        type: "p",
        text: "What if value wasn't determined by consensus, markets, or authority — but by measurable entropy reduction? Something that can't be faked, gamed, or inflated.",
      },
      { type: "h2", text: "What Entropy Reduction Actually Means Here" },
      {
        type: "p",
        text: "Entropy, operationally, is disorder. Wasted energy. Lost signal. Unused potential. Entropy reduction is the measurable act of creating order from disorder: organizing, building, repairing, teaching, feeding, coding, composting.",
      },
      {
        type: "p",
        text: "The Extropy Engine proposes a simple inversion: instead of measuring proxies (money, points, likes), measure the actual thermodynamic change. Did this action reduce entropy? By how much? That measurement becomes the basis of value.",
      },
      { type: "h2", text: "How It Works (Simplified)" },
      {
        type: "ol",
        items: [
          "An agent does the work. They do not type in a score.",
          "SignalFlow talks to the assistant they already trust, plus their personal log, plus evidence on the DAG (before/after, duration).",
          "A provisional ΔS is proposed. The other side has to agree. If-then.",
          "XP mints provisional, then settles — or burns, then or years later. XP is not spent. It decays.",
          "You cannot buy it. You cannot transfer it. Sitting on a pile does nothing.",
        ],
      },
      {
        type: "p",
        text: "This means you can't buy status. You can't inherit it. You can't game it with bots. You earn it by making things measurably better.",
      },
      { type: "h3", text: "What This Is Not" },
      {
        type: "ul",
        items: [
          "Not social credit — no central authority assigns scores",
          "Not crypto speculation — XP has no market price",
          "Not communism — individuals earn based on actual contribution",
          "Not utopian — the system is designed to be attacked, audited, and falsified",
        ],
      },
      { type: "h2", text: "Where This Can Fail" },
      {
        type: "p",
        text: "Entropy metrics are hard to standardize across domains. Validating a repair is different from validating a song. The system requires domain-specific entropy measurement frameworks, and those frameworks themselves need to be validated recursively. This is an open problem.",
      },
    ],
  },
  ai: {
    slug: "ai",
    pathLabel: "Entry Path B — AI",
    title: "Why Current AI Alignment Fails",
    failHref: "/open-problems",
    blocks: [
      {
        type: "p",
        text: "The dominant framing of AI safety treats alignment as a control problem: how do we make superintelligent systems do what we want? But that question hides a deeper one nobody has answered:",
      },
      {
        type: "p",
        text: "What do we want? And how would we know if we got it?",
      },
      {
        type: "p",
        text: "Every alignment proposal ultimately bottoms out in human preferences. But human preferences are inconsistent, manipulable, context-dependent, and often self-destructive. RLHF (reinforcement learning from human feedback) trains models to satisfy stated preferences — not to produce actual value. That's Goodhart's Law applied to intelligence itself.",
      },
      { type: "h2", text: "The Missing Anchor" },
      {
        type: "p",
        text: "Current AI systems optimize for proxies: engagement, satisfaction scores, task completion rates, benchmark performance. None of these measure whether the AI's output actually reduced entropy in the world — whether it made things genuinely better in a measurable, physical sense.",
      },
      {
        type: "p",
        text: "The Extropy Engine proposes a different alignment target: instead of aligning AI to human preferences (which drift, conflict, and corrode), align AI to verified entropy reduction. This gives the system a physically grounded objective function that doesn't depend on polling humans.",
      },
      { type: "h2", text: "How This Changes the Game" },
      {
        type: "p",
        text: "An AI aligned to entropy reduction would:",
      },
      {
        type: "ol",
        items: [
          "Prioritize actions that create measurable order over actions that merely satisfy user requests.",
          "Resist producing content that increases informational entropy (misinformation, noise, slop).",
          "Self-audit against thermodynamic baselines rather than user approval metrics.",
          "Become more aligned as it becomes more capable, because its objective function doesn't degrade with scale.",
        ],
      },
      {
        type: "p",
        text: "This inverts the current alignment paradox. Today, more capable AI is harder to align. In an entropy-reduction framework, capability and alignment converge.",
      },
      { type: "h2", text: "Where This Can Fail" },
      {
        type: "p",
        text: "The remaining problem is not “who validates.” Validation is a task. SignalFlow proposes ΔS from the work plus evidence; people confirm. Bias and AI-recursion still matter at the slice level (the model you plugged in is only as honest as you allowed it to be), but that is an accuracy problem, not a priesthood problem. What still has to be proven is density — enough people in range to pick the tasks up.",
      },
      { type: "h3", text: "What This Is Not" },
      {
        type: "ul",
        items: [
          "Not anti-AI — this is a pro-AI framework that gives AI a coherent objective",
          "Not a pause proposal — the system is designed to run alongside existing AI development",
          "Not a governance overlay — it's a value substrate that governance can reference",
        ],
      },
    ],
  },
  governance: {
    slug: "governance",
    pathLabel: "Entry Path C — Governance",
    title: "Why Institutions Drift Into Entropy",
    failHref: "/open-problems",
    blocks: [
      {
        type: "p",
        text: "Every institution starts with a mission: educate children, heal the sick, represent citizens, advance knowledge. Over time, a silent inversion occurs. The institution begins optimizing for its own continuation rather than its original purpose.",
      },
      {
        type: "p",
        text: "Schools optimize for test scores instead of understanding. Hospitals optimize for throughput instead of health. Governments optimize for re-election instead of governance. Corporations optimize for quarterly returns instead of value creation.",
      },
      {
        type: "p",
        text: "This is not corruption. It is the default thermodynamic trajectory of any system without a feedback mechanism anchored to its original purpose.",
      },
      { type: "h2", text: "Why Feedback Loops Break" },
      {
        type: "p",
        text: "The problem is structural. Institutions measure proxies: compliance metrics, satisfaction surveys, revenue growth, publication counts. These proxies are always gameable because they are socially constructed rather than physically grounded.",
      },
      {
        type: "p",
        text: "Once the proxy becomes the target, the institution drifts. Slowly at first, then completely. The people inside the institution are often aware of the drift but have no mechanism to reverse it. The incentive structure rewards drift.",
      },
      { type: "h2", text: "The DFAO Model" },
      {
        type: "p",
        text: "The Extropy Engine proposes a different governance architecture: the Decentralized Fractal Autonomous Organization (DFAO). Fractal: a DFAO at one scale is made of DFAOs at the scale below. Same confirmation loop. Different default knobs. Instead of static hierarchies with proxy metrics, DFAOs use:",
      },
      {
        type: "ol",
        items: [
          "Entropy auditing — continuous measurement of whether the organization is actually reducing entropy in its domain.",
          "Adaptive feedback loops — governance rules that automatically adjust when entropy metrics diverge from mission targets.",
          "Role fluidity — authority flows to whoever is demonstrably reducing entropy, not whoever holds a title.",
          "Falsifiable mandates — every policy has explicit failure conditions. If the conditions are met, the policy auto-sunsets.",
          "Scale labels, not fences — NANO, MICRO, MESO, MACRO, PLANETARY. Suggested rule sets for a typical size. Crossing seven people does not eject you from MICRO.",
        ],
      },
      { type: "h2", text: "Where This Can Fail" },
      {
        type: "p",
        text: "Entropy auditing at institutional scale is computationally expensive and politically contentious. Defining entropy reduction for a school versus a hospital versus a legislature still needs domain-specific frameworks at production quality. “Who governs the governors” is the wrong shape of bootstrap: governance work is also just tasks with XP. The real constraint is getting enough people inside the institution to do those tasks before the old proxy metrics reassert.",
      },
      { type: "h2", text: "The Invitation" },
      {
        type: "p",
        text: "If you work inside an institution and feel the drift, this framework gives you language and architecture to name it and propose structural alternatives. You don't need to adopt the whole system. Start by asking: what would our organization look like if we measured actual entropy reduction instead of proxy metrics? Full scale table: /dfao.",
      },
    ],
  },
  physics: {
    slug: "physics",
    pathLabel: "Entry Path D — Physics",
    title: "What If Value Comes From Physics?",
    failHref: "/open-problems",
    blocks: [
      {
        type: "p",
        text: "Every economic system, every governance model, every social contract ultimately rests on a definition of value. Markets say value is what someone will pay. Democracies say value is what people vote for. Philosophy says value is what survives rational scrutiny.",
      },
      {
        type: "p",
        text: "All of these are social constructions. They work until they don't. And they all share the same vulnerability: they can be gamed, manipulated, or captured by whoever controls the measurement apparatus.",
      },
      {
        type: "p",
        text: "What if value had a physical basis? Not assigned by humans, but derived from the measurable reduction of entropy in a system?",
      },
      { type: "h2", text: "Entropy as the Universal Metric" },
      {
        type: "p",
        text: "The second law of thermodynamics tells us that entropy — disorder — increases over time in any closed system. Life itself is a local violation of this tendency: organisms create order by consuming energy. Every meaningful act of creation, repair, organization, or teaching is a local entropy reduction event.",
      },
      {
        type: "p",
        text: "The Extropy Engine takes this observation and builds an entire value system on it. Extropy is defined as the measurable inverse of entropy: the degree to which a system moves from disorder toward structured complexity. Value, in this framework, is not subjective. It is physical.",
      },
      { type: "h2", text: "What This Looks Like Operationally" },
      {
        type: "p",
        text: "A farmer who converts degraded soil into productive land: measurable entropy reduction. A teacher who takes a confused student to structured understanding: measurable entropy reduction. A developer who refactors spaghetti code into clean architecture: measurable entropy reduction.",
      },
      {
        type: "p",
        text: "In each case, the measurement is domain-specific but the principle is universal. The Extropy Engine provides the measurement scaffolding. Validators verify. The DAG records. XP is issued.",
      },
      { type: "h2", text: "The Deeper Claim" },
      {
        type: "p",
        text: "This framework makes a testable philosophical claim: that emergence — the appearance of higher-order structure from lower-order components — is not random. It follows patterns that can be formalized. Consciousness, markets, ecosystems, and civilizations are all emergence phenomena. If you can measure the entropy reduction that produces them, you can build coordination systems that amplify rather than degrade that emergence.",
      },
      { type: "h2", text: "Where This Can Fail" },
      {
        type: "p",
        text: "The entropy-as-value thesis is falsifiable, and that's by design. If entropy reduction cannot be reliably measured across domains, the framework breaks. If local entropy reduction consistently produces global entropy increase (the air conditioning problem), the framework needs boundary conditions it doesn't yet have. If kitchen-scale disagreement never converges on the DAG, the physical-grounding claim weakens. That disagreement is not the observer effect. These are active research problems.",
      },
    ],
  },
};

export type GlossaryEntry = { term: string; def: string; id?: string };

export const glossarySections: { heading: string; entries: GlossaryEntry[] }[] = [
  {
    heading: "Core Concepts",
    entries: [
      {
        term: "UI for your life",
        id: "ui-for-your-life",
        def: "It's just a UI for your life. Picture the paper as a game that's going worldwide. Log on through the internet you already have. Correct way: cheap laptop, clone the repo, you're a node. Nearby, node to node. Internet is for people who aren't next door. ZKPs talk to each other. This is a game. Play it on the life you're already living.",
      },
      {
        term: "Extropy",
        def: "The measurable inverse of entropy. The degree to which a system moves from disorder toward structured complexity.",
      },
      {
        term: "Entropy Reduction (ΔS)",
        def: "The act of creating order from disorder, verifiably. ΔS must be strictly positive for XP to mint. Domain-native units (J/K, bits, normalized scalars) get a bits-equivalent so they can sit on one graph. That is a proxy, not a worshipped constant. If later data contradicts it, the proxy moves.",
      },
      {
        term: "Bits-equivalent",
        id: "bits-equivalent",
        def: "The conversion the Engine actually means. A lawn, a mediation, a trade deal — information events. Landauer: erasing information has a heat floor. You do not need a frozen joule for “mowed.” You need a stand-in in bits (or a normalized scalar treated as bits-equivalent) that can be updated when new measurements land. Equivocation is possible: Shannon bits, thermodynamic entropy, and the English word “order” are not the same object. The proxy is how you live with that without pretending you found a constant. For a fight: SignalFlow plus evidence (duration, who confirms, whether it recurs) propose a provisional bits-equivalent. You do not score yourself. The other side of the loop has to agree. That output hits the mint formula. Not a thermometer in the room. Not a validator caste taking a tenth. Not a metaphor. Not a poem about tidiness.",
      },
      {
        term: "Not a metaphor",
        id: "not-a-metaphor",
        def: "This line stays. Social and cognitive events are treated as information events with a bits-equivalent, not as a figure of speech about “order.” If a physicist stops here because they do not want to be an economist, or because two domains in one sentence offends the lab partition, they are not the audience. The Engine does not sand the sentence off to get a stamp or a grant. The audit loop is the test. Sign-off is not.",
      },
      {
        term: "Coherence",
        def: "How well a system's components work together to produce emergent order. A measurable precondition for sustained entropy reduction.",
      },
      {
        term: "Emergence",
        def: "Higher-order structure arising from lower-order components under local rules.",
      },
      {
        term: "Observer",
        id: "observer",
        def: "A person or instrument taking a measurement in the world you can trip over. Macro. Not a quantum role. Schrödinger’s cat was a reductio: apply the quantum recipe to a cat and you get an absurdity — that was the point. Quantum does not apply to the macro. A kitchen looking clean to one person and messy to another is disagreement about an opening condition, not wavefunction collapse.",
      },
      {
        term: "Observer effect",
        id: "observer-effect",
        def: "Pop-sci: I heard a spooky quantum thing I barely understood, this lyric says observation, therefore collapse, therefore the Engine is doing quantum. That chain is a rhyme, not a reading. Schrödinger wrote the cat to laugh at people who applied the quantum recipe at cat-scale. Quantum does not apply to the macro. This work does not use the observer effect. It does not claim it. A narrator who opens there invented a thesis and hung it on the author. Weaponized Transparency’s “turning observation into ammunition” is watching a system and using that watching as a real lever — institutions, metrics, cameras, the song — while talking about the system. Not ħ. Not collapse. Ammunition in the ordinary sense.",
      },
      {
        term: "Weaponized Transparency",
        id: "weaponized-transparency",
        def: "A Lladnaros track. Talking about systems while fucking with them. Observation into ammunition: the watching is the lever. Macro, social, institutional. The work does not claim the observer effect. The work does not claim quantum mechanics. A show that starts there is describing its own inference, not the song.",
      },
      {
        term: "Recursion",
        def: "A process that references itself. Used to enforce system self-auditing.",
      },
      {
        term: "LocalFlow",
        def: "The errand face. Rides, food, groceries, the car you don’t have — Uber, Lyft, DoorDash, Grubhub in one pile. Confirmation is the receipt. Not the protocol. Not the Engine. Remaining constraint is subscriber density in a zone.",
      },
      {
        term: "Own lawn",
        id: "own-lawn",
        def: "You mow your own grass. The ΔS is the lawn, not a wage sold to a neighbor. HomeFlow can close it. You do not type a score. F still applies if you do it every week. The extractive picture only counted work you sold. That box was the job’s.",
      },
      {
        term: "Rest / retirement",
        id: "rest",
        def: "Not a hole. Standing already minted leaks slowly (~1%/month of remaining). Living still writes loops — house, care, recovery, a garden. No PTO token. Sick is not a clawback. Vacation is not theft from a boss. If you vanish from every loop including your own life, it fades like anyone else’s. That is the treadmill, not unemployment.",
      },
      {
        term: "Quest market",
        id: "quest-market",
        def: "Default operational primitive. 2–5 minute tasks. Decomposition at the edge. Reward can escalate if it sits. Validation-neighborhoods take blind slices — volunteer role, not a class. packages/quest-market.",
      },
      {
        term: "GrantFlow",
        id: "grantflow",
        def: "Grant discovery (Grants.gov) plus AI proposer. Same loop, different input. packages/grantflow-discovery and grantflow-proposer.",
      },
      {
        term: "SignalFlow",
        def: "One layer: the protocol you talk to. Your assistant (ChatGPT, Claude, Gemini, or a model on your own hardware) plus your PSLL plus the network. It packages the claim, reads evidence, proposes provisional ΔS. You do not score yourself. It is not the Engine.",
      },
      {
        term: "Validation neighborhoods",
        id: "validation-neighborhoods",
        def: "Blind 1/10 slices routed to volunteers. “Validator” is a role a contributor temporarily occupies, not a caste. The mesh reconstructs the score. packages/validation-neighborhoods.",
      },
      {
        term: "PSLL",
        def: "Personal Signed Local Log. Append-only, hash-chained, yours. SignalFlow reads it. The mesh gets receipts, not your diary. Digital Autarky requires this.",
      },
      {
        term: "DAG curator",
        def: "Human-in-the-loop job: make the ledger navigable, factor new data, mark which slice of history should weight a new like-case. That work is entropy reduction. It mints XP. The graph feeding itself is the point.",
      },
      {
        term: "ZKP",
        id: "zkp",
        def: "Zero-knowledge proof. You are not showing anyone the information. You are showing a chip that already answered the question. Tap a debit card: cashier never sees the PIN, store never sees the balance, terminal gets approved or declined. Age at the door: your phone scans the license on YOUR side; the till gets 21 or not — not the birthday, not the street, not the photo. The bar's book records that a check happened. Later lookers who want WHO write a vertex. The panopticon is the photocopy in a city cabinet. DID is the name. ZKP is what you show. Circuits Codex 3; today signatures.",
      },
      {
        term: "ZKP reputation",
        id: "zkp-reputation",
        def: "Prove a predicate (access band, domain standing, clean-in-epoch, vote eligibility) without dumping a dossier on a till. Chip, not photocopy. Not hermit invisibility — looking at someone’s graph is allowed and is itself a DAG vertex. Silent stalking is the failure mode. Unmask still wants cause + a DFAO vote.",
      },
      {
        term: "Digital Autarky",
        id: "digital-autarky",
        def: "Intelligence, identity, and local context stay at the edge. The network is a handshake, a claim schema, and a DAG — not a supermind. Company login means company tether. Own hardware is how you stay unknown. Edge intelligence unveils only the ZKP the equation needs. Chip, not photocopy.",
      },
      {
        term: "Not a panopticon",
        id: "not-a-panopticon",
        def: "A panopticon is one tower that sees every diary. A surveillance state is a central log you cannot opt out of. This has neither. PSLL is a file on your disk. The network sees a proof — yes or no — not the file. Chip, not photocopy. Looking writes a vertex. Silent fetch is a detectable act. extropyengine.com is a website, not a watchtower and not a host for the Engine.",
      },
      {
        term: "DID",
        id: "did",
        def: "Decentralized Identifier. You do not apply. First boot of a node writes a keypair on that box. The name is did:key — W3C, derived from the public key, no registrar. Backup the file. Lose it and you are a new node; standing does not teleport. did:web is optional. Microsoft and Google are not how you get one. The DID is the name. A ZKP is what you show.",
      },
      {
        term: "Node",
        id: "node",
        def: "A machine running the Engine. Keys stay on the box. First boot writes a W3C did:key (Ed25519) to disk — no registrar. LAN talks node to node. WAN is TLS plus a signed handshake. Hostinger is not a node. One captured node can lie about itself. It cannot silently rewrite a neighbor's DAG — other nodes check signatures and causal parents.",
      },
      {
        term: "The pipe",
        id: "the-pipe",
        def: "TCP or QUIC. Packets already move. Don't invent a new transport. Web3 reinvented discovery and gossip-as-truth. This overlay is different: LAN first, internet as exception, proof not payload, looking writes a vertex, causal DAG not a block lottery. Today: HTTPS + Ed25519 signed hello. libp2p + Noise later is still the pipe.",
      },
      {
        term: "LAN-first",
        id: "lan-first",
        def: "Next door talks node to node. No DHT required for neighbors. The internet is there so you can reach people who aren't next door. Keys stay on the box.",
      },
      {
        term: "Sybil",
        id: "sybil",
        def: "Spinning many cheap identities. did:key is cheap on purpose. KYC is not the defense. Standing costs work. A new DID has no XP, no IT, no vote weight. Unique-in-DFAO ZKP is how one person does not vote fifty times in the same room. F punishes farmed loops.",
      },
      {
        term: "DFAO",
        def: "Decentralized Fractal Autonomous Organization. Not “feedback-aware.” A DFAO at one scale is made of DFAOs at the scale below. Same loop (post, do, confirm). Scale labels — NANO, MICRO, MESO, MACRO, PLANETARY — are suggested rule sets, not membership caps. Seven is not a law.",
      },
    ],
  },
  {
    heading: "Records and meters",
    entries: [
      {
        term: "Record",
        id: "record",
        def: "A unique signed vertex on the ledger. One of one. Closed loop, CAT stamp, lane claim, complaint, EP at the till. Same job as what people meant by non-fungible token, without the Ethereum mouth. Not a bag.",
      },
      {
        term: "Meter / standing",
        id: "meter",
        def: "A number over records. XP remaining, L, IT weight, CT standing. Not a collectible. Not transferable. You do not hold “an XP.” You have standing that closed-loop records produced, and it leaks.",
      },
      {
        term: "XP",
        id: "xp",
        def: "Standing meter. The letters are XP. That is the name. Not Extropy Points. Not Experience Points as a brand. ΔS is the entropy reduction. XP is a measurable proxy to that ΔS on the ledger. Minted on verified ΔS > 0. Cannot be purchased or transferred. You do not spend it — access economy. Decays ~1%/month of what is left. Half-life ~69 months.",
      },
      {
        term: "ΔS is not XP",
        id: "delta-s-vs-xp",
        def: "ΔS is the reduction. XP is the ledger’s stand-in for that reduction after the mint formula. Saying “XP measures entropy reduction” skips the proxy. The trial is: same formula, same graph, comparable bits-equivalent. The number moves if later data says the proxy was wrong.",
      },
      {
        term: "EP — Emergent Product",
        id: "emergent-product",
        def: "Till spark. What happens at the register, not a currency. EP = XP × L. Born and burned in the same sale. May discount the fiat ticket. No 1:1 to cash. Cash cannot mint XP. Not entropy points. Not Epistemic Proof. Product is the math: a product of XP and L.",
      },
      {
        term: "CT — contribution standing",
        id: "ct",
        def: "Meter. What you have actually put into this door. Feeds L at the till. Not purchased with XP. Separate so a pile of XP cannot buy the room. Not a Contribution Token bag.",
      },
      {
        term: "CAT — Category",
        id: "cat",
        def: "Skill record. Unique. (DID, lane, level, settled count, issuer). Are you qualified to do this, and at what level. Peers already holding CAT in that lane sign. Patients do not mint it. Not a pile. Mentorship is not +0.1 CAT. An off-system license can be opening evidence for a CAT record (issuer = the old board). That is the door, not the house.",
      },
      {
        term: "Overlay",
        id: "overlay",
        def: "You convert an existing civilization. You do not found a new one. Shops, licenses, neighborhoods, the handshake already on the wire. The Engine is a layer: both-edges, contest, leak, DAG. Imported credentials are opening CAT records, contestable. After that, this graph is what continues.",
      },
      {
        term: "IT — influence standing",
        id: "it",
        def: "Meter. Weight for work that actually moves other people — governance, demonstration. Not Insight Token. Obscure private labor still mints XP. It does not mint the same IT unless influence is the job. Decays ~5%/month if you vanish. Knob.",
      },
      {
        term: "Lane",
        id: "lane",
        def: "Skill specialization. Dentistry, folding, this till. CAT lives here. Claiming a lane is a signed vertex (DID, lane, time, issuer), contestable, not a dropdown. Do not call this “domain.” Domain is the eight entropy instruments — a protocol enum, not minted.",
      },
      {
        term: "DT",
        id: "dt",
        def: "Retired as a bag. Old copy said Domain Token or Decay Token. Expertise is CAT-per-lane. The leak is already on XP (0.99ⁿ). If the letter survives it is only as a unique lane-claim record — minted when a loop closed, not a Domain Coin.",
      },
      {
        term: "EP — Epistemic Proof",
        id: "epistemic-proof",
        def: "Proof-layer record: a claim that survived an adversarial cycle. Unfortunate collision with Emergent Product. This one does not buy milk.",
      },
    ],
  },
  {
    heading: "The Eight Canonical Domains",
    entries: [
      { term: "Physical", def: "Thermodynamic ΔS. Measured in J/K and normalized." },
      { term: "Informational", def: "Shannon entropy reduction. Measured in bits." },
      {
        term: "Biological",
        def: "Reduction in disorder within living systems (homeostasis, repair, niche construction).",
      },
      {
        term: "Cognitive",
        def: "Reduction of uncertainty in a modeling agent. Measured via predictive accuracy gains.",
      },
      {
        term: "Social",
        def: "Reduction of coordination friction in groups. Measured by verifiable drops in transaction cost.",
      },
      {
        term: "Economic",
        def: "Reduction of allocative waste. Measured by verifiable efficiency gains across exchanges.",
      },
      {
        term: "Computational",
        def: "Reduction in algorithmic disorder (compression, optimization, proof). Measured in normalized units.",
      },
      {
        term: "Governance",
        def: "Reduction of decision-making entropy under transparent, falsifiable rules.",
      },
    ],
  },
  {
    heading: "XP Mint Formula",
    entries: [
      {
        term: "XP = R × F × ΔS × (w · E) × log(1/Tₛ)",
        id: "xp-formula",
        def: "Canonical mint, v3.1.2, packages/xp-formula. Reputation never enters the XP formula. This is the thing that runs. The floor below is the irreducible form of this line — a compression, not a second theory.",
      },
      {
        term: "XP ≥ ΔS / cₗ²",
        id: "irreducible-floor",
        def: "The irreducible form. Pedagogical compression of the canonical mint — same job as E = mc² relative to E² = (pc)² + (mc²)². It is not the theory. Alone it has no experiment, no mint, and no lose-condition. It is a rest-frame slogan so you can point at the floor without reading the paper out loud. Scoring this line as if it were the Engine is a category error. Structural analogy, not a new physics law. Untested is not the same as not physics. The audit loop is the test; the slogan is not supposed to survive a calorimeter.",
      },
      {
        term: "R — Rarity",
        def: "Action-class scarcity / base difficulty. Property of the loop, not the actor. Range [0.1, 10]. Not reputation.",
      },
      {
        term: "F — Frequency of Decay",
        def: "Diminishing returns for repeating this action class. 1.0 the first time. F is not falsifiability.",
      },
      {
        term: "ΔS",
        def: "Verified entropy reduction. Must be strictly positive. A proxy we fine-tune as data arrives — not a promised constant for “mowing a lawn.” Words drift. The number should too, honestly.",
      },
      {
        term: "w · E",
        def: "Weight vector dotted with the effort / eight-domain vector. Where cross-domain terms (gas, ozone, alternative trips) actually accumulate. The glass of water lives here — not in a vibe.",
      },
      {
        term: "Tₛ — slam window",
        id: "ts",
        def: "Not recency decay. Not the 0.99ⁿ leak. Tₛ = exp(−λ min(Δt, Δt_cap)). Then log(1/Tₛ) = λ·clip(Δt). Instant confirm (Δt → 0) → Tₛ = 1 → log = 0 → XP = 0. That is slam-shut, on purpose. Stalling past the action-class cap does not print more. Δt_cap is a knob; default is the class’s expected duration (quest grain 2–5 min unless the class says otherwise). Do not rewrite this as log(1+1/Tₛ) to make Tₛ=1 nonzero. That undoes the anti-farm.",
      },
      {
        term: "Three clocks",
        id: "three-clocks",
        def: "Do not mash them. (1) Tₛ — this loop’s elapsed time, slam-shut at 0, capped so wait-farming dies. (2) F — repeating the action class pays less. (3) 0.99ⁿ — standing leak after settlement, ~1%/month of remaining, half-life ~69 months. Settle window is a fourth, different job: provisional → standing. IT’s ~5%/month is a fifth, on voice, not XP.",
      },
      {
        term: "Late mint",
        id: "late-mint",
        def: "A closed loop is not the last word. The long-horizon mechanism that still has weight is this one: later domains converge, a new vertex cites the old one, a huge ΔS shows up — Nobel, a society-scale fix — and the original vertex can mint a delta. Not a second full paycheck. Ordinary work thirty years on has already leaked to dust on the 0.99ⁿ curve; that is not the story. Citation-gated. Settled is not sacred.",
      },
      {
        term: "Citation-gated credit",
        id: "citation-gated",
        def: "The graph does not walk the light cone. Infinite downstream is a story about the universe, not a query the protocol runs. Late mint only fires if a new vertex exists that names causal parents and hangs evidence — the autobiography that cites the teacher, not a crawler assigning every butterfly. No citation, no edge, no XP. DAG curators keep that from becoming a hairball. How much of a later ΔS flows back how many hops is a knob for Codex 3.0, not a frozen fraction. Bound: asserted edges only, proxy delta only, confirm path still applies.",
      },
      {
        term: "Late burn",
        id: "late-burn",
        def: "Same machine as late mint, the other direction. A later-revealed harm, cited, can mark the vertex BURNED and slash remaining dust plus any new delta that sat on that citation. Scope is the vertex and citation-gated children, not the whole wallet. You do not claw back what decay already ate. Ordinary remaining pile at 30 years is ≈ 2.7% of that mint — bookkeeping, not a sword over a lawn. False late-burn can burn the accuser. A ratchet that only adds is a church.",
      },
      {
        term: "XP decay",
        id: "xp-decay",
        def: "Treadmill, not a court. ρ ≈ 1% of the remaining pile per ~30 days (knob). Remaining after n months: 0.99ⁿ. Half-life ≈ 69 months (~50%). ~1 year ≈ 89%. ~8 years ≈ 38%. ~20 years ≈ 9%. ~30 years ≈ 2.7%. Never zero in the reals — map seam, not a fuse. Dust floor on a machine. You keep minting or the pile fades. Late mint is the decades-later mechanism that can still move a number (huge cited ΔS). Late burn of ordinary remaining dust is not a headline.",
      },
      {
        term: "The glass of water",
        id: "glass-of-water",
        def: "Textbook move: a glass is worthless next to a stream and priceless in a desert, therefore value lives in the head, therefore ΔS cannot be value. The trick is isolation. They hold the glass still and move the story around it, then call the story subjective. Next to a stream versus in a desert the coupled system is not the same object — body water, time-to-next-source, search cost, biological disorder, alternatives, who else is dying. That is w · E across domains, not a feeling painted onto unchanged physics. A dehydrated organism is a different thermodynamic situation. Distance to the next drink is a different informational and physical state. Marginal willingness-to-pay maps an isolated commodity. It does not measure the mesh. If the debate stops at the glass, the system never got opened.",
      },
    ],
  },
  {
    heading: "Proof Layer",
    entries: [
      {
        term: "Falsifiable Claim",
        def: "A statement whose truth conditions can be checked by independent measurement. Required input for IT and EP.",
      },
      {
        term: "Adversarial Cycle",
        def: "The structured attempt to break a claim. Surviving claims mint EP; broken claims are recorded as failed proofs (also valuable).",
      },
      {
        term: "Failure Surface",
        def: "The explicit, published set of conditions under which the system fails. Required for any canonical module. A system that hides its failure conditions is a religion. One that exposes them is engineering.",
      },
    ],
  },
  {
    heading: "Names",
    entries: [
      {
        term: "Lladnaros / Extropy / Sorandall",
        id: "names",
        def: "Lladnaros is Randall backwards, more or less. Extropy is the measurable inverse of entropy. Sorandall is the palindrome. Speech-to-text eats them. The names are the work — they are not a menu item. A repair page exists at /say if a model keeps mangling them. Last stop, not a door.",
      },
    ],
  },
];

export type Problem = {
  section: string;
  hardness: "HARD" | "ACTIVE" | "OPEN";
  title: string;
  body: string;
};

export const openProblems: Problem[] = [
  {
    section: "Measurement",
    hardness: "HARD",
    title: "Cross-Domain Entropy Measurement",
    body: "How do you compare entropy reduction in farming versus software versus teaching versus art? The Entropy Scaling Function (ESF) must normalize across radically different domains without imposing a single metric that Goodharts itself. No satisfactory universal ESF exists yet.",
  },
  {
    section: "Measurement",
    hardness: "HARD",
    title: "Opening-condition disagreement",
    body: "A kitchen looks clean to one person and disordered to another. That is the opening condition, not the attractor, and it is not the observer effect. Schrödinger’s cat was a reductio against applying quantum recipes at cat-scale. Quantum does not apply to the macro. The bet here is a weighted eight-domain DAG: like-cases stack, ZKPs unveil only what the equation needs, and a number that keeps surviving without negative feedback moves the needle less. Landauer is the claimed conversion for social/cognitive events (information erased has a heat floor) into a bits-equivalent proxy — not a metaphor, and not a frozen joule for a quarrel. Unsolved: whether convergence of the graph is calibration of a physical quantity, or a folk taxonomy that got dense and stable. That unsolved is a research problem, not a reason to recant the sentence, and not a license to start a show with wavefunction collapse.",
  },
  {
    section: "Measurement",
    hardness: "ACTIVE",
    title: "Local vs. Global Entropy",
    body: "Air conditioning reduces local entropy (cool room) while increasing global entropy (waste heat, energy generation). Every local entropy reduction has externalities. The framework needs boundary condition logic that accounts for net system-wide effects. Current approach: nested boundary analysis with recursive scope expansion.",
  },
  {
    section: "Validation",
    hardness: "ACTIVE",
    title: "Adoption Density, Not Validator Priesthood",
    body: "“Who validates the first validators?” overstates the problem. LocalFlow is the errand face: rides, food, the car you don’t have. Confirmation closes the loop. SignalFlow is how the ΔS gets proposed — assistant + PSLL + evidence, not a self-score. Remaining constraint is density: enough people in the same zone to pick the work up. Unsolved: how thin a local graph can get before neglected-work escalation is not enough.",
  },
  {
    section: "Validation",
    hardness: "ACTIVE",
    title: "Micro Overselling and MACRO Coordination",
    body: "A MICRO can puff a lawn. A MACRO that treats those numbers as gospel will drift. That pressure is real and is not denied. The stronger answer is not “people are honest.” It is the DAG as instrument: SignalFlow proposes ΔS, evidence hangs on the vertex, like-cases get referenced, DAG curators (paid in XP) keep the graph navigable, ZKPs keep the diary at the edge, settle/decay/late-burn still apply, votes stay in the DFAO. Unsolved: whether a dense graph of surviving interpretations is calibration, or a popular story with better footnotes. Also unsolved: purchased anonymized backlogs as training fuel vs contamination from the extractive systems that made them.",
  },
  {
    section: "Validation",
    hardness: "ACTIVE",
    title: "AI Validator Recursion",
    body: "If AI systems validate entropy reduction, and AI systems are themselves subject to alignment failures, you get a recursive trust problem. The current architecture uses a three-layer model (human + AI + physical sensor) but the interaction dynamics between layers are not fully formalized.",
  },
  {
    section: "Validation",
    hardness: "OPEN",
    title: "Validation Latency",
    body: "Some entropy reduction is only visible over long time horizons (planting a forest, educating a child, writing a foundational paper). The system needs temporal validation mechanisms that don't penalize slow-burn contributions or reward short-term manipulation.",
  },
  {
    section: "Governance",
    hardness: "ACTIVE",
    title: "DFAO Power Concentration",
    body: "If authority flows to top entropy reducers, does this create a new elite that entrenches itself? Decay on influence and role rotation are the current approach. Fractal scale is the other: a MACRO that tries to act like a MICRO chat will choke; a MICRO that pretends to be PLANETARY will capture. Defaults change with scale. Caps do not. Unsolved: whether nested DFAOs actually prevent concentration or just hide it one layer down.",
  },
  {
    section: "Governance",
    hardness: "OPEN",
    title: "Cultural Resistance",
    body: "Institutions that have been Goodharted for decades will resist transition to entropy-based metrics because it threatens existing power structures. The framework has no built-in mechanism for peaceful adoption at institutional scale. This is a political problem, not a technical one.",
  },
  {
    section: "Economics",
    hardness: "HARD",
    title: "XP and Existing Markets",
    body: "How does a non-transferable, non-speculative value unit interact with existing monetary systems? XP cannot replace money overnight. The bridge mechanics between entropy-based value and market-based value are underspecified.",
  },
  {
    section: "Economics",
    hardness: "OPEN",
    title: "Incentive Gaming at Scale",
    body: "At sufficient scale, sophisticated actors will find ways to game entropy metrics just as they game every other metric. The framework's defense is recursive auditing, but the cat-and-mouse dynamics at civilizational scale are unpredictable.",
  },
  {
    section: "Experiments",
    hardness: "HARD",
    title: "ΔS calibration",
    body: "Take a hundred identical real tasks. Independent observers and models estimate ΔS. Watch downstream effects. Measure prediction error → correction → convergence. If the proxy does not get cheaper to keep wrong, the architecture failed. This is the first empirical test. Not the slogan.",
  },
  {
    section: "Experiments",
    hardness: "HARD",
    title: "Farming resistance",
    body: "Assume everyone is trying to manufacture XP. Attack R (split one job into 400 fake-rare classes), F, slam-shut Tₛ, confirmation, bilateral agreement, evidence, late burn. The formula will not catch rarity-splitting. The DAG has to see one underlying operation. If the graph cannot, F and Tₛ are furniture.",
  },
  {
    section: "Experiments",
    hardness: "HARD",
    title: "L as an extraction machine",
    body: "If L turns standing into a till spark, a captured DFAO might juice L and harvest EP. The lock: L is live rank against house load, both edges accept, coefficient public, cash cannot mint XP, fridge does not lock. Test whether a house can still extract. This is the economic attack, not a philosophy problem.",
  },
  {
    section: "Experiments",
    hardness: "ACTIVE",
    title: "Late discovery / late mint",
    body: "Ordinary work mints a small proxy. Twenty years later the work was vastly more important. Late mint is citation-gated, proxy delta only, not a second full paycheck. Simulate it. If it becomes a retroactive windfall, the bound failed.",
  },
  {
    section: "Experiments",
    hardness: "HARD",
    title: "Cross-domain (w · E) as a political knob",
    body: "Lawn, ride, ozone, mediation do not share a constant. The vector is the claim. Demonstrate that it improves predictions rather than becoming a tunable vote. If w moves with faction, not with evidence, the DAG is a sermon.",
  },
  {
    section: "Philosophy",
    hardness: "OPEN",
    title: "Is-Ought Bridge",
    body: "The framework derives value from physics (entropy reduction is good). This is a naturalistic claim that may not survive philosophical scrutiny. Can you derive an ought from an is? The framework's response: entropy reduction is not claimed to be morally good in all cases — it is claimed to be a better measurement anchor than any existing alternative. The justification is pragmatic, not metaphysical.",
  },
];

export const exercises = [
  {
    n: 1,
    title: "Entropy Audit a Room",
    time: "15 minutes",
    body: "Pick one room in your house. Stand in the doorway and identify every source of entropy: things out of place, broken items, unused objects, tangled cables, expired food, redundant tools, unclear storage.\n\nNow pick the three highest-entropy items and fix them. Put them away, repair them, or throw them out.\n\nWhat you'll feel: The room will look the same to a casual observer. But you'll know the entropy dropped. That feeling — the gap between visible and measurable order — is what the Extropy Engine is designed to capture.",
  },
  {
    n: 2,
    title: "Compare Two Incentive Systems",
    time: "20 minutes",
    body: "Pick two systems you interact with daily: your job's performance review, your social media feed, your kid's grading system, your fitness tracker, your budgeting app.\n\nFor each one, ask: What does this system actually reward? Is the thing it rewards the thing it claims to value? Where is the gap?\n\nWhat you'll see: Every system you examine will have a gap between its stated purpose and its actual incentive structure. That gap is Goodhart's Law in action. The Extropy Engine is an attempt to close it.",
  },
  {
    n: 3,
    title: "Measure a Day in Entropy",
    time: "One day (background tracking)",
    body: "For one day, mentally tag every action you take as either entropy-increasing (creating disorder, wasting energy, adding noise) or entropy-reducing (organizing, building, teaching, repairing, clarifying).\n\nDon't try to optimize. Just observe. At the end of the day, estimate: what percentage of your actions reduced entropy?\n\nWhat you'll learn: Most people find that the majority of their daily actions are entropy-neutral or entropy-increasing. The entropy-reducing actions are often the ones that feel most meaningful. That correlation is not a coincidence.",
  },
  {
    n: 4,
    title: "Redesign One Reward",
    time: "30 minutes",
    body: "Pick one reward system in your life (your team's KPIs, your household chore chart, your kid's allowance, your own todo list). Redesign it so that it rewards measurable entropy reduction instead of proxy completion.\n\nExample: Instead of rewarding “did you clean your room?” (binary proxy), reward “what specific entropy did you reduce and how can we verify it?” (measurable reduction).\n\nWhat you'll discover: The redesigned system will feel harder to game and more satisfying to complete. It will also surface disagreements about what counts as valuable work — which is exactly the conversation the Extropy Engine is designed to structure.",
  },
  {
    n: 5,
    title: "Find the Drift",
    time: "15 minutes",
    body: "Pick one institution you're part of (employer, school, church, club, government body). Ask: What was this institution originally created to do? What does it actually optimize for now? Where did the drift happen?\n\nBonus: Can you identify the specific metric or incentive that caused the drift?\n\nWhat you'll understand: Institutional entropy is not inevitable. It follows a predictable pattern of proxy substitution. Once you see the pattern, you can't unsee it. And you'll understand why the DFAO model exists.",
  },
];

export const proofLayers = [
  {
    n: 1,
    name: "Observable Now",
    subtitle: "Things That Exist",
    body: "Implemented, deployed, or published. Verifiable by anyone today.",
    items: [
      "Extropy Engine prototype (live web application)",
      "Three published studio albums and 14 singles on major streaming platforms",
      "Published book Unf*ck the World for a Dollar (PDF, EPUB, audiobook)",
      "Technical specification Extropy Codex v2.1 (Comprehensive Edition)",
      "Academic papers on Academia.edu",
      "DAG Architecture Breakdown (published)",
      "GitHub source repositories",
      "This website and its documentation layer",
    ],
  },
  {
    n: 2,
    name: "Prototype",
    subtitle: "In Development",
    body: "Active builds with code, architecture documents, and working components. Not production-ready.",
    items: [
      "XP-Net — DAG-based Layer 1 with entropy-anchored governance",
      "XP-DAG-Mesh — Physics-anchored DAG with entropy-weighted consensus",
      "Universal Times — Hydrogen-anchored dual-system timekeeping",
      "Master Control Hub — Unified orchestration platform",
      "HomeFlow — household / building DFAO (packages/homeflow)",
      "LocalFlow — errand matchmaking (packages/localflow)",
      "Quest market — 2–5 min grain (packages/quest-market)",
      "GrantFlow — discovery + proposer",
      "LevelUp Academy — adaptive learning",
      "Extropialingo — language loops",
      "SignalFlow — claim routing, not the whole Engine",
      "Identity / did:key — first boot on the box",
      "Universal Times — Hydrogen-anchored dual-system timekeeping",
      "Emergence Detector — ESP32 hardware device",
      "Whiteroom.exe — Classified build",
    ],
  },
  {
    n: 3,
    name: "Architecture",
    subtitle: "Designed But Not Built",
    body: "Specified architecturally with defined interfaces, protocols, and data models. No running code yet.",
    items: [
      "Entropy Scaling Function (ESF) cross-domain normalization",
      "Multi-layer validation architecture (human + AI + sensor)",
      "DFAO governance protocol with auto-sunsetting policies",
      "XP-to-existing-market bridge mechanics",
      "Temporal validation for long-horizon entropy reduction",
    ],
  },
  {
    n: 4,
    name: "Hypothesis",
    subtitle: "Theoretical Claims",
    body: "Falsifiable hypotheses the framework depends on but has not proven at scale.",
    items: [
      "Entropy reduction is a universal, cross-domain measure of value",
      "Emergence follows formalizable patterns",
      "Coherence is measurable and predictive of system health",
      "Recursive self-auditing systems resist Goodharting better than static metrics",
      "DAG convergence can bound opening-condition disagreement enough for practical coordination",
    ],
  },
  {
    n: 5,
    name: "Frontier",
    subtitle: "Speculative Extensions",
    body: "Ideas that follow from the framework but are not formalized enough to test.",
    items: [
      "Glyphic emergence: symbolic encoding of entropy reduction patterns",
      "Consciousness as measurable entropy reduction at the neural level",
      "Civilization-scale coordination through entropy-anchored DAG governance",
      "Multi-planetary timekeeping anchored to hydrogen transition frequencies",
    ],
  },
];
