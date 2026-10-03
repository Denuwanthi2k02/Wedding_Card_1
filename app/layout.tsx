import type { Metadata } from "next";
import { Great_Vibes, Nunito, Noto_Sans_Sinhala } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { wedding } from "@/lib/config";

const script = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const sans = Nunito({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sinhala = Noto_Sans_Sinhala({
  weight: ["400", "600", "700"],
  subsets: ["sinhala"],
  variable: "--font-sinhala",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = `${wedding.bride.en} & ${wedding.groom.en} — Wedding Invitation`;
const description = `You are cordially invited to the wedding of ${wedding.bride.en} and ${wedding.groom.en} on ${wedding.dateDisplay.en}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/images/og.png",
        width: 1792,
        height: 1024,
        alt: `${wedding.bride.en} & ${wedding.groom.en} wedding invitation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${script.variable} ${sans.variable} ${sinhala.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
