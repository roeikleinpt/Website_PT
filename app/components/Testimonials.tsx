import Container from "./Container";
import Reveal from "./Reveal";
import { testimonials, medReviewsUrl } from "../data/testimonials";

export default function Testimonials() {
  const hasRealUrl = Boolean(medReviewsUrl) && medReviewsUrl !== "#";

  return (
    <section id="testimonials" className="scroll-mt-4 py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            חוות דעת מטופלים
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            חוות דעת מאומתות מתוך MedReviews
          </p>
        </Reveal>

        {/* TODO: להחליף בחוות דעת אמיתיות ומאומתות מ-MedReviews (ללא scraping). */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
                <blockquote className="flex-1 leading-7 text-slate-600">
                  &rdquo;{t.quote}&ldquo;
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                  {t.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          {hasRealUrl ? (
            <a
              href={medReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-block rounded-full bg-teal-700 px-7 py-3.5 font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
            >
              לכל חוות הדעת ב־MedReviews
            </a>
          ) : (
            // TODO: יופעל אוטומטית ברגע ש-medReviewsUrl יוגדר לכתובת אמיתית.
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="הקישור יתווסף בקרוב"
              className="inline-block cursor-not-allowed rounded-full border-2 border-slate-300 px-7 py-3.5 font-semibold text-slate-400"
            >
              לכל חוות הדעת ב־MedReviews
            </button>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
