import type { MetadataRoute } from "next";
import { siteBaseUrl } from "./config/site";

// נדרש עם output: export כדי שהקובץ ייווצר סטטית בזמן build.
export const dynamic = "force-static";

// נוצר סטטית בזמן build (תואם output: export) → out/robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteBaseUrl}/sitemap.xml`,
    host: siteBaseUrl,
  };
}
