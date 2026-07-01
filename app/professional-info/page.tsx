import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "מידע מקצועי",
  description:
    "מידע מקצועי ומאמרים עתידיים על פיזיותרפיה, בריאות הגבר, רצפת האגן, כאב ושיקום.",
  alternates: { canonical: "/professional-info" },
  openGraph: {
    title: "מידע מקצועי | רועי קליין פיזיותרפיה",
    description:
      "מידע מקצועי ומאמרים עתידיים על פיזיותרפיה, בריאות הגבר, רצפת האגן, כאב ושיקום.",
    url: "/professional-info",
  },
};

// כרטיסי הכנה בלבד — עדיין אין עמודי מאמר. לא לחיצים, עם תגית "בקרוב".
// TODO: כשייכתב מאמר אמיתי, להפוך את הכרטיס הרלוונטי לקישור לעמוד המאמר.
const topics = [
  "כאב אגן כרוני בגברים / CPPS",
  "פיזיותרפיה לרצפת האגן לגברים",
  "שברי מאמץ וכאבי שוקיים",
  "שיקום לאחר ניתוחים",
  "פציעות ספורט ועומס",
  "כאבי גב וצוואר",
];

export default function ProfessionalInfoPage() {
  return (
    <>
      <section className="scroll-mt-4 py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              מידע מקצועי
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              מאמרים והסברים מקצועיים יתווספו כאן בהמשך.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, i) => (
              <Reveal key={topic} delay={i * 70}>
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="inline-flex w-fit items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-600 ring-1 ring-inset ring-teal-200">
                    בקרוב
                  </span>
                  <h2 className="mt-3 text-lg font-bold text-slate-900">
                    {topic}
                  </h2>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA — רלוונטי גם בזמן שהתוכן עדיין "בקרוב" */}
      <section className="bg-slate-50/80 py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              יש לכם שאלה או מתלבטים אם פיזיותרפיה מתאימה למצב שלכם?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              אפשר להשאיר פרטים או לשלוח הודעה, ונבדוק יחד האם פגישת אבחון יכולה
              להיות רלוונטית.
            </p>
            <Link
              href="/#contact"
              className="btn-press mt-8 inline-block rounded-full bg-teal-700 px-7 py-3.5 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
            >
              יצירת קשר
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
