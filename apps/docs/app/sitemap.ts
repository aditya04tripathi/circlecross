import type { MetadataRoute } from "next";
import { assertSitemapPathsSubset, indexablePaths } from "../content/seo";

const siteUrl = process.env.SITE_URL ?? "http://localhost:8004";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = new URL(siteUrl).origin;
  const paths = [...indexablePaths];
  assertSitemapPathsSubset(paths);

  return paths.map((path) => ({
    url: `${origin}${path === "/" ? "/" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
