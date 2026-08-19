import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
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
        <div className="relative flex items-center justify-between px-[8vw] py-6 max-md:px-5 max-md:py-4">
          <Link
            to="/"
            className="font-display text-lg font-bold tracking-[0.35em] text-fg max-md:text-xs max-md:tracking-[0.18em]"
          >
            L L A D N A R O S
          </Link>
          <span
            className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 font-display text-2xl md:block"
            aria-hidden
          >
            ◈
          </span>
          <Link
            to="/"
            className="font-display text-lg font-bold tracking-[0.35em] text-fg max-md:text-xs max-md:tracking-[0.18em]"
          >
            S O R A N D A L L
          </Link>
          <button
            type="button"
            className="absolute right-5 top-3 z-10 p-2 text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {open ? (
          <div className="flex flex-col border-t border-primary/20 bg-bg/95 px-5 py-2 md:hidden">
            {nav.map((item) => (
              <NavItem key={item.href} href={item.href} className="border-b border-primary/8 py-3 text-sm tracking-[0.25em] uppercase">
                {item.label}
              </NavItem>
            ))}
          </div>
        ) : null}
      </header>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-0 gap-y-1 border-b border-primary/30 bg-bg/92 px-[5vw] py-2.5 text-center text-[11px] tracking-[0.15em] uppercase md:text-[13px]">
        <span className="mr-4 text-fg max-md:mr-0 max-md:mb-1 max-md:w-full">{startBar.label}:</span>
        {startBar.entries.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="px-3 py-1.5 text-primary transition-colors hover:text-fg"
          >
            {item.label}
          </Link>
        ))}
        <span className="ml-6 flex flex-wrap items-center justify-center border-l border-primary/40 pl-6 max-md:ml-0 max-md:mt-1 max-md:w-full max-md:border-l-0 max-md:border-t max-md:pt-2 max-md:pl-0">
          {startBar.extras.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="px-2 py-1.5 text-fg/70 transition-colors hover:text-primary"
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
