"use client";

import Image from "next/image";
import { Icon } from "./Icon";
import { asset } from "../basePath";
import type { Treatment } from "../data/content";

// כרטיס בודד בסקשן "תחומי טיפול".
// כשמועבר onClick — הכרטיס לחיץ ומציג "לחצו לפרטים" (פותח פופ-אפ תסמינים).
// אחרת — כרטיס סטטי, ללא רמז וללא פופ-אפ.
export default function TreatmentCard({
  t,
  onClick,
  featured,
}: {
  t: Treatment;
  onClick?: () => void;
  featured?: boolean;
}) {
  const interactive = !!onClick;

  const inner = (
    <>
      {t.image ? (
        <Image
          src={asset(t.image)}
          alt=""
          width={44}
          height={44}
          className="h-11 w-11 rounded-xl"
        />
      ) : (
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
          <Icon name={t.icon} className="h-6 w-6" />
        </div>
      )}
      <h3 className="mt-4 text-base font-bold text-slate-900">{t.title}</h3>
      {t.text && (
        <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
          {t.text}
        </p>
      )}
      {interactive && (
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-teal-500 transition-colors group-hover:text-teal-600">
          לחצו לפרטים
          <Icon name="chevronDown" className="h-3.5 w-3.5" />
        </span>
      )}
    </>
  );

  const base = `flex h-full w-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center ${
    featured ? "justify-start" : "justify-center"
  }`;

  if (interactive) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`group cursor-pointer transition-all hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50 ${base}`}
      >
        {inner}
      </button>
    );
  }

  return <div className={base}>{inner}</div>;
}
