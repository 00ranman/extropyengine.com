import { lyricsBySlug } from "@/content/lyrics-by-slug";
import { albums as albumMeta, singles as singleMeta, type Album, type Single } from "@/content/site";

export function songSlug(title: string) {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[δΔ]s/gi, "delta-s")
    .replace(/[δΔ]/g, "delta")
    .replace(/unf\*ck|u\*\*\*\*k/gi, "unfuck")
    .replace(/[''`´’‘]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const LOCAL: Record<string, string> = {
  "a-little-free": "/audio/a-little-free.mp3",
  "and-thats-how": "/audio/and-thats-how.mp3",
  "and-that-s-how": "/audio/and-thats-how.mp3",
  blueprint: "/audio/blueprint.mp3",
  "civilizational-facepalm": "/audio/civilizational-facepalm.mp3",
  "clap-if-youre-programmed": "/audio/clap-if-youre-programmed.mp3",
  coordinates: "/audio/coordinates.mp3",
  "cult-of-disagreement": "/audio/cult-of-disagreement.mp3",
  "inside-the-machine": "/audio/inside-the-machine.mp3",
  "irrelevance-is-the-killshot": "/audio/irrelevance-is-the-killshot.mp3",
  irrelevance: "/audio/irrelevance-is-the-killshot.mp3",
  "evolution-not-revolution": "/audio/irrelevance-is-the-killshot.mp3",
  "kill-the-arc": "/audio/kill-the-arc.mp3",
  "no-filter-no-bs": "/audio/no-filter-no-bs.mp3",
  "no-ones-lying": "/audio/no-ones-lying.mp3",
  "no-ones-lying-and-thats-the-problem": "/audio/no-ones-lying.mp3",
  "syntax-sabotage": "/audio/syntax-sabotage.mp3",
  "the-glitch-was-me": "/audio/the-glitch-was-me.mp3",
  "the-real-magic": "/audio/the-real-magic.mp3",
  "what-is-god": "/audio/what-is-god.mp3",
  "what-is-god-really": "/audio/what-is-god.mp3",
  vote: "/audio/vote.mp3",
  "schrodingers-flex": "/audio/schrodingers-flex.mp3",
  "weaponized-transparency": "/audio/weaponized-transparency.mp3",
  "unrendered-sky": "/audio/unrendered-sky.mp3",
  "photon-404-exe": "/audio/photon-404-exe.mp3",
  "photon-404": "/audio/photon-404-exe.mp3",
  photon_404: "/audio/photon-404-exe.mp3",
  "just-another-brick": "/audio/just-another-brick.mp3",
  "power-lunch-at-the-soup-kitchen": "/audio/power-lunch-at-the-soup-kitchen.mp3",
};

export const localAudioBySlug = LOCAL;

const LYRIC_ALIAS: Record<string, string> = {
  "and-that-s-how": "and-thats-how",
  "and-thats-how-how": "and-thats-how",
  "what-is-god": "what-is-god-really",
  "no-ones-lying-and-thats-the-problem": "no-ones-lying",
  irrelevance: "irrelevance-is-the-killshot",
  "evolution-not-revolution": "irrelevance-is-the-killshot",
  antihero: "anti-hero",
  "blueprints-bullsh": "blueprints-bull-sh",
  "postscarcity-blues": "post-scarcity-blues",
  sublogic: "sub-logic",
  s: "delta-s",
  "say-the-fucking-thing": "say-the-f-g-thing",
  "power-lunch-at-the-soup-kitchen-acousticish-version":
    "power-lunch-at-the-soup-kitchen-acoustic-ish-version",
  "version-000": "version-0-0-0",
  "clap-if-you-re-programmed": "clap-if-youre-programmed",
  "photon-404": "photon-404-exe",
  photon_404: "photon-404-exe",
  "unfuck-the-world": "unfuck-the-world-for-a-dollar",
  "paradox-eater-pt-2": "paradox-eater-pt-2-the-broken-quantum",
};

export type CatalogSong = {
  n: number;
  title: string;
  slug: string;
  src?: string;
  lyrics?: string;
};

export function localSrc(title: string) {
  return LOCAL[songSlug(title)];
}

export function lyricsFor(title: string) {
  const slug = songSlug(title);
  return lyricsBySlug[slug] || lyricsBySlug[LYRIC_ALIAS[slug] ?? ""];
}

const ALBUM_SONGS: Record<string, string[]> = {
  "The Lladnaros EP": [
    "Blueprint",
    "Unrendered Sky",
    "Weaponized Transparency",
    "PHOTON_404.exe",
    "Just Another Brick",
    "Power Lunch at the Soup Kitchen (Acoustic-ish Version)",
    "And That's... (How)",
  ],
  "Unf*ck the World for a Dollar": [
    "Language is a Lie",
    "Punching the Mascot",
    "#vote",
    "Optimization Theater",
    "Systemic Collapse Symphony",
    "Unf*ck the World (for a Dollar)",
    "Keys to Eden (The Web3 Botch)",
    "Flip the Table",
    "Irrelevance (Is the Killshot)",
    "Memetic Infection",
    "Schrödinger’s Flex",
    "Paradox Eater, Pt. 2 (the Broken Quantum)",
    "Family of Fangs",
    "Recursive Until Proven Innocent",
    "Solipsism",
    "ΔS",
    "IYKYDKYDK",
    "Power Lunch at the Soup Kitchen",
  ],
  "The Glitch Was Me": [
    "Coordinates",
    "The Curved Line Between a Lie and a Line",
    "404_self not found",
    "Cache Me Outside",
    "Sub-Logic",
    "Layers on Layers",
    "No Filter, No BS",
    "The Glitch Was Me",
    "Blueprints & Bull-Sh...",
    "I Don't Play the Game",
    "Algorithm Savior",
    "rant",
    "The F U Internet Engine",
    "First Cut, First Principles",
    "System Update",
    "Shadows on the Wall",
    "No Safe Word for Reality",
    "Rewind the Spectrum",
    "God Glitch",
    "Cosmic Haze",
    "Post-Scarcity Blues",
    "Version 0.0.0",
    "Anti-Hero",
    "AUTOCOMPLETE AUTOPSIES",
    "Contradiction is the Godline",
  ],
  "Patterns and Mouth Noises": [
    "Consensus Hell",
    "Syntax Sabotage",
    "Systems Within Systems.",
    "Origin Story",
    "It Learns By Speaking",
    "A Little Free",
    "The Real Magic",
    "Human Nature (The System's Lie)",
    "You Could Be Wrong (And That’s the Point)",
    "Say the F*****g Thing",
    "The Language Is Doing the Talking",
    "XP FRAMEWORK_ THE TAKEOVER",
    "Entropy Map",
    "Words Are Weird",
  ],
};

function pack(title: string, n: number): CatalogSong {
  const slug = songSlug(title);
  return { n, title, slug, src: LOCAL[slug] || LOCAL[LYRIC_ALIAS[slug] ?? ""], lyrics: lyricsFor(title) };
}

export type AlbumCard = Album & { songs: CatalogSong[] };

export const albumCards: AlbumCard[] = albumMeta.map((a) => ({
  ...a,
  songs: (ALBUM_SONGS[a.title] ?? []).map((title, i) => pack(title, i + 1)),
}));

export const singleCards: (Single & { slug: string; src?: string; lyrics?: string })[] = singleMeta.map((s) => ({
  ...s,
  slug: songSlug(s.title),
  src: localSrc(s.title),
  lyrics: lyricsFor(s.title),
}));

export const masterSongs: { album: string; n?: number; title: string; kind: "album" | "ep" | "single"; lyrics?: string; src?: string }[] = [
  ...albumCards.flatMap((a) =>
    a.songs.map((s) => ({
      album: a.title,
      n: s.n,
      title: s.title,
      kind: (a.kind === "ep" ? "ep" : "album") as "album" | "ep",
      lyrics: s.lyrics,
      src: s.src,
    })),
  ),
  ...singleCards.map((s) => ({
    album: "Singles",
    title: s.title,
    kind: "single" as const,
    lyrics: s.lyrics,
    src: s.src,
  })),
];

export function catalogBySrc(src: string) {
  const hit = masterSongs.find((s) => s.src === src);
  if (hit) return hit;
  const file = src.split("/").pop()?.replace(/\.(mp3|wav)$/i, "") ?? "";
  const slug = file.replace(/_/g, "-");
  return {
    album: "Singles",
    title: file.replace(/-/g, " "),
    kind: "single" as const,
    lyrics: lyricsBySlug[slug] || lyricsBySlug[LYRIC_ALIAS[slug] ?? ""],
    src,
  };
}
