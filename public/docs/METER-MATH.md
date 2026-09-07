# Meter math

Unsigned working spec for the **tokenomics of the meters**. Not bags. Nothing here cashes out.

**CT is the community meter.** Same number at the grocery and the laundromat if both rooms still speak base CT. The door does not own CT. The door owns H. The only way standing does not read across those tills is another mesh or a wrap that broke the rules.

**House rule, first line:** we do not play their markets. This is a **parallel system**. It runs *alongside* cash, firms, desks, and law until those rooms use the overlay enough that cash is only a remainder. Money is the balancer and the check while the DAG is still learning. When the graph can carry the score, ρ climbs. Absorption is that curve. Not a coup date.

No offset registry. No transferable tonne. No Extropy credit listed next to Verra. If a room lists a spark as a commodity, they forked.

Signed Codex is still v2.1. Canonical mint in code is `packages/xp-formula`. If this page and the letter key disagree, the [letter key](/key) wins on names. This page wins on how the meters couple.

Do not remap letters. Do not add a ninth instrument.

## Words

- **Tokenomics** here means how XP, CT, H, L, EP, CAT, IT, leaks, gates, and CT-compatibility couple. Balancing acts.
- **Token** as a bag you transfer or cash out is a lose-condition.
- **Spark** is EP: born and burned in the sale.
- **Community web** W is the set of DFAOs that still read each other’s **base CT** one-to-one.
- A chatbot that hears “tokenomics” and writes Uniswap is wrong.

## What kind of object

| Object | Kind | Liquid? | Who can change the rule |
|---|---|---|---|
| R, F, ΔS, w · E, Tₛ | Mint inputs | No | Planetary. Fork if you rewrite the XP mint. |
| XP | Global standing meter | No. No cash-out. | Planetary. Earned on closed loops. |
| CT | Community standing meter on web W | No | DFAO posts task values and may wrap. Base CT stays compatible only if §4c holds. |
| ρ_W | Reputation density on web W | No | Enters **CT only**. Never the XP mint. |
| H | House slider | No. Vertex when it moves. | This till. Default 0.5. Auto recommended. |
| κ | Compatibility of this door’s CT with W | No | 1 if base. (0,1) if a non-liquid wrap. 0 if they wired money. |
| L | This-ticket standing | No | H, κ, CT_W, β. |
| EP | Till spark | Dies in the sale | EP = XP × L. Not payroll. |
| ρ | Fiat residual index | No | Door totals. Not a person. Not ρ_W. |
| CAT | Skill record | Unique | Off the XP mint. |
| IT | Governance meter | No | Off the XP mint. |
| 0.99ⁿ | XP leak | — | Planetary knob. |
| ℱ | Falsifiability | — | Lose-conditions. Not the letter F. |

Cash still rings the rest of a ticket. Cash cannot mint XP. Cash is the training wheels and the audit: the DAG is learning against a tender that already exists. Cash-wrap of CT drops κ to 0. That is trying to *become* money instead of running beside it.

---

## 1. The mint (signed)

\[
\mathrm{XP}_{\text{mint}} = R \times F \times \Delta S \times (w \cdot E) \times \log(1/T_s)
\]

Gates before the product is allowed to land:

- ΔS > 0 after the mapper and the leakage check.
- Both edges agreed.
- Rights / consent fail ⇒ ineligible. Not “big ΔS minus an ethics haircut.”
- Unsettled vertices do not move IT.

XP is **global**. Every compatible room can see that a loop survived. Changing the XP mint is planetary. A DFAO that wants different local payouts uses **CT**, not a second XP.

### Terms

**R** ∈ [0.1, 10] — rarity of the *action class*, not the person.

**F** — Frequency of Decay on that class. Not ℱ.

**ΔS** — bits-equivalent proxy. Not XP. Not SI social heat.

**w · E** — eight-domain weights dotted with this loop’s effort.

**Tₛ** — slam window.

\[
T_s = \exp(-\lambda \min(\Delta t, \Delta t_{\mathrm{cap}}))
\]

Δt → 0 ⇒ log = 0 ⇒ XP = 0. Three clocks: Tₛ this loop, F the class, 0.99ⁿ standing after settle. IT leak is a fourth clock, on voice.

---

## 2. Mapper (constitution of ΔS)

\[
\text{domain-native signal} \xrightarrow{M_v} \Delta S_{\text{claimed}} \quad \text{with uncertainty } U \text{ on the vertex}
\]

\[
\Delta S = \Delta S_{\text{claimed}} - \Delta S_{\text{leakage}} - \Delta S_{\text{displacement}} - \Delta S_{\text{unaccounted harm}}
\]

