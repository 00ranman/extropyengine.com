import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { menu, site } from "@/content/site";
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
      <div className="bg-veil pointer-events-none fixed inset-0 z-0 no-print" />
      <header className="no-print sticky top-0 z-50 border-b border-primary/12 bg-bg/92 backdrop-blur-md">
        <div className="relative flex flex-col items-center justify-center px-16 py-5 max-md:px-14 max-md:py-4">
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
            className="absolute top-1/2 right-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center text-[26px] leading-none text-fg"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {open ? (
          <nav
            aria-label="Site"
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-primary/12 bg-bg px-[5vw] py-6"
          >
            <div className="mx-auto flex max-w-sm flex-col">
              {menu.map((group, gi) => (
                <div
                  key={group.heading ?? "site"}
                  className={gi > 0 ? "mt-6 border-t border-primary/15 pt-5" : ""}
                >
                  {group.heading ? (
                    group.href ? (
                      <NavItem
                        href={group.href}
                        className="mb-1 py-2 text-[11px] tracking-[0.28em] text-primary uppercase hover:text-fg"
                      >
                        {group.heading}
                      </NavItem>
                    ) : (
                      <p className="mb-1 py-2 text-[11px] tracking-[0.28em] text-primary uppercase">
                        {group.heading}
                      </p>
                    )
                  ) : null}
                  {group.items.map((item) => (
                    <NavItem
                      key={item.href}
                      href={item.href}
                      className="border-b border-primary/8 py-3 text-[13px] tracking-[0.22em] text-fg uppercase last:border-b-0 hover:text-primary"
                    >
                      {item.label}
                    </NavItem>
                  ))}
                </div>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <div className="relative z-10">{children}</div>

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
