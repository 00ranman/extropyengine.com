import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/papers/what-an-order-book-does")({
  component: Paper,
  head: () => ({
    meta: [
      { title: "What an Order Book Does to a Claim — Randall Gossett" },
      {
        name: "description",
        content:
          "Working paper. Liquidity, demurrage, and decay. A certificate you can sell stops being a check. Gesell, carbon, cash. The build is last.",
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
          <a href="/docs/What_an_Order_Book_Does_to_a_Claim.md" className="hover:text-primary">
            Markdown
          </a>
          <span className="text-faint"> · </span>
          <a href="/docs/What_an_Order_Book_Does_to_a_Claim.pdf" className="hover:text-primary">
            PDF
          </a>
        </p>
        <p className="text-[11px] tracking-[0.22em] text-primary uppercase">Working paper · 22 Sep 2026</p>
        <h1 className="font-display mt-3 text-[clamp(28px,4vw,44px)] leading-[1.15] text-fg">
          What an order book does to a claim
        </h1>
        <p className="mt-3 text-[15px] text-muted">
          Liquidity, demurrage, and decay. A certificate you can sell stops being a check. Randall
          Gossett.
        </p>

        <div className="mt-10 space-y-5 text-[15px] leading-[1.8] text-muted">
          <p>
            This is not a product note. The short sketch that names a build is{" "}
            <Link to="/papers/liquidity-and-decay" className="text-primary hover:underline">
              Liquidity Corrupts Verification
            </Link>
            . Read this one first if you want the problem without the letters.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">Claim</h2>
          <p>
            If the output of a check can be sold, the check becomes a mint for that sale. You do not
            need a crooked verifier. You need a bid.
          </p>
          <p>
            Brokers, certifiers, and late buyers then share an interest in over-counting. Not
            because they met in a room. Because the certificate clears. Hoarding follows an asset
            that does not leak. A market follows anything with a bid. A claim that is also an asset
            inherits both.
          </p>
          <p>
            The remedy is not a better auditor bolted onto the same bag. The remedy is a coupling:
            the record is not the coin, idle standing carries a cost, and whatever benefit the
            record creates dies in the transaction that uses it. Someone will still lie. The spread
            on the lie should usually be negative. That is the whole paper. The rest is the
            grounding.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">The second job</h2>
          <p>
            A person paid to say whether something happened has one job. Did the loop close. Did
            the tonne stay in the ground. Did the work get done inside the boundary you declared.
          </p>
          <p>
            If the thing they certify is also a transferable unit, they pick up a second job: keep
            that unit scarce-looking and liquid. Scarce, so the price holds. Liquid, so someone can
            leave. The first job loses whenever the two conflict, and they conflict whenever the
            truth would print fewer certificates than the bid is willing to pay for.
          </p>
          <p>
            Charles Goodhart’s point, in the 1975 monetary paper, was narrower than the bumper
            sticker. Any statistical regularity you lean on for control will collapse once people
            feel the control. Marilyn Strathern’s gloss is the line people remember: when a measure
            becomes a target, it ceases to be a good measure. Donald Campbell had already said the
            social-science version. The more a quantitative indicator is used for decisions, the
            more it gets corrupted, and the more it distorts the thing it was supposed to watch.
          </p>
          <p>
            A carbon tonne, a reputation point, a proof-of-impact token: once there is a bid, the
            indicator is the target. The corruption does not require a villain. It requires a use.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">A bid is enough</h2>
          <p>
            Liquidity is the ability to sell without moving the price much. For bread, that is a
            kindness. For a claim about the world, a deep bid means someone will pay you today for
            a story about yesterday. The buyer does not need the story to be true. They need the
            next buyer.
          </p>
          <p>
            That is an order book. An order book does not conspire. It pays whoever can produce the
            certificate cheaper than the bid. If a loose baseline is cheaper than a field visit, the
            loose baseline gets printed. If a bot can open and close a task before a person could
            have done it, and the close still clears, the bot is the rational firm.
          </p>
          <p>
            Call this corruption if you want. The mechanism is simpler. Verification has been given
            a resale value, so verification is now a production process for that resale value. The
            fact is the input. The certificate is the product. Firms optimize the product.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">Hoarding</h2>
          <p>
            Silvio Gesell, in <em>The Natural Economic Order</em>, watched money that did not rot
            and asked why anyone would spend it when holding was safer. His remedy was Freigeld.
            Notes that needed a stamp. A carrying cost, so the note was expensive to sit on and
            cheap to pass. Demurrage is that cost. Grain already had it. A sack in a warehouse gets
            eaten, or it spoils, or you pay rent. Metal stopped rotting. Paper stopped rotting.
            Hoarding became the smart move, and the people who still had to buy food paid the
            spread.
          </p>
          <p>
            Wörgl tried the stamp in 1932. The town issued scrip that lost value unless the holder
            bought the next stamp. The notes moved. The Austrian National Bank shut the experiment
            down for being a currency, not because the stamps had failed to push the paper. Irving
            Fisher wrote <em>Stamp Scrip</em> the next year so Americans could see the mechanism
            without the manifesto: a small, scheduled decay on a note makes the note circulate.
          </p>
          <p>
            Keynes, in chapter 23 of the <em>General Theory</em>, called Gesell an unduly neglected
            prophet. He wrote that the future would learn more from the spirit of Gesell than from
            the spirit of Marx. He did not swallow the whole theory of interest. He took the
            carrying-cost point. Money that cannot leak will be held when holding beats spending.
            An asset that cannot leak will be hoarded when its price is expected to rise, and
            dumped when the crowd wants out.
          </p>
          <p>
            Neither behavior checks whether an underlying event happened. Both check the crowd.
          </p>
          <p>
            A carrying cost on a coin that can still be listed is not the same remedy. The market
            prices the leak. The coin is still a bag. Later experiments that bolted demurrage onto
            a transferable unit learned this the hard way: the unit remained something you could
            park on an exchange while a second money did the spending. Gesell’s stamp worked, when
            it worked, because the note was the money you had to pass. There was no second rail to
            escape into, and no order book where the decaying note was the product being sold to a
            stranger who did not need bread.
          </p>
          <p>
            Some regional currencies still charge a carrying cost so the note moves. That is a
            cousin. It is not, by itself, a fix for verification. A decaying certificate of a false
            event is still a certificate of a false event. It just melts.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">The certificate</h2>
          <p>
            A carbon credit is a claim that a tonne was not emitted, or was pulled back, against a
            baseline somebody wrote down. The credit is designed to be sold. Once it is designed to
            be sold, the baseline is a price input. A loose baseline prints certificates. A tight
            baseline prints fewer of them and angers the seller. The methodology consultant, the
            project developer, the auditor, and the buyer of the offset are not four unrelated
            professions. They are one production line with a bid at the end.
          </p>
          <p>
            In 2016 the Öko-Institut, reviewing the Clean Development Mechanism for the European
            Commission, found that the large majority of those projects had a low likelihood of
            being additional. The reduction would have happened anyway. The credit was still
            issued. In 2023 West and colleagues, in <em>Science</em>, found that a large share of
            audited REDD+ forest projects had not reduced deforestation against a credible control.
            The voluntary market’s answer, for years, was a better methodology. Better
            methodologies are not worthless. They do not remove the second job. The person who
            writes the rule and the person who sells the tonne are still in a market where
            over-count clears and under-count leaves money on the table.
          </p>
          <p>
            This is not an argument that carbon dioxide is fake. It is an argument that a
            transferable certificate of a physical fact inherits the incentives of any other
            transferable certificate. You can tell a true story about a forest and still run a
            mint. The truth of the gas and the liquidity of the paper are different questions.
            Liquidity keeps winning, because liquidity pays this quarter and the gas pays on a lag,
            if it pays in the account at all.
          </p>
          <p>
            The same shape shows up wherever a registry sits in front of a resale. Renewable
            certificates. Biodiversity credits. “Impact” tokens. The noun changes. The book does
            not.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">Cash that stopped being spent</h2>
          <p>
            The Bitcoin paper is titled a peer-to-peer electronic cash system. Cash is what you
            spend. Once the unit was held as an appreciating reserve against the dollar, spending
            it was the move that needed a justification. Holding was the default. That is not quite
            Gresham’s law. Gresham is bad money driving out good when both must be accepted at a
            fixed rate. This is simpler. An asset you expect to buy more tomorrow is a bad tool for
            buying bread today. The white paper wanted a rail. The culture built a vault. The coins
            that followed copied the exit: issue a unit, list it, let the buyer be the product.
          </p>
          <p>
            Dollar stablecoins went the other direction and became the cash rail that vault culture
            actually uses. The large ones hold short-dated government paper and cash equivalents so
            the token can stay near a dollar. The person moving the token does not receive the
            yield on that paper. The issuer does. That is a float. It is also a confession. When
            people in that world need to pay, they do not pay in the appreciating unit. They pay in
            a token of someone else’s Treasury bill.
          </p>
          <p>
            A claim about work, forced to behave like one of these, will either be hoarded or
            parked as someone else’s bond book. Neither is a record of whether the work happened.
            The first treats the claim as gold. The second treats it as a wrapper around a state
            liability. The work is gone either way.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">Rooms</h2>
          <p>
            Elinor Ostrom’s <em>Governing the Commons</em> is an empirical answer to a slogan.
            Shared resources are not automatically a tragedy, and they are not automatically a
            stock. Groups govern them when the room is real: a boundary, rules written by the
            users, monitors accountable to those users, sanctions that scale, a cheap way to
            resolve a fight, and the right to organize without asking a distant owner. A global
            market is not on that list. A single owner is not on that list. What is on the list is
            a room that can see its own cheaters because the cheaters drink from the same well.
          </p>
          <p>
            Stafford Beer spent the same decades on a related refusal. A viable organization needs
            more than a price. It needs a way to notice drift at the scale where the drift is
            happening, and a way to act there. Price is one signal. It is a bad only-signal.{" "}
            <em>Designing Freedom</em> is not a gadget catalog. It is the demand that a system be
            able to see its own error before the error is someone else’s profit.
          </p>
          <p>
            None of that required an exchange. A room can fail. Ostrom documented failures. Beer
            watched projects get captured. A room is not a moral category. It is a scale at which a
            sanction can land on the person who caused the cost. An order book is a scale at which
            the sanction is a price, and the price can be paid by selling the evidence.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">The coupling</h2>
          <p>Put the pieces together. No brand.</p>
          <p>
            <strong className="text-fg">The record is not the coin.</strong> The event can be
            public. The right to send that event to a pool cannot. If there is nothing to deposit,
            there is nothing to price. Delete the honeypot and the standard attack has nowhere to
            cash out. This is the step demurrage-on-a-token skips. A melting coin is still a coin.
          </p>
          <p>
            <strong className="text-fg">Idle standing carries a cost.</strong> Gesell’s stamp,
            stated for a ledger. Whatever credit the event created is smaller tomorrow than today
            if it just sits. Hoarding stops being the dominant strategy. The leak is not a
            punishment for having done something. It is the refusal to let a claim behave like a
            bar of gold. A pile that does not work decays. A pile that works gets spent, and
            spending is the point of having a claim in the first place.
          </p>
          <p>
            <strong className="text-fg">The benefit dies in the sale.</strong> A discount at the
            door that recognizes the work is not a coin. Cash can still ring for the rest of the
            ticket. The spark does not survive the sale, so there is no second market in sparks.
            You cannot withdraw the discount, send it to a stranger, and have the stranger sell it
            back to you as a yield. The recognition was used up by the transaction that needed it.
          </p>
          <p>
            <strong className="text-fg">An instant fabrication pays nothing.</strong> If a new
            claim is worth more when time actually passed between the open and the close, a bot
            that opens and closes in the same breath mints nothing. Speed is not proof. Speed is a
            reason to pay zero. The slam is not a moral opinion about automation. It is a clock. No
            clock, no claim. A clock you can fake is not a clock.
          </p>
          <p>
            <strong className="text-fg">Repeats of the same class pay less.</strong> A farm that
            runs one action because that action clears will watch the clearing fall as the class
            gets common. Scarcity here belongs to the kind of act, not to a founder sitting on a
            treasury. The first time a rare repair closes, it is news. The thousandth identical
            filing is a template. Templates should not mint like news.
          </p>
          <p>
            <strong className="text-fg">A door that has no history with you cannot spend you.</strong>{" "}
            Standing that only moves a ticket where the relationship is real cannot be arbitraged
            by a stranger with an exchange account. This is local reception, not a wall around a
            coin. Take a puff from your own shop to a shop that has never seen you work: the second
            shop has no reason to treat your standing as theirs. If it does, its own capacity is
            what gets eaten. The cost lands on the door that pretended to know you.
          </p>
          <p>
            Taken together, the bot has no spread. The hoarder has a leak. The puff at your own
            counter only discounts your own counter. The bribe buys a melting, local claim instead
            of a liquid one. You spent cash that does not melt on a record that does. Late evidence
            can still reach back and undo the record. The spread is usually negative. Usually is
            not never. The point of the coupling is the spread, not a boast that no one will try.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">What decay does not kill</h2>
          <p>
            A room can still coordinate to burn someone it hates. A house can still park capacity
            to juice its own people and starve the next door. The rule that turns a measurement
            into a number can still become a quiet constitution. Whoever owns that rule owns the
            count, even if nothing in the system is transferable. Those are capture problems. They
            are not “drain the pool.” There is no pool. Do not let a summary collapse a lynching, a
            crooked house, and an exit scam into one sentence. Decay removes the honeypot. It does
            not remove politics.
          </p>
          <p>
            A carbon door can still count a physical change. It should not list a tonne. A debt
            desk can still publish what was recognized against the cash that still rang. It does
            not abolish government paper, and it does not need to. It changes the path, because
            less cash is spent keeping a certificate expensive. The theater budget is the tell. If
            the certificate needs a market maker, a methodology war, and a reserve to defend the
            price, the certificate has become the business.
          </p>
          <p>
            Unknowns stay unknown. A measurement you did not take does not default to zero so a
            mint can fire. Zero is a number. It is not a synonym for ignorance. Filling ignorance
            with zero is how you print a claim out of a blank.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">What would count as a result</h2>
          <p>
            One hostile door that publishes its attack cases and is still standing afterward. Not a
            friendly pilot. A door someone is trying to cheat, with the cheats written down.
          </p>
          <p>
            A stranger who can close a real loop without a friend already on the graph. If only
            insiders can get a claim recognized, you have built a club with a stamp, and clubs do
            not need this much machinery.
          </p>
          <p>
            Late evidence that changes the status of an old claim, in public, without asking the
            original parties for permission to be embarrassed. If the record cannot move after the
            applause, it is a plaque.
          </p>
          <p>
            Standing that can be read without painting a rank on a face. A number on a forehead
            becomes a target. Goodhart applies to the cure if you wear the cure as a status.
          </p>
          <p>
            Talk first. Build second. No founder who can print the unit they are asking you to
            trust. A founder treasury is the honeypot back in the building, wearing a white paper.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">One build, last</h2>
          <p>
            A short note on this site,{" "}
            <Link to="/papers/liquidity-and-decay" className="text-primary hover:underline">
              Liquidity Corrupts Verification
            </Link>
            , states one attempt at the coupling. Standing leaks. The spark dies in the sale. There
            is no treasury to drain and no order book to dump into. That attempt is called the
            Extropy Engine. The letters and the arithmetic are on the{" "}
            <Link to="/key" className="text-primary hover:underline">
              key
            </Link>
            . They are a notation for the coupling above. They are not the argument.
          </p>
          <p>
            If a letter fights this paper, this paper wins. If a build fights this paper, the build
            is wrong. The problem is older than the build: Gesell’s stamp, Ostrom’s room, the CDM’s
            additionality failure, a cash system that became a vault. The coupling is the part you
            can describe without a name. Record, not coin. Carrying cost on idle standing. Benefit
            dies in the sale. Instant close pays nothing. Repeats pay less. A stranger’s door
            cannot spend you.
          </p>

          <h2 className="font-display pt-2 text-2xl text-fg">Sources</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Silvio Gesell, <em>The Natural Economic Order</em> (1916).</li>
            <li>The Wörgl stamp scrip, 1932–1933. Shut down by the Austrian National Bank.</li>
            <li>Irving Fisher, <em>Stamp Scrip</em> (1933).</li>
            <li>
              John Maynard Keynes, <em>The General Theory of Employment, Interest and Money</em>{" "}
              (1936), chapter 23.
            </li>
            <li>Charles Goodhart, “Problems of Monetary Management: The U.K. Experience” (1975).</li>
            <li>
              Marilyn Strathern, “‘Improving ratings’: audit in the British University system,”{" "}
              <em>European Review</em> (1997). The usual wording of Goodhart’s law is hers.
            </li>
            <li>
              Donald T. Campbell, “Assessing the Impact of Planned Social Change,”{" "}
              <em>Evaluation and Program Planning</em> (1979).
            </li>
            <li>Elinor Ostrom, <em>Governing the Commons</em> (1990).</li>
            <li>
              Stafford Beer, <em>Brain of the Firm</em> (1972); <em>Designing Freedom</em> (1974).
            </li>
            <li>Satoshi Nakamoto, <em>Bitcoin: A Peer-to-Peer Electronic Cash System</em> (2008).</li>
            <li>
              Martin Cames and colleagues, <em>How Additional is the Clean Development Mechanism?</em>,
              Öko-Institut, for the European Commission (2016).
            </li>
            <li>
              Thales A. P. West and colleagues, “Action needed to make carbon offsets from forest
              conservation work for climate change mitigation,” <em>Science</em> (2023).
            </li>
          </ul>
        </div>
      </article>
    </SiteShell>
  );
}
