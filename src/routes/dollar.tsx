import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import {
  dollarCheckout,
  dollarCheckoutCopy,
  dollarDoors,
  dollarFinePrint,
  dollarMath,
  dollarMoney,
  dollarPage,
  dollarWho,
  type DollarSection,
} from "@/content/dollar";

export const Route = createFileRoute("/dollar")({
  component: DollarPage,
  head: () => ({
    meta: [
      { title: "The Dollar — Extropy Engine" },
      {
        name: "description",
        content:
          "Unfuck the World for a Dollar: one dollar a month from ten thousand people funds the Extropy Engine full time. For profit, not a charity, no tax deduction. If he is wrong, you lost a dollar a month.",
      },
    ],
  }),
});

function Section({ section }: { section: DollarSection }) {
  return (
    <section className="space-y-4 pt-4">
      <h2 className="font-display text-2xl tracking-[0.04em] text-fg">{section.heading}</h2>
      {section.paragraphs.map((p) => (
        <p key={p.slice(0, 32)}>{p}</p>
      ))}
    </section>
  );
}

function CheckoutButton({ url, label }: { url: string; label: string }) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-primary px-5 py-3 text-[12px] font-semibold tracking-[0.14em] text-ink uppercase transition-opacity hover:opacity-85"
      >
        {label}
      </a>
    );
  }
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className="inline-block cursor-not-allowed border border-primary/25 px-5 py-3 text-[12px] font-semibold tracking-[0.14em] text-dim uppercase"
    >
      {label}
    </button>
  );
}

function CheckoutCard({
  name,
  rail,
  body,
  button,
  url,
  badge,
}: {
  name: string;
  rail: string;
  body: string;
  button: string;
  url: string;
  badge?: string;
}) {
  return (
    <article className="space-y-3 border border-primary/18 px-5 py-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-xl tracking-[0.03em] text-fg">{name}</h3>
        <span className="font-mono text-[11px] tracking-[0.12em] text-primary uppercase">
          {badge ? `${badge} · ` : ""}
          {rail}
        </span>
      </div>
      <p>{body}</p>
      <CheckoutButton url={url} label={button} />
    </article>
  );
}

function DollarPage() {
  const checkoutLive = Boolean(dollarCheckout.monthlyAchUrl || dollarCheckout.yearlyCardUrl);
  return (
    <SiteShell>
      <article className="mx-auto max-w-2xl px-6 py-14 md:px-8 md:py-20">
        <div className="mb-3 text-[11px] tracking-[0.28em] text-primary uppercase">{dollarPage.kicker}</div>
        <h1 className="font-display mb-8 text-[clamp(28px,4vw,46px)] leading-[1.15] tracking-[0.03em]">
          {dollarPage.title}
        </h1>
        <div className="space-y-5 text-[15px] leading-[1.8] text-muted">
          <p>{dollarPage.lead}</p>
          <Section section={dollarWho} />
          <Section section={dollarMoney} />
          <Section section={dollarMath} />
          <section className="space-y-4 pt-4">
            <h2 className="font-display text-2xl tracking-[0.04em] text-fg">{dollarCheckoutCopy.heading}</h2>
            <p>{dollarCheckoutCopy.lead}</p>
            <div className="space-y-4">
              <CheckoutCard
                name={dollarCheckoutCopy.monthly.name}
                rail={dollarCheckoutCopy.monthly.rail}
                body={dollarCheckoutCopy.monthly.body}
                button={dollarCheckoutCopy.monthly.button}
                url={dollarCheckout.monthlyAchUrl}
                badge="Main door"
              />
              <CheckoutCard
                name={dollarCheckoutCopy.yearly.name}
                rail={dollarCheckoutCopy.yearly.rail}
                body={dollarCheckoutCopy.yearly.body}
                button={dollarCheckoutCopy.yearly.button}
                url={dollarCheckout.yearlyCardUrl}
              />
            </div>
            {checkoutLive ? null : <p className="text-dim">{dollarCheckoutCopy.pending}</p>}
          </section>
          <Section section={dollarFinePrint} />
          <Section section={dollarDoors} />
          <p>
            <a
              href={dollarPage.spotifyArtist}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Lladnaros on Spotify →
            </a>
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
