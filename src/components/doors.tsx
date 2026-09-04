import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { doors, type Door } from "@/content/doors";

function isHash(href: string) {
  return href.startsWith("/#") || href.startsWith("#");
}

function isFile(href: string) {
  return href.startsWith("/docs/");
}

function DoorLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (isFile(href) || href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  if (isHash(href)) {
    const [to, hash] = href.split("#");
    return (
      <Link to={to || "/"} hash={hash} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

function DoorFace({
  tone,
  ink,
  label,
  tall,
}: {
  tone: string;
  ink: string;
  label: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative mx-auto w-full overflow-hidden rounded-t-sm ${tall ? "h-52 sm:h-56" : "h-44"}`}
      style={{
        background: `linear-gradient(90deg, ${ink} 0%, ${tone}33 8%, ${ink} 18%, ${ink} 82%, ${tone}33 92%, ${ink} 100%)`,
        boxShadow: `inset 0 0 0 2px ${tone}99, inset 0 0 0 6px ${ink}`,
      }}
    >
      <div className="absolute inset-y-3 left-[18%] w-px opacity-40" style={{ background: tone }} />
      <div className="absolute inset-y-3 right-[18%] w-px opacity-40" style={{ background: tone }} />
      <div
        className="absolute top-1/2 right-[12%] h-3.5 w-3.5 -translate-y-1/2 rounded-full"
        style={{ background: "#c4a574", boxShadow: "inset -1px -1px 0 #6b4e2e" }}
      />
      <p
        className="absolute bottom-3 left-0 right-0 text-center font-mono text-[10px] tracking-[0.22em] uppercase"
        style={{ color: "#e8d7b0" }}
      >
        {label}
      </p>
    </div>
  );
}

export function FrontDoor() {
  return (
    <Link to="/start" className="group mx-auto block w-[148px] max-w-[42vw] sm:w-[168px]">
      <DoorFace tone="#8a6a45" ink="#4a3424" label="Enter" tall />
      <p className="mt-3 text-center text-[13px] text-muted">
        Start here. Six short explanations. Pick one.
      </p>
    </Link>
  );
}

export function DoorGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
      {doors.map((door) => (
        <article key={door.id} className="min-w-0">
          <DoorLink href={door.href} className="block">
            <DoorFace tone={door.tone} ink={door.ink} label={door.label} tall />
            <h3 className="font-display mt-2 text-[14px] leading-snug text-fg sm:text-[15px]">{door.title}</h3>
            <p className="mt-1 text-[12px] leading-relaxed text-muted">{door.line}</p>
          </DoorLink>
          <p className="mt-2 font-mono text-[10px] tracking-[0.14em] text-dim uppercase">
            Next:{" "}
            <DoorLink href={door.next.href} className="text-primary hover:underline">
              {door.next.label}
            </DoorLink>
          </p>
        </article>
      ))}
    </div>
  );
}
