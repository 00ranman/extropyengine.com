import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { menu, nav, site, startBar } from "@/content/site";
import { cn } from "@/lib/utils";

function isHashLink(href: string) {
  return href.startsWith("/#") || href.startsWith("#");
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative min-h-dvh bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-60 focus:bg-primary focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="bg-veil pointer-events-none fixed inset-0 z-0 no-print" />
      <header className="no-print sticky top-0 z-50 border-b border-primary/12 bg-bg/92 backdrop-blur-md">
        <div className="relative flex flex-col items-center justify-center px-6 py-4 md:px-10 md:py-5">
          <Link
            to="/"
            className="brand-lockup text-[clamp(22px,4.4vw,42px)] max-md:text-[clamp(20px,7vw,28px)]"
            aria-label="Extropy Engine"
            onClick={() => setOpen(false)}
          >
            <span className="extropy">{site.wordmarkLeft}</span>
            <span className="engine">{site.wordmarkRight}</span>
          </Link>
          <p className="mt-2 text-center text-[11px] tracking-[0.22em] text-accent uppercase [text-shadow:0_0_14px_rgb(34_211_238_/_0.35)] max-md:text-[9px] max-md:tracking-[0.14em]">
            {site.tagline}
          </p>
          <button
            type="button"
            className="absolute top-1/2 right-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center text-[26px] leading-none text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {/* Desktop: Enter first, then the site. Always in the HTML for crawl. */}
        <div className="hidden border-t border-primary/12 md:block">
          <nav
            aria-label="Enter"
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 px-6 py-2 text-[11px] tracking-[0.16em] uppercase"
          >
            <NavItem
              href="/start"
              className="mr-2 px-2 py-1.5 font-bold tracking-[0.22em] text-primary hover:text-fg"
            >
              Enter
            </NavItem>
            {startBar.entries.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                className="px-2.5 py-1.5 text-fg/85 hover:text-primary"
              >
                {item.label}
              </NavItem>
            ))}
            <span className="mx-2 hidden h-3 w-px bg-primary/30 lg:block" aria-hidden />
            {startBar.extras.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                className="px-2 py-1.5 text-dim hover:text-primary"
              >
                {item.label}
              </NavItem>
            ))}
          </nav>
          <nav
            aria-label="Site"
            className="flex flex-wrap items-center justify-center gap-x-1 border-t border-primary/8 px-6 py-2 text-[11px] tracking-[0.18em] text-dim uppercase"
          >
            {nav.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 hover:text-primary"
              >
                {item.label}
              </NavItem>
            ))}
          </nav>
        </div>

        {/* Mobile drawer */}
        <nav
          aria-label="Site"
          className={
            open
              ? "max-h-[min(70dvh,32rem)] overflow-y-auto border-t border-primary/12 bg-bg px-[6vw] py-5 md:hidden"
              : "hidden md:hidden"
          }
        >
          <div className="mx-auto flex max-w-md flex-col">
            {menu.map((group, gi) => (
              <div key={group.heading} className={gi > 0 ? "mt-5 border-t border-primary/15 pt-4" : ""}>
                {group.href ? (
                  <NavItem
                    href={group.href}
                    className="mb-1 block py-1.5 text-[10px] tracking-[0.28em] text-primary uppercase hover:text-fg"
                  >
                    {group.heading}
                  </NavItem>
                ) : (
                  <p className="mb-1 py-1.5 text-[10px] tracking-[0.28em] text-primary uppercase">
                    {group.heading}
                  </p>
                )}
                <ul className="m-0 list-none p-0">
                  {group.items.map((item) => (
                    <li key={item.href} className="m-0 border-b border-primary/8 last:border-b-0">
                      <NavItem
                        href={item.href}
                        className="block py-3 text-[14px] tracking-[0.14em] text-fg uppercase hover:text-primary"
                      >
                        {item.label}
                      </NavItem>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </header>

      <div id="main" className="relative z-10">
        {children}
      </div>

      <footer className="no-print relative z-10 flex flex-wrap justify-between gap-3 border-t border-primary/12 px-[8vw] py-9 text-[11px] tracking-[0.12em] text-faint">
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
    const hash = href.replace(/^\/?#/, "");
    return (
      <Link to="/" hash={hash} className={cn(className)}>
        {children}
      </Link>
    );
  }
  return (
    <Link to={href} className={cn(className)}>
      {children}
    </Link>
  );
}