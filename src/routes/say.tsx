import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { EssayLayout } from "@/components/essay-layout";
import { SAY, repairTranscript } from "@/lib/stt-lexicon";

export const Route = createFileRoute("/say")({ component: SayPage });

type Rec = {
  start: () => void;
  stop: () => void;
  onresult: ((ev: { results: { [i: number]: { [j: number]: { transcript: string } } } }) => void) | null;
  onend: (() => void) | null;
  lang: string;
  interimResults: boolean;
  continuous: boolean;
};

function getRec(): Rec | null {
  if (typeof window === "undefined") return null;
  const C =
    (window as unknown as { SpeechRecognition?: new () => Rec; webkitSpeechRecognition?: new () => Rec })
      .SpeechRecognition ??
    (window as unknown as { webkitSpeechRecognition?: new () => Rec }).webkitSpeechRecognition;
  return C ? new C() : null;
}

function SayPage() {
  const recRef = useRef<Rec | null>(null);
  const [live, setLive] = useState(false);
  const [raw, setRaw] = useState("");
  const [fixed, setFixed] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const rec = getRec();
    if (!rec) return;
    rec.lang = "en-US";
    rec.interimResults = true;
    rec.continuous = true;
    rec.onresult = (ev) => {
      let text = "";
      for (let i = 0; ev.results[i]; i++) text += ev.results[i][0].transcript + " ";
      const trimmed = text.trim();
      setRaw(trimmed);
      setFixed(repairTranscript(trimmed));
    };
    rec.onend = () => setLive(false);
    recRef.current = rec;
    return () => rec.stop();
  }, []);

  const toggle = () => {
    const rec = recRef.current;
    if (!rec) return;
    if (live) {
      rec.stop();
      setLive(false);
      return;
    }
    setCopied(false);
    rec.start();
    setLive(true);
  };

  const copy = async () => {
    const text = fixed || repairTranscript(raw);
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const onPaste = (value: string) => {
    setRaw(value);
    setFixed(repairTranscript(value));
    setCopied(false);
  };

  return (
    <EssayLayout backTo="/" backLabel="Extropy Engine" title="Say the names">
      <p>
        Phones do not know <strong className="text-fg">Lladnaros</strong> or{" "}
        <strong className="text-fg">Extropy</strong>. Talk-to-text will write entropy, lad-narrows,
        whatever. Two fixes: teach the phone, then this page repairs the rest.
      </p>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">Say it like this</h2>
      <dl className="space-y-4">
        <div>
          <dt className="font-mono text-[12px] tracking-[0.12em] text-primary">{SAY.lladnaros.word}</dt>
          <dd>
            <span className="text-fg">{SAY.lladnaros.say}</span> — {SAY.lladnaros.hint}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[12px] tracking-[0.12em] text-primary">{SAY.extropy.word}</dt>
          <dd>
            <span className="text-fg">{SAY.extropy.say}</span> — {SAY.extropy.hint}
          </dd>
        </div>
      </dl>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">Teach the phone</h2>
      <p>
        Add these as contacts. Dictation copies names from your address book. That is the ugly trick
        that actually works on iPhone and Android.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="/contacts/lladnaros.vcf"
          className="border border-primary/30 px-3 py-2 text-[11px] tracking-[0.16em] text-primary uppercase hover:bg-primary hover:text-ink"
        >
          Add Lladnaros contact
        </a>
        <a
          href="/contacts/extropy-engine.vcf"
          className="border border-primary/30 px-3 py-2 text-[11px] tracking-[0.16em] text-primary uppercase hover:bg-primary hover:text-ink"
        >
          Add Extropy Engine contact
        </a>
      </div>
      <p className="text-sm text-dim">
        Keyboard shortcuts if you want them: iOS Text Replacement or Gboard personal dictionary —
        <code className="text-fg"> llad</code> → Lladnaros, <code className="text-fg"> xtrp</code> →
        Extropy Engine.
      </p>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">Fix a line</h2>
      <p>Speak or paste. Entropy Engine becomes Extropy Engine. Lad-narrows becomes Lladnaros. Lone “entropy” is left alone — that word is real.</p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={toggle}
          className="border border-primary/40 px-4 py-2 text-[12px] tracking-[0.16em] text-primary uppercase hover:bg-primary hover:text-ink"
        >
          {live ? "Stop" : "Listen"}
        </button>
        <button
          type="button"
          onClick={copy}
          className="border border-fg/20 px-4 py-2 text-[12px] tracking-[0.16em] uppercase hover:border-primary hover:text-primary"
        >
          {copied ? "Copied" : "Copy fixed"}
        </button>
      </div>
      <textarea
        value={raw}
        onChange={(e) => onPaste(e.target.value)}
        rows={4}
        placeholder="Paste mangled dictation here, or hit Listen."
        className="mt-3 w-full border border-fg/15 bg-bg px-3 py-2 font-mono text-sm text-fg outline-none focus:border-primary/50"
      />
      {fixed ? (
        <p className="border border-primary/20 bg-primary/5 px-3 py-3 text-fg">
          {fixed}
        </p>
      ) : null}
    </EssayLayout>
  );
}