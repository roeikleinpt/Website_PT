import { siteConfig, siteBaseUrl } from "../config/site";
import { site } from "../data/site";

// Structured Data (JSON-LD) לדף הבית — עוזר למנועי חיפוש להבין שמדובר בקליניקת
// פיזיותרפיה מקומית. כולל רק פרטים אמיתיים הקיימים באתר.
// לא כולל: כתובת מלאה, שעות פעילות, דירוגים / reviews — אין נתונים אמיתיים לכך.
// TODO: להוסיף sameAs (MedReviews / Google Business / רשתות) כשיהיו כתובות אמיתיות.
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteBaseUrl,
    logo: `${siteBaseUrl}/logo-rk.png`,
    image: `${siteBaseUrl}/logo-rk.png`,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    areaServed: ["חיפה", "קיבוץ גבת"],
    founder: {
      "@type": "Person",
      name: "רועי קליין",
      jobTitle: "פיזיותרפיסט",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
