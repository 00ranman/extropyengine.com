# Meter math

Unsigned working spec for the balancing acts. Not asset tokenomics. Nothing here cashes out.

Signed Codex is still v2.1. Canonical mint in code is `packages/xp-formula` v3.1.2. If this page and the letter key disagree, the [letter key](/key) wins on names. This page wins on how the meters couple.

Do not remap letters. Do not add a ninth instrument.

## What kind of object

| Object | Kind | Liquid? | Who can change the rule |
|---|---|---|---|
| R, F, ΔS, w · E, Tₛ | Mint inputs | No | Planetary. Fork if you rewrite the mint. |
| XP | Global standing meter | No. No cash-out. | Planetary. |
| CT | This-door standing meter | No | This DFAO’s vote. Next door unchanged. |
| H | House slider | No. Vertex when it moves. | This house. Optional auto from this till only. |
| L | This-ticket standing | No | Computed at the till from CT and H. |
| EP | Till spark | Dies in the sale | Derived. Not a bag. |
| ρ | Fiat residual index | No | Sum of published till totals. Not a person. |
| CAT | Skill record | Unique | Off the XP mint. |
| IT | Governance meter | No | Off the XP mint. |
| 0.99ⁿ | XP leak | — | Planetary knob. |
| ℱ | Falsifiability | — | Lose-conditions. Not the letter F. |

Cash still rings the rest of a ticket. Cash cannot mint XP.

## 1. The mint (signed)

\[
\mathrm{XP}_{\text{mint}} = R \times F \times \Delta S \times (w \cdot E) \times \log(1/T_s)
\]

Gates before the product is allowed to land:

- ΔS > 0 after the mapper and the leakage check.
- Both edges agreed.
- Rights / consent fail ⇒ ineligible. Not “big ΔS minus an ethics haircut.”
- Unsettled vertices do not move IT.

### Terms

**R** ∈ [0.1, 10]  
Rarity of the *action class*, not the person.

**F**  
Frequency of Decay. First close of that class is 1. Repeats pay less. Not ℱ.

**ΔS**  
Bits-equivalent proxy for verified reduction on this loop. Domain-native measurement goes through a **versioned mapper** (next section). Not XP. Not SI social heat.

**w · E**  
Dot product. w is the eight-domain weight vector. E is this loop’s effort / domain vector. Not a fifth letter.

**Tₛ**  
Slam window for *this* loop.

\[
T_s = \exp(-\lambda \min(\Delta t, \Delta t_{\mathrm{cap}}))
\]

\[
\log(1/T_s) = \lambda \cdot \mathrm{clip}(\Delta t)
\]

Δt → 0 ⇒ Tₛ = 1 ⇒ log = 0 ⇒ XP = 0. On purpose. Do not “fix” with log(1 + 1/Tₛ). Δt_cap stops stall-farming.

Three clocks that are not the same:

1. Tₛ — this loop’s elapsed time  
2. F — repeating the class  
3. 0.99ⁿ — standing after settlement  

IT leak is a fourth clock, on voice.

### Floor slogan (not a second theory)

\[
\mathrm{XP} \ge \Delta S / c_l^{2}
\]

cₗ is causal-closure speed in that domain. Compression of the mint. Not a new *c*.

## 2. Mapper (constitution of ΔS)

\[
\text{domain-native signal} \xrightarrow{M_v} \Delta S_{\text{claimed}} \quad \text{with uncertainty } U \text{ on the vertex}
\]

M_v is mapper version v. Signed. Inspectable. Testable on known cases. Forkable.

A new mapper does not silently rewrite old vertices. It writes a recalculation edge. The old mapping stays.

Accounting check, not extra Codex letters:

\[
\Delta S = \Delta S_{\text{claimed}} - \Delta S_{\text{leakage}} - \Delta S_{\text{displacement}} - \Delta S_{\text{unaccounted harm}}
\]

If a term is unknown, the vertex says unknown. Unknown does not default to 0 so the mint can fire.

The first public door (duplicate data) has its own mapper factors. Those factors are **door-local**. They are not new planetary letters. See [DOOR-DUPLICATE-DATA.md](/docs/DOOR-DUPLICATE-DATA.md).

## 3. XP after it lands

You do not spend XP. Access economy.

Remaining after n ~30-day steps:

\[
\mathrm{XP}(n) = \mathrm{XP}_{\text{settled}} \cdot 0.99^{n}
\]

Half-life ≈ 69 months. Never zero in the reals.

Late mint: a later vertex cites this one with new ΔS. Citation-gated delta. Not a second full paycheck.

Late burn: later counterevidence cites this one. Burns remaining dust plus that new delta. Does not un-mow the common. Does not erase A. B → A is a visible edge.

