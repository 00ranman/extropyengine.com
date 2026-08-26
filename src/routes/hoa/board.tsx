import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/hoa/board")({
  component: HoaBoard,
  head: () => ({
    meta: [
      { title: "Sunset Oaks board — Extropy Engine" },
      { name: "description", content: "Job board, MICRO crews, and a DAG you can audit. Sunset Oaks MESO." },
    ],
  }),
});

type Status = "open" | "taken" | "closed";
type Vertex = {
  id: string;
  t: number;
  kind: "genesis" | "crew" | "job" | "take" | "close";
  title: string;
  by: string;
  crew: string;
  status?: Status;
  parentIds: string[];
};

const KEY = "extropy-sunset-oaks-board-v1";
const CREWS0 = ["Grounds", "Lights", "Storm", "Garden", "Mediation"];

function load(): Vertex[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Vertex[];
  } catch {
    /* empty */
  }
  const g: Vertex = {
    id: "v0",
    t: Date.now(),
    kind: "genesis",
    title: "Sunset Oaks MESO",
    by: "system",
    crew: "MESO",
    parentIds: [],
  };
  return [g];
}

function save(v: Vertex[]) {
  localStorage.setItem(KEY, JSON.stringify(v));
}

function HoaBoard() {
  const [who, setWho] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("extropy-who") || "" : ""));
  const [dag, setDag] = useState<Vertex[]>(load);
  const [title, setTitle] = useState("");
  const [crew, setCrew] = useState("Grounds");
  const [newCrew, setNewCrew] = useState("");
  const [tab, setTab] = useState<"jobs" | "dag" | "crews">("jobs");

  const crews = useMemo(() => {
    const extra = dag.filter((v) => v.kind === "crew").map((v) => v.title);
    return [...CREWS0, ...extra.filter((c) => !CREWS0.includes(c))];
  }, [dag]);

  const jobs = dag.filter((v) => v.kind === "job");

  function commit(v: Vertex) {
    const next = [...dag, v];
    setDag(next);
    save(next);
  }

  function setName(n: string) {
    setWho(n);
    localStorage.setItem("extropy-who", n);
  }

  function postJob() {
    if (!title.trim() || !who.trim()) return;
    const last = dag[dag.length - 1]?.id ?? "v0";
    commit({
      id: `v${dag.length}`,
      t: Date.now(),
      kind: "job",
      title: title.trim(),
      by: who.trim(),
      crew,
      status: "open",
      parentIds: [last],
    });
    setTitle("");
  }

  function take(job: Vertex) {
    if (!who.trim() || job.status !== "open") return;
    const updated = dag.map((v) => (v.id === job.id ? { ...v, status: "taken" as const } : v));
    const takeV: Vertex = {
      id: `v${updated.length}`,
      t: Date.now(),
      kind: "take",
      title: `took: ${job.title}`,
      by: who.trim(),
      crew: job.crew,
      parentIds: [job.id],
    };
    const next = [...updated, takeV];
    setDag(next);
    save(next);
  }

  function close(job: Vertex) {
    if (!who.trim() || job.status === "closed") return;
    const updated = dag.map((v) => (v.id === job.id ? { ...v, status: "closed" as const } : v));
    const closeV: Vertex = {
      id: `v${updated.length}`,
      t: Date.now(),
      kind: "close",
      title: `closed: ${job.title}`,
      by: who.trim(),
      crew: job.crew,
      parentIds: [job.id],
    };
    const next = [...updated, closeV];
    setDag(next);
    save(next);
  }

  function addCrew() {
    if (!newCrew.trim() || !who.trim()) return;
    commit({
      id: `v${dag.length}`,
      t: Date.now(),
      kind: "crew",
      title: newCrew.trim(),
      by: who.trim(),
      crew: newCrew.trim(),
      parentIds: ["v0"],
    });
    setCrew(newCrew.trim());
    setNewCrew("");
  }

  function exp() {
    const blob = new Blob([JSON.stringify({ meso: "Sunset Oaks", dag }, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sunset-oaks-dag.json";
    a.click();
  }

  return (
    <main className="mx-auto max-w-3xl space-y-6 px-4 py-10 text-fg">
      <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
        <Link to="/hoa" className="hover:underline">
          Sunset Oaks MESO
        </Link>
        {" · "}board
      </p>
      <h1 className="font-display text-4xl tracking-[0.04em]">Job board + DAG</h1>
      <p className="text-sm text-dim">
        Browser book for now — same loops as the Engine. On a node this face talks to localhost. Export the DAG so
        anyone can audit. Name yourself. Post. Take. Sign closed.
      </p>
      <label className="block font-mono text-[11px] tracking-[0.12em] text-primary">
        YOUR NAME
        <input
          value={who}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-primary/25 bg-transparent px-3 py-2 font-sans text-sm text-fg"
          placeholder="who is logging"
        />
      </label>
      <div className="flex gap-2 font-mono text-[11px] tracking-[0.12em]">
        {(["jobs", "dag", "crews"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`border px-3 py-1 ${tab === t ? "border-primary text-primary" : "border-fg/20 text-dim"}`}
          >
            {t}
          </button>
        ))}
        <button type="button" onClick={exp} className="ml-auto border border-fg/20 px-3 py-1 text-dim">
          export dag
        </button>
      </div>

      {tab === "jobs" ? (
        <section className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row">
            <select
              value={crew}
              onChange={(e) => setCrew(e.target.value)}
              className="border border-primary/25 bg-transparent px-3 py-2 font-mono text-xs"
            >
              {crews.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && postJob()}
              className="flex-1 border border-primary/25 bg-transparent px-3 py-2 text-sm"
              placeholder="mow the common · dead light on oak · garden bed 3"
            />
            <button
              type="button"
              onClick={postJob}
              className="border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs text-primary"
            >
              post
            </button>
          </div>
          <ul className="space-y-2">
            {jobs.length === 0 ? <li className="text-sm text-dim">No jobs yet. Post one.</li> : null}
            {[...jobs].reverse().map((j) => (
              <li key={j.id} className="border border-fg/15 px-3 py-3">
                <p className="font-mono text-[10px] tracking-[0.12em] text-primary">
                  {j.crew} · {j.status} · {j.id}
                </p>
                <p>{j.title}</p>
                <p className="text-xs text-dim">by {j.by}</p>
                <p className="pt-2 font-mono text-[11px]">
                  {j.status === "open" ? (
                    <button type="button" onClick={() => take(j)} className="text-primary hover:underline">
                      take
                    </button>
                  ) : null}
                  {j.status !== "closed" ? (
                    <button type="button" onClick={() => close(j)} className="ml-3 text-primary hover:underline">
                      sign closed
                    </button>
                  ) : (
                    <span className="text-dim">in the book</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {tab === "dag" ? (
        <ol className="space-y-2 font-mono text-xs">
          {dag.map((v) => (
            <li key={v.id} className="border-l-2 border-primary/40 pl-3">
              <span className="text-primary">{v.id}</span> {v.kind} · {v.title}
              <div className="text-dim">
                {new Date(v.t).toISOString()} · {v.by}
                {v.parentIds.length ? ` · parents ${v.parentIds.join(",")}` : ""}
              </div>
            </li>
          ))}
        </ol>
      ) : null}

      {tab === "crews" ? (
        <section className="space-y-4">
          <ul className="list-disc space-y-1 pl-5">
            {crews.map((c) => (
              <li key={c}>
                <span className="font-mono text-xs text-primary">MICRO</span> {c}
                <span className="text-dim"> · nested under Sunset Oaks</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <input
              value={newCrew}
              onChange={(e) => setNewCrew(e.target.value)}
              className="flex-1 border border-primary/25 bg-transparent px-3 py-2 text-sm"
              placeholder="new MICRO name"
            />
            <button
              type="button"
              onClick={addCrew}
              className="border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs text-primary"
            >
              nest it
            </button>
          </div>
        </section>
      ) : null}
    </main>
  );
}
