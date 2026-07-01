import type { MetadataRoute } from "next";
import { siteBaseUrl } from "./config/site";

// נדרש עם output: export כדי שהקובץ ייווצר סטטית בזמן build.
export const dynamic = "force-static";

// נוצר סטטית בזמן build (תואם output: export) → out/sitemap.xml.
// הכתובות מבוססות על siteConfig.siteUrl — יתעדכנו אוטומטית עם החלפת הדומיין.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${siteBaseUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteBaseUrl}/professional-info/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteBaseUrl}/terms-and-privacy/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