Cash-out of XP is a lose-condition. A room that votes it in forked.

## 4. CT — this door

Different formula from the mint. On purpose.

Working form for door d, window W (DFAO-voted length):

\[
\mathrm{CT}_d = \mathrm{clip}\big(C_d \cdot P_d \cdot (1 - F_d^{\text{local}}),\; 0,\; 1\big)
\]

- C_d — coupling density: confirmed closes / purchases at *this* door in W, scaled by that house’s load. Regular groceries beat a random spike.
- P_d — predictability. Can this house order stock against you. High variance of presence lowers P_d.
- F_d^local — local farm penalty if the same coupling class is being gamed here.

Not dollars spent. Not XP. Not mopping floors. This DFAO can vote the exact shapes of C_d and P_d. That vote does not rewrite CT next door.

CT is not purchased with XP.

## 5. H — house slider

H ∈ [0, 1]. Public. Moving it writes a vertex.

- H = 0 — layer off at this till (kill).
- H = 1 — this-door CT may count in full against the ticket cap the house published.
- Between — how much of that CT may count, and how much of the ticket the layer may touch.

Hand-set, or optional auto from **this till’s** proofs and load. Same object. Override stays with the house.

A cheap or greedy H writes upward into that house’s own EP history and the next fractal’s reading of that house.

## 6. L — this ticket

\[
L = \mathrm{clip}\big(H \cdot \mathrm{CT}_d \cdot \beta,\; 0,\; 1\big)
\]

β ∈ [0, 1] is the mix of domain bands shown to **this** door as ZKPs (yes/no or band ≥ n). If the door asked for no bands, β = 1. Bands are not a mesh broadcast.

L is literal standing at this purchase. Same question as: are loops closing here.

## 7. EP — till spark

\[
\mathrm{EP} = \mathrm{XP} \times L
\]

Born and burned in the same sale. No bag. No 1:1 table to dollars.

Both edges accept a bits-equivalent estimate of how much of the fiat ticket this spark may touch. Early mesh: pennies. Dense mesh: more of the ticket. Fridge does not lock. Remainder rings in cash.

Farming EP as if it were a treasury is structurally empty: no cash-out, burns here, H is the house’s vertex. Capture of H, burns of other people, and bloc IT are different holes.

## 7b. Fiat residual (mesh index, not a person)

EP already dies in the sale. What can live on the graph is a **till aggregate**, not a forehead.

Each door may publish, on a clock it chooses, a vertex:

\[
\Sigma_{\mathrm{EP}},\quad \Sigma_{\$},\quad \rho = \frac{\Sigma_{\mathrm{EP}}^{\$}}{\Sigma_{\$} + \Sigma_{\mathrm{EP}}^{\$}}
\]

- Σ_EP — accepted sparks this window (bits-equivalent, then the dollar-touch both edges already agreed).
- Σ_$ — fiat that still rang.
- ρ — share of the ticket the overlay touched. 0 = cash only. 1 = the layer cleared the window.

A DFAO can sum its doors. A wider mesh can sum published DFAO vertices. That sum is an **index of how irrelevant cash was in that window**, not a price of XP.

Rules so this stays an overlay:

- No who. No diary. The vertex is totals for a door and a window.
- Optional ZKP: prove the totals came from N burned EP vertices without listing them.
- Real-time means “this till, this hour,” not a planetary brain watching every pocket.
- ρ is not minted. It does not cash out. It does not become a ninth letter.
- A house that lies about Σ is lying about its own books. Contest + late burn still apply.

Early mesh: ρ ≈ pennies. Peak overlay: ρ climbs in pockets that actually close. Fiat obsolete is that curve in public, not a speech.

## 8. CAT and IT (off the mint)

**CAT** — unique record: DID, lane, level, issuer. Are you qualified. Not a pile. Not bought with XP.

**IT** — governance / demonstration weight.

\[
\mathrm{IT}(m) = \mathrm{IT}_{\text{idle-start}} \cdot (0.95)^{m}
\]

≈ 5% / month if you vanish. Disputed or unsettled XP vertices do not drive IT eligibility. Unique-in-DFAO and clean-in-epoch are predicates, not piles.

## 9. Lose-conditions (ℱ)

- Cash-out of XP.
- Silent rewrite of a neighbor’s DAG.
- Mapper that silently mutates history.
- Rights / consent used as a haircut instead of a gate.
- Display of a mesh-wide forehead average of a person.

A DFAO can fork. It does not get to call the fork Codex v2.1.

## 10. What this is not

Not speculative tokenomics.  
Not six coins.  
Not a grant office with extra footnotes.  
Not SI social entropy.

It is coupled meters plus one spark that dies when the ticket dies.
