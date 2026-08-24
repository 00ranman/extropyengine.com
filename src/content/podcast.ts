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
} as const;

export const subscribeApps = [
  {
    id: "apple",
    label: "Apple Podcasts",
    hint: "iPhone / Mac",
    href: `itpc://${hostPath}`,
    kind: "app" as const,
  },
  {
    id: "pocketcasts",
    label: "Pocket Casts",
    hint: "iPhone / Android / web",
    href: `https://pca.st/subscribe?url=${encoded}`,
    kind: "app" as const,
  },
  {
    id: "overcast",
    label: "Overcast",
    hint: "iPhone",
    href: `overcast://x-callback-url/add?url=${encoded}`,
    kind: "app" as const,
  },
  {
    id: "antennapod",
    label: "AntennaPod",
    hint: "Android",
    href: `https://antennapod.org/deeplink/subscribe?url=${encoded}`,
    kind: "app" as const,
  },
  {
    id: "addict",
    label: "Podcast Addict",
    hint: "Android",
    href: `podcastaddict://subscribe?url=${encoded}`,
    kind: "app" as const,
  },
  {
    id: "castro",
    label: "Castro",
    hint: "iPhone",
    href: `castro://subscribe/${feedUrl}`,
    kind: "app" as const,
  },
] as const;

export const directorySubmit = [
  {
    label: "Submit to Spotify",
    href: "https://podcasters.spotify.com/",
    note: "One-time. After they list it, a Spotify button can go here.",
  },
  {
    label: "Submit to YouTube",
    href: "https://studio.youtube.com/",
    note: "YouTube Studio → Content → Podcasts. Same RSS.",
  },
  {
    label: "Submit to Apple",
    href: "https://podcasters.apple.com/",
    note: "Makes the official Apple listing. The iPhone button above works before that.",
  },
] as const;
