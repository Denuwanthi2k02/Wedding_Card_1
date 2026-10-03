"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Bilingual } from "./config";

export type Lang = "en" | "si";

const strings = {
  tapToOpen: { en: "Tap to open", si: "විවෘත කිරීමට තට්ටු කරන්න" },
  invited: { en: "You are cordially invited", si: "ඔබට ආදරයෙන් ආරාධනා කරමු" },
  days: { en: "Days", si: "දින" },
  hours: { en: "Hours", si: "පැය" },
  minutes: { en: "Minutes", si: "මිනිත්තු" },
  seconds: { en: "Seconds", si: "තත්පර" },
  married: { en: "We are married!", si: "අපි විවාහ වුණා!" },
  countTitle: { en: "Counting down to our big day", si: "අපේ විශේෂ දිනය එන තුරු" },
  detailsTitle: { en: "Wedding Details", si: "විවාහ විස්තර" },
  dateLabel: { en: "Date", si: "දිනය" },
  timeLabel: { en: "Time", si: "වේලාව" },
  venueLabel: { en: "Venue", si: "ස්ථානය" },
  openMaps: { en: "Open in Google Maps", si: "Google Maps හි විවෘත කරන්න" },
  addCalendar: { en: "Add to Calendar", si: "දින දර්ශනයට එක් කරන්න" },
  receptionTitle: { en: "Reception", si: "භෝජන සංග්රහය" },
  dressTitle: { en: "Dress Code", si: "ඇඳුම් නියමය" },
  accomTitle: { en: "Accommodation", si: "නවාතැන් පහසුකම්" },
  transportTitle: { en: "Transport & Parking", si: "ප්රවාහනය සහ වාහන ගාල්" },
  transportLabel: { en: "Getting there", si: "ප්රවාහනය" },
  parkingLabel: { en: "Parking", si: "වාහන ගාල් කිරීම" },
  rsvpTitle: { en: "RSVP", si: "පැමිණීම තහවුරු කිරීම" },
  rsvpSub: {
    en: "Your presence is the greatest gift of all. Kindly let us know if you can make it.",
    si: "ඔබේ පැමිණීම අපට ලැබෙන විශාලතම තෑග්ගයි. කරුණාකර ඔබට පැමිණිය හැකිදැයි දන්වන්න.",
  },
  nameLabel: { en: "Your name", si: "ඔබේ නම" },
  namePlaceholder: { en: "Full name", si: "සම්පූර්ණ නම" },
  attendingLabel: { en: "Will you attend?", si: "ඔබ පැමිණෙනවාද?" },
  yes: { en: "Joyfully accepts", si: "ඔව්, පැමිණෙනවා" },
  no: { en: "Regretfully declines", si: "නැත, බැහැ" },
  guestsLabel: { en: "Number of guests", si: "අමුත්තන් ගණන" },
  messageLabel: { en: "A short message (optional)", si: "කෙටි පණිවිඩයක් (අවශ්‍ය නම්)" },
  messagePlaceholder: { en: "Write a wish for the couple...", si: "යුවළට සුබ පැතුමක් ලියන්න..." },
  sendRsvp: { en: "Send RSVP", si: "RSVP යවන්න" },
  sending: { en: "Sending...", si: "යවමින්..." },
  rsvpThanksYes: {
    en: "Thank you! We can't wait to celebrate with you.",
    si: "ස්තූතියි! ඔබ සමඟ සමරන්න අපි මහත් කැමැත්තෙන් සිටිමු.",
  },
  rsvpThanksNo: {
    en: "Thank you for letting us know. You'll be in our hearts that day.",
    si: "දන්වා සිටීම ගැන ස්තූතියි. එදා ඔබ අපේ හදවතේ සිටිනවා.",
  },
  rsvpError: {
    en: "Something went wrong. Please try again.",
    si: "යමක් වැරදී ඇත. කරුණාකර නැවත උත්සාහ කරන්න.",
  },
  rsvpBy: { en: "Kindly reply by", si: "කරුණාකර මෙම දිනයට පෙර දන්වන්න:" },
  share: { en: "Share on WhatsApp", si: "WhatsApp හි බෙදාගන්න" },
  questions: { en: "Questions? WhatsApp us", si: "ප්රශ්න තිබේද? WhatsApp කරන්න" },
} satisfies Record<string, Bilingual>;

export type UiKey = keyof typeof strings;

export const footerThanks: Bilingual = {
  en: "Thank you for blessing our special day with your presence and love.",
  si: "අපගේ විශේෂ දිනයට ඔබේ පැමිණීමෙන් සහ ආදරයෙන් ආශීර්වාද කිරීම ගැන ස්තූතියි.",
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: UiKey) => string;
  pick: (value: Bilingual) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: (key) => strings[key][lang],
      pick: (v) => v[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
