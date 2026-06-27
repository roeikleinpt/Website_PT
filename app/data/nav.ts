export type NavLink = { href: string; id: string; label: string };

// ניווט בתוך עמוד אחד (עוגנים) — הטאבים מדגישים את הסקשן הפעיל בזמן גלילה.
export const navLinks: NavLink[] = [
  { href: "#hero", id: "hero", label: "ראשי" },
  { href: "#treatments", id: "treatments", label: "תחומי טיפול" },
  { href: "#approach", id: "approach", label: "הגישה שלי" },
  { href: "#about", id: "about", label: "אודות" },
  { href: "#faq", id: "faq", label: "שאלות נפוצות" },
  { href: "#contact", id: "contact", label: "יצירת קשר" },
];
