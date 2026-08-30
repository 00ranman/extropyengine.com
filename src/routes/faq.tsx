import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { faqPage, faqSections, type FaqLink } from "@/content/faq";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ — Extropy Engine" },
      {
        name: "description",
        content:
          "Extropy Engine FAQ: XP formula, till spark, own lawn, retirement, rest, late mint, decay, SignalFlow, DFAO. The attacks, answered.",
      },
    ],
  }),
});

function Also({ links }: { links: FaqLink[] }) {
  return (
    <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] tracking-[0.08em]">
      {links.map((l) =>
        l.href.startsWith("http") ? (
          <a key={l.href} href={l.href} className="text-primary hover:underline" target="_blank" rel="noreferrer">
            {l.label} →
          </a>
        ) : (
          <Link key={`${l.href}#${l.hash ?? ""}`} to={l.href} hash={l.hash} className="text-primary hover:underline">
            {l.label} →
          </Link>
        ),
      )}
    </p>
  );
}

function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((s) =>
      s.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    ),
  };

  return (
    <EssayLayout backTo="/start" backLabel="Enter" kicker={faqPage.kicker} title={faqPage.title}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p>{faqPage.lead}</p>
      <nav className="flex flex-wrap gap-x-4 gap-y-2 border border-primary/18 px-4 py-3 font-mono text-[11px] tracking-[0.12em] text-primary">
        {faqSections.map((s) => (
          <a key={s.heading} href={`#${s.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="hover:underline">
            {s.heading}
          </a>
        ))}
      </nav>
      {faqSections.map((section) => (
        <section
          key={section.heading}
          id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          className="scroll-mt-24 space-y-6 pt-6"
        >
          <h2 className="font-display text-2xl tracking-[0.04em] text-fg">{section.heading}</h2>
          {section.items.map((item) => (
            <article key={item.id} id={item.id} className="scroll-mt-24 space-y-2 border-t border-fg/10 pt-4">
              <h3 className="font-display text-lg tracking-[0.03em] text-fg">{item.q}</h3>
              <p>{item.a}</p>
              {item.also ? <Also links={item.also} /> : null}
            </article>
          ))}
        </section>
      ))}
      <p className="pt-4">
        Dictionary of terms:{" "}
        <Link to="/glossary" className="text-primary hover:underline">
          Glossary
        </Link>
        . Places it can break:{" "}
        <Link to="/open-problems" className="text-primary hover:underline">
          Open problems
        </Link>
        .
      </p>
    </EssayLayout>
  );
}
