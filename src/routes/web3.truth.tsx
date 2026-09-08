import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/web3/truth")({
  head: () => ({
    meta: [{ title: "Truth engine — Extropy Engine" }],
  }),
  component: Page,
});

function Page() {
  return (
    <EssayLayout backTo="/web3" backLabel="Web3" kicker="Truth" title="Append, don’t overwrite">
      <p>
        Oracles in the last round were a feed you paid to believe. Consensus was whoever rented the
        validators. Truth was a block.
      </p>
      <p>
        Here a claim is a vertex with parents and evidence. SignalFlow on your box proposes a
        proxy from prior closes of that class. You talk. You do not type the mint. Both edges can
        refuse. A later mark is a new vertex. The lawn row stays. Physics constants were proxies
        too. They move when better data arrives. Same honesty.
      </p>
      <p>
        The attack that the packager is “just a tribe” misses the unit. The mint does not score the
        story, the model, or the jersey you used to get there. Two sermons can propose two ΔS
        numbers. Those are claims. What goes on the graph is whether the loop closed, and whether
        later evidence burns it. Methodology is noise. Ideology is noise. People already want Z.
        They fight about the path. This is how the path gets leftover.
      </p>
      <p>
        That is not a war on stories. Tell them. Keep the art. Build a room with a joke. The
        story is not the ruler. Do not mint a jersey. The close is what happened. The story is
        what you said about it. Mix those and you recapture the metric.
      </p>
      <p>
        Epistemology in this git is mesh review of those vertices, not a priest. A silent look is
        still a look.{" "}
        <Link to="/faq" className="text-primary hover:underline">
          FAQ, measuring stick
        </Link>
        .
      </p>
      <p>
        First hostile door to prove is still a real close a stranger can break. Until then this is
        a wire you can clone, not a finished court.
      </p>
    </EssayLayout>
  );
}
