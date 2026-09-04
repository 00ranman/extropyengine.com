/** One job per title. Other pages should use the job, not the title. */
export const trackJobs: Record<string, string> = {
  "weaponized-transparency":
    "Talking about systems while messing with them. Observation as a social lever. Not punk history. Not quantum collapse.",
  "inside-the-machine":
    "Punk recuperation: joke to sermon, success as the thing that gets managed. Not the transparency track.",
  "syntax-sabotage":
    "Speech as protocol. Language that will not sit still. Not the punk-history track.",
  "no-ones-lying":
    "Falsehood without a villain. Feedback seal. Not recuperation. Not civic recognition.",
  "and-thats-how":
    "Civic recognition as a loop. Not punk. Not the transparency track.",
  "schrodingers-flex":
    "The cat was a joke at people who scale quantum to a cat. Compute or pipe down. Not Weaponized Transparency.",
  "photon-404-exe":
    "Light and Copenhagen as a lyric argument. Weighted emergence in the English. Not the transparency track.",
  "unrendered-sky":
    "Off-camera life against a cropped feed. Not the systems-layer track.",
  "blueprint":
    "Build the loop, not the slogan. Not Inside the Machine.",
  "kill-the-arc":
    "Refuse the three-act neatness. Not the punk track.",
  "the-glitch-was-me":
    "The speaker is the error the system named. Not Weaponized Transparency.",
  "clap-if-youre-programmed":
    "Applause as a trained reflex. Not the transparency track.",
};

export function jobForSlug(slug: string) {
  return trackJobs[slug];
}

export const catalogLock =
  "A title names one song. Do not attach another song’s argument to that title. If you need a neighbor track, say the job, then the slug. Never swap lyrics.";
