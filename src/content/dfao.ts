/** DFAO — Decentralized Fractal Autonomous Organization.
 *  Scale labels from packages/contracts DFAOScale. Bands are suggestions, not fences.
 */

export const DFAO_NAME = "Decentralized Fractal Autonomous Organization";

export const dfaoScales = [
  {
    scale: "NANO",
    typical: "One person, one project",
    look: "You. A repo. A beat. A stall.",
    knobs: "No quorum theater. You close your own loops. Nest under something bigger when you want company.",
  },
  {
    scale: "MICRO",
    typical: "A team / small group",
    look: "Often a handful. Sometimes a dozen. Sometimes forty if it still behaves like a team.",
    knobs: "Light quorum. Short deliberation. Linear reputation is usually enough. Crossing seven people does not eject you.",
  },
  {
    scale: "MESO",
    typical: "Department / community",
    look: "A neighborhood, a shop floor, a parish, a lab.",
    knobs: "Real quorum as a percent of actives. Deliberation in days, not hours. Children are MICROs doing the work.",
  },
  {
    scale: "MACRO",
    typical: "Organization / city",
    look: "A company, a town, a coalition of neighborhoods.",
    knobs: "Conviction or quadratic voting. Nested children. Binding decisions only if the DFAO is ACTIVE, not SHADOW.",
  },
  {
    scale: "PLANETARY",
    typical: "Civilization-wide mesh",
    look: "The whole board. You do not run this as a group chat.",
    knobs: "Highest thresholds. Proposal weight scales with log(system size). Children do almost all of the work.",
  },
] as const;

export const dfaoPhases = [
  {
    status: "SHADOW",
    note: "Practice governance. No binding decisions. You are learning the loop without burning the building.",
  },
  {
    status: "HYBRID",
    note: "Some decisions bind. The rest is still rehearsal. Typical onramp.",
  },
  {
    status: "ACTIVE",
    note: "Full autonomy under the DFAO’s own rule set.",
  },
  {
    status: "SUSPENDED",
    note: "Emergency. Governance paused on purpose.",
  },
  {
    status: "DISSOLVED",
    note: "Terminal. The fractal does not have to live forever.",
  },
] as const;