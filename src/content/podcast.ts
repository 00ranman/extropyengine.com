const feedUrl = "https://extropyengine.com/podcast/feed.xml";
const encoded = encodeURIComponent(feedUrl);
const hostPath = "extropyengine.com/podcast/feed.xml";

export const podcast = {
  title: "Extropy Engine",
  author: "Randall Gossett",
  tagline: "Talk. Field notes. Loops.",
  description:
    "A channel for the stuff that doesn’t want to be a paper. Tap the app you use. It should open already pointed at this feed.",
  feedPath: "/podcast/feed.xml",
  feedUrl,
  cover: "/podcast/cover.jpg",
  page: "/podcast",
  spotify: "https://open.spotify.com/show/7G9pK1dHFCam95qQlFAMNE",
  youtube: "https://www.youtube.com/@Lladnaros/podcasts",
} as const;

export const subscribeApps = [
  {
    id: "spotify",
    label: "Spotify",
    hint: "phone / desktop / web",
    href: podcast.spotify,
    kind: "https" as const,
  },
  {
    id: "youtube",
    label: "YouTube",
    hint: "YouTube / YouTube Music",
    href: podcast.youtube,
    kind: "https" as const,
  },
  {
    id: "apple",
    label: "Apple Podcasts",
    hint: "copies RSS, then paste in the app",
    href: `podcast://${hostPath}`,
    kind: "scheme" as const,
  },
  {
    id: "pocketcasts",
    label: "Pocket Casts",
    hint: "iPhone / Android / web",
    href: `https://pca.st/subscribe?url=${encoded}`,
    kind: "https" as const,
  },
  {
    id: "overcast",
    label: "Overcast",
    hint: "iPhone",
    href: `overcast://x-callback-url/add?url=${encoded}`,
    kind: "scheme" as const,
  },
  {
    id: "antennapod",
    label: "AntennaPod",
    hint: "Android",
    href: `https://antennapod.org/deeplink/subscribe?url=${encoded}`,
    kind: "https" as const,
  },
  {
    id: "addict",
    label: "Podcast Addict",
    hint: "Android",
    href: `podcastaddict://subscribe?url=${encoded}`,
    kind: "scheme" as const,
  },
  {
    id: "castro",
    label: "Castro",
    hint: "iPhone",
    href: `castro://subscribe/${feedUrl}`,
    kind: "scheme" as const,
  },
] as const;

export const directorySubmit = [
  {
    label: "Submit to Apple (for a real listing)",
    href: "https://podcasters.apple.com/",
    note: "One-time. After they list it, the Apple button can go to podcasts.apple.com/id…",
  },
] as const;