Unknown does not default to 0. SignalFlow + the edge model + the PSLL propose. The other edge can refuse. Cross-reference on the DAG against similar timed events is how the proxy tightens. That is estimation. It is not a worshipped constant.

---

## 3. XP after it lands

\[
\mathrm{XP}(n) = \mathrm{XP}_{\text{settled}} \cdot 0.99^{n}
\]

No spend. Late mint / late burn are citation edges. Cash-out of XP is a lose-condition.

You can earn XP and CT on the same job. You can earn only one. See §4b.

---

## 4. CT — community standing on web W

CT is **not** “this one register.”  
CT is standing in the **community web** of DFAOs that still share base CT.

Nodes: people.  
Rooms: DFAOs.  
Rooms attach to people and to each other.  
CT answers: how useful was this node to *that web*, not only to one till.

Reputation **belongs in CT**. It was never supposed to leave. It does **not** belong in R of the XP mint.

### 4a. Working form

For web W, window voted by that web:

\[
\mathrm{CT}_W = \mathrm{clip}\Big(
  U_W \cdot \rho_W \cdot C_W \cdot P_W \cdot (1 - F_W^{\mathrm{local}})
,\; 0,\; 1\Big)
\]

| Symbol | Job |
|---|---|
| U_W | Usefulness minted from **posted tasks** this DFAO (and peers that still share base CT) actually closed. |
| ρ_W | Reputation density on W. Confirmed history, not a vibe. Local. Never enters XP. |
| C_W | Coupling across the web: closes / reliable demand the *web* can plan around. |
| P_W | Predictability for the web. Random boom/ramen shopping lowers P_W. |
| F_W^local | Farm penalty if the same class is being gamed in W. |

A DFAO **posts a task** with a posted CT weight. SignalFlow proposes the close. Both edges agree. That close adds to U_W. Cross-ref similar DAG events so one shop cannot invent a private physics for “mow lawn = 900.”

CT is not purchased with XP. Dollars spent are not CT.

### 4b. Same job, two meters

- **XP only** — loop survived on the global mint. This web did not post it as a community task.
- **CT only** — this web posted it and paid CT. Mint gates for XP did not fire (or nobody filed ΔS).
- **Both** — posted task *and* a verified ΔS loop.
- **Neither** — cash only.

### 4c. Base, wrap, cash-wrap (compatibility κ)

Same CT at the laundromat and the grocery **if those rooms stayed on the same web**. That is the default. Not a metaphor. κ = 1 means the standing is readable one-to-one at both tills.

They can fork. A wrapper makes it *their* CT. Then it is not the same capacity unless the other room **joins that wrap** on purpose.

| Mode | What the DFAO did | κ | Still on XP network? |
|---|---|---|---|
| Base CT | Non-liquid community standing. Shared grammar. | 1 | Yes |
| Wrap | Local wrapper (extra knobs, extra classes) **without** a money rail | ∈ (0,1) until another room votes to treat it as 1 | Yes |
| Join | Two or more DFAOs agree “we read your wrap as ours” so staff and regulars can shop across rooms | κ they publish | Yes |
| Cash-wrap | Any exchange of CT for money, listed points, or a treasury payout | 0 | XP may still exist. **CT left web W.** |

A city-scale mesh on base CT is already a cooperative: grocery CT is laundromat CT. No extra deal required.

If one room wraps, the other rooms do **not** silently inherit it. They can:

- stay on base and treat the wrapper at discounted κ
- vote to **join** that wrap (a published vertex: we want our people to shop there, we accept their knobs)
- leave

That join is a deal between DFAOs. It is how cooperatives form without a central brand. Staff at A shopping at B only works if A and B said so on the graph.

Axioms a wrap must keep to even *ask* for κ > 0:

- no liquidity
- no transfer-as-bag
- no cash-out
- reputation may stay in CT
- reputation stays out of the XP mint

### 4e. Self-policing

CT polices itself because the web can see the vertices.

- A house that parks H at 0 to starve neighbors, or juiced H to puff its people, wrote that on **its** ledger. Other rooms in W can refuse a join, drop κ, or leave.
- A posted task that pays fantasy CT gets cross-ref’d against similar DAG events. Peer rooms do not have to accept U_W that looks like theater.
- False-fraud shutdowns that do not hold get cited back. Being a dick is expensive *here*, not after a regulator shows up.
- Cash-wrap is auto-exile from W. No committee required. κ = 0.

Nobody has to be good. They have to stay compatible if they want the shared standing. Compatibility is the police.

### 4d. What the store does not own

The store does not own CT. The web does. The store owns H.

