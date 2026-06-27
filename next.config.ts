import type { NextConfig } from "next";

// כשבונים ל-GitHub Pages, האתר מוגש מתת-נתיב /roei.
// משתנה הסביבה GITHUB_PAGES מופעל רק בבילד של ה-CI (ראו .github/workflows/deploy.yml),
// כך שפיתוח מקומי (next dev) ממשיך לרוץ על הנתיב הרגיל "/".
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "roei";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // מסתיר את אינדיקטור הפיתוח של Next (לוגו ה-"N" בפינה) במצב dev.
  devIndicators: false,
  basePath,
  // נחשף לקוד כדי להוסיף את תת-הנתיב ידנית ל-src של תמונות
  // (next/image לא מוסיף basePath כשהוא unoptimized בייצוא סטטי).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
