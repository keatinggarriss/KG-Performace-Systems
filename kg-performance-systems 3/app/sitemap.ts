import type { MetadataRoute } from "next";

const BASE = "https://www.kgperformancesystems.com"; // REPLACE with your domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/coaching", "/results", "/about", "/faq", "/apply", "/book-call"];
  return routes.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : r === "/apply" ? 0.9 : 0.7,
  }));
}
