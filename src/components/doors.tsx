import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { doors } from "@/content/doors";

const WOOD = "#5a3d2a";
const WOOD_DARK = "#3c281c";
const KNOB = "#c4a574";

function DoorLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

function WoodDoor({ label }: { label: string }) {
  return (
    <div
      className="relative mx-auto aspect-[2/3] w-full max-w-[160px] overflow-hidden rounded-[3px]"
      style={{
        background: `linear-gradient(90deg, #2e1d14 0%, ${WOOD} 12%, #6b4a32 18%, ${WOOD} 50%, #6b4a32 82%, ${WOOD} 88%, #2e1d14 100%)`,
        boxShadow: `0 8px 18px rgb(0 0 0 / 0.35), inset 0 0 0 3px ${WOOD_DARK}`,
      }}
    >
      <div className="absolute inset-y-4 left-[22%] w-px bg-black/25" />
      <div className="absolute inset-y-4 right-[22%] w-px bg-black/25" />
      <div
        className="absolute top-[46%] right-[14%] h-3.5 w-3.5 rounded-full"
        style={{ background: KNOB, boxShadow: "inset -1px -1px 0 #7a5a32" }}
      />
      <p className="absolute bottom-3 left-0 right-0 text-center font-mono text-[10px] tracking-[0.18em] text-[#e8d7b0] uppercase">
        {label}
      </p>
    </div>
  );
}

export function FrontDoor() {
  return (
    <Link to="/start" className="mx-auto block w-[150px] max-w-[44vw]">
      <WoodDoor label="Start" />
    </Link>
  );
}

export function DoorGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6">
      {doors.map((door) => (
        <DoorLink key={door.id} href={door.href} className="block min-w-0">
          <WoodDoor label={door.label} />
          <h3 className="mt-3 text-[15px] font-medium leading-snug text-fg">{door.title}</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted">{door.line}</p>
        </DoorLink>
      ))}
    </div>
  );
}
