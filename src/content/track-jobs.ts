/** One job per title. Identify by first line. Never name a neighbor title here. */
export const trackJobs: Record<string, string> = {
  "fake-slop":
    "Dismissal-word: slop as a tag instead of a flaw. First line: You're doing that thing where words replace reality again.",
  "procedural-ghostride":
    "Incentives with no driver. First line: Welcome to the bus with no driver.",
  "weaponized-transparency":
    "Talking about systems while messing with them. First line: They want systems / I give them ecosystems. NDA into a beat drop.",
  "inside-the-machine":
    "Punk recuperation: joke to sermon. First line: Timeline says punk was always left wing. Green Day, Dookie.",
  "syntax-sabotage": "Speech as protocol. Language that will not sit still.",
  "no-ones-lying": "Falsehood without a villain. Feedback seal.",
  "and-thats-how": "Civic recognition as a loop.",
  "schrodingers-flex":
    "The cat was a joke at people who scale quantum to a cat. Compute or pipe down.",
  "photon-404-exe": "Light and Copenhagen as a lyric argument. Weighted emergence in the English.",
  "unrendered-sky": "Off-camera life against a cropped feed.",
  "blueprint": "Build the loop, not the slogan.",
  "kill-the-arc": "Refuse the three-act neatness.",
  "the-glitch-was-me": "The speaker is the error the system named.",
  "clap-if-youre-programmed": "Applause as a trained reflex.",
};

export function jobForSlug(slug: string) {
  return trackJobs[slug];
}

export const catalogLock =
  "A title names one song. Identify it by its first line. If you cannot quote the first line, do not use the title.";
