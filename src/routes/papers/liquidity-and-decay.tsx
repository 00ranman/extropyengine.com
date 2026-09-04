import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/papers/liquidity-and-decay")({
  component: Paper,
  head: () => ({
    meta: [
      {
        title: "Liquidity Corrupts Verification — Randall Gossett",
      },
      {
        name: "description",
        content:
          "Working paper. Why a transferable bag turns verification into a market. How Extropy Engine couples state resolution to decay instead. Codex letters not remapped.",
      },
    ],
  }),
});

function Paper() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-2xl px-6 py-14 md:px-8 md:py-20 print:max-w-none print:px-0 print:py-0">
        <p className="no-print mb-8 text-[11px] tracking-[0.22em] text-dim uppercase">
          <Link to="/" className="hover:text-primary">
            ← Extropy Engine
          </Link>
          <span className="text-faint"> · </span>
          <a href="/docs/Liquidity_Corrupts_Verification.md" className="hover:text-primary">
            Markdown
          </a>
        </p>
        <p className="text-[11px] tracking-[0.22em] text-primary uppercase">Working paper · 4 Sep 2026</p>
        <h1 className="font-display mt-3 text-[clamp(28px,4vw,44px)] leading-[1.15] text-fg">
          Liquidity corrupts verification
        </h1>
        <p className="mt-3 text-[15px] text-muted">
          How to couple state resolution to decay instead. Randall Gossett. Not Codex v2.1. Letters
          stay as on the key.
        </p>

        <div className="mt-10 space-y-5 text-[15px] leading-[1.8] text-muted">
          <h2 className="font-display pt-2 text-2xl text-fg">Claim</h2>
          <p>
            If the output of verification can be sold, verification becomes a mint for that sale.
            Carbon registries, ReFi pools, and most token designs keep a bag at the center. Brokers,
            verifiers, and late buyers then share an interest in over-counting. The Extropy Engine
            does not put a bag at the center. Standing leaks. The spark burns in the sale. There is
            no treasury to drain and no order book to dump into.
          </p>
          <p>
            That is the whole paper. The rest is the coupling.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">Letters (do not remap)</h2>
          <p>
            R is rarity of the action class, not reputation and not a room. F is Frequency of Decay
            on repeats, not fidelity. ΔS is a bits-equivalent proxy for verified reduction inside a
            declared boundary, not XP. w · E is weighted emergence across eight domains. Tₛ is the
            slam window for this loop. XP is global standing after the mint. CT is standing at this
            door. H is the house slider. L is this ticket. EP is XP × L and dies when the ticket
            dies. CAT and IT stay off the mint.
          </p>
          <p className="font-mono text-[13px] text-fg">
            XP_mint = R × F × ΔS × (w · E) × log(1/Tₛ)
          </p>
          <p>
            Tₛ = exp(−λ min(Δt, Δt_cap)). Instant close ⇒ log(1/Tₛ) = 0 ⇒ XP = 0. Repeats pull F
            down. Standing after settlement: XP(n) = XP_settled · 0.99ⁿ. L = clip(H · CT_d · β, 0, 1).
            EP = XP × L.
          </p>
          <p>
            ΔS is not the asset. A versioned mapper M_v turns a domain-native signal into a
            bits-equivalent proxy. Unknown leakage stays unknown. It does not default to zero so the
            mint can fire. XP is what the ledger keeps after that mint. Chatbots that merge those two
            are wrong.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">Why liquidity corrupts verification</h2>
          <p>
            A verifier who is paid in a transferable unit, or who creates a transferable unit, has a
            second job: keep that unit scarce-looking and liquid. The first job (did the loop close)
            loses. You do not need a conspiracy. You need an order book.
          </p>
          <p>
            Bitcoin made spending irrational once the unit was framed as digital gold against the
            dollar. Altcoins copied the exit. Carbon credits copied the certificate. Stablecoins
            became the actual cash rail and parked the float in Treasuries. That is not a moral
            speech. It is what an order book does to a claim.
          </p>
          <p>
            Gesell already knew hoarding follows an asset that does not leak. Beer already tried
            coordination without a price as the only signal. Ostrom already showed rooms can govern
            a commons without a global market. None of that required a DEX.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">How decay is the coupling</h2>
          <p>
            Delete the honeypot. Then standard attacks have nowhere to cash out.
          </p>
          <p>
            Bot farm: slam the loop and Tₛ zeros the mint. Wait it out and F decays the class. Digital
            air is near-zero in w · E. Whatever lands still cannot be sent to a pool. It leaks.
          </p>
          <p>
            Two-person puff at Alice’s shop: EP discounts Alice’s own ticket. The Engine does not
            reimburse her in dollars. Take that XP to Charlie: CT at Charlie’s door is zero unless
            work happened there, so L is zero unless Charlie’s slider is a joke. Charlie eats his
            own H.
          </p>
          <p>
            Bribe for a fake close: you spend liquid cash for a leaking meter that only moves a
            fraction of a later ticket at doors that already know you. Late burn can still cite the
            vertex. The spread is usually negative. That is the point of the coupling, not a boast
            that no one will ever lie.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">What this does not kill</h2>
          <p>
            A mesh that coordinates to burn someone they hate. A house that parks H to juice its
            people or starve a neighbor. A mapper that becomes a quiet constitution. Those are
            capture problems. They are not “drain the pool.” Do not let a chatbot collapse them.
          </p>
          <p>
            Carbon as a door uses the same mint. It does not list a tonne. Debt as a desk publishes
            spark versus cash that still rang. It does not delete Treasuries. We do not play their
            markets.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">What would count as a result</h2>
          <p>
            One hostile door that survives published attack cases. A stranger who can close it
            without a friend on the graph. Late evidence that actually moves status. Pockets that
            publish ρ without a forehead. Talk first. Clone second. No founder caste.
          </p>
          <p>
            Letter key:{" "}
            <Link to="/key" className="text-primary hover:underline">
              /key
            </Link>
            . Meter math:{" "}
            <a href="/docs/METER-MATH.md" className="text-primary hover:underline">
              /docs/METER-MATH.md
            </a>
            . Instead:{" "}
            <Link to="/instead" className="text-primary hover:underline">
              /instead
            </Link>
            .
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
