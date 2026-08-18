import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "INNOVINATI — web works with us.",
  description:
    "Junge IT-Agentur für Mittelstand und Startups. Cloud, Web, Design und SEO — mit Fokus auf Qualität und offene Kommunikation.",
  metadataBase: new URL("https://innovinati.de")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <div className="ambient-field" aria-hidden />
        <div className="grain" aria-hidden />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
