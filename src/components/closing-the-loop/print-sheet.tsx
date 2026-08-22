import type { ReactNode } from "react";

export function PrintSheet({
  running,
  children,
}: {
  running: string;
  children: ReactNode;
}) {
  return (
    <table className="print-sheet">
      <thead>
        <tr>
          <th>
            <div className="print-running">{running}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{children}</td>
        </tr>
      </tbody>
    </table>
  );
}