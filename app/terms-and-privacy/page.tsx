import type { Metadata } from "next";
import Container from "../components/Container";

export const metadata: Metadata = {
  title: "תנאי שימוש ופרטיות",
  description: "תנאי שימוש ופרטיות באתר רועי קליין פיזיותרפיה.",
  alternates: { canonical: "/terms-and-privacy" },
  openGraph: {
    title: "תנאי שימוש ופרטיות | רועי קליין פיזיותרפיה",
    description: "תנאי שימוש ופרטיות באתר רועי קליין פיזיותרפיה.",
    url: "/terms-and-privacy",
  },
};

export default function TermsAndPrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            תנאי שימוש ופרטיות
          </h1>
          {/* TODO: Replace placeholder with lawyer-approved legal text. */}
          <p className="mt-6 text-lg leading-8 text-slate-600">
            המסמך יעודכן בהמשך לאחר השלמת הנוסח המשפטי.
          </p>
        </div>
      </Container>
    </section>
  );
}
