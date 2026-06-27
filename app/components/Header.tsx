"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import Container from "./Container";
import { navLinks } from "../data/nav";
import { asset } from "../basePath";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // המשקוף נחשף בגלילה כלפי מעלה ונעלם בגלילה כלפי מטה
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // deadzone — מתעלמים מתזוזות זעירות (אינרציה/jitter) כדי למנוע היפוכי כיוון
      if (Math.abs(y - last) < 10) return;
      if (y > last && y > 160) setHidden(true);
      else setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy — הדגשת הטאב של הסקשן הנוכחי
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "border-b border-slate-200 shadow-sm" : "border-b border-transparent"}`}
    >
      <Container>
        <div className="flex h-24 flex-row-reverse items-center justify-between gap-4 sm:h-[120px] lg:flex-row">

          {/* לוגו */}
          <a href="#hero" className="flex items-center">
            <Image
              src={asset("/logo-rk.png")}
              alt="רועי קליין — פיזיותרפיסט"
              width={900}
              height={300}
              priority
              className="h-[77px] w-auto max-w-none shrink-0 sm:h-[102px] lg:h-[88px]"
            />
          </a>

          {/* ניווט דסקטופ */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                  active === link.id
                    ? "font-bold text-teal-600"
                    : "text-slate-600 hover:font-bold hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA דסקטופ */}
          <a
            href="#contact"
            className="btn-press hidden rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700 lg:inline-block"
          >
            קביעת תור
          </a>

          {/* כפתור מובייל */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-800 hover:bg-slate-100 lg:hidden"
            aria-label={menuOpen ? "סגירת תפריט" : "פתיחת תפריט"}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {/* תפריט מובייל */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="py-3">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-base font-medium transition-all ${
                    active === link.id
                      ? "bg-teal-50 font-bold text-teal-600"
                      : "text-slate-700 hover:font-bold hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-press mt-2 rounded-full bg-teal-700 px-4 py-2.5 text-center text-sm font-semibold text-white ring-2 ring-inset ring-teal-700 hover:bg-white hover:text-teal-700"
              >
                קביעת תור
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
