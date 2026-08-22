export type LoopStatus =
  | "closes"
  | "open-on-purpose"
  | "partial"
  | "hypothesis";

export type PaperPart =
  | "signal"
  | "distortion"
  | "language"
  | "sacred"
  | "identity"
  | "civic";

export type ListenLinks = {
  spotify: string;
  apple: string;
  youtube: string;
};

export type Track = {
  slug: string;
  n: number;
  title: string;
  thesis: string;
  year: string;
  release: string;
  part: PaperPart;
  loop: LoopStatus;
  loopLabel: string;
  links: ListenLinks;
  lyricsKind: "full" | "selected";
  lyricsNote?: string;
  lyrics: string;
  reading: string[];
};
