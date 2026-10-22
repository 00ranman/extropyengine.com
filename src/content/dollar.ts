/**
 * The Dollar: the $1/month supporter page at /dollar.
 *
 * STRIPE SWAP POINT: when the Stripe account is connected, paste the two
 * Payment Link URLs into the constants below. Nothing else changes: the
 * checkout buttons on /dollar go live automatically when a URL is present
 * and render in a disabled "checkout opens soon" state while it is empty.
 */
export const dollarCheckout = {
  /** $1/month plan, paid by bank account (ACH). Main door. */
  monthlyAchUrl: "https://buy.stripe.com/test_8x24gzeuA8qvdsh4nl1B601",
  /** $12/year plan, paid by card. */
  yearlyCardUrl: "https://buy.stripe.com/test_5kQ9AT5Y49uzfAp6vt1B600",
} as const;

export const dollarPage = {
  kicker: "The ask",
  title: "Unfuck the World for a Dollar",
  lead: "One dollar a month, from ten thousand people, and I quit the day job and build the Extropy Engine full time. That is the whole funding model. No investors. I do not want investors.",
  spotifyArtist: "https://open.spotify.com/artist/0A1tRZXeo8dFeEWFycvjUV",
} as const;

export type DollarSection = {
  heading: string;
  paragraphs: readonly string[];
};

export const dollarWho: DollarSection = {
  heading: "Who is asking",
  paragraphs: [
    "By day I bury wire and train dogs for a living. Field work, twelve hour days. The rest of my time goes into two things that are really one thing: I make music as Lladnaros, and I am building the Extropy Engine.",
    "The Engine is a system where the work you actually do for people around you stops evaporating. Right now you help your neighbor, you fix something, you show up, and it is gone. Nobody counts it, it buys you nothing. The Engine counts it, verifies it, and turns it into standing you can actually use. Unfucking the world, one closed loop at a time, instead of just yelling about how fucked it is online.",
  ],
};

export const dollarMoney: DollarSection = {
  heading: "Where the dollar goes",
  paragraphs: [
    "The first few thousand subscribers cover my bills. That is the unglamorous part and it is the whole unlock, because right now the project gets whatever is left of me after a twelve hour day. Ten thousand people is the job quit and this built every day instead of in the cracks.",
    "Everything past that funds research and development. Nodes, standing in the places the current system writes off, set up for the people living there to run themselves. Start with homeless communities: they get the node, they run LocalFlow on it, and the work they already do for each other starts counting for something. Their labor stops evaporating first, because theirs evaporates hardest.",
    "The nonprofits that already exist and are already doing the work get access donated. The ones who adopt it set up as their own operations, part of the mesh. Not underneath me. Nobody is underneath anybody in a mesh. That is the whole point of building it this way.",
  ],
};

export const dollarMath: DollarSection = {
  heading: "The math is stupid small",
  paragraphs: [
    "Ten thousand people sounds like a crowd until you put it against the country. It is three thousandths of one percent of America. One person in every thirty-four thousand. I do not need one percent of anybody. I need one person in every thirty-four thousand to shrug and say, fuck it, why not.",
    "You spend more than a dollar on a gas station drink you forget in the truck. This dollar has an address.",
  ],
};

export const dollarFinePrint: DollarSection = {
  heading: "The fine print, said out loud",
  paragraphs: [
    "This is a for-profit operation, not a charity, and I am not starting a nonprofit. Deliberately. I am not spending my life jumping through compliance hoops to prove I am allowed to help people. This stays for profit, I run it how I see fit, and then I do the decent thing with it.",
    "A subscription here is not a tax-deductible donation. Nobody should sign up expecting a deduction. It is a dollar a month pointed at a project, with receipts.",
    "If the mesh works, the money past my bills becomes seed capital for nodes. And if I am wrong, if the Engine never works and it is all a dead end, you lost a dollar a month finding out. One dollar. You have lost more than that in your couch.",
  ],
};

export const dollarCheckoutCopy = {
  heading: "Set the dollar",
  lead: "Two doors, same dollar. Pick the rail, the rest is automatic, cancel anytime.",
  monthly: {
    name: "$1 a month",
    rail: "Bank account (ACH)",
    body: "The main door. A bank debit costs less than a cent in fees, so nearly the whole dollar lands on the project. Every card rail in the country charges a thirty cent toll per transaction before the percentage even starts, and that toll is the entire reason everyone else's floor is five bucks. The bank rail is how a dollar stays a dollar.",
    button: "Subscribe: $1/month",
  },
  yearly: {
    name: "$12 a year",
    rail: "Card",
    body: "For people who would rather not link a bank account. One card charge a year, twelve dollars at a time, the toll paid once instead of twelve times. Same project, same standing offer: if I am wrong, you lost twelve bucks that year.",
    button: "Subscribe: $12/year",
  },
  pending:
    "Checkout is not open yet: the payment account is still being connected. When it finishes, these two buttons go live on this page and the ask starts.",
} as const;

export const dollarDoors: DollarSection = {
  heading: "Every door counts",
  paragraphs: [
    "No dollar to spare? Stream the music. It is on Spotify, YouTube, everywhere, under Lladnaros. Every stream pays a fraction of a cent, those fractions add up to project money, and it costs you nothing you were not already doing with your ears.",
    "Follow and subscribe everywhere you see the name. That is not vanity, those numbers are gates. The platforms do not let you turn on subscriptions and the real monetization until you cross their lines, and every follow is a brick toward the line.",
  ],
};
