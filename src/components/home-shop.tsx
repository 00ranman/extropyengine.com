import { Link } from "@tanstack/react-router";
import { FrontDoor } from "@/components/doors";
import { book, engineViews, papers } from "@/content/site";
import { Btn, SectionTitle } from "@/components/ui-bits";

export function ShopHero() {
  return (
    <section className="border-b border-primary/12 px-[8vw] py-16 max-md:px-[6vw] max-md:py-12">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] tracking-[0.28em] text-primary uppercase">Extropy Engine</p>
        <h1 className="font-display mt-3 text-[clamp(28px,5vw,52px)] leading-[1.1] tracking-[0.03em] text-fg">
          Standing from closed loops
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          Verified work. Both edges sign. XP you can’t cash out. Two boxes can already countersign
          a loop — clone the repo and you’re in it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Btn href="#clone" primary>
            Clone the repo
          </Btn>
          <Btn href="/book">Read the book</Btn>
        </div>
      </div>
    </section>
  );
}

export function LoopStrip() {
  const steps = [
    { n: "01", t: "Post it", d: "Need a ride, a grocery run, a thing done." },
    { n: "02", t: "Someone does it", d: "Nearby. Maybe they brought the car you don’t have." },
    { n: "03", t: "You tap done", d: "Confirmation is the receipt. That’s the whole app." },
  ];
  return (
    <section className="border-b border-primary/12 px-[8vw] py-14 max-md:px-[6vw]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-8 text-center text-[11px] tracking-[0.28em] text-primary uppercase">The loop</p>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="border border-primary/16 bg-surface/40 px-5 py-6 text-center">
              <p className="font-mono text-[11px] tracking-[0.22em] text-faint">{s.n}</p>
              <h2 className="font-display mt-2 text-xl tracking-[0.04em] text-fg">{s.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-[11px] tracking-[0.08em] text-dim">
          Uber, Lyft, DoorDash — one pile. Not the protocol.
        </p>
      </div>
    </section>
  );
}

export function FourFaces() {
  const keys = ["consumer", "house", "quests", "merchant"] as const;
  return (
    <section className="border-b border-primary/12 px-[8vw] py-14 max-md:px-[6vw]">
      <SectionTitle className="mb-3 text-center">Four faces</SectionTitle>
      <p className="mx-auto mb-10 max-w-xl text-center text-[15px] text-muted">
        Same loop everywhere: post, do, confirm.
      </p>
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        {keys.map((key) => {
          const view = engineViews[key];
          return (
            <Link
              key={key}
              to="/how-it-runs"
              className="block border border-primary/16 bg-surface/40 px-5 py-6 transition-all hover:border-primary"
            >
              <p className="font-mono text-[10px] tracking-[0.24em] text-primary uppercase">{view.kicker}</p>
              <h3 className="font-display mt-2 text-xl tracking-[0.04em]">{view.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{view.lines[0]}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function WhyDoors() {
  return (
    <section className="border-b border-primary/12 px-[8vw] py-14 max-md:px-[6vw]">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-[11px] tracking-[0.28em] text-primary uppercase">Why this exists</p>
        <h2 className="font-display mt-2 text-[clamp(22px,3.4vw,34px)] tracking-[0.03em] text-fg">
          Start with the problem that is already yours
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-muted">
          Why pay systems fail. Why AI alignment fails. Why institutions drift. What we are
          actually counting. One door. Four paths behind it.
        </p>
        <div className="mt-8">
          <FrontDoor />
        </div>
        <p className="mt-6 font-mono text-[11px] tracking-[0.08em]">
          <Link to="/start" className="text-primary hover:underline">
            Open the door →
          </Link>
        </p>
      </div>
    </section>
  );
}

export function ProofClone() {
  return (
    <section
      id="clone"
      className="scroll-mt-24 border-b border-primary/12 px-[8vw] py-14 max-md:px-[6vw]"
    >
      <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-2">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-primary uppercase">Proof</p>
          <h2 className="font-display mt-2 text-[clamp(24px,3.5vw,36px)] tracking-[0.03em] text-fg">
            One repo. That’s the Engine.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            SignalFlow packages the claim. The kernel mints. Same loop everywhere: post, do,
            confirm. Packages are skeletons. Contracts are the truth.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-dim">
            Nobody is hiring you onto this. The git is already the job. Clone it.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Btn href="https://github.com/00ranman/extropy-engine" primary external>
              github.com/00ranman/extropy-engine
            </Btn>
            <Btn href="/build">What&apos;s needed</Btn>
          </div>
        </div>
        <pre className="overflow-x-auto border border-primary/22 bg-bg/80 p-5 font-mono text-[12px] leading-relaxed text-fg">
          <code>{`git clone https://github.com/00ranman/extropy-engine
cd extropy-engine
docker compose up --build -d
./scripts/test-happy-path.sh`}</code>
        </pre>
      </div>
    </section>
  );
}

export function MathTeaser() {
  return (
    <section className="border-b border-primary/12 px-[8vw] py-14 max-md:px-[6vw]">
      <div className="mx-auto max-w-2xl border border-fg/12 px-6 py-8 text-center">
        <p className="font-mono text-[10px] tracking-[0.24em] text-dim uppercase">Most people never see this</p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          You post. Someone does it. You tap done. That is the product. The formula is for people
          who want to know what the mint is claiming.
        </p>
        <p className="font-brand mt-5 text-[clamp(16px,2.6vw,22px)] tracking-[0.03em] text-fg">
          XP = R × F × ΔS × (w · E) × log(1/Tₛ)
        </p>
        <p className="mt-5 font-mono text-[11px] tracking-[0.08em]">
          <Link to="/key" className="text-primary hover:underline">
            Full letter key →
          </Link>
          <span className="text-faint"> · </span>
          <Link to="/math" className="text-primary hover:underline">
            Math →
          </Link>
        </p>
      </div>
    </section>
  );
}

export function ShelfStrip() {
  const featured = papers.find((p) => /codex.*2\.1/i.test(p.title)) ?? papers[0];
  const tiles = [
    { label: "Book", href: "/book", note: book.title, badge: "Free to read" },
    { label: "Library", href: "/papers", note: featured?.title ?? "Charters, codex, meters, field notes", badge: featured?.tag },
    { label: "Media", href: "/music", note: "Music, videos, podcasts", badge: undefined },
    { label: "Engine", href: "/how-it-runs", note: "How it runs — poke around", badge: undefined },
  ];
  return (
    <section className="border-b border-primary/12 px-[8vw] py-14 max-md:px-[6vw]">
      <SectionTitle className="mb-8 text-center">Shelf</SectionTitle>
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((t) => (
          <Link
            key={t.href}
            to={t.href}
            className="block border border-primary/18 bg-[rgb(20_12_8_/_0.45)] px-5 py-6 transition-all hover:-translate-y-0.5 hover:border-primary"
          >
            {t.badge ? (
              <div className="mb-2 font-mono text-[10px] tracking-[0.25em] text-primary uppercase">{t.badge}</div>
            ) : null}
            <h3 className="font-display text-lg tracking-[0.04em] text-fg">{t.label}</h3>
            <p className="mt-2 text-sm leading-snug text-muted">{t.note}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ClosingBeat() {
  return (
    <section className="border-t border-accent/15 bg-linear-to-b from-bg/95 to-[rgb(120_40_200_/_0.03)] px-[8vw] py-16 text-center">
      <h2 className="font-display mb-5 text-[clamp(24px,3vw,38px)] tracking-[0.06em] text-accent [text-shadow:0_0_20px_rgb(34_211_238_/_0.2)]">
        Everything turns to fungus eventually.
      </h2>
      <p className="mx-auto mb-8 max-w-xl text-[15px] leading-loose text-muted">
        The book is the field guide. The music is the soundtrack. The Engine runs on spare-room
        laptops.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Btn href="#clone" primary>
          Clone the repo
        </Btn>
        <Btn href="/book">Read the book</Btn>
      </div>
      <p className="mt-8 text-xs tracking-[0.15em] text-[#666]">
        Built by Randall Gossett. Original conspirator: Perplexity Computer. This remake: Grok
        Build.
      </p>
    </section>
  );
}
