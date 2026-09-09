import type { Metadata } from "next";

export const OG_TITLE_MAX = 60;
export const OG_DESCRIPTION_MAX = 90;

export const indexablePaths = [
  "/",
  "/go",
  "/uni",
  "/pro",
  "/privacy",
  "/terms",
] as const;

export type IndexablePath = (typeof indexablePaths)[number];

export type JsonLdType = "WebSite" | "WebPage";

export type SeoPage = {
  path: IndexablePath;
  title: string;
  description: string;
  keywords: string[];
  jsonLdType: JsonLdType;
  ogTitle?: string;
  ogDescription?: string;
  robots?: Metadata["robots"];
  canonicalPath?: string;
  ogImagePath?: string;
};

export type SeoDefaults = {
  siteName: string;
  titleTemplate: string;
  defaultDescription: string;
  locale: string;
  twitterCard: "summary_large_image";
  organization: {
    name: string;
    url: string;
    logo: string;
  };
  website: {
    name: string;
    url: string;
  };
};

function siteOrigin(): string {
  const raw = process.env.SITE_URL ?? "http://localhost:3011";
  const url = new URL(raw);
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("SITE_URL must be an HTTP(S) URL");
  }
  return url.origin;
}

export const seoDefaults: SeoDefaults = {
  siteName: "CircleCross",
  titleTemplate: "%s · CircleCross",
  defaultDescription:
    "A little closer to your people. Discover CircleCross Go, Uni and Pro: meaningful connections for every chapter of your life.",
  locale: "en_AU",
  twitterCard: "summary_large_image",
  organization: {
    name: "CircleCross",
    url: siteOrigin(),
    logo: `${siteOrigin()}/icon`,
  },
  website: {
    name: "CircleCross",
    url: siteOrigin(),
  },
};

export const seoPages: Record<IndexablePath, SeoPage> = {
  "/": {
    path: "/",
    title: "Life happens where circles cross.",
    description: seoDefaults.defaultDescription,
    keywords: [
      "CircleCross",
      "social",
      "community",
      "Go",
      "Uni",
      "Pro",
      "connections",
    ],
    jsonLdType: "WebSite",
    ogTitle: "CircleCross",
    ogDescription: "Life happens where circles cross.",
  },
  "/go": {
    path: "/go",
    title: "Go",
    description:
      "New places. New interests. People who just get you. Make the first move towards a world that feels a little more yours.",
    keywords: ["CircleCross Go", "explore", "new places", "interests", "friends"],
    jsonLdType: "WebPage",
    ogTitle: "CircleCross Go",
    ogDescription: "Follow your curiosity. A little more adventure.",
  },
  "/uni": {
    path: "/uni",
    title: "Uni",
    description:
      "From the first lecture to the last night of term. Find friends, study partners, clubs and collaborators who make university your own.",
    keywords: ["CircleCross Uni", "campus", "university", "students", "clubs"],
    jsonLdType: "WebPage",
    ogTitle: "CircleCross Uni",
    ogDescription: "Find your kind of campus. A place to belong.",
  },
  "/pro": {
    path: "/pro",
    title: "Pro",
    description:
      "Go beyond the introduction. Meet thoughtful people, exchange ideas and build professional relationships with room to grow.",
    keywords: [
      "CircleCross Pro",
      "professional network",
      "collaboration",
      "workplaces",
    ],
    jsonLdType: "WebPage",
    ogTitle: "CircleCross Pro",
    ogDescription: "Good work starts with people. A new kind of network.",
  },
  "/privacy": {
    path: "/privacy",
    title: "Privacy",
    description:
      "How the CircleCross marketing website handles your visit. Draft notice for legal review.",
    keywords: ["privacy", "CircleCross", "cookies", "world preference"],
    jsonLdType: "WebPage",
    ogTitle: "Website privacy",
    ogDescription: "Your visit. Your choice. Draft privacy notice.",
  },
  "/terms": {
    path: "/terms",
    title: "Terms",
    description:
      "Draft terms for using the public CircleCross marketing website. Informational only.",
    keywords: ["terms", "CircleCross", "website terms", "acceptable use"],
    jsonLdType: "WebPage",
    ogTitle: "Website terms",
    ogDescription: "Using this site. Draft terms of use.",
  },
};

