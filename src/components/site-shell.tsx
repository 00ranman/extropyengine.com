import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { primaryNav, site, type NavItem } from "@/content/site";
import { cn } from "@/lib/utils";

function isHashLink(href: string) {
  return href.startsWith("/#") || href.startsWith("#");
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [engineOpen, setEngineOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    setOpen(false);
    setEngineOpen(false);
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

        <nav
          aria-label="Site"
          className="hidden items-center justify-center gap-1 border-t border-primary/12 px-6 py-2 text-[11px] tracking-[0.18em] uppercase md:flex"
        >
          {primaryNav.map((item) =>
            item.children ? (
              <EngineMenu
                key={item.label}
                item={item}
                open={engineOpen}
                setOpen={setEngineOpen}
                desktop
              />
            ) : (
              <NavItem key={item.href} href={item.href} className="px-3 py-1.5 text-dim hover:text-primary">
                {item.label}
              </NavItem>
            ),
          )}
        </nav>

        {engineOpen ? (
          <div className="hidden border-t border-primary/10 bg-bg/98 md:block">
            <EnginePanel onPick={() => setEngineOpen(false)} />
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
                    aria-expanded={engineOpen}
                    onClick={() => setEngineOpen((v) => !v)}
                  >
                    <span>{item.label}</span>
                    <span className="text-dim">{engineOpen ? "–" : "+"}</span>
                  </button>
                  {engineOpen ? (
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

function EngineMenu({
  item,
  open,
  setOpen,
  desktop,
}: {
  item: NavItem;
  open: boolean;
  setOpen: (v: boolean | ((p: boolean) => boolean)) => void;
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
      onClick={() => setOpen((v) => !v)}
    >
      {item.label}
      {desktop ? <span className="ml-1 text-[9px]">{open ? "▴" : "▾"}</span> : null}
    </button>
  );
}

function EnginePanel({ onPick }: { onPick: () => void }) {
  const engine = primaryNav.find((n) => n.children);
  const kids = engine?.children ?? [];
  const start = kids.filter((k) => k.href === "/#engine" || k.href.startsWith("/start"));
  const docs = kids.filter((k) => ["/faq", "/glossary", "/dfao"].includes(k.href));
  const hoa = kids.filter((k) => k.href.startsWith("/hoa"));
  const more = kids.filter(
    (k) =>
      k.href !== "/#engine" &&
      !k.href.startsWith("/start") &&
      !["/faq", "/glossary", "/dfao"].includes(k.href) &&
      !k.href.startsWith("/hoa"),
  );
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-8 py-5 text-[11px] tracking-[0.14em] uppercase lg:grid-cols-4">
      <EngineCol heading="Start" items={start} onPick={onPick} />
      <EngineCol heading="Read" items={docs} onPick={onPick} />
      <EngineCol heading="HOA" items={hoa} onPick={onPick} />
      <EngineCol heading="More" items={more} onPick={onPick} />
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
