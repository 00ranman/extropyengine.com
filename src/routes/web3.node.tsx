import { createFileRoute, Link } from "@tanstack/react-router";
import { EssayLayout } from "@/components/essay-layout";

export const Route = createFileRoute("/web3/node")({
  head: () => ({
    meta: [{ title: "Clone a node — Extropy Engine" }],
  }),
  component: Page,
});

function Page() {
  return (
    <EssayLayout backTo="/web3" backLabel="Web3" kicker="Node" title="Two boxes today">
      <p>
        The website is not a node. Hostinger is not a node. You clone the git onto a laptop. First
        boot writes a key in a folder you own.
      </p>
      <pre className="overflow-x-auto border border-primary/20 bg-surface/40 p-4 text-[13px] text-fg">
        {`git clone https://github.com/00ranman/extropy-engine.git
cd extropy-engine
node packages/mesh/demo.mjs`}
      </pre>
      <p>That spins two processes, settles a loop, burns it. Then do it on two real machines:</p>
      <pre className="overflow-x-auto border border-primary/20 bg-surface/40 p-4 text-[13px] text-fg">
        {`# house A
DATA=./.mesh-a PORT=4210 HOST=0.0.0.0 PEER=http://B:4211 \\
  node packages/mesh/mesh.mjs serve

# house B
DATA=./.mesh-b PORT=4211 HOST=0.0.0.0 PEER=http://A:4210 \\
  node packages/mesh/mesh.mjs serve`}
      </pre>
      <p>
        Discovery is ugly on purpose. You type the other URL. QR / LAN later. The repo does not
        freeze a public peer list as the mesh. That would be Infura with extra steps.
      </p>
      <p>
        Handshake package still exists for VPS hello/replay. The loop you can feel is{" "}
        <code>packages/mesh</code>.
      </p>
      <p>
        <Link to="/web3/loop" className="text-primary hover:underline">
          The loop →
        </Link>
      </p>
    </EssayLayout>
  );
}
