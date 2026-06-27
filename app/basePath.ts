// מוסיף את תת-הנתיב (basePath) ל-src של קבצים סטטיים מתוך public/.
// בפיתוח מקומי basePath ריק, ובבילד ל-GitHub Pages הוא "/roei".
export const asset = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
