"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import TreatmentCard from "./TreatmentCard";
import { Icon } from "./Icon";
import { asset } from "../basePath";
import { treatments } from "../data/content";
import type { Treatment } from "../data/content";

export default function Treatments() {
  const [active, setActive] = useState<Treatment | null>(null);

  // סגירה ב-Esc + נעילת גלילת הרקע כשהפופ-אפ פתוח
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="mt-12 space-y-6">
        {/* שורה ראשונה — שני הכרטיסים עם הטקסט */}
        <div className="grid gap-6 sm:grid-cols-2">
          {treatments.slice(0, 2).map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <TreatmentCard
                t={t}
                onClick={t.symptoms?.length ? () => setActive(t) : undefined}
              />
            </Reveal>
          ))}
        </div>
        {/* שאר הכרטיסים — שתי שורות של שלושה */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {treatments.slice(2).map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <TreatmentCard
                t={t}
                onClick={t.symptoms?.length ? () => setActive(t) : undefined}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {/* פופ-אפ התסמינים */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-slate-900/55" />
          <div
            className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="סגירה"
              className="absolute left-4 top-4 text-slate-400 hover:text-slate-700"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3">
              {active.image ? (
                <Image
                  src={asset(active.image)}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon name={active.icon} className="h-5 w-5" />
                </div>
              )}
              <h3 className="text-lg font-bold text-slate-900">{active.title}</h3>
            </div>

            {active.symptoms && active.symptoms.length > 0 && (
              <>
                <p className="mt-5 text-sm text-slate-500">
                  דוגמאות למצבים שניתנים לשיפור עם טיפול פיזיותרפי מותאם
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.symptoms.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm"
                      style={{ background: "#edf4ef", borderColor: "#c6dccd", color: "#1d4165" }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: "#5b9e7f" }}
                      />
                      {s}
                    </span>
                  ))}
                </div>
              </>
            )}

            <a
              href="#contact"
              onClick={() => setActive(null)}
              className="btn-press mt-6 block rounded-full bg-teal-700 px-6 py-3 text-center font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
            >
              לקביעת פגישת אבחון
            </a>
          </div>
        </div>
      )}
    </>
  );
}
