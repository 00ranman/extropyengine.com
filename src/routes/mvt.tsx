import { createFileRoute } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { exercises } from "@/content/essays";

export const Route = createFileRoute("/mvt")({ component: Mvt });

function Mvt() {
  return (
    <EssayLayout backTo="/start" backLabel="Start Here" title="Try It Yourself">
      <p>
        People trust systems they can touch. These exercises are designed to make entropy reduction
        tangible. Each one takes less than an hour. None require any technology. All will change how
        you see the systems around you.
      </p>
      <p>
        The goal is not to convince you. The goal is to give you a lens. If the lens works, you'll
        know. If it doesn't, discard it.
      </p>
      {exercises.map((ex) => (
        <article key={ex.n} className="border border-primary/15 p-5">
          <div className="mb-2 text-[10px] tracking-[0.28em] text-primary uppercase">
            Exercise {ex.n} · {ex.time}
          </div>
          <h2 className="font-display mb-3 text-xl text-fg">{ex.title}</h2>
          {ex.body.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)} className="mb-3 last:mb-0">
              {para}
            </p>
          ))}
        </article>
      ))}
      <h2 className="font-display pt-4 text-2xl text-fg">What Comes Next</h2>
      <p>
        If these exercises changed how you see something — even one thing — the framework is working.
        Not because you agreed with it. Because it gave you a functional lens that produced new
        observations.
      </p>
      <p>That's the minimum viable transformation. Everything else is just scaling it.</p>
    </EssayLayout>
  );
}
