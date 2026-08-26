import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";
import { hoaNode, hoaPage, hoaWrap } from "@/content/hoa";

export const Route = createFileRoute("/hoa")({
  component: HoaPage,
  head: () => ({
    meta: [
      { title: "Neighborhood MESO — Extropy Engine" },
      {
        name: "description",
        content:
          "Run the Extropy Engine as an HOA-shaped MESO. Old laptop, one command, you are a node. Jobs an association already does, confirmed, XP minted.",
      },
    ],
  }),
});

function HoaPage() {
  return (
    <EssayLayout backTo="/#engine" backLabel="Engine" kicker={hoaPage.kicker} title={hoaPage.title}>
      <p>{hoaPage.lead}</p>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">The wrapper</h2>
      <p>
        Not a new religion. The association already has a job list. We run that list on the Engine.
        LocalFlow is the face so nobody has to say protocol. SignalFlow proposes ΔS. You never type
        a score.
      </p>
      <div className="overflow-x-auto border border-primary/18">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead>
            <tr className="font-mono text-[10px] tracking-[0.16em] text-primary uppercase">
              <th className="border-b border-primary/20 px-3 py-2 font-normal">What an HOA does</th>
              <th className="border-b border-primary/20 px-3 py-2 font-normal">On the Engine</th>
            </tr>
          </thead>
          <tbody>
            {hoaWrap.map((row) => (
              <tr key={row.hoa}>
                <td className="border-b border-fg/10 px-3 py-3 align-top font-mono text-xs text-primary">
                  {row.hoa}
                </td>
                <td className="border-b border-fg/10 px-3 py-3 align-top">{row.engine}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-display pt-4 text-2xl tracking-[0.04em] text-fg">{hoaNode.title}</h2>
      <p>{hoaNode.need}</p>
      <pre className="overflow-x-auto whitespace-pre-wrap border border-primary/18 bg-surface/40 p-4 font-mono text-xs leading-relaxed text-fg">
        {hoaNode.line}
      </pre>
      <ol className="list-decimal space-y-2 pl-5">
        {hoaNode.after.map((s) => (
          <li key={s.slice(0, 40)}>{s}</li>
        ))}
      </ol>
      <p>{hoaNode.windows}</p>
      <p className="font-mono text-xs text-dim">Stop: {hoaNode.stop}</p>
      <p>
        Preset and script:{" "}
        <a href={hoaNode.href} className="text-primary hover:underline" target="_blank" rel="noreferrer">
          presets/hoa-meso
        </a>
        . Scale table:{" "}
        <Link to="/dfao" className="text-primary hover:underline">
          DFAO
        </Link>
        .
      </p>
    </EssayLayout>
  );
}
