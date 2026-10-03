"use client";

import { useLang } from "@/lib/i18n";
import { wedding } from "@/lib/config";
import { IconWhatsApp } from "./decorations";

export default function FloatingButtons() {
  const { lang, setLang, t, pick } = useLang();

  function shareOnWhatsApp() {
    const text = `${pick(wedding.shareText)} ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <>
      <div
        className="fixed right-3 top-3 z-40 flex overflow-hidden rounded-full border border-gold-500/70 bg-white/90 shadow-soft backdrop-blur"
        role="group"
        aria-label="Language / භාෂාව"
      >
        <button
          type="button"
          onClick={() => setLang("en")}
          aria-pressed={lang === "en"}
          className={`px-3.5 py-2 text-xs font-bold transition ${
            lang === "en" ? "bg-maroon-700 text-cream" : "text-maroon-700 hover:bg-maroon-50"
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLang("si")}
          aria-pressed={lang === "si"}
          className={`px-3.5 py-2 font-sinhala text-xs font-bold transition ${
            lang === "si" ? "bg-maroon-700 text-cream" : "text-maroon-700 hover:bg-maroon-50"
          }`}
        >
          සිං
        </button>
      </div>

      <button
        type="button"
        onClick={shareOnWhatsApp}
        aria-label={t("share")}
        title={t("share")}
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:scale-105 active:scale-95"
      >
        <IconWhatsApp className="h-7 w-7" />
      </button>
    </>
  );
}
