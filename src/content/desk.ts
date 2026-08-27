import { papers } from "@/content/site";
import { singles } from "@/content/site";

export const desk = {
  kicker: "The desk",
  title: "The desk",
  lead: "Randall Gossett. Lladnaros. This website is not the Engine. This page is a board: what shipped, what’s open, what to listen to, what the pages actually say. Fungus, not fire.",
  who: "Randall Gossett · Lladnaros · 00ranman",
  site: "https://extropyengine.com",
  engineGit: "https://github.com/00ranman/extropy-engine",
  siteGit: "https://github.com/00ranman/extropyengine.com",
} as const;

export const deskPipes = [
  { t: "Site", d: "Papers, clock, RSS. Not a node.", href: "https://extropyengine.com" },
  { t: "Engine git", d: "Clone this. Keys stay on the box.", href: "https://github.com/00ranman/extropy-engine" },
  { t: "Site git", d: "This page lives here.", href: "https://github.com/00ranman/extropyengine.com" },
  { t: "RSS", d: "Open feed. Point any client at it.", href: "https://extropyengine.com/podcast/feed.xml" },
  { t: "Spotify", d: "Show is live.", href: "https://open.spotify.com/show/7G9pK1dHFCam95qQlFAMNE" },
  { t: "YouTube", d: "Same catalog.", href: "https://www.youtube.com/@Lladnaros/podcasts" },
  { t: "llms.txt", d: "Ground a narrator here first.", href: "/llms.txt" },
] as const;

export const deskMentions = [
  {
    t: "lladnaros",
    href: "https://x.com/search?q=lladnaros&src=typed_query&f=live",
  },
  {
    t: "Extropy Engine",
    href: 'https://x.com/search?q=%22extropy%20engine%22&src=typed_query&f=live',
  },
  {
    t: "00ranman",
    href: "https://x.com/search?q=00ranman&src=typed_query&f=live",
  },
  {
    t: "XP ΔS",
    href: "https://x.com/search?q=%22extropy%22%20(XP%20OR%20%22delta%20S%22%20OR%20%CE%94S)&src=typed_query&f=live",
  },
] as const;

export const deskIndustry = [
  {
    t: "Landauer 1961",
    d: "Information erased has a heat floor. The claimed conversion, not a vibe.",
    href: "https://doi.org/10.1147/rd.53.0183",
  },
  {
    t: "Wyoming DUNA / DAO LLC",
    d: "Legal wrapper. The DFAO is the function. The LLC is the costume.",
    href: "https://wyoleg.gov/2024/Digest/HB0101.pdf",
  },
  {
    t: "Texas Prop Code 209",
    d: "HOA amendment / dissolution pressure. 67% is the number they hide.",
    href: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.209.htm",
  },
  {
    t: "Engine monorepo",
    d: "If it’s in the git, it’s in the process.",
    href: "https://github.com/00ranman/extropy-engine",
  },
  {
    t: "Codex 3 notes",
    d: "Capture for the next freeze. 2.1 stays frozen.",
    href: "/docs/CODEX_3_NOTES.md",
  },
] as const;

export const deskAudience = [
  { t: "@lladnaros", d: "The account. Not a growth dashboard.", href: "https://x.com/lladnaros" },
  { t: "00ranman", d: "GitHub. Issues live here.", href: "https://github.com/00ranman" },
  { t: "Academia", d: "The papers that already shipped.", href: "https://independent.academia.edu/RandallGossett" },
] as const;

export const deskTasks = [
  {
    t: "Record the next episode",
    d: "When there’s a loop worth a show. Not a fake weekly from a template.",
    when: "when it’s real",
  },
  {
    t: "Triage extropy-engine issues",
    d: "The board below pulls open issues. That’s the work.",
    when: "ongoing",
  },
  {
    t: "Codex 3 notes, not another 2.1",
    d: "2.1 is frozen. New mechanics go in the notes file until the next freeze.",
    when: "as they land",
  },
] as const;

export const deskMediaNotes = [
  {
    t: singles[0]?.title ?? "Weaponized Transparency",
    d: singles[0]?.desc ?? "",
    href: singles[0]?.links?.spotify,
  },
  {
    t: papers[0]?.title ?? "Closing the Loop",
    d: papers[0]?.tag ?? "",
    href: papers[0]?.href,
  },
] as const;

export const deskRules = [
  {
    keys: ["observer", "quantum", "schrodinger", "schrödinger", "collapse", "weaponized"],
    text: "Quantum does not apply to the macro. Schrödinger’s cat was a reductio. Weaponized Transparency is talking about systems while fucking with them — watching as a real lever. The observer-effect mapping is not in the work. A narrator who opens there invented a thesis.",
    href: "/faq#observer-effect",
  },
  {
    keys: ["panopticon", "surveillance", "hosted", "watchtower"],
    text: "extropyengine.com is a website. The Engine is the git you clone. A panopticon is one tower that sees every diary. This has a file on your disk and a yes/no proof.",
    href: "/faq#panopticon",
  },
  {
    keys: ["decay", "30 year", "thirty year", "claw", "late burn", "late mint", "0.99"],
    text: "Remaining after n months is 0.99ⁿ. ~30 years ≈ 2.7% — dust. The decades-later mechanism with weight is late mint of a huge cited ΔS, not clawing a lawn from 1996.",
    href: "/#decay",
  },
] as const;
