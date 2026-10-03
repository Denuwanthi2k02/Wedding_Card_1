"use client";

import { footerThanks, useLang } from "@/lib/i18n";
import { wedding } from "@/lib/config";
import { Lotus, IconWhatsApp, Jasmine } from "./decorations";

export default function Footer() {
  const { t } = useLang();
  const digits = wedding.whatsappNumber.replace(/\D/g, "");

  return (
    <footer className="pattern-dots-light relative mt-6 bg-maroon-800 px-5 py-14 text-center text-cream">
      <Jasmine className="absolute left-6 top-8 h-9 w-9 -rotate-12 opacity-40" />
      <Jasmine className="absolute right-8 top-14 h-7 w-7 rotate-12 opacity-40" />
      <Lotus className="mx-auto h-10 w-16" />
      <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/90">{footerThanks.en}</p>
      <p className="mx-auto mt-3 max-w-md font-sinhala text-sm leading-relaxed text-cream/90">
        {footerThanks.si}
      </p>
      <p className="mt-7 font-script text-4xl text-gold-300">
        {wedding.bride.en} <span className="text-gold-500">&</span> {wedding.groom.en}
      </p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-300/80">
        {wedding.hashtag}
      </p>
      <a
        href={`https://wa.me/${digits}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cream/90 underline decoration-gold-400 underline-offset-4 hover:text-cream"
      >
        <IconWhatsApp className="h-4 w-4" />
        {t("questions")}
      </a>
    </footer>
  );
}
