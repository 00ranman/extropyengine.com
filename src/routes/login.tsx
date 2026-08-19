import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <SiteShell>
      <main className="grid min-h-[70vh] place-items-center px-6 py-16">
        <div className="w-full max-w-sm space-y-5 border border-primary/20 bg-surface/80 p-8">
          <div className="text-[11px] tracking-[0.3em] text-primary uppercase">Account</div>
          <h1 className="font-display text-3xl tracking-[0.04em]">Sign in</h1>
          <p className="text-sm text-muted">
            Optional. The site is public. Sign-in is only for future notes and tools.
          </p>
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <button
                key={p.providerId}
                type="button"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                className="w-full border border-primary/30 bg-primary/6 px-4 py-3 font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all hover:border-primary hover:bg-primary hover:text-ink"
              >
                Continue with {p.label}
              </button>
            ))
          ) : (
            <p className="text-sm text-dim">Sign-in is disabled.</p>
          )}
          <Link to="/" className="block text-center text-[11px] tracking-[0.2em] text-dim uppercase hover:text-primary">
            ← Back to Lladnaros
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
