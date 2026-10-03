"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { wedding } from "@/lib/config";

function remaining(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    done: ms === 0,
    values: [
      Math.floor(ms / 86_400_000),
      Math.floor(ms / 3_600_000) % 24,
      Math.floor(ms / 60_000) % 60,
      Math.floor(ms / 1_000) % 60,
    ],
  };
}

export default function Countdown() {
  const { t, lang } = useLang();
  const [target] = useState(() => new Date(wedding.dateTime).getTime());
  const [left, setLeft] = useState(() => remaining(target));

  useEffect(() => {
    const id = setInterval(() => setLeft(remaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (left.done) {
    return (
      <p className={`text-center text-maroon-700 ${lang === "si" ? "font-sinhala text-2xl font-bold" : "font-script text-4xl"}`}>
        {t("married")}
      </p>
    );
  }

  const labels = [t("days"), t("hours"), t("minutes"), t("seconds")];

  return (
    <div className="flex justify-center gap-2.5 sm:gap-4" role="timer" aria-label={t("countTitle")}>
      {left.values.map((value, i) => (
        <div key={labels[i]} className="w-[70px] rounded-2xl bg-maroon-700 px-2 py-3 text-center shadow-soft sm:w-20">
          <div className="text-2xl font-extrabold tabular-nums text-gold-300 sm:text-3xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-cream/80 sm:text-xs">
            {labels[i]}
          </div>
        </div>
      ))}
    </div>
  );
}
