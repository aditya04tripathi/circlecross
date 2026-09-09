import type { MetadataRoute } from "next";

function siteOrigin(): string {
  const raw = process.env.SITE_URL ?? "http://localhost:8004";
  return new URL(raw).origin;
}

export default function robots(): MetadataRoute.Robots {
  const origin = siteOrigin();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}
