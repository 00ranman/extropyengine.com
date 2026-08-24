import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { QuietPlayer } from "@/components/quiet-player";
import { JsonLd } from "@/components/json-ld";
import appCss from "../styles.css?url";

const APP_NAME = "Extropy Engine — Randall Gossett";
const host = import.meta.env.VITE_PUBLIC_HOSTNAME;
const ogImage = host ? `https://${host}/cover-card.jpg` : undefined;
const xBanner = host
  ? `https://og.grok.me/v1/banner.png?host=${encodeURIComponent(host)}&title=${encodeURIComponent(APP_NAME)}&color=FF5A1F`
  : undefined;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Extropy Engine — protocol, papers, and systems work by Randall Gossett. A free book, three studio albums, and research on entropy reduction and emergence-first governance.",
      },
      { name: "author", content: "Randall Gossett" },
      { name: "apple-mobile-web-app-title", content: "Extropy Engine" },
      { name: "theme-color", content: "#060606" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@lladnaros" },
      { name: "twitter:creator", content: "@lladnaros" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Extropy Engine" },
      { property: "og:title", content: APP_NAME },
      {
        property: "og:description",
        content:
          "Protocol, papers, and systems work by Randall Gossett. Entropy reduction. Emergence-first governance.",
      },
      ...(ogImage
        ? [
            { property: "og:image", content: ogImage },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
          ]
        : []),
      ...(xBanner
        ? [
            { property: "x:game:image", content: xBanner },
            { property: "x:game:image:width", content: "1200" },
            { property: "x:game:image:height", content: "264" },
          ]
        : []),
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "alternate", type: "application/rss+xml", title: "Extropy Engine", href: "/podcast/feed.xml" },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <JsonLd />
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <QuietPlayer />
        <Scripts />
      </body>
    </html>
  ),
});
