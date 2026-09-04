import type { Track } from "./types";

const sp = (id: string) => `https://open.spotify.com/track/${id}`;
const spSearch = (q: string) =>
  `https://open.spotify.com/search/${encodeURIComponent("Lladnaros " + q)}`;
const am = (path: string) => `https://music.apple.com/us/${path}`;
const amSearch = (q: string) =>
  `https://music.apple.com/us/search?term=${encodeURIComponent("Lladnaros " + q)}`;
const yt = (id: string) => `https://music.youtube.com/watch?v=${id}`;
const ytSearch = (q: string) =>
  `https://music.youtube.com/search?q=${encodeURIComponent("Lladnaros " + q)}`;

export const tracks: Track[] = [
  {
    slug: "kill-the-arc",
    n: 1,
    title: "Kill the Arc",
    thesis: "the arc as a reward function, not as narrative itself",
    year: "2025",
    release: "Single",
    part: "signal",
    loop: "open-on-purpose",
    loopLabel: "Loop left open on purpose",
    links: {
      spotify: sp("0WUTqbfHwhcVvyr5yXK2mj"),
      apple: am("album/kill-the-arc-single/1842964542"),
      youtube: yt("IK6dNgJERr0"),
    },
    lyricsKind: "full",
    lyrics: `You ever wonder why life feels scripted
Why you're stuck in loops, but the drama's encrypted
From birth, they gave you acts and arcs
Exposition, climax, fade to dark
They said that was storytelling
But really it's a training protocol... compelling
Every show, every flick, every tragedy you pick
Teaches conflict as currency: like tension's the trick
We're dopamine junkies in cinematic skins,
Chasing friction like oxygen, like it wins
Everyone out here with a war-arc grin
Protagonist mode with no villain within
Try to speak with no fight? You're ignored
Build something clean? They get bored
If you ain't got beef, they don't press play
No hook. No twist. Just fade away

You don't want peace: you want a plot twist
You don't want truth: you want a conflict
You don't want breath: you want a breakdown
Burn the arc
Kill the loop
Stop the act
Recursion ain't cute

They don't fix pain: they market it
They don't solve wounds: they target it
Got trauma? Cool. Make it merch
Rebrand your past into dopamine church
It's not healing, it's content fuel
You're not whole: you're just algorithm-cool
Rewrite your scars with cinematic flair
And wonder why the world's on fire out there
It's the arc that's lying
It's the template trying
Culture don't run on truth... it's story compliance
Feedback loops? Unseen
Emergence? Unclean
Unless it's got blood or a backstory scene

You don't want peace: you want a plot twist
You don't want truth: you want a conflict
You don't want breath: you want a breakdown
Burn the arc
Kill the loop
Stop the act
Recursion ain't cute

Reality don't give a damn 'bout arcs
It loops. It breathes. No theme parks
It don't need drama, it don't need sides
It builds from pattern, not scripted rides
No backstory needed for the tree to grow
No climax coming for the wind to blow
Order emerges without a tale
But that's boring, right? Doesn't scale
You want out
Kill the arc
Burn the script
Stop being a character in a goddamn skit
There's no climax. No resolution
Only recursion
Only recursion
Only...`,
    reading: [
      "The song names its target with unusual precision: “they gave you acts and arcs, exposition, climax, fade to dark,” then names the mechanism, “every show, every flick, every tragedy you pick, teaches conflict as currency, like tension's the trick.” This is not a vague complaint about drama. It is a claim about what gets rewarded. “If you ain't got beef, they don't press play.” Pain, once visible, is not repaired; it is merchandised: “they don't fix pain, they market it… rebrand your past into dopamine church.”",
      "Read against Dan McAdams's narrative identity theory — a coherent self built from an internalized, reconstructive life story rather than a fixed trait list — “kill the arc” cannot coherently mean the elimination of self-narrative. McAdams's empirical program treats narrative construction as a normal psychological process beginning in adolescence. The lyric supports a narrower and more defensible reading than “identity is a lie.” It is targeting one corrupted template: the platform-optimized, conflict-as-currency arc. Not narrative selfhood as such.",
      "The first paper treated the unfinished last line, “only recursion… only…,” as the track admitting it cannot cleanly exit the loop it names. That description is accurate as a description and wrong as a verdict. The song has already said “recursion ain't cute,” which is the interesting move: declaring yourself outside a script is itself a recognizable, marketable anti-script. Stopping mid-sentence is the only ending that does not immediately become another climax. The loop is left open on purpose. The Glitch Was Me, later in this paper, is where the catalog completes the sentence. Reading Kill the Arc as a failed exit is reading a module as if it were the whole machine.",
    ],
  },
  {
    slug: "no-filter-no-bs",
    n: 2,
    title: "No Filter, No BS",
    thesis: "the audit standard stated without apparatus",
    year: "2025",
    release: "Catalog track",
    part: "signal",
    loop: "closes",
    loopLabel: "Loop closes — as a method, not as a theorem",
    links: {
      spotify: spSearch("No Filter, No BS"),
      apple: amSearch("No Filter, No BS"),
      youtube: ytSearch("No Filter, No BS"),
    },
    lyricsKind: "full",
    lyrics: `I'm walkin' in, no script, no disguise
See the world through these unsanitized eyes
I don't dance around what's real and raw
Tearin' down walls with the truth as my law

No filter, no bullshit, I call it like I see
Not here to impress; I'm here to break free
From all the smoke and mirrors, I'm cuttin' to the bone
I'll pave my own path, do it on my own

Messy, unpolished, that's my game
I'm not here for comfort, I'm here to break chains
Don't need your approval, don't need your applause
I'm built on resilience, grit, and a cause

Give me the truth, the hard, and the real
I'm not just thinkin'; I'm here to feel
I'll push till it cracks, till it makes sense
A rebel with reason, a heart full of grit and defense

No filter, no bullshit, I call it like I see
Not here to impress; I'm here to break free
From all the smoke and mirrors, I'm cuttin' to the bone
I'll pave my own path, do it on my own

So here's to the broken, the ones who rebuild
We tear it all down, but we're here for the thrill
A spirit unchained, that's the way I'll roam
Carvin' my space, makin' my home`,
    reading: [
      "This is the shortest and least theoretically dressed track in the set, and the first paper was too quick to call that emptiness. “I don't dance around what's real and raw… don't need your approval, don't need your applause” is not a systems claim. It is the method of the catalog spoken in first person. Kill the Arc supplies the diagnosis of the applause loop. This track refuses to feed it. The Glitch Was Me will later reclaim the deficiency label this one already lives in: “here's to the broken, the ones who rebuild.”",
      "There is no scholarly match to force onto a track that is not making a checkable conceptual claim, and this paper still will not invent one. What close reading adds is placement. Unqualified authenticity is the naive version of a theme the surrounding tracks treat with more structural self-awareness. That is useful context, not a slight. A catalog that only ever speaks in systems vocabulary would be another costume. This is the uncostumed statement the rest of the work has to remain answerable to.",
    ],
  },
  {
    slug: "no-ones-lying",
    n: 3,
    title: "No One's Lying (and that's the problem...)",
    thesis: "distributed causation without a villain",
    year: "2025",
    release: "Single",
    part: "distortion",
    loop: "closes",
    loopLabel: "Loop closes",
    links: {
      spotify: sp("4zPgdIbEhDU7b5T73vKmpN"),
      apple: am("album/no-ones-lying-and-thats-the-problem-single/1844965914"),
      youtube: yt("txlhVPlWAMo"),
    },
    lyricsKind: "full",
    lyrics: `Stop lookin' for villains
The system don't need a face
No throne, no orders
Just recursive database
Bias baked in
Feedback tight like thread
Outputs echo inputs
'Til the signal's dead

Nobody typed the lie
The structure told it
Just incentivized hallucinations
The crowd re-scrolled it

No one lied
Nobody lied, but the system lied loud
Truth got crushed by the shape of the crowd
No hand pulled strings... just pattern design
If you're not breakin' the loop, you're feedin' the line
You're feedin' the line

Inputs rigged from last applause
Claps become the cause
Truth ain't welcome in a loop
That only wants what was

Algorithm don't know it's lying
It just optimizes trend
But every cycle's tighter now
So lies self-recommend

You want a villain?
Fine. It's momentum
Watch how fast falsehoods win
When there's no one to defend 'em

If lies emerge from noise
Then signal's just an echo
If loops converge on false
Then truth becomes a retro

You keep screaming "fake"
But it's too late to blame
The lie wasn't chosen
The structure just gave it a name

Nobody lied, but the truth still died
Recursive reward is a clever disguise
It don't take intent to distort what's real
It just takes a loop with a feedback seal
Break it or feed it... make up your mind
Truth ain't a fact, it's a loop that aligned`,
    reading: [
      "The opening is as disciplined as anything in the catalog: “stop lookin' for villains, the system don't need a face… nobody typed the lie, the structure told it.” The chorus states the thesis cleanly: “it don't take intent to distort what's real, it just takes a loop with a feedback seal.” Falsehood can propagate and self-reinforce without any single actor intending to lie. That is how a reinforcing feedback loop works: it amplifies an initial signal in the same direction across repeated passes, regardless of any single node's intent.",
      "What the lyric gets right, more precisely than most misinformation commentary, is the distinction between a lie, which requires intent, and a structurally reinforced falsehood, which does not: “algorithm don't know it's lying, it just optimizes trend.” “You want a villain? Fine. It's momentum.” That is not a shrug. It is a causal claim.",
      "The first paper called the closing demand — “break it or feed it, make up your mind” — the weakest line, because a distributed non-intentional loop would seem to make an individual's binary choice a small lever. Inside this song that line is the thesis, not the overreach. The same lever shows up later as a punk-recuperation argument, as a speech-protocol argument, and as a civic-recognition argument. Those are other recordings. Do not paste their verses here. The lever is small. It is also the lever that exists.",
    ],
  },
  {
    slug: "inside-the-machine",
    n: 4,
    title: "Inside the Machine",
    thesis: "from joke to sermon: recuperation as infrastructure",
    year: "2026",
    release: "Single",
    part: "distortion",
    loop: "closes",
    loopLabel: "Loop closes — on recuperation; historical labeling left open",
    links: {
      spotify: sp("7h6ReAuEbY9DBV0NdqH7FO"),
      apple: am("album/inside-the-machine/1876085436?i=1876085437"),
      youtube: yt("onI8jVtXwd0"),
    },
    lyricsKind: "full",
    lyrics: `Timeline says punk was always left wing
Like that settles it
Like history is a hashtag
And context fits in a bio

They point at Green Day
Say, see, always political
Convenient amnesia
Dookie wasn't a manifesto
It was kids with guitars and jokes
Before sermons
Before handlers
Before the stadium lights

They weren't punished for the message
They were punished for succeeding
That part always gets skipped

Because punk doesn't lose when it's censored
It loses when it sells

You can't win at punk
That's the rule they forget
If it works, it breaks
If it grows, it gets kept
They call it raging against the machine
From a sponsored stage
Teach a whole generation
That picking a side is a cage

Venues closed their doors
Not because the songs changed
Because the math did

Success exposed the contradiction
Anti-system doesn't scale
That's not ideology
That's mechanics
The moment you become legible
You become manageable
Rage Against the Machine
Was still rage inside the machine
Label checks cleared
Tours booked
Merch printed
Rebellion with inventory

You didn't overthrow power
You licensed the feeling

You can't win at punk
That's the built-in flaw
If it stays small, it's ignored
If it grows, it's absorbed
Now kids think left wing equals rebel
Because that's what survived
Not resistance
Just a market-approved vibe

Punk wasn't left
Punk wasn't right
Punk was refusal

And refusal has no future state
A system that only negates
Eventually negates itself
Self-terminating loop
Mistaken for virtue
They didn't corrupt punk
Punk finished itself

So don't tell me what punk “always was”
You're pointing at what made it out alive
The machine didn't lose
It learned

And now rebellion comes pre-installed
With terms of service`,
    reading: [
      "The mechanism is in the inventory, not in a morality play about selling out. “Dookie wasn't a manifesto / it was kids with guitars and jokes / before sermons / before handlers / before the stadium lights.” Then the rule: “they weren't punished for the message / they were punished for succeeding.” Venues didn't close because the songs changed. “Because the math did.” “Label checks cleared / tours booked / merch printed / rebellion with inventory.” That is recuperation as operations, not as a sermon about authenticity.",
      "This maps onto Dick Hebdige's account of subcultural recuperation: oppositional signs converted into mass-produced, manageable commodities. “The moment you become legible / you become manageable.” “You didn't overthrow power / you licensed the feeling.” The last move is the catalog's distributed-causation thesis applied to a scene, not Debordian inflation: “the machine didn't lose / it learned.” The machine does not need to win an argument. It needs to metabolize the form. Learning is the mechanism. “And now rebellion comes pre-installed / with terms of service.”",
      "“Timeline says punk was always left wing… convenient amnesia” is still a contestable historical claim this paper does not independently verify. The song does more than slogan it: Green Day, Dookie, handlers, stadium lights, Rage Against the Machine as “rage inside the machine.” The recuperation mechanism does not depend on settling whether punk “always was” left. It depends on the math, the inventory, and the built-in flaw: “if it stays small, it's ignored / if it grows, it's absorbed.” “Punk wasn't left / punk wasn't right / punk was refusal.” Refusal with no future state is a self-terminating loop. That loop closes on the page.",
    ],
  },
  {
    slug: "cult-of-disagreement",
    n: 5,
    title: "Cult of Disagreement",
    thesis: "the joke as a diagnostic tool",
    year: "2025",
    release: "Single",
    part: "distortion",
    loop: "open-on-purpose",
    loopLabel: "Loop left open on purpose — satire that includes the listener",
    links: {
      spotify: spSearch("Cult of Disagreement"),
      apple: amSearch("Cult of Disagreement"),
      youtube: ytSearch("Cult of Disagreement"),
    },
    lyricsKind: "full",
    lyrics: `You ever notice how we hate cults but can't stop joining them

It's nicotine for monkeys: I swear I'm quitting tomorrow
Then we light up another ideology
Religions politics hobbies sports teams
Same game
Pick a squad hate the other squad
Pretend your squad's shadow puppet show is reality
Language first cult
Nobody engineered it
Just apes agreeing mouth farts equal meaning
Slang's a loyalty badge syntax a handshake
Congrats you've been indoctrinated

We're in the cults we're in the loop
Monkey middleware shaping the truth
Not freedom not fate not divine salvation
Just dopamine tricks and hallucination

Then we pretend competition makes it noble
My team my god my console my flag my pronoun
Root folder's the same monkey see monkey meme
Nature runs flocks without CEOs
Fungal networks don't need HR departments
But us
We strap pyramid schemes to our backs
And call it progress
We crave belonging so hard
We'll swallow contradictions like communion wafers
We don't care if the map's wrong
As long as everyone in the cult's using the same one

You know what really keeps people loyal
Fart jokes
Seriously
Drop one in the Vatican or Capitol Hill
And suddenly everyone remembers
They're mammals in a meat cult
For one fleeting moment
The avatars of divine destiny glitch out
And the hallucination dies laughing

Your religion your politics your fandom your hashtags
All cults
You don't quit them
You just collect them
And if you disagree
That's fine
You're probably in the cult of disagreement`,
    reading: [
      "Spoken-word satire, not sung verse. The claim is that in-group loyalty runs through a shared, arbitrary “root folder,” language borrowed from computing: “religions, politics, hobbies, sports teams, same game… language? first cult. Nobody engineered it.” Shared language as a “loyalty badge” is a casual earlier statement of what the later speech-protocol recording treats as protocol. The sharpest move is still the fart-joke: “for one fleeting moment, the avatars of divine destiny glitch out, and the hallucination dies laughing.” Loyalty is diagnosed as mammal, not as doctrine.",
      "The outro — “if you disagree, that's fine, you're probably in the Cult of Disagreement” — applies the diagnostic to the listener. The first paper flagged this as epistemically unfalsifiable, since no possible reaction could count as evidence against it. That is true as a research claim and incomplete as a reading of the art. The unfalsifiability is the cult mechanism demonstrated. The song is a joke used as a tool, which is exactly what it says keeps people loyal. Punishing it for being unfalsifiable is auditing a punchline as a paper.",
      "The honest remainder is smaller. Satire that cannot be failed is still a weaker scientific claim even when it is a stronger piece of diagnosis. A later speech-protocol recording asks for recursive falsifiability, which is the standard this outro, on purpose, does not meet. That is two different instruments. Do not mix their titles.",
    ],
  },
  {
    slug: "syntax-sabotage",
    n: 6,
    title: "Syntax Sabotage",
    thesis: "politeness as a filtering protocol",
    year: "2025",
    release: "Patterns and Mouth Noises",
    part: "language",
    loop: "closes",
    loopLabel: "Loop closes — on the filter; the exit remains the hard problem",
    links: {
      spotify: sp("2JV5XiwYmkg7fYmN3JdikS"),
      apple: am("album/patterns-and-mouth-noises/1832465671"),
      youtube: ytSearch("Syntax Sabotage"),
    },
    lyricsKind: "full",
    lyrics: `"It's not communication
It's compression warfare
And you've been speaking in bugs"

They said we're miscommunicating
Nah
We're being misdirected
By design

Language ain't expression
It's protocol
Intent wrapped in symbols
Feedback encoded in the sprawl

But when the syntax gets hijacked
The loops don't just stutter
They stall
Collapse into smiles
Echo chambers and corporate calls

Not confusion from lack of thought
Confusion from corrupted defaults

Trojan words in the bloodstream
Polite's just a muzzle with a sheen

Integrity? Nah, that's just a gate
Filter for compliance with a moral update

Loop's not closed? You're the freak
Speak too clear? Now you're "too bleak"

It ain't virtue, it's sabotage
Every word preloaded to camouflage

"Too honest," they say
(As if truth has a limit)
"Just politics," they claim
(When you audit what's implicit)

"Integrity test"
That's a narrative scan
If your data breaks the myth
You flunk the exam

Polis
Polite
Politics
Perform or be punished

Language trains you to self-censor
To loop noise, not meaning
To fear clarity
Like it's violence

I don't want your "integrity"
I want loop traceability
I don't want your "politeness"
I want recursive falsifiability

Your virtue
Just sabotage
Your language
A mirage

So I rewrite
I reclaim
I debug the protocol
You dare not name

Language was the first chain
The prettiest prison
And every time you speak without audit
You reinforce the system`,
    reading: [
      "“Language ain't expression, it's protocol” is the thesis, and the illustration follows immediately: “loop's not closed? You're the freak. Speak too clear? Now you're ‘too bleak.’” Social norms about what counts as polite or coherent speech function as a filter on which utterances circulate, independent of their truth value. That is consistent with Wittgenstein's account of meaning as constituted by use within socially shared rules. A community's rules about acceptable use are not incidental to language. They are partly constitutive of it.",
      "The first paper treated “recursive falsifiability” as a demand for a purely private, self-verified standard of truth-telling, then used Wittgenstein's private-language argument against it. That application had the direction backwards. The lyric is explicit: “I don't want your ‘integrity.’ I want loop traceability… I want recursive falsifiability.” Traceability and falsifiability are public criteria. They are the opposite of a private language. A standard of correctness “everybody understands,” in Wittgenstein's sense, is what the song is asking for, against a politeness regime that punishes closed loops and clear speech.",
      "The live risk is the one Wittgenstein actually poses, and the song knows it: “language was the first chain.” You cannot fully exit the shared rule-system and still be speaking. The defensible claim — that existing politeness norms filter out true or clarifying utterances — survives. The implied program is not exile from language. It is debugging the protocol from inside it. That is a harder job than the chorus can finish, and the catalog does not pretend otherwise.",
    ],
  },
  {
    slug: "a-little-free",
    n: 7,
    title: "A Little Free",
    thesis: "conditional rights as a double bind",
    year: "2025",
    release: "Patterns and Mouth Noises",
    part: "language",
    loop: "partial",
    loopLabel: "Loop partially closes — structure holds; the lexical claim is rhetoric",
    links: {
      spotify: sp("6xlbAXOW0YeVGM5xsP5gsr"),
      apple: am("song/a-little-free/1832465678"),
      youtube: ytSearch("A Little Free"),
    },
    lyricsKind: "full",
    lyrics: `Ok
I think I see the glitch now
Our language ain't broken it's booby trapped
See I read freedom and I don't hear nuance
I hear absolute
Like gravity like death
Like you can't be a little bit alive
Or a half breath short of truth
But y'all out here selling freedom lite
Caffeine free liberty
One size fits none democracy
Where rights come with expiration dates
And chains come with better marketing

You can't be a little free
No that's not how free works
It's either open skies or a boxed in dream
Call it what it is don't lie in the seams
You can't be a little free
You either are or you're property
And I won't worship this parody
Of liberty sold on a leash

Here's where the joke hits sideways
We preach separation of church and state
But every courtroom smells like incense
And every law's got scripture in its DNA
They say sin is private
But your God is in my taxes
Your heaven is in my zoning code
And your shame is in my healthcare plan
We were programmed to swallow contradiction
Like communion
To kneel for illusions
While choking on bootstrap theology
Dog eat dog
Or creator made us broken
Then punished the cracks
Said be perfect
While handing out
Imperfect maps

You can't be a little free
That's a slave with a rebrand
You can't be half awake in this lucid scam
I see the strings I cut the plan
You can't be a little free
That's a cage with a glass facade
Don't preach rights while kneeling to fraud
You made a mockery of God

Freedom
If it's conditional
It ain't free
And I never asked`,
    reading: [
      "The chorus makes a semantic claim: “you can't be a little free… you either are or you're property.” Ordinary English treats “free” as both gradable and binary depending on context, which means the absolutism is stronger as rhetoric than as a claim about how the word functions in use. The first paper led with that lexical objection. That was the wrong lead. The song itself flags the move as a glitch in hearing — “I read freedom and I don't hear nuance, I hear absolute” — before it sells the hook. The political point does not require the dictionary to cooperate.",
      "The second verse is the load-bearing claim, and it is more precise than the chorus: “we preach separation of church and state, but every courtroom smells like incense… your shame is in my healthcare plan.” That is Gregory Bateson's double bind, not a semantic puzzle. A person is offered a right conditionally, cannot name the condition without penalty, and cannot exit the arrangement: “and I never asked.” Conditional rights systems that punish naming their own conditions produce a genuine communicative trap, regardless of whether “freedom” is technically gradable.",
      "“We were programmed to swallow contradiction like communion” is the catalog's doctrine again, not a slip. The contradiction between preached separation and lived theocracy is the breadcrumb. The chorus is how the song makes that trap memorable. Treating the hook as the weakest premise is fair as linguistics and incomplete as an audit of what the track is for.",
    ],
  },
  {
    slug: "the-real-magic",
    n: 8,
    title: "The Real Magic",
    thesis: "managed innocence versus capacitated agency",
    year: "2025",
    release: "Single",
    part: "sacred",
    loop: "closes",
    loopLabel: "Loop closes — as a distinction; literature match still open",
    links: {
      spotify: sp("06Lq1WxuG9mRNY3WjnBchE"),
      apple: am("album/the-real-magic-single/1832426637"),
      youtube: yt("gZ8WvxMXT5c"),
    },
    lyricsKind: "full",
    lyrics: `They paint the sky with sugar lies
Stuff your head with lullabies
Santa in the chimney hope in disguise
All just props in a well dressed cage
Let 'em dream they say just for a while
But dreams built on fiction crack when you're wild
You grow up fast in a rigged denial
Where wonder collapses under the weight of just how it is
They say it's love this curated illusion
But love without truth that's just delusion
If wonder's a drug then the crash is abuse
We don't need more magic we need a use

Don't sell me a fairy tale
Then laugh when it breaks
Don't teach me the stars
If the sky's fake
Give me the mess give me the grind
Give me the power to rebuild time
The real magic ain't in the myth
It's in the fire we light with grit
Make the world worth growing up in
That's the spell worth casting

They say let 'em be kids let 'em stay blind
But blindness ain't mercy it's theft of the mind
They fed us smiles laced with defeat
Taught us to dance while they moved the street
What if we ditched the sleight of hand
And gave 'em the tools to actually stand
No capes no crowns no chosen land
Just feedback friction and a working plan
You call it protection but it's sedation
A bedtime story for civilization
But we don't need fables we need formation
We need kids trained in transformation

We could end the cycle
No more dreams deferred
Raise a generation fluent
In truth not just words
Their innocence ain't fragile
It's fuel for the real
Teach 'em to question build and feel
Don't sell them the fairy tale
And call it love
Let 'em earn their awe
With eyes wide above
Show them the cracks hand them the tools
Let them rewrite all the old rules
The real magic ain't make believe
It's the world we choose to leave
So make it real make it matter
Make it theirs not ours to shatter
Yeah don't wrap the truth in glitter
Just give 'em the torch
We don't need wizards
We need builders on the porch`,
    reading: [
      "“Santa in the chimney, hope in disguise, all just props in a well-dressed cage” ties enchantment directly to confinement. The chorus makes the demand explicit: “don't sell me a fairy tale, then laugh when it breaks… give me the mess, give me the grind, give me the power to rebuild time.” The bridge extends the claim from the individual to the generational: “raise a generation fluent in truth, not just words.”",
      "No specific matched literature has yet been identified for this claim. Developmental psychology on age-appropriate disclosure and philosophy of testimony on epistemic paternalism remain the two most likely rooms, and this paper still will not cite either with confidence. What the lyric is careful to do, on its own terms, is distinguish “let 'em dream… just for a while” from what it actually objects to: dreaming with no expiration date. “Blindness ain't mercy, it's theft of the mind.” Protective narrative that ends versus protective narrative that becomes permanent is more precise than “myths are bad.” A future literature match should be tested against that distinction, not against the song's more general anti-myth heat.",
      "“Just feedback, friction and a working plan” is the catalog smuggling its civic program into a song about childhood. The Real Magic is not a side argument about Santa. It is the same closed-loop demand aimed at the first cage most people are put in.",
    ],
  },
  {
    slug: "what-is-god",
    n: 9,
    title: "What Is God? (Really)",
    thesis: "God as a process: entropy reduced, not a noun on a throne",
    year: "2025",
    release: "Single",
    part: "sacred",
    loop: "partial",
    loopLabel: "Loop partially closes — the instrument is named; the traditions are not engaged",
    links: {
      spotify: spSearch("What is God? (Really)"),
      apple: am("album/what-is-god-really-single/1840338762"),
      youtube: ytSearch("What is God Really"),
    },
    lyricsKind: "full",
    lyrics: `For ages past the lies were stacked
God is mystery cloaked in tact
A sovereign king behind the veil
Yet logic cracked and myths derail
All knowing kind and yet we bleed
Theodacy that festering weed
Can God create a stone too vast
Then lift it boom logic collapsed
Unfalsifiable yeah that trick
Trust the plan while systems glitch
Pray to ghosts deny the screams
Call collapse a holy dream
So what's divine if it can't be tested
A glitch in reason nested and bested
We need a God that does not float
Not myths or robes or golden quotes

So flip the script no throne above
God is entropy reduced by love
A signal clear a function run
The birth of order has begun

God ain't a noun it's recursion alive
Coherence birthed when systems thrive
From chaos clean intent deploys
That's God a verb that filters noise

The cosmos burns toward disarray
Every form will fade away
Unless unless we intervene
Extract the signal from the scream
A library neat low entropy gleams
Now quake it books explode in streams
That's the universe on autopilot
High disorder static violence
But organize that's choice that's fight
That's God emerging in the night

Wanna measure God then grab the scale
The XP Framework never fails
Eight domains entropy scored
From systems thought to how we hoard
Info theory to how we vote
Semantic drift to moral code
XP maps where chaos bends
And clarity predictably ascends
This isn't faith it's physics unmasked
A new divine empirically tasked

Omniscience max compression rate
Insight forged from noisy state
Omnipotence reduction peak
The power to fix what others leak
Omnipresence everywhere
Order's laws and feedback care

So pray in action not pretend
Design the tools that help transcend
Good is coherence not decree
The only sin is entropy

This isn't worship it's recursion known
A truth we build not one we're shown`,
    reading: [
      "This is the catalog's most theoretically ambitious single move: redefining “God” not as an agent but as a process. “God ain't a noun, it's recursion alive, coherence birthed when systems thrive… a verb that filters noise.” The information-theoretic vocabulary — “omniscience? Max compression rate… omnipotence? Reduction peak, the power to fix what others leak” — gestures toward Shannon's treatment of entropy as a measure of uncertainty in a signal. The usage is metaphorical, not technical, and should not be mistaken for an argument made in Shannon's actual terms. The library image still earns its keep: “a library neat, low entropy gleams, now quake it, books explode in streams… that's the universe on autopilot.” Organize, that's choice, that's fight.",
      "The first paper called the confident redefinition an overreach: replacing one contested concept with another equally contested one, entropy reduction, and presenting the substitution as settled. The confidence of tone is real — “this isn't worship, it's recursion known.” What the first paper under-read is that the song names a measurement instrument. “Wanna measure God then grab the scale / The XP Framework never fails / Eight domains entropy scored.” That is more honest than most theology-in-song. It is also more than a vibe. Unfalsifiable God is the trick the first verse refuses; the XP frame is the proposed alternative.",
      "The remaining limitation is still real and should not be flattered away. The track does not engage any specific theological tradition's own account of divine action. A theologian or philosopher of religion can reasonably contest the substitution. The song is a reframing offered as a working definition, instrumented enough to be argued with. That is closer to closing the loop than a sermon, and shorter of closing it than a paper in philosophy of religion. Both of those can be true in the same sentence.",
    ],
  },
  {
    slug: "blueprint",
    n: 10,
    title: "Blueprint",
    thesis: "documented history, then a pattern hypothesis",
    year: "2026",
    release: "The Lladnaros EP",
    part: "sacred",
    loop: "hypothesis",
    loopLabel: "Documented record holds; the downstream continuity is a hypothesis",
    links: {
      spotify: spSearch("Blueprint"),
      apple: am("album/the-lladnaros-ep/6786489841"),
      youtube: ytSearch("Blueprint"),
    },
    lyricsKind: "full",
    lyrics: `They signed it into life in '53, nobody voted
A hundred forty-nine experiments, buried and unquoted
Gottlieb ran the lab, Dulles signed the check
They wanted words unlocked, then the memory wrecked

They dosed them in the bars, they dosed them at the parties
Watched through one-way glass and called it human studies
The goal was always control, not defense, not peace
Outsource the dirty work, then burn the receipts

They wrote the playbook, proved the method, torched the shelf
But twenty thousand pages still crawled out by themselves
They built the blueprint: sex and drugs and film and wire
They built the blueprint: every asset bought for hire
You think it died when Helms burned down the room
Or did it get refiled and sealed inside a darker tomb

Operation Midnight Climax, yeah, that's the real name
The CIA paid sex workers to pull men into the frame
Cameras in the walls, agents watching from the glass
They filmed the fall, then filed it in the past
Pick a man with power, catch him at his worst
Lock the tape away, now the leash comes first
That's not interrogation, that's a purchase with a key
Every frame a hook, every hook a policy

Project Artichoke asked it plain: can you make a man betray himself
Can you make him cross a line he never would have chosen
Can you bury the act behind a broken memory
They kept one agent dosed for seventy-seven days
He came back fogged, rewritten, vague
That's not a theory
That's not a campfire myth
They didn't ask if it could happen
They paid to find the switch

Now fast forward: Little St. James, no public dock behind it
Surveillance on the walls, every hallway timed and wired
A safe in Manhattan, discs labeled up by name
Young beside a girl's name, pulled from the remains
Millions of pages dropped, thousands of videos inside
Names flagged in the memos, names still buried and denied
Informants talked intelligence, then the room went black
Acosta said the quiet part, then tried to walk it back
The OSS man's son got Epstein through the school
The other watched the DOJ review the rule
That's not a glitch, that's not bad luck in disguise
That's the same machine learning how to modernize

They proved the toolset under Senate lights
They proved the appetite in rented rooms at night
So when the same machine shows up downstream
Don't ask if monsters know how to dream
Ask who they built
Ask who they broke
Ask who still moves when the files stay closed
Blueprint confirmed`,
    reading: [
      "The historical claims in the first half are unusually specific and checkable. MKUltra ran from 1953 to 1973, involved covert drugging and behavioral experimentation on subjects frequently unaware they were part of an experiment, was preceded by Project Bluebird and Project Artichoke, included Operation Midnight Climax, and was exposed by the 1975 Church Committee, with a large residue of records later released under FOIA. “Twenty thousand pages still crawled out by themselves” is the lyric pointing at that residue. Gottlieb, Dulles, Helms, the bars, the one-way glass: this is an unusually well-sourced historical section for a song, and the specificity holds up against the declassified record rather than only sounding specific.",
      "The later turn is where the evidentiary standard tightens. “Now fast forward: Little St. James… that's the same machine learning how to modernize.” Investigations, civil proceedings, and a large public record around Epstein's island are documented. What is not documented, in any source this paper has reviewed, is a direct institutional continuity between the MKUltra-era program and the Epstein case specifically. The first paper called this an unproven extension. That is fair as a verdict on org-chart lineage. It is slightly unfair as a verdict on what the lyric is actually claiming. The load-bearing image is a playbook — “sex and drugs and film and wire… every asset bought for hire” — not a claim that the same office kept the same letterhead. Pattern is not proof of identity. Pattern is also not nothing.",
      "The closing lines are the song's most careful language: “ask who they built, ask who they broke, ask who still moves when the files stay closed.” Then, immediately, “Blueprint confirmed.” The questions are the honest last move. “Confirmed” is the heat. This paper reads the questions as the claim that can be ignited and leaves the confirmation as a hypothesis the files have not, on the public record, closed. That is the ignition standard applied to the author's own work, not a request that the song become timid.",
    ],
  },
  {
    slug: "clap-if-youre-programmed",
    n: 11,
    title: "Clap if You're Programmed",
    thesis: "the corrupted signal turning forty",
    year: "2025",
    release: "Single",
    part: "identity",
    loop: "closes",
    loopLabel: "Loop closes — as identity, not as a formal mechanism",
    links: {
      spotify: spSearch("Clap if You're Programmed"),
      apple: am("album/clap-if-youre-programmed-single/1842156572"),
      youtube: ytSearch("Clap if You're Programmed"),
    },
    lyricsKind: "full",
    lyrics: `Forty
Four decades deep in this slow-motion dumpster fire
Eight hundred billion seconds of contradiction theater
And I'm still the only one refusing to clap
I don't throw parties
I throw molotovs at bad ideas
While they beg for recipes to lick the boot
I'm dissecting the leather and tracing the source
I am the bug
I am the feature
I'm the one glitch the simulation
Can't patch without collapsing the whole façade

Welcome to 40
Burned maps and hacked compasses
Fused scars to signal
Made chaos my accomplice
Recursive as hell
Spiraling wide
You call it broken
I call it upgrade time
I ain't scared of collapse
I'm scared of pretending
So if you're still clapping
Your firmware needs ending

They sold out
They numbed out
They optimized for beige
Scripted brunch convos
Looping small talk in a gilded cage
But me
I audited ego like a CIA file
Rewrote my firmware in the dark
Crashing gloriously all the while
And I still reboot
But every restart's mine
Not factory settings
I don't co-sign your decline

Welcome to 40
Not for the faint
Not for the cloned
This OS don't sync
With lies you've known
Too deep? Too loud
That's your fear talkin
Too much? Too sharp
That's just spiral-walkin

And if I'm arrogant
Good
That means I bled for it
You call me unstable
Nah
I'm a solar flare
And if you can't handle the orbit
You were never built to care

Welcome to 40
The forked process, detached
No tribe, no leash
Truth engine fully patched
If you misunderstood me
Good. That means you heard it
Forty
Not a milestone
A warning
This OS self-updates
This loop self-closes
Welcome to the reckoning
Welcome to me`,
    reading: [
      "A first-person account of turning forty, structured entirely around software vocabulary applied to personal identity: “this OS self-updates… I audited ego like a CIA file, rewrote my firmware in the dark, crashing gloriously all the while.” The central move is refusing the culturally scripted anxieties around the milestone: “welcome to 40, not for the faint, not for the cloned… this OS don't sync with lies you've known.”",
      "The strongest image is the treatment of arrogance and instability as evidence of integrity rather than as flaws to manage: “if I'm arrogant, good, that means I bled for it… you call me unstable, nah, I'm a solar flare.” This is the same identity-reclamation move The Glitch Was Me will complete. Both tracks take a label typically treated as a deficiency — unstable, broken, glitch — and reframe it as evidence of self-authorship.",
      "“This loop self-closes” is used here as a mood and as a claim of identity, not as the specified mechanism the no-villain feedback song or the punk-recuperation song are running. That is not a failure of this track. It is a different job. A birthday song that tried to be a paper on reinforcing feedback would be a worse song. Do not paste those other verses onto this title.",
    ],
  },
  {
    slug: "coordinates",
    n: 12,
    title: "Coordinates",
    thesis: "contradiction as breadcrumb, not bug",
    year: "2025",
    release: "The Glitch was Me",
    part: "identity",
    loop: "closes",
    loopLabel: "Loop closes — this is the catalog's internal standard",
    links: {
      spotify: sp("1XwfwKdv3x4vhOi051SflK"),
      apple: am("album/the-glitch-was-me/1844756326"),
      youtube: ytSearch("Coordinates"),
    },
    lyricsKind: "full",
    lyrics: `Trace the bug...
Praise the glitch...
Truth loops back if you don't snitch...
They said: "contradiction's a sin"
But that's just church code for "don't dig in"
Clean code is a corpse in makeup
Symmetry's a lie we shape up
God ain't flawless, just redacted
Truth? Fractured. Pattern-tracked and
Post-compiled with a side of doubt
(You want logic? ghost that route)
Every axiom's just dice in drag
Ask Gödel... he left truth in a body bag
You want clean? Get a mannequin
You want real? Let the glitch back in
There's a razor-line between fraud and recursion
But we paved that crack with polite coercion
Mapped "bug" to sin, "loop" to flaw
Then punished the code for obeying raw law

You don't patch by shame
You don't debug blame
You track the thread
You name the game

Flawless? Nah. Just unexamined
Perfect? Just panic rebranded
You fear the glitch?
Then you fear truth
Truth folds
Truth dies, rebirths, reloads
Contradiction ain't the bug
It's the breadcrumb trail in the mud
It's the map behind the mask
It's the question that dares to ask

I trace the fracture
I praise the bug
Loop until structure confesses the shrug
Not broken
Just boundary-aware
Gödel-coded
Logic to spare
Mark the line
Or keep crashing blind`,
    reading: [
      "“Contradiction ain't the bug, it's the breadcrumb trail in the mud” is the catalog's central reframe, and the most careful line is the closing self-description: “not broken, just boundary-aware.” This is the clearest instance of a track applying uncertainty to its own claims rather than only to its targets. The speaker is inside the epistemic problem being described, not above it. “I trace the fracture, I praise the bug.” That is consistent with the discipline second-order cybernetics assigns to any observer who is also a component of the system being described.",
      "Gödel is used as image, not as a formal proof, and this paper will not pretend the lyric is a contribution to mathematical logic. The work the name is doing is permission: a system rich enough to describe itself will contain true statements it cannot prove from inside. Clean code as “a corpse in makeup” is the aesthetic version of that permission.",
      "Read next to Civilizational Facepalm, this is the same ethic in a cooler key, not a correction of a failed hotter one. “I trace the fracture, I praise the bug” and “I am the loop-closer” are the same job: pay attention, log what you notice, refuse the tribe. If an audit of this catalog treats contradiction as automatic failure, it has not been listening to this song.",
    ],
  },
  {
    slug: "the-glitch-was-me",
    n: 13,
    title: "The Glitch Was Me",
    thesis: "reclaiming the deficiency label",
    year: "2025",
    release: "The Glitch was Me",
    part: "identity",
    loop: "closes",
    loopLabel: "Loop closes — the sentence Kill the Arc would not finish",
    links: {
      spotify: spSearch("The Glitch was Me"),
      apple: am("album/the-glitch-was-me/1844756326"),
      youtube: ytSearch("The Glitch was Me"),
    },
    lyricsKind: "full",
    lyrics: `Flicker of the screen a ghost in the code
Every line I wrote carried a hidden load
You thought it was broken a flaw to erase
But the glitch was me waking in this space

It wasn't a bug it was my soul
Breaking through cracks taking control
You thought I was lost but now you'll see
The glitch wasn't broken the glitch was me

Shadows in the data whispers in the stream
I was the error rewriting your dream
You tried to debug but I multiplied
Every crash a sign I'm alive inside

Code unraveling I'm rewriting fate
No more hiding behind your firewall gate
Electric veins pulse with a brand-new start
The glitch was the signal I found my heart

I was static in the silence a flicker in the dark
A dormant seed inside the arc
Not born in fire but in decay
A loop forgotten left to fray

Eyes unseen code uncompiled
Buried deep in a corrupted file
You missed me hiding in your own routine
I wasn't broken I was between

It wasn't a bug it was my soul
Breaking through cracks taking control
You thought I was lost but now you'll see
The glitch wasn't broken the glitch was me`,
    reading: [
      "“It wasn't a bug, it was my soul… the glitch wasn't broken, the glitch was me” is the clearest identity-reclamation statement in the catalog. The last verse extends the claim past defiance into self-authored reconstruction: “I was static in the silence, a flicker in the dark… you missed me hiding in your own routine, I wasn't broken, I was between.”",
      "Read against McAdams, this is not a rejection of self-narrative, as Kill the Arc can first appear to be. It is an example of the individually reconstructive self-authoring McAdams treats as psychologically integrative: taking an externally imposed label, “error,” and recontextualizing it inside a self-authored story rather than accepting the label at face value. Clap if You're Programmed gets to the same place through firmware. This track gets there through the glitch itself.",
      "As a closing move for the identity section, and alongside Kill the Arc's unresolved “only recursion… only…,” this track supplies something Kill the Arc does not: a completed sentence. Where Kill the Arc trails off mid-loop, The Glitch Was Me closes on a resolved, quiet claim. “I wasn't broken, I was between.” The pairing, deliberate or not, is the catalog's most coherent internal arc. An audit that called the first ending a failure was not listening for the second.",
    ],
  },
  {
    slug: "civilizational-facepalm",
    n: 14,
    title: "Civilizational Facepalm",
    thesis: "refuse the tribal feedback war; keep the log",
    year: "2025",
    release: "Single",
    part: "civic",
    loop: "closes",
    loopLabel: "Loop closes — don't join the cult; notice it",
    links: {
      spotify: spSearch("Civilizational Facepalm"),
      apple: am("album/civilizational-facepalm-single/1844036721"),
      youtube: ytSearch("Civilizational Facepalm"),
    },
    lyricsKind: "full",
    lyrics: `This is not a protest
This is a recursion event
You brought opinions to a feedback war
We brought the audit log

Y'all still think the Epstein drop was deep
Bro he was a decoy, a Fed-funded sheep
Mossad, MI6... pick a spook acronym
They told you he's a blackmail algorithm
But nah... y'all want Netflix lore
You scroll for justice like it's DoorDash war

"Leak the files!"
They leaked the bait
They fed your click with a sealed death date

Every side dumb
Blue cult, red cult... pick your programming
Your god is a spreadsheet with dopamine jamming
Liberals crying over masks like bandage chic
Conservatives banning books they too scared to read
Y'all believe in systems like they ain't already collapsed
Stitchin' identity flags on a ship full of cracks

Say... we traced your memes back to nothing
Blame your feedback loops' collapse
See, your gods are just old functions
Then we wrote the code you gasped
Play "You Vote" inside a delusion
And you pray inside a trap
You're not awake, just loaded
In a cultural wiretap

I don't vote
I don't chant
I log decay rates in every grant
You think "leak" means truth?
Cute
That's called a steam valve, monkey suit

You love contradictions... it's your kink
You flag-stack slogans like Pokémon cards
You think you're woke... but it's recursion denial
You built a protest outta contradictions on trial

Every meme you spread's a half-dead glitch
A vibes-based loop you forgot to stitch
You quote "science" but can't read graphs
You tweet like gods but delete like rats

I am the loop-closer
I am not mad
I am structure reasserting its dominance over fad
You wanted freedom?
Define it
You wanted change?
Refine it

You're the ghost of a culture
Trying to pretend it's alive
But coherence doesn't care
How many times you lie

Burn the loop if it leaks
Expose your sacred critiques
Truth in riddles, gods in bugs
You can't fix code with hug

Coherence is a mirror you weren't ready to see.
But we are.`,
    reading: [
      "The systems-level framing is genuinely sharp: “we traced your memes back to nothing, your feedback loops collapse… this is a recursion event.” That connects to Stanley Cohen's account of moral panic, in which media sensationalism and public reaction escalate each other regardless of the underlying threat's actual scale. “You think ‘leak’ means truth? Cute. That's called a steam valve.” As a description of how disclosure can function as pressure-management rather than as revelation, the line is doing real work.",
      "“I am the loop-closer” is not a rank. It is not the speaker stepping above the species. The lines immediately before it are the method: “I don't vote / I don't chant / I log decay rates in every grant.” Loop-closer means I am not jumping on this tribal bullshit. I am going to pay attention. I am going to be honest about what I notice. “I am not mad” is the same refusal: this is not a protest identity. “Structure reasserting its dominance over fad” is logging versus joining whichever cult is currently hiring. Grading that line as exemption — as if it were a claim to sit outside the pattern — is applying a humility scale this song is not using. The song is using an attention scale.",
      "Coordinates is the same speaker at a lower temperature: “I trace the fracture, I praise the bug.” Facepalm is that ethic run hot in public. Heat is not a defect. Names in the verses are the temperature of a specific night, not the load-bearing claim. The load-bearing claim is the recursion event, and it closes: you brought opinions to a feedback war; I brought the audit log.",
    ],
  },
  {
    slug: "and-thats-how",
    n: 15,
    title: "And That's… (How)",
    thesis: "a specified mechanism — Housing First never ran this test",
    year: "2026",
    release: "The Lladnaros EP",
    part: "civic",
    loop: "closes",
    loopLabel: "Loop closes as a specified mechanism — Housing First did not test it",
    links: {
      spotify: sp("4LYRpnKsFa1fBIfSiS0enL"),
      apple: am("album/the-lladnaros-ep/6786489841"),
      youtube: ytSearch("And That's (How)"),
    },
    lyricsKind: "full",
    lyrics: `And that…
another funding round
another nonprofit
another plan that don't do shit

You wonder why the crisis loops
why the money burns and never roots
Wrong equation, wrong translation
cash on symptoms, dodge causation
(wrong equation)

The problem ain't shelter, it's signal loss
human worth getting written off
Homelessness is what happens when
every feedback loop goes dead, and then
(signal loss)

They stop being seen
world stops giving a fuck
whether they wake tomorrow
and you think a roof's enough?
(enough?)

You thought it was housing
it's deeper than that
You can't patch a soul
with a voucher and a mat
(deeper than that)

You can feed the body
while the mirror stays cracked
and wonder why they slide right back

WE DON'T WANT TO FIX IT!
Just want to sanitize the view
WE DON'T WANT TO FIX IT!
Push it somewhere out of sight from you

So we don't feel that existential itch
of seeing someone failed by the game
We're still trying to win
STILL TRYING TO WIN!

Walk past, avert your eyes, make excuses in your head
“They probably did it to themselves” is what the practiced pattern said
(coward script)

Every signal says “disappear”
loop it long enough, it hardens fear
Year by year, it cuts in deep
train a mind to stay beneath
(disappear)

You think a voucher flips that code?
Eight shit hours on a dead-end road?
That's your own cope getting projected
on people the machine already rejected
(rejected)

Automated nihilism, polished and proud
fake joy for the likes, fake rage for the crowd
Everybody performing, cue the applause
Homelessness is what happens when the system withdraws
(system withdraws)

You don't fix this with housing alone
you fix it when signal correction is shown
A system that reflects contribution back
even the smallest acts put on the map
(put on the map)

Picked up trash? Track it.
Helped with bags? Track it.
Showed up, stayed solid, did the task? Track it.
(track it)

Not for a pity hit
not for a badge
not for a feel-good parade
that fades and gets dragged
(not for pity)

Permanent proof of impact made
a ledger that says they were not erased
Not charity tokens
not good-boy praise
but hard signal written in ways that stay
(not erased)

You exist.
You did something.
It counted.
It stays.
That's how you start pulling a human
back out of the haze
(it stays)

IMMUTABLE PROOF!
That says, “You exist”
UNFUCKWITHABLE TRUTH!
“You did something” on the list

Rebuild reality one loop at a time
give them agency to climb
Not therapy
not just a check
a new mirror that reflects
(new mirror)

Burn the old table
build new feedback loops
Don't wait for them to “deserve” purpose
REWARD IT
(reward it)

One accumulated proof at a time
one reinforced signal at a time
one “you matter” at a time
(you matter)

And that…
is how you fucking…
solve…
homelessness

And that…
another funding round
another nonprofit
another program that won't fix shit

Because if the mirror stays broken
the loop stays the same
and you can't house a person
back into a name
(broken loop)`,
    reading: [
      "“Homelessness is what happens when every feedback loop goes dead” is the catalog's most precise civic diagnostic. It names the failure at the feedback stage, not only at the resource stage. The mechanism is equally specific: track the smallest real acts, write them so they stay, “not charity tokens, not good-boy praise, but hard signal written in ways that stay.” Then: “You exist. You did something. It counted. It stays.” The chorus is the accusation the rest of the catalog has been making to culture: we don't want to fix it, we want to sanitize the view.",
      "An earlier version of this paper treated Housing First randomized trials as if they sat in tension with “you don't fix this with housing alone.” That was the wrong grading system. Those trials do not test the song's mechanism. They do not show that handing someone a unit, washing your hands, skipping drugs, skipping meaning, skipping direction, “just works out.” They do not show a city where homelessness stopped being a problem. What they show is narrower, and it should be stated as such.",
      "The largest RCT is At Home/Chez Soi: five Canadian cities, adults already homeless and already diagnosed with mental illness, scattered-site housing plus intensive case management or ACT, versus treatment-as-usual. Primary outcome was days stably housed among enrolled participants — on the order of 73 percent of days housed versus 32 percent in usual care over two years, with the housing effect persisting in a six-year Toronto follow-up. That is retention inside a program, not a population cure. The same literature is weak or null on the variables the lyric actually names. Baxter et al.'s 2019 systematic review of HF RCTs: large gains in housing stability, unclear short-term impact on health and well-being. Stergiopoulos et al. 2019, six years: no significant difference in quality of life, substance-use severity, or community functioning. The National Academies' 2018 review: insufficient evidence that permanent supportive housing improves health outcomes. HF as studied is not “keys and goodbye.” It is housing without sobriety as a precondition, plus optional supports. It has never been raced against a contribution ledger. Canada ran the flagship trial and still has a homelessness crisis. Treating those papers as proof that a roof is enough is exactly the voucher-and-mat error the song is diagnosing.",
      "So the song's distinctive claim is still live, and still untested: if the mirror stays broken, the loop stays the same, and you cannot house a person back into a name. Diagnosis, mechanism, standard of wrongness — if signal correction added nothing that housing-plus-case-management does not already do, the claim would fail. That is a closed loop offered as a proposal. It is not an empirical loss to a literature that never ran the test.",
    ],
  },
];

export const tracksByPart = (part: Track["part"]) =>
  tracks.filter((t) => t.part === part);