### 4f. Visiting proofs (CAT, on-duty, cards you already have)

Stay on base CT. Do not wrap.

A house can lift **H for this ticket** when a proof it already trusts fires: CAT lane+issuer, an on-duty bit, a card, a contract between this fleet and this diner. If-then. Trucker on this run, hotel and restaurant on the same language, spark as if they were local. Off the clock, the bit is dark unless the perk says on.

That is how a route becomes a web without a new community token. CT_W is still the town meter. The visitor did not mint Oak’s CT by eating in Oak. Oak moved H because the job proof verified.

Cash is the early honesty check. A till that sparks on fake proofs eats dollars until the graph cites it.


---

## 5. H — house slider

H ∈ [0, 1]. Public. Moving it writes a vertex **on this house**.

**Default 0.5.** Sit in the middle so SignalFlow can auto-place H for this ticket (or this distributor-tier till) from applicable door totals and load. Auto is recommended. The house can always drag.

- H = 0 — overlay off. Allowed. Also a vertex. Parking it because you are “broke this month” still writes on *your* ledger. Hard times are real. The graph still records that you parked.
- H = 1 — maximum willingness to let compatible CT count against the published ticket cap.
- 0.5 — default. Fair-start. Auto has room to move.

Abuse (nuke H to starve a neighbor, juice H to puff your people, false-fraud shutdown) is a vertex on **you**. If you were wrong, that hits your own DAG, your own ρ as a door, your own next-fractal reading. Incentive not to be a dick is not a sermon. It is your books.

Distributor / B2B tills are still tills. Same H. Same spark. Same vertex.

---

## 6. L — this ticket

\[
L = \mathrm{clip}\big(H \cdot \kappa \cdot \mathrm{CT}_W \cdot \beta,\; 0,\; 1\big)
\]

β ∈ [0, 1] is domain bands shown to **this** door as ZKPs. No bands asked ⇒ β = 1.

Read it in English:  
global standing is XP.  
community standing is CT_W.  
this house’s willingness is H.  
whether this house still speaks base CT is κ.  
L is those things on **this ticket**.

---

## 7. EP — till spark

\[
\mathrm{EP} = \mathrm{XP} \times L
\]

Born and burned in the same sale. Not a wage. Not a currency. Not how staff or distributors get paid. Cash (or the local tender) still clears the invoice. The spark is an overlay. Early mesh: pennies. Dense compatible web: more of the ticket. Remainder rings in cash.

This is also the first door that already exists in the wild: **employee discount** and **loyalty punch cards**.

- Employee discount today: a house slider plus “you work here.” That is H plus CT_W (and maybe a band). EP is that math without a special side ledger. Staff still get wages in tender. The discount is the spark on *their ticket*, same formula as a regular who is a node of demand.
- Loyalty program today: a bag of points you farm and sometimes sell. That is the lose-condition. CT_W + L + a dying EP is the replacement: standing in the web, this till’s H, spark dies. No second currency in the drawer.

A shop can turn H on tomorrow and stop running a separate punch-card database. That is the parallel system eating one desk first. Payroll stays payroll.

---

## 7b. Fiat residual (mesh index, not a person)

\[
\rho = \frac{\Sigma_{\mathrm{EP}}^{\$}}{\Sigma_{\$} + \Sigma_{\mathrm{EP}}^{\$}}
\]

Door totals. Optional ZKP on the count. Not ρ_W. Different letter job.

## 7c. Carbon as a door, not a credit

Same mint. Same no-bag. Spark dies. We do not play their markets.

---

## 8. CAT and IT (off the mint)

**CAT** — (DID, lane, level, issuer). Not a pile.

**IT** — voice.

\[
\mathrm{IT}(m) = \mathrm{IT}_{\text{idle-start}} \cdot (0.95)^{m}
\]

Unsettled XP does not drive IT.

---

## 9. Lose-conditions (ℱ)

- Cash-out of XP.
- Cash-wrap of CT (κ forced to 0; calling it “still base CT” is a lie).
- Silent rewrite of a neighbor’s DAG.
- Mapper that silently mutates history.
- Reputation smuggled into R of the XP mint.
- Rights / consent as a haircut instead of a gate.
- Mesh-wide forehead average of a person.
- Playing their carbon market.

A DFAO can fork CT. It does not get to keep κ = 1 if it wired money. It does not get to call a cash-wrap Codex v2.1.

---

## 10. What this is not

Not speculative tokenomics.  
Not six coins.  
Not “CT is one store’s loyalty punch card.”  
Not SI social entropy.

It is global standing, community standing on a compatible web, a house slider that starts at half, and one spark that dies when the ticket dies.
