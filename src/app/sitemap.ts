import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fmunirdev.github.io",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1
    }
  ];
}
