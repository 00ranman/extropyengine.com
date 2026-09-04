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

function DoorFace({ door }: { door: Door }) {
  return (
    <div
      className="relative h-40 overflow-hidden"
      style={{ background: door.ink, boxShadow: `inset 0 0 0 3px ${door.tone}` }}
    >
      <div
        className="absolute inset-2"
        style={{ boxShadow: `inset 0 0 0 1px ${door.tone}66` }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-3 w-16 -translate-x-1/2"
        style={{ background: door.tone }}
      />
      <div
        className="absolute top-1/2 right-3 h-3 w-3 -translate-y-1/2 rounded-full"
        style={{ background: door.tone }}
      />
      <p
        className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.28em] uppercase"
        style={{ color: door.tone }}
      >
        {door.label}
      </p>
    </div>
  );
}

export function DoorGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-3 ${compact ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {doors.map((door) => (
        <article key={door.id} className="border border-fg/10 bg-bg/50">
          <DoorLink href={door.href} className="block focus:outline-none">
            <DoorFace door={door} />
            <div className="px-3 py-3">
              <h3 className="font-display text-[15px] leading-snug text-fg">{door.title}</h3>
              <p className="mt-1 text-[12px] leading-relaxed text-muted">{door.line}</p>
            </div>
          </DoorLink>
          <p className="border-t border-fg/8 px-3 py-2 font-mono text-[10px] tracking-[0.16em] uppercase">
            <span className="text-faint">Next </span>
            <DoorLink href={door.next.href} className="hover:underline" >
              <span style={{ color: door.tone }}>{door.next.label} →</span>
            </DoorLink>
          </p>
        </article>
      ))}
    </div>
  );
}

export function DoorChip({ door }: { door: Door }) {
  return (
    <DoorLink
      href={door.href}
      className="inline-flex items-center gap-2 border px-2 py-1 font-mono text-[10px] tracking-[0.16em] uppercase"
      style={{ borderColor: `${door.tone}88`, color: door.tone }}
    >
      <span className="inline-block h-3 w-2" style={{ background: door.tone }} />
      {door.label}
    </DoorLink>
  );
}
