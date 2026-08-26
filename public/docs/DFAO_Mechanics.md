# DFAO — Decentralized Fractal Autonomous Organization

Protocol note. Extropy Engine. August 2026.

DFAO means Decentralized Fractal Autonomous Organization.

Not “feedback-aware.” Not a DAO with extra letters. Fractal: a DFAO at one scale is made of DFAOs at the scale below. Same loop — post, do, confirm, mint or burn. Different default knobs.

## Scale is a suggestion, not a fence

The protocol enum is:

NANO → MICRO → MESO → MACRO → PLANETARY

Those are labels for a suggested rule set. They are not membership caps. Nothing in the physics, and nothing in `DFAOScale`, ejects you for having eight people in a MICRO. “2–7” was a shorthand that leaked as if it were a law. It is not.

When you are about this size, call it this, and load this default rule set. If you outgrow the behavior, rename the scale and load the next defaults. You can override. The loop does not care what you named the room.

| Scale | Typical look | Default knobs |
| --- | --- | --- |
| **NANO** — one person, one project | You. A repo. A beat. A stall. | No quorum theater. You close your own loops. Nest under something bigger when you want company. |
| **MICRO** — a team / small group | Often a handful. Sometimes a dozen. Sometimes forty if it still behaves like a team. | Light quorum. Short deliberation. Linear reputation is usually enough. Crossing seven people does not eject you. |
| **MESO** — department / community | A neighborhood, a shop floor, a parish, a lab. | Real quorum as a percent of actives. Deliberation in days, not hours. Children are MICROs doing the work. |
| **MACRO** — organization / city | A company, a town, a coalition of neighborhoods. | Conviction or quadratic voting. Nested children. Binding decisions only if the DFAO is ACTIVE, not SHADOW. |
| **PLANETARY** — civilization-wide mesh | The whole board. You do not run this as a group chat. | Highest thresholds. Proposal weight scales with log(system size). Children do almost all of the work. |

A MICRO with twelve people is a MICRO that’s a bit large, not a protocol violation. A MICRO with forty-two is still a MICRO if it still behaves like a team. When it starts needing departments, that’s MESO.

## What actually changes with scale

Same confirmation loop at every scale. What scales:

1. **Quorum** — a count, or a percent of actives. Suggested, overridable.
2. **Deliberation window** — hours at MICRO, days at MESO, longer above.
3. **Voting method** — linear reputation, quadratic, or conviction.
4. **Binding** — SHADOW DFAOs do not bind. HYBRID binds some things. ACTIVE binds under its own rules.
5. **Proposal threshold** — roughly `log(system size) × complexity × impact radius`. Bigger rooms need a better reason to move the floor.
6. **Nesting** — parent / child. A MACRO is DFAOs all the way down.

## Phases

| Status | Meaning |
| --- | --- |
| SHADOW | Practice governance. No binding decisions. |
| HYBRID | Some decisions bind. Typical onramp. |
| ACTIVE | Full autonomy under the DFAO’s own rule set. |
| SUSPENDED | Emergency. Governance paused on purpose. |
| DISSOLVED | Terminal. The fractal does not have to live forever. |

## How you start one

Post work. Someone does it. You confirm. That is already a DFAO. LocalFlow is the errand face so nobody has to say “protocol.” SignalFlow is how the ΔS gets proposed — you do not type in a score. One person is NANO. A crew is MICRO. When the crew grows a second crew, you nest. You do not wait for a priesthood, and you do not wait until you have exactly seven.

Votes rewrite the DFAO they are cast in: settle window, decay rates, quorum. They do not rewrite the mesh. PLANETARY is the only room that hits everyone, and getting a vote through there is supposed to be hard. Defaults (including a ~30-day first settle window) are starting numbers, not axioms. There may yet be a floor: some XP and some IT always burn. That would be an axiom. It is not written in as one yet.

## Source

- Registry: `packages/dfao-registry` in [extropy-engine](https://github.com/00ranman/extropy-engine)
- Types: `packages/contracts/src/types.ts` — `DFAO`, `DFAOScale`, `DFAOStatus`, `DFAOGovernanceConfig`
- Site: https://extropyengine.com/dfao
- Worked example (HOA): https://extropyengine.com/hoa

Implementation is incremental. The happy path loop is real. The org layer is specified and filling in.
