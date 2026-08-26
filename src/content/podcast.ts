const feedUrl = "https://extropyengine.com/podcast/feed.xml";

export const podcast = {
  title: "Extropy Engine",
  author: "Randall Gossett",
  tagline: "Talk. Field notes. Loops.",
  description:
    "A channel for the stuff that doesn’t want to be a paper. Spotify and YouTube are live. Anyone else: take the RSS. This site is not the Engine. If a deep dive closed on panopticon, that was a reading error — afterword on this page.",
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
    hint: "live",
    href: podcast.spotify,
  },
  {
    id: "youtube",
    label: "YouTube",
    hint: "live",
    href: podcast.youtube,
  },
] as const;
