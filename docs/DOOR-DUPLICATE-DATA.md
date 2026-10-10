# First door — duplicate data

Hostile spec. One narrow door. If this door cannot close under attack, do not add a second door.

Austin sentence: the mapper is versioned on the vertex, leakage is on the claim, and a stranger can still close a real loop.

## What this door must prove

1. Domain-native input is inspectable (source, duplicate rule, canonical record, what was kept).
2. Mapper M_v is versioned and attached to the vertex.
3. Boundary is explicit (which stores are in, which are out).
4. Leakage can attach later (moved dups, false merges, restore-farms, downstream errors).
5. A stranger can close without prior XP or a friend on the graph.
6. Late burn cites A. It does not erase A.

## Door-local mapper (not new Codex letters)

These factors live on this door. They are not planetary glyphs.

\[
\Delta S_{\text{claimed}} = D_v \cdot I_r \cdot Q_c \cdot P_t \cdot B_c
\]

| Factor | Meaning |
|---|---|
| D_v | Independently validated duplicates removed or merged |
| I_r | Redundancy estimate per class (encoding / compression — stated method) |
| Q_c | Confidence the retained record is complete |
| P_t | Persistence across the declared watch window |
| B_c | Boundary confidence (not moved, hidden, or reclassified) |

If B_c is unknown, it is not 1. Unknown ⇒ this door does not close.

Then the general check from [METER-MATH.md](/docs/METER-MATH.md):

\[
\Delta S = \Delta S_{\text{claimed}} - \Delta S_{\text{leakage}} - \Delta S_{\text{displacement}} - \Delta S_{\text{unaccounted harm}}
\]

Then the signed mint uses that ΔS. Reputation never enters it.

## Attacks that have to land on the graph

| Attack | Response |
|---|---|
| Create dups, then clean them | No credit inside the contributor’s own attributable window |
| Partition laundering | Boundary + sampled search of declared adjacent stores |
| Reclass / rename out of scope | Schema diff + lineage |
| False merge | Reversible merge log + sample review + downstream errors |
| Canonical record stripped | Field-level completeness |
| Delete / restore farm | Lineage + delayed close + F |
| Dirty baseline | Baseline signed before action when possible |
| Friendly validators | Challenge path + more than one independent check |
| Late legal / audit need | Retention gate + recover window + B → A burn edge |

## Late burn

A closes with +x. B later cites A. Status changes. History keeps: claim, M_v, evidence, validators, first status, counterevidence, new status, reason.

## Stranger test (published, measurable)

An unaffiliated person, public rules, reproducible evidence, can close without sponsorship.

Watch: time-to-first-review, outsider close rate given evidence quality, insider vs outsider burn rate, validator diversity.

If outsiders lose after controlling for evidence, name the capture. Fix the door. Do not add a door.