function resolvedOg(page: SeoPage): { title: string; description: string } {
  return {
    title: page.ogTitle ?? page.title,
    description: page.ogDescription ?? page.description,
  };
}

function assertOgLengths(page: SeoPage): void {
  const og = resolvedOg(page);
  if (og.title.length > OG_TITLE_MAX) {
    throw new Error(
      `OG title for ${page.path} is ${og.title.length} chars (max ${OG_TITLE_MAX})`,
    );
  }
  if (og.description.length > OG_DESCRIPTION_MAX) {
    throw new Error(
      `OG description for ${page.path} is ${og.description.length} chars (max ${OG_DESCRIPTION_MAX})`,
    );
  }
}

for (const path of indexablePaths) {
  assertOgLengths(seoPages[path]);
}

export function assertSitemapPathsSubset(paths: string[]): void {
  const keys = new Set<string>(indexablePaths);
  for (const path of paths) {
    const normalized = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
    if (!keys.has(normalized)) {
      throw new Error(
        `Sitemap path ${normalized} is missing from seoPages keys`,
      );
    }
  }
}

export function generateSeo(
  path: IndexablePath,
  overrides?: Partial<SeoPage>,
): Metadata {
  const page: SeoPage = { ...seoPages[path], ...overrides, path };
  assertOgLengths(page);
  const origin = siteOrigin();
  const canonicalPath = page.canonicalPath ?? page.path;
  const canonical = `${origin}${canonicalPath === "/" ? "" : canonicalPath}`;
  const og = resolvedOg(page);
  const ogImagePath = page.ogImagePath ?? `${canonicalPath === "/" ? "" : canonicalPath}/opengraph-image`;
  const ogImageUrl = `${origin}${ogImagePath.startsWith("/") ? ogImagePath : `/${ogImagePath}`}`;

  const facebookAppId = process.env.FACEBOOK_APP_ID;
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  const twitterSite = process.env.TWITTER_SITE;

  const isHome = path === "/";

  return {
    metadataBase: new URL(origin),
    title: isHome
      ? { absolute: `${seoDefaults.siteName} — ${page.title}` }
      : page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical },
    robots: page.robots,
    openGraph: {
      title: og.title,
      description: og.description,
      url: canonical,
      siteName: seoDefaults.siteName,
      locale: seoDefaults.locale,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: og.title,
        },
      ],
    },
    twitter: {
      card: seoDefaults.twitterCard,
      title: og.title,
      description: og.description,
      images: [ogImageUrl],
      ...(twitterSite ? { site: twitterSite } : {}),
    },
    ...(facebookAppId
      ? { other: { "fb:app_id": facebookAppId } }
      : {}),
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
  };
}

export function getJsonLd(path: IndexablePath): Record<string, unknown> {
  const page = seoPages[path];
  const origin = siteOrigin();
  const canonicalPath = page.canonicalPath ?? page.path;
  const pageUrl = `${origin}${canonicalPath === "/" ? "" : canonicalPath}`;
  const og = resolvedOg(page);

  const organization = {
    "@type": "Organization",
    name: seoDefaults.organization.name,
    url: seoDefaults.organization.url,
    logo: seoDefaults.organization.logo,
  };

  const website = {
    "@type": "WebSite",
    name: seoDefaults.website.name,
    url: seoDefaults.website.url,
    publisher: { "@id": `${origin}/#organization` },
  };

  const pageNode = {
    "@type": page.jsonLdType,
    name: og.title,
    description: page.description,
    url: pageUrl,
    isPartOf: { "@id": `${origin}/#website` },
  };

  if (path === "/") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        { ...organization, "@id": `${origin}/#organization` },
        { ...website, "@id": `${origin}/#website` },
      ],
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      { ...organization, "@id": `${origin}/#organization` },
      { ...website, "@id": `${origin}/#website` },
      { ...pageNode, "@id": `${pageUrl}#webpage` },
    ],
  };
}

export function getOgLines(path: IndexablePath): {
  title: string;
  description: string;
} {
  const page = seoPages[path];
  assertOgLengths(page);
  return resolvedOg(page);
}
