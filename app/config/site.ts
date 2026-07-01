// הגדרת כתובת האתר וה-metadata המרכזיים ל-SEO.
// כרגע siteUrl הוא placeholder — כשיחובר הדומיין הסופי יש להחליף כאן בלבד,
// וכל ה-metadata, ה-canonical, ה-sitemap וה-robots יתעדכנו אוטומטית.
export const siteConfig = {
  name: "רועי קליין פיזיותרפיה",
  // TODO: replace with final domain (e.g. https://roeikleinpt.co.il)
  siteUrl: "https://your-domain.co.il",
  description:
    "רועי קליין, פיזיותרפיסט מוסמך, מטפל בחיפה ובקיבוץ גבת בתחומי בריאות הגבר, רצפת האגן, שיקום אורתופדי, פציעות ספורט וכאב.",
};

// כתובת בסיס נקייה (ללא / בסוף) לשימוש ב-sitemap / robots / JSON-LD.
export const siteBaseUrl = siteConfig.siteUrl.replace(/\/$/, "");
