import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/caseStudies";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((c) => ({
      url: `${site.url}/case-studies/${c.slug}/`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
