"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { faq } from "../data/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
            >
              <span className="text-lg font-bold text-slate-900">{item.q}</span>
              <Icon
                name="chevronDown"
                className={`h-5 w-5 shrink-0 text-teal-700 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 leading-7 text-slate-600">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
