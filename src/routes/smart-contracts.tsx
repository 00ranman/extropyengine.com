import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/smart-contracts")({
  head: () => ({
    meta: [
      { title: "Smart contracts — Extropy Engine" },
      {
        name: "description",
        content:
          "Smart contracts. Not crypto. No exchange. No JPEG. Standing from closed loops. Remainder at the strip. Challenge it.",
      },
    ],
  }),
  component: SmartContractsPage,
});

function SmartContractsPage() {
  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" kicker="Smart contracts" title="Not the JPEG">
      <p>
        Smart contracts. Read that again before you bounce. This is not an exchange. There is
        nothing to list. There is no monkey picture. You cannot transfer standing. You cannot cash
        it out. If that is the only movie you have for those two words, you watched the handicapped
        version — the one where the “then” is move a bag, so every contract inherits a casino.
      </p>
      <p>
        I took the object they wasted and wired it to work that already closed. Tokenomics without a
        pool. That is the trick. That is what I am bragging about. Break it if you can.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">What the contract actually does</h2>
      <p>
        Tuesday milk is already a loop. A cooler that hits empty is already a loop. A truck that
        either makes the dock or does not is already a loop. Most of that still waits on someone to
        perform a decision that was already determined. A smart contract here is the named case:
        both edges signed, it runs. Reorder. Park H<sub>cap</sub> when four weeks of cash say the
        inbound truck still has to clear. Turn β on when the CAT says this trucker is on the job.
        Dark the badge when they are not.
      </p>
      <p>
        The payload is not a coin. It is mint or refuse, clip or park, badge on or off, cash
        collected versus overlay touch. EP dies on the ticket. XP leaks. CT<sub>W</sub> is the same
        community meter at every shop that stayed on the language. That is why the grocery and the
        laundry read the same standing. The house only owns how hard that standing hits{" "}
        <em>this</em> ticket.
      </p>

      <h2 className="font-display pt-4 text-2xl text-fg">Why a strip can price past the box</h2>
      <p>
        Regulars who actually close loops — showing up, a pattern a shop can order against, work
        that survived a challenge — build community standing. At the till that standing becomes a
        remainder. Early on it is pennies. Dense web, honest book: more of the cart. The shop ate
        the spark. Cash still prints. Livelihood is the week, not a slogan.
      </p>
      <p>
        Put the local distributor on the same language and Thursday’s invoice gets a remainder too.
        Inbound dollars ease. H<sub>cap</sub> does not have to die to save the truck. That is how a
        mesh of rooms that kept circulation in town starts to underprice a box store that is still
        one hundred percent dollars on the Tuesday run. The box can join. Or it can keep the import
        aisle and the people with no standing. That is the overlay. Society already had the week. I
        put a score on the part of the week that reduced the mess.
      </p>
      <p>
        Smart contracts are how that week stops needing a caste whose only job is to pretend they
        decided it. People keep CATs. Exceptions still get a human. The class that exists to be the
        decision on a named case is what gets eaten. Challenge that. Publish a door. Try to make
        the contract print a bag. If it does, I was wrong in public.
      </p>
      <p>
        Defaults:{" "}
        <a href="/docs/DEFAULTS.md" className="text-primary hover:underline">
          the numbers
        </a>
        . Why a bag corrupts the claim:{" "}
        <Link to="/papers/liquidity-and-decay" className="text-primary hover:underline">
          Liquidity corrupts verification
        </Link>
        . Letters:{" "}
        <Link to="/key" className="text-primary hover:underline">
          the key
        </Link>
        .
      </p>
    </EssayLayout>
  );
}
