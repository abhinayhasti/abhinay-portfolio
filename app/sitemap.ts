import type { MetadataRoute } from "next";
import { projects } from "@/app/data/projects";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://abhinay-portfolio-five.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
