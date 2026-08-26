import { createFileRoute, Link } from "@tanstack/react-router";
import { hoaRun } from "@/content/hoa";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/hoa/sunset-oaks")({
  component: SunsetOaksPage,
  head: () => ({
    meta: [
      { title: "Sunset Oaks — Extropy Engine" },
      {
        name: "description",
        content: "Sunset Oaks is the first MESO. Clone the app. Run it on a laptop. Crews are MICROs.",
      },
    ],
  }),
});

function SunsetOaksPage() {
  return (
    <EssayLayout backTo="/hoa" backLabel="HOA takeover" kicker="MESO · San Marcos" title="Sunset Oaks">
      <p>
        This sub is the first MESO. Crews under it are MICROs — grounds, lights, storm, garden,
        mediation, or one you name. The book is not on this website. Clone the repo. Run the app
        on a machine in the house.
      </p>
      <p className="font-mono text-[11px] tracking-[0.12em] text-primary">TODAY — JUST NODE</p>
      <pre className="overflow-x-auto whitespace-pre-wrap border border-primary/18 bg-surface/40 p-4 font-mono text-xs leading-relaxed text-fg">
        {hoaRun.clone}
        {"\n"}
        {hoaRun.light}
      </pre>
      <p>
        Then open <span className="font-mono text-xs">http://localhost:4016</span> on that computer.
        That’s the job board and the DAG, on disk in that spare room. Next house on the same
        network can use your IP. Name the MESO Sunset Oaks when it asks.
      </p>
      <p className="font-mono text-[11px] tracking-[0.12em] text-primary">FULL ENGINE</p>
      <pre className="overflow-x-auto whitespace-pre-wrap border border-primary/18 bg-surface/40 p-4 font-mono text-xs leading-relaxed text-fg">{`HOA_MESO_NAME="Sunset Oaks" ${hoaRun.full}`}</pre>
      <p>
        Docker Desktop first. SignalFlow, loop ledger, XP mint, DFAO registry, neighborhood app.
        Same name on the next laptop.
      </p>
      <p>
        Legal name on their paper: San Marcos Sunset Oaks Homeowners Association, Inc. Management
        on the TREC certificate: Spencer Powell / AMG. Drop CC&Rs in{" "}
        <a
          href="https://github.com/00ranman/extropy-engine/tree/main/presets/sunset-oaks/docs"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          presets/sunset-oaks/docs
        </a>{" "}
        when you have them.
      </p>
      <p>
        <Link to="/hoa" className="text-primary hover:underline">
          The takeover
        </Link>
        {" · "}
        <a href={hoaRun.app} className="text-primary hover:underline" target="_blank" rel="noreferrer">
          neighborhood-app
        </a>
        {" · "}
        <a
          href="https://github.com/00ranman/extropy-engine/tree/main/presets/sunset-oaks"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          preset
        </a>
        .
      </p>
    </EssayLayout>
  );
}
