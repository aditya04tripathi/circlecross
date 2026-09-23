import type { MetadataRoute } from "next";
import { type IndexablePath, assertSitemapPathsSubset, indexablePaths } from "../content/seo";

const siteUrl = process.env.SITE_URL ?? "http://localhost:8004";

const routeSitemapConfig: Record<
  IndexablePath,
  {
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
    priority: number;
  }
> = {
  "/": {
    changeFrequency: "weekly",
    priority: 1.0,
  },
  "/uni": {
    changeFrequency: "weekly",
    priority: 0.9,
  },
  "/pro": {
    changeFrequency: "weekly",
    priority: 0.9,
  },
  "/privacy": {
    changeFrequency: "monthly",
    priority: 0.3,
  },
  "/terms": {
    changeFrequency: "monthly",
    priority: 0.3,
  },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = new URL(siteUrl).origin;
  const paths = [...indexablePaths];
  assertSitemapPathsSubset(paths);

  const lastModified = new Date();

  return paths.map((path) => {
    const config = routeSitemapConfig[path] ?? {
      changeFrequency: "monthly",
      priority: 0.5,
    };

    return {
      url: `${origin}${path === "/" ? "/" : path}`,
      lastModified,
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    };
  });
}
