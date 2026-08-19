import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { nav, site, startBar } from "@/content/site";
import { cn } from "@/lib/utils";

function isHashLink(href: string) {
  return href.startsWith("/#") || href.startsWith("#");
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="relative min-h-dvh bg-bg text-fg">
      <div className="bg-veil pointer-events-none fixed inset-0 z-0" />
      <header className="sticky top-0 z-50 border-b border-primary/12 bg-bg/92 backdrop-blur-md">
        <div className="relative flex items-center justify-center px-16 py-5 max-md:px-14 max-md:py-4">
          <Link
            to="/"
            className="brand-lockup text-[clamp(22px,4.4vw,42px)] max-md:text-[clamp(20px,7vw,28px)]"
            aria-label="Extropy Engine"
          >
            <span className="extropy">{site.wordmarkLeft}</span>
            <span className="engine">{site.wordmarkRight}</span>
          </Link>
          <button
            type="button"
            className="absolute top-1/2 right-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center text-[26px] leading-none text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
        {open ? (
          <div className="flex flex-col bg-[rgb(6_6_6_/_0.95)] px-[5vw] py-2.5 md:hidden">
            {nav.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                className="border-b border-primary/8 py-3 text-[13px] tracking-[0.25em] text-fg uppercase last:border-b-0 hover:text-primary"
              >
                {item.label}
              </NavItem>
            ))}
          </div>
        ) : null}
      </header>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-0 gap-y-1 border-b border-primary/30 bg-bg/92 px-[5vw] py-2.5 text-center text-[13px] tracking-[0.15em] uppercase max-[600px]:flex-col max-[600px]:gap-1.5 max-[600px]:px-3 max-[600px]:py-2 max-[600px]:text-[11px] max-[600px]:tracking-[0.08em]">
        <span className="mr-4 text-fg max-[600px]:mr-0 max-[600px]:mb-0.5 max-[600px]:w-full">
          {startBar.label}:
        </span>
        {startBar.entries.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="px-3 py-1.5 whitespace-nowrap text-primary transition-colors hover:text-fg max-[600px]:px-2 max-[600px]:py-1"
          >
            {item.label}
          </Link>
        ))}
        <span className="ml-6 flex flex-wrap items-center justify-center border-l border-primary/40 pl-6 max-[600px]:mt-1 max-[600px]:ml-0 max-[600px]:w-full max-[600px]:flex-nowrap max-[600px]:border-t max-[600px]:border-l-0 max-[600px]:pt-2 max-[600px]:pl-0">
          {startBar.extras.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="px-2 py-1.5 whitespace-nowrap text-fg/70 transition-colors hover:text-primary max-[600px]:px-1 max-[600px]:py-1 max-[600px]:text-[10px]"
            >
              {item.label}
            </Link>
          ))}
        </span>
      </div>

      <nav className="relative z-10 hidden justify-center gap-7 border-b border-primary/12 bg-bg/60 px-[8vw] py-3 md:flex">
        {nav.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            className="text-[11px] tracking-[0.25em] text-dim uppercase transition-colors hover:text-primary"
          >
            {item.label}
          </NavItem>
        ))}
      </nav>

      <div className="relative z-10">{children}</div>

      <footer className="relative z-10 flex flex-wrap justify-between gap-3 border-t border-primary/12 px-[8vw] py-9 text-[11px] tracking-[0.12em] text-faint">
        <div>
          © {site.year} {site.name.toUpperCase()} — {site.person}
        </div>
        <div className="lowercase">{site.tagline.toLowerCase()}</div>
      </footer>
    </div>
  );
}

function NavItem({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (isHashLink(href)) {
    return (
      <a href={href} className={cn(className)}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={cn(className)}>
      {children}
    </Link>
  );
}