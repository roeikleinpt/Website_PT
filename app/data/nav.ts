// קישורי עוגן בתוך דף הבית. ה-id משמש את ה-scroll-spy להדגשת הסקשן הפעיל.
// מתוך עמוד פנימי יש להוסיף "/" לפני ה-hash (ראו Header/Footer) כדי לחזור לדף הבית.
// longLabel — תווית ארוכה יותר לפוטר ולהמבורגר (בדסקטופ נשמרת התווית הקצרה).
export type AnchorLink = {
  href: string;
  id: string;
  label: string;
  longLabel?: string;
};

export const homeNavLinks: AnchorLink[] = [
  { href: "#treatments", id: "treatments", label: "תחומי טיפול" },
  { href: "#approach", id: "approach", label: "הגישה שלי" },
  { href: "#about", id: "about", label: "קצת עליי" },
  {
    href: "#testimonials",
    id: "testimonials",
    label: "חוות דעת",
    longLabel: "חוות דעת מטופלים",
  },
  { href: "#faq", id: "faq", label: "שאלות נפוצות" },
  { href: "#contact", id: "contact", label: "יצירת קשר" },
];

// עמודים עצמאיים (routes). Link של Next מוסיף את ה-basePath אוטומטית.
export type PageLink = { href: string; label: string };

export const pageLinks: PageLink[] = [
  { href: "/professional-info", label: "מידע מקצועי" },
  { href: "/terms-and-privacy", label: "תנאי שימוש ופרטיות" },
];
