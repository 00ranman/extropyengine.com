import { site, socials } from "@/content/site";

const origin =
  typeof window !== "undefined" && window.location?.origin
    ? window.location.origin
    : import.meta.env.VITE_PUBLIC_HOSTNAME
      ? `https://${import.meta.env.VITE_PUBLIC_HOSTNAME}`
      : "https://extropyengine.com";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${origin}/#site`,
        name: site.name,
        url: origin,
        description: site.description,
        inLanguage: "en-US",
        publisher: { "@id": `${origin}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${origin}/#person`,
        name: site.person,
        alternateName: ["Lladnaros", site.palindrome],
        url: origin,
        jobTitle: "Writer, musician, systems researcher",
        sameAs: socials.map((s) => s.href),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}