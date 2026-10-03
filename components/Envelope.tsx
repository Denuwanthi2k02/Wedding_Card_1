"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { wedding } from "@/lib/config";
import { Jasmine, Lotus, IconHeart } from "./decorations";

type Stage = "closed" | "flap" | "rise" | "exit";

export default function Envelope({ onOpened }: { onOpened: () => void }) {
  const { t, pick, lang } = useLang();
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<Stage>("closed");
  const opened = stage !== "closed";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (stage === "flap") {
      const id = window.setTimeout(() => setStage("rise"), 800);
      return () => clearTimeout(id);
    }
    if (stage === "rise") {
      const id = window.setTimeout(() => setStage("exit"), 1100);
      return () => clearTimeout(id);
    }
    if (stage === "exit") {
      const id = window.setTimeout(onOpened, 650);
      return () => clearTimeout(id);
    }
  }, [stage, onOpened]);

  function open() {
    if (reduce) {
      onOpened();
      return;
    }
    setStage("flap");
  }

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={t("invited")}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream px-6"
      animate={stage === "exit" ? { opacity: 0, scale: 1.06 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-peach-100 to-peach-200" aria-hidden="true" />
      <div className="pattern-dots absolute inset-0" aria-hidden="true" />
      <Jasmine className="absolute left-6 top-10 h-10 w-10 -rotate-12 opacity-80" />
      <Jasmine className="absolute right-8 top-24 h-8 w-8 rotate-12 opacity-80" />
      <Jasmine className="absolute bottom-16 left-10 h-9 w-9 rotate-6 opacity-80" />
      <Jasmine className="absolute bottom-24 right-12 h-10 w-10 -rotate-6 opacity-80" />

      <div className="relative w-[min(88vw,360px)]" style={{ perspective: "1200px" }}>
        <motion.div
          className="absolute inset-x-3 bottom-3 top-1 z-[1] flex flex-col items-center justify-center gap-2 rounded-2xl border border-gold-300 bg-cream px-4 text-center shadow-soft"
          animate={stage === "rise" || stage === "exit" ? { y: "-62%" } : { y: "0%" }}
          transition={{ type: "spring", stiffness: 60, damping: 14 }}
        >
          <Lotus className="h-8 w-12" />
          <p className={`text-maroon-600 ${lang === "si" ? "font-sinhala text-sm font-semibold" : "font-script text-2xl"}`}>
            {t("invited")}
          </p>
          <p className="font-script text-3xl leading-snug text-maroon-700">
            {wedding.bride.en} <span className="text-gold-500">&</span> {wedding.groom.en}
          </p>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">
            {pick(wedding.dateDisplay)}
          </p>
        </motion.div>

        <div className="relative aspect-[4/3] w-full">
          <div className="absolute inset-0 rounded-2xl bg-maroon-700 shadow-soft" />

          <motion.div
            className={`pattern-dots-light absolute inset-0 origin-top rounded-t-2xl bg-maroon-800 ${opened ? "z-0" : "z-[3]"}`}
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 56%)" }}
            animate={{ rotateX: opened ? 178 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          <div
            className="absolute inset-0 z-[2] rounded-2xl bg-maroon-600"
            style={{ clipPath: "polygon(0 0, 50% 52%, 100% 0, 100% 100%, 0 100%)" }}
          />
          <div
            className="pattern-dots-light absolute inset-0 z-[2] rounded-2xl"
            style={{ clipPath: "polygon(0 0, 50% 52%, 100% 0, 100% 100%, 0 100%)" }}
          />

          <motion.div
            className="absolute left-1/2 top-[52%] z-[4] -translate-x-1/2 -translate-y-1/2"
            animate={{ opacity: opened ? 0 : 1, scale: opened ? 0.5 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 shadow-soft ring-4 ring-gold-300/60">
              <IconHeart className="h-6 w-6 text-maroon-800" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={open}
        className="mt-10 rounded-full bg-maroon-700 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-cream shadow-soft"
        animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        whileTap={{ scale: 0.95 }}
      >
        {t("tapToOpen")}
      </motion.button>
    </motion.div>
  );
}
