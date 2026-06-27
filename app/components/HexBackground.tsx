import HexPattern from "./HexPattern";

// דפוס משושים דקורטיבי בצד שמאל של הדף, הפוך על הציר (מראה),
// קבוע (fixed) ונמשך לאורך כל הדף — מהחלק העליון ועד למטה — בזמן גלילה.
// יושב מאחורי התוכן (-z-10) כך שתמונות/כרטיסים/טפסים אטומים מכסים אותו,
// והוא מציץ סביבם בשוליים השמאליים.
export default function HexBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-0 -z-10 hidden w-[48%] max-w-2xl sm:block"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, black 0%, black 14%, transparent 62%)",
        maskImage:
          "linear-gradient(to right, black 0%, black 14%, transparent 62%)",
      }}
    >
      <HexPattern id="hex-page" className="h-full w-full -scale-x-100 text-teal-100" />
    </div>
  );
}
