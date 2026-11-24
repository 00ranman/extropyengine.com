import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useRouterState } from "@tanstack/react-router";
import { QuietPlayer } from "@/components/quiet-player";
import { NowPlayingTicker } from "@/components/now-playing-ticker";
import { startBed } from "@/lib/audio-bed";
import {
  getMusicConsent,
  setMusicConsent,
  subscribeMusicConsent,
  type MusicConsent,
} from "@/lib/music-consent";

const DISMISS_KEY = "music-offer-dismissed";

/**
 * Site-wide audio, gated on the visitor's answer.
 *
 * The player and ticker render only after a yes. The offer itself appears
 * once, at the moment a visitor navigates away from the landing page to
 * anywhere else on the site, and only while the answer is still unknown.
 * Closing the offer without answering puts it away for the session; the
 * recorded yes or no sticks across visits.
 */
export function SiteAudio() {
  const consent = useSyncExternalStore<MusicConsent>(
    subscribeMusicConsent,
    getMusicConsent,
    () => "unknown",
  );
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prevPath = useRef<string | null>(null);
  const [offerOpen, setOfferOpen] = useState(false);

  useEffect(() => {
    const was = prevPath.current;
    prevPath.current = pathname;
    if (was !== "/" || pathname === "/") return;
    if (getMusicConsent() !== "unknown") return;
    try {
      if (window.sessionStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      /* ignore */
    }
    setOfferOpen(true);
  }, [pathname]);

  const dismiss = () => {
    try {
      window.sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setOfferOpen(false);
  };

  const answer = (v: "yes" | "no") => {
    setMusicConsent(v);
    setOfferOpen(false);
    if (v === "yes") startBed();
  };

  return (
    <>
      {consent === "yes" ? (
        <>
          <QuietPlayer />
          <NowPlayingTicker />
        </>
      ) : null}
      {offerOpen ? (
        <div
          className="no-print fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Music offer"
          onClick={dismiss}
        >
          <div
            className="w-full max-w-md border border-primary/40 bg-bg px-6 py-7 text-center shadow-[0_0_30px_rgb(255_90_31_/_0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[11px] tracking-[0.28em] text-primary uppercase">One question</p>
            <h2 className="font-display mt-3 text-2xl tracking-[0.03em] text-fg">
              Want the music on?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The landing page stays quiet on purpose. The rest of this site has a soundtrack:
              Lladnaros, the music side of the project. It can play while you look around, or it
              can stay off. Either answer sticks.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => answer("yes")}
                className="inline-block border border-primary bg-primary px-7 py-3.5 font-mono text-xs font-bold tracking-[0.2em] text-ink uppercase transition-all duration-300 hover:bg-primary-deep hover:shadow-[0_0_32px_rgb(255_90_31_/_0.5)]"
              >
                Yes, play it
              </button>
              <button
                type="button"
                onClick={() => answer("no")}
                className="inline-block border border-primary/30 bg-primary/6 px-7 py-3.5 font-mono text-xs font-bold tracking-[0.2em] text-fg uppercase transition-all duration-300 hover:border-primary hover:bg-primary hover:text-ink hover:shadow-[0_0_24px_rgb(255_90_31_/_0.4)]"
              >
                No, keep it quiet
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
