import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.kgperformancesystems.com/sitemap.xml", // REPLACE domain
  };
}
