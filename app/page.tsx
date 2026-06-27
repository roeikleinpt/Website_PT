import Image from "next/image";
import Container from "./components/Container";
import { Icon } from "./components/Icon";
import Reveal from "./components/Reveal";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Treatments from "./components/Treatments";
import { site } from "./data/site";
import { asset } from "./basePath";
import { symptoms, approachSteps, aboutParagraphs } from "./data/content";

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section id="hero" className="scroll-mt-4 pt-4 pb-16 sm:pt-6 sm:pb-24">
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            {/* טקסט */}
            <Reveal>
              <h1 className="text-3xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
יש בעיות שמדברים עליהן בחופשיות,    {" "}            <br />
                <span style={{ color: "#2f6196" }}>
                  ויש
                  בעיות שסוחבים חודשים או שנים
                </span>{" "}
                וחוששים לפנות לעזרה
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                שמי רועי, פיזיותרפיסט מוסמך.
<br />
                בקליניקה אני מתמקד בתחומי בריאות
                הגבר ורצפת אגן, פציעות ספורט, שיקום לאחר ניתוחים ותלונות ממקור שריר-שלד.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                בעיניי, טיפול מיטבי הוא הוליסטי ולא שיפוטי. כזה שמסתכל עליך כשלם ועוזר לראות את
                התמונה המלאה. במקום לבדוק כל סימפטום בנפרד, אנחנו מחברים את כל הקצוות. המטרה
                שלי היא לעזור לך להבין מה באמת קורה, לבנות תוכנית פעולה ברורה ולחזור לתפקוד.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="#contact"
                  className="btn-press rounded-full bg-teal-700 px-7 py-3.5 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
                >
                  לקביעת פגישת אבחון
                </a>
                <a
                  href="#treatments"
                  className="btn-press rounded-full border-2 border-teal-700 bg-white px-7 py-3.5 font-semibold text-teal-700 hover:bg-teal-700 hover:text-white"
                >
                  למידע נוסף
                </a>
              </div>
            </Reveal>

            {/* פורטרט + כרטיסים צפים — מוסתר לעת עתה */}
            <Reveal delay={150} className="hidden">
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-slate-200 shadow-xl">
                  <Image
                    src={asset("/portrait.png")}
                    alt="רועי קליין מטפל במטופל"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover"
                  />
                </div>
                {/* כרטיסי נתונים צפים */}
                <div className="absolute -top-4 left-6 rounded-2xl bg-white px-5 py-3 shadow-lg ring-1 ring-slate-100">
                  <div className="text-2xl font-extrabold text-slate-900">{site.stats[0].value}</div>
                  <div className="text-xs text-slate-500">מטופלים באורתופדיה</div>
                </div>
                <div className="absolute -bottom-4 right-6 rounded-2xl bg-white px-5 py-3 shadow-lg ring-1 ring-slate-100">
                  <div className="text-2xl font-extrabold text-slate-900">{site.stats[1].value}</div>
                  <div className="text-xs text-slate-500">מטופלים ברצפת האגן</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* רצועת נתונים — מוסתר לעת עתה */}
          <div className="mt-20 hidden grid-cols-2 gap-6 border-t border-slate-200 pt-10 lg:grid-cols-4">
            {site.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="text-center">
                <div className="text-2xl font-extrabold text-teal-600 sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== תחומי טיפול ===== */}
      <section id="treatments" className="scroll-mt-4 py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">תחומי טיפול</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
            

            </p>
          </Reveal>
          <Treatments />
        </Container>
      </section>

      {/* ===== סימפטומים — מוסתר לעת עתה (התסמינים עברו לפופ-אפ של הכרטיסים). נשמר בקוד. ===== */}
      {false && (
      <section id="symptoms" className="scroll-mt-4 bg-slate-50/80 py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              מתי כדאי לפנות לטיפול?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
             ברשימה הבאה מופיעות תלונות נפוצות שבהן פיזיותרפיה יכולה לסייע, גם אם לא תמיד מקשרים אותן לטיפול כזה. הרשימה אינה מלאה, וכל מקרה נבחן לפי התלונה, הרקע והצרכים האישיים.
            </p>
          </Reveal>

          <Reveal className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {symptoms.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                <Icon name="arrowUpLeft" className="h-4 w-4 text-teal-500" />
                {s}
              </span>
            ))}
          </Reveal>

      
        </Container>
      </section>
      )}

      {/* ===== הגישה שלי ===== */}
      <section id="approach" className="scroll-mt-4 py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">הגישה שלי</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 90}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="text-4xl font-extrabold text-teal-100">{s.step}</span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== קצת עליי ===== */}
      <section id="about" className="scroll-mt-4 bg-slate-50/80 py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">קצת עליי</h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
              {aboutParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== שאלות נפוצות ===== */}
      <section id="faq" className="scroll-mt-4 py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">שאלות נפוצות</h2>
          </Reveal>
          <Reveal className="mt-12">
            <Faq />
          </Reveal>
        </Container>
      </section>

      {/* ===== יצירת קשר ===== */}
      <section id="contact" className="scroll-mt-4 bg-slate-50/80 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                בואו נבין מה קורה
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                אם אתם מתמודדים עם כאב, מגבלה או תסמינים שפוגעים באיכות החיים שלכם,
                אפשר להתחיל בפגישת אבחון מסודרת.
              </p>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press mt-8 inline-flex items-center gap-2 rounded-full bg-teal-700 px-7 py-3.5 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                לקביעת תור בוואטסאפ
              </a>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
                <span className="h-px flex-1 bg-slate-200" />
                או
                <span className="h-px flex-1 bg-slate-200" />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
