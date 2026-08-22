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
  title: "Start Here",
  lead: "You don't need to understand the whole system to use it. Pick the door that matches your frustration. The framework will meet you where you are.",
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
          "An agent (person, org, AI) performs an action.",
          "Validators assess whether entropy was reduced.",
          "The reduction is quantified and recorded on a DAG (directed acyclic graph).",
          "XP (extropy points) are issued proportional to verified reduction.",
          "XP cannot be transferred, only earned. No speculation. No inflation.",
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
        text: "The remaining problem is not “who validates.” Validation is a task: post work that pays XP, people do it. Bias and AI-recursion still matter at the slice level (human + AI + physical measurement), but that is an accuracy problem, not a priesthood problem. What still has to be proven is density — enough people in range to pick the tasks up.",
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
        text: "The Extropy Engine proposes a different governance architecture: the Decentralized Feedback-Aware Organization (DFAO). Instead of static hierarchies with proxy metrics, DFAOs use:",
      },
      {
        type: "ol",
        items: [
          "Entropy auditing — continuous measurement of whether the organization is actually reducing entropy in its domain.",
          "Adaptive feedback loops — governance rules that automatically adjust when entropy metrics diverge from mission targets.",
          "Role fluidity — authority flows to whoever is demonstrably reducing entropy, not whoever holds a title.",
          "Falsifiable mandates — every policy has explicit failure conditions. If the conditions are met, the policy auto-sunsets.",
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
        text: "If you work inside an institution and feel the drift, this framework gives you language and architecture to name it and propose structural alternatives. You don't need to adopt the whole system. Start by asking: what would our organization look like if we measured actual entropy reduction instead of proxy metrics?",
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
        text: "The entropy-as-value thesis is falsifiable, and that's by design. If entropy reduction cannot be reliably measured across domains, the framework breaks. If local entropy reduction consistently produces global entropy increase (the air conditioning problem), the framework needs boundary conditions it doesn't yet have. If observer-dependence in measurement creates irreducible subjectivity, the physical grounding claim weakens. These are active research problems.",
      },
    ],
  },
};

export type GlossaryEntry = { term: string; def: string };

export const glossarySections: { heading: string; entries: GlossaryEntry[] }[] = [
  {
    heading: "Core Concepts",
    entries: [
      {
        term: "Entropy",
        def: "Disorder. Wasted energy. Lost signal. Unused potential. The measurable quantity of disorder in a given system at a given time. Not used as: a metaphor for chaos or a philosophical mood.",
      },
      {
        term: "Extropy",
        def: "The measurable inverse of entropy. The degree to which a system moves from disorder toward structured complexity.",
      },
      {
        term: "Entropy Reduction (ΔS)",
        def: "The act of creating order from disorder, verifiably. ΔS must be strictly positive for XP to mint. Measured in domain-native units (J/K, bits, normalized scalars) and normalized before cross-domain aggregation.",
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
        def: "Any entity that measures or interacts with a system, acknowledging that observation changes the system.",
      },
      {
        term: "Recursion",
        def: "A process that references itself. Used to enforce system self-auditing.",
      },
      {
        term: "LocalFlow",
        def: "The current bootstrap and validator solution. A free local driver/errand DFAO: post a task, someone nearby does it, you confirm. That confirmation closes the loop and mints provisional XP. Users never see protocol terms. Remaining constraint is subscriber density in a zone, not a validator priesthood.",
      },
    ],
  },
  {
    heading: "The Six Canonical Tokens",
    entries: [
      {
        term: "XP — Extropy",
        def: "The base unit. Minted only on verified entropy reduction (ΔS > 0). Cannot be purchased, transferred, or fabricated. Substrate of all higher tokens.",
      },
      {
        term: "CT — Coherence Token",
        def: "Minted when a system demonstrates sustained internal coherence across recursive cycles. Tracks alignment between stated goals and measured outputs.",
      },
      {
        term: "CAT — Coordination Action Token",
        def: "Minted on verified multi-agent coordination producing aggregate ΔS greater than the sum of individual contributions. Rewards cooperative entropy reduction.",
      },
      {
        term: "IT — Insight Token",
        def: "Minted on novel falsifiable claims that are subsequently corroborated by independent measurement. Replaces any prior “knowledge” or “truth” token language.",
      },
      {
        term: "DT — Decay Token",
        def: "Negative-pressure token. Accrues against XP holdings on a frequency-of-decay schedule (F). Prevents hoarding; forces continued participation. F is frequency-of-decay, not falsifiability.",
      },
      {
        term: "EP — Epistemic Proof",
        def: "Minted when a claim survives an adversarial falsification cycle within the Proof Layer. Non-transferable. Records that a proposition was tested and not broken.",
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
        term: "XP = ΔS · C · R · (1 / F)",
        def: "Canonical mint formula. Reputation never enters the XP formula.",
      },
      {
        term: "ΔS",
        def: "Verified entropy reduction in normalized domain units. Must be strictly positive.",
      },
      {
        term: "C — Coherence Factor",
        def: "Measured alignment between declared intent and measured output across the cycle. Range [0,1].",
      },
      {
        term: "R — Rarity",
        def: "Scarcity weighting of the entropy-reduction event across the network. Range 0.1–10.0. R is rarity, not reputation.",
      },
      {
        term: "F — Frequency of Decay",
        def: "Schedule controlling DT accrual against the minted XP over time. F is not falsifiability.",
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
    title: "Observer-Dependent Measurement",
    body: "Entropy reduction is observer-relative. A kitchen looks clean to one person and disordered to another. Physical measurements (temperature, molecular arrangement) are more objective but don't capture all forms of meaningful entropy reduction (conceptual clarity, emotional regulation, social coordination). Where is the boundary?",
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
    body: "“Who validates the first validators?” overstates the problem. LocalFlow is the current answer: a free local errand/ride network. You post a task, someone nearby does it, you confirm. That confirmation is the loop — LOOPOPEN → LOOPCLOSE → provisional XP. No special validator caste, no platform fee, users never see the protocol. What remains is density: enough people in the same zone to pick the work up. Unsolved: how thin a local graph can get before neglected-work escalation is not enough.",
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
    body: "If authority flows to top entropy reducers, does this create a new elite that entrenches itself? The framework needs anti-concentration mechanisms that prevent meritocratic capture. Current approach: decay functions on accumulated influence, mandatory role rotation at threshold levels.",
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
      "HomeFlow — Physics-based household coordination",
      "LevelUp Academy — Adaptive learning with entropy reduction rewards",
      "Extropialingo — Gamified language learning",
      "SignalFlow — AI-enhanced task management",
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
      "Observer-dependent measurement can be bounded sufficiently for practical coordination",
    ],
  },
  {
    n: 5,
    name: "Frontier",
    subtitle: "Speculative Extensions",
    body: "Ideas that follow from the framework but are not formalized enough to test.",
    items: [
      "Glyphic emergence: symbolic encoding of entropy reduction patterns",
      "Recursive physics: observer-dependent formalism applied to fundamental forces",
      "Consciousness as measurable entropy reduction at the neural level",
      "Civilization-scale coordination through entropy-anchored DAG governance",
      "Multi-planetary timekeeping anchored to hydrogen transition frequencies",
    ],
  },
];
