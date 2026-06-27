import type { ReactNode, SVGProps } from "react";

const paths: Record<string, ReactNode> = {
  dumbbell: (
    <>
      <path d="M6.5 7v10" />
      <path d="M3.5 9v6" />
      <path d="M17.5 7v10" />
      <path d="M20.5 9v6" />
      <path d="M6.5 12h11" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  spine: (
    <>
      <path d="M12 3v18" />
      <path d="M8 6h8" />
      <path d="M8 10h8" />
      <path d="M8 14h8" />
      <path d="M8 18h8" />
    </>
  ),
  pulse: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  zap: (
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  ),
  scale: (
    <>
      <path d="M12 3v18" />
      <path d="M8 21h8" />
      <path d="M3 7h18" />
      <path d="M6 7l-3 6a3 3 0 0 0 6 0z" />
      <path d="M18 7l-3 6a3 3 0 0 0 6 0z" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6z" />
      <path d="M19 14.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
    </>
  ),
  syringe: (
    <>
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3a2.41 2.41 0 0 1-3.4 0l-.6-.6a2.41 2.41 0 0 1 0-3.4L15 5z" />
      <path d="m9 11 3 3" />
      <path d="M5 19l-3 3" />
      <path d="m14 4 6 6" />
    </>
  ),
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  phone: (
    <path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39z" />
  ),
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  mapPin: (
    <>
      <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  arrowLeft: (
    <>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </>
  ),
  whatsapp: (
    <path d="M3 21l1.65-4.5A8.5 8.5 0 1 1 12 20.5a8.4 8.4 0 0 1-4.2-1.12L3 21Zm6.5-12.2c-.2-.45-.4-.46-.6-.47h-.5a1 1 0 0 0-.72.34A2.93 2.93 0 0 0 6.8 11a5.1 5.1 0 0 0 1.06 2.7 11.6 11.6 0 0 0 4.45 3.9c2.2.86 2.2.57 2.6.54a2.36 2.36 0 0 0 1.58-1.1 1.96 1.96 0 0 0 .14-1.1c-.06-.1-.22-.16-.46-.28s-1.43-.7-1.65-.79-.38-.12-.54.12-.62.79-.76.95-.28.18-.52.06a4.6 4.6 0 0 1-1.36-.84 5.1 5.1 0 0 1-.94-1.17c-.1-.24 0-.36.1-.48s.24-.28.36-.42a1.6 1.6 0 0 0 .24-.4.44.44 0 0 0 0-.42c-.06-.12-.54-1.32-.74-1.8Z" />
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
  user: (
    <>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  arrowUpLeft: (
    <>
      <path d="M17 17 7 7" />
      <path d="M7 17V7h10" />
    </>
  ),
};

export function Icon({
  name,
  ...props
}: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] ?? paths.pulse}
    </svg>
  );
}
