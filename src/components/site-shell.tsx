import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { primaryNav, site, type NavItem } from "@/content/site";
import { cn } from "@/lib/utils";

function isHashLink(href: string) {
  return href.startsWith("/#") || href.startsWith("#");
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const active = primaryNav.find((n) => n.label === openMenu);

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

        <nav
          aria-label="Site"
          className="hidden items-center justify-center gap-1 border-t border-primary/12 px-6 py-2 text-[11px] tracking-[0.18em] uppercase md:flex"
        >
          {primaryNav.map((item) =>
            item.children ? (
              <DropTrigger
                key={item.label}
                label={item.label}
                open={openMenu === item.label}
                desktop
                onToggle={() => setOpenMenu((cur) => (cur === item.label ? null : item.label))}
              />
            ) : (
              <NavItem key={item.href} href={item.href} className="px-3 py-1.5 text-dim hover:text-primary">
                {item.label}
              </NavItem>
            ),
          )}
        </nav>

        {active?.children ? (
          <div className="hidden border-t border-primary/10 bg-bg/98 md:block">
            <DropPanel item={active} onPick={() => setOpenMenu(null)} />
          </div>
        ) : null}

        <nav
          aria-label="Site"
          className={
            open
              ? "max-h-[min(70dvh,36rem)] overflow-y-auto border-t border-primary/12 bg-bg px-[6vw] py-5 md:hidden"
              : "hidden md:hidden"
          }
        >
          <div className="mx-auto flex max-w-md flex-col">
            {primaryNav.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-primary/10 pb-2">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left text-[14px] tracking-[0.14em] text-primary uppercase"
                    aria-expanded={openMenu === item.label}
                    onClick={() => setOpenMenu((cur) => (cur === item.label ? null : item.label))}
                  >
                    <span>{item.label}</span>
                    <span className="text-dim">{openMenu === item.label ? "–" : "+"}</span>
                  </button>
                  {openMenu === item.label ? (
                    <ul className="m-0 mb-2 list-none p-0">
                      {item.children.map((child) => (
                        <li key={child.href} className="m-0">
                          <NavItem
                            href={child.href}
                            className="block py-2.5 pl-3 text-[13px] tracking-[0.12em] text-fg uppercase hover:text-primary"
                          >
                            {child.label}
                          </NavItem>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : (
                <NavItem
                  key={item.href}
                  href={item.href}
                  className="block border-b border-primary/10 py-3 text-[14px] tracking-[0.14em] text-fg uppercase hover:text-primary"
                >
                  {item.label}
                </NavItem>
              ),
            )}
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

function DropTrigger({
  label,
  open,
  onToggle,
  desktop,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  desktop?: boolean;
}) {
  return (
    <button
      type="button"
      className={cn(
        "px-3 py-1.5 tracking-[0.18em] uppercase",
        open ? "text-primary" : "text-dim hover:text-primary",
      )}
      aria-expanded={open}
      aria-haspopup="true"
      onClick={onToggle}
    >
      {label}
      {desktop ? <span className="ml-1 text-[9px]">{open ? "▴" : "▾"}</span> : null}
    </button>
  );
}

function DropPanel({ item, onPick }: { item: NavItem; onPick: () => void }) {
  const kids = item.children ?? [];
  if (item.label === "Engine") {
    const runHref = new Set(["/#engine", "/start", "/mvt", "/universaltimes"]);
    const run = kids.filter((k) => runHref.has(k.href));
    const read = kids.filter((k) => !runHref.has(k.href));
    return (
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8 px-8 py-5 text-[11px] tracking-[0.14em] uppercase">
        <EngineCol heading="Run" items={run} onPick={onPick} />
        <EngineCol heading="Read" items={read} onPick={onPick} />
      </div>
    );
  }
  return (
    <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-1 px-8 py-4 text-[11px] tracking-[0.14em] uppercase">
      {kids.map((child) => (
        <span key={child.href} onClick={onPick}>
          <NavItem href={child.href} className="block py-1.5 text-dim hover:text-primary">
            {child.label}
          </NavItem>
        </span>
      ))}
    </div>
  );
}

function EngineCol({
  heading,
  items,
  onPick,
}: {
  heading: string;
  items: readonly { label: string; href: string }[];
  onPick: () => void;
}) {
  return (
    <div>
      <p className="mb-2 text-[10px] tracking-[0.22em] text-primary">{heading}</p>
      <ul className="m-0 list-none p-0">
        {items.map((item) => (
          <li key={item.href} className="m-0">
            <span onClick={onPick}>
              <NavItem href={item.href} className="block py-1.5 text-dim hover:text-primary">
                {item.label}
              </NavItem>
            </span>
          </li>
        ))}
      </ul>
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
