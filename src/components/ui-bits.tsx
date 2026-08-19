import { cn } from "@/lib/utils";

export function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display text-[clamp(26px,3.5vw,42px)] tracking-[0.08em] text-primary [text-shadow:0_0_20px_rgb(255_90_31_/_0.3)]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Btn({
  href,
  children,
  primary = false,
  className,
  download,
  external,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  download?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "inline-block border px-7 py-3.5 font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300",
        primary
          ? "border-primary bg-primary text-ink hover:bg-primary-deep hover:shadow-[0_0_32px_rgb(255_90_31_/_0.5)]"
          : "border-primary/30 bg-primary/6 text-fg hover:border-primary hover:bg-primary hover:text-ink hover:shadow-[0_0_24px_rgb(255_90_31_/_0.4)]",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function StatusPill({
  status,
  className,
}: {
  status: "live" | "dev" | "concept";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-current px-2 py-0.5 font-mono text-[9px] tracking-[0.28em] uppercase",
        status === "live" && "text-live",
        status === "dev" && "text-primary",
        status === "concept" && "text-concept",
        className,
      )}
    >
      {status}
    </span>
  );
}
