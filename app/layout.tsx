import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HexBackground from "./components/HexBackground";
import { site } from "./data/site";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.shortName} ${site.credential} — ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.intro,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-700">
        <TopBar />
        <Header />
        <HexBackground />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
