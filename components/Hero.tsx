"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { wedding } from "@/lib/config";
import Countdown from "./Countdown";
import { Jasmine, Elephant } from "./decorations";

export default function Hero() {
  const { lang, pick, t } = useLang();

  return (
    <header className="relative overflow-hidden px-5 pb-12 pt-16 text-center sm:pt-20">
      <Jasmine className="absolute -left-4 top-8 h-16 w-16 -rotate-12 opacity-60" />
      <Jasmine className="absolute right-2 top-28 h-10 w-10 rotate-12 opacity-60" />
      <Elephant className="absolute -right-6 bottom-2 h-24 w-32 opacity-25" />

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={`text-maroon-600 ${lang === "si" ? "font-sinhala text-lg font-semibold" : "font-script text-3xl"}`}
      >
        {t("invited")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative mx-auto mt-6 w-[min(78vw,340px)]"
      >
        <div className="overflow-hidden rounded-b-[28px] rounded-t-[999px] border-4 border-gold-500 bg-peach-100 shadow-soft">
          <Image
            src="/images/couple_1.jpg"
            alt={`Cartoon illustration of ${wedding.bride.en} and ${wedding.groom.en} in traditional Sinhala wedding attire`}
            width={768}
            height={1024}
            priority
            className="h-auto w-full"
          />
        </div>
        <Jasmine className="absolute -left-7 top-10 h-10 w-10 -rotate-12" />
        <Jasmine className="absolute -right-6 top-28 h-8 w-8 rotate-12" />
      </motion.div>

      <h1 className="mt-7 text-maroon-700">
        {lang === "si" ? (
          <span className="font-sinhala text-3xl font-bold leading-snug sm:text-4xl">
            {pick(wedding.bride)} <span className="text-gold-600">සහ</span> {pick(wedding.groom)}
          </span>
        ) : (
          <span className="font-script text-5xl leading-tight sm:text-6xl">
            {wedding.bride.en} <span className="text-gold-500">&</span> {wedding.groom.en}
          </span>
        )}
      </h1>

      <p className="mx-auto mt-4 inline-block rounded-full border border-gold-500/60 bg-white/70 px-5 py-2 text-sm font-semibold text-maroon-700 shadow-card sm:text-base">
        {pick(wedding.dateDisplay)} • {pick(wedding.timeDisplay)}
      </p>

      <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-gold-600">{t("countTitle")}</p>
      <div className="mt-3">
        <Countdown />
      </div>
    </header>
  );
}
