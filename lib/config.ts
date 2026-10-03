export type Bilingual = { en: string; si: string };

export type ColorSwatch = { name: Bilingual; hex: string };

export type WeddingConfig = {
  bride: Bilingual;
  groom: Bilingual;
  dateDisplay: Bilingual;
  timeDisplay: Bilingual;
  /** ISO string used for the countdown and the calendar file */
  dateTime: string;
  venue: { name: Bilingual; address: Bilingual };
  mapsUrl: string;
  reception: { time: Bilingual; place: Bilingual; details: Bilingual };
  dressCode: { details: Bilingual; colors: ColorSwatch[] };
  accommodation: {
    hotel: Bilingual;
    distance: Bilingual;
    bookingUrl: string;
    bookingLabel: Bilingual;
  };
  transport: Bilingual;
  parking: Bilingual;
  whatsappNumber: string;
  rsvpDeadline: Bilingual;
  hashtag: string;
  shareText: Bilingual;
};

// ---------------------------------------------------------------------------
// Edit everything below — this is the only file you need to change.
// The values here are samples; replace them with your own details.
// ---------------------------------------------------------------------------
export const wedding: WeddingConfig = {
  bride: { en: "Dewmini Guruge", si: "දෙව්මිණි ගුරුගේ" },
  groom: { en: "Shehan Gunasekara", si: "ෂෙහාන් ගුණසේකර" },

  dateDisplay: { en: "Saturday, 12 December 2026", si: "2026 දෙසැම්බර් 12, සෙනසුරාදා" },
  timeDisplay: { en: "9:30 AM onwards", si: "පෙ.ව. 9:30 සිට" },
  dateTime: "2026-12-12T09:30:00+05:30",

  venue: {
    name: { en: "Centauria Lake Resort", si: "සෙන්චුරියා ලේක් රෙසෝට්" },
    address: { en: "Centauria Lake , New Town , Embilipitiya", si: " සෙන්ටුරියා ලේක් රිසෝට්, නව නගරය, ඇඹිලිපිටිය." },
  },
  mapsUrl: "https://maps.app.goo.gl/xGgFkrKvX9sP392X7",

  reception: {
    time: { en: "7:00 PM onwards", si: "ප.ව. 7:00 සිට" },
    place: { en: "Centauria Lake Resort", si: "සෙන්චුරියා ලේක් රෙසෝට්" },
    details: {
      en: "Dinner, dancing and heartfelt toasts — join us under the lights as we celebrate our first evening as a married couple.",
      si: "රාත්රී භෝජනය, නැටුම් සහ සුබ පැතුම් — විවාහක යුවළක් ලෙස අපගේ පළමු සන්ධ්යාව සමරමින් අප හා එක්වන්න.",
    },
  },

  dressCode: {
    details: {
      en: "Traditional Kandyan attire or elegant formal wear. These are our favourite shades — feel free to wear them!",
      si: "සාම්ප්රදායික මහනුවර ඇඳුම් හෝ විධිමත් ඇඳුම්. මේ අපගේ ප්රියතම වර්ණයි — ඔබටද හැඳිය හැක!",
    },
    colors: [
      { name: { en: "Maroon", si: "මෙරූන්" }, hex: "#7A1F1F" },
      { name: { en: "Gold", si: "රන්වන්" }, hex: "#C9A227" },
      { name: { en: "Cream", si: "ක්‍රීම්" }, hex: "#F6E7CE" },
      { name: { en: "Peach", si: "පීච්" }, hex: "#F6C6A4" },
    ],
  },

  accommodation: {
    hotel: { en: "Centuria City Hotel", si: "සෙන්චුරියා සිටි හොටෙල්" },
    distance: {
      en: "About 2 km (5 min by tuk-tuk) from the venue",
      si: "මංගල ශාලාවෙන් කි.මී. 2ක් පමණ (මිනිත්තු 5)",
    },
    bookingUrl: "https://example.com/book",
    bookingLabel: { en: "Book a room", si: "කාමරයක් වෙන් කරන්න" },
  },

  transport: {
    en: "A free guest shuttle runs from Kandy railway station at 8:00 AM and 6:30 PM. PickMe and Uber taxis are available city-wide.",
    si: "PickMe සහ Uber ටැක්සි පහසුකම් ද ඇත.",
  },
  parking: {
    en: "Free parking at the venue's rear lot; valet service at the main entrance.",
    si: "ශාලාවේ පසුපස ගාල් භමියේ නොමිලේ වාහන ගාල් කිරීම; ප්රධාන දොරටුවේදී valet සේවාව.",
  },

  whatsappNumber: "+94712345678",
  rsvpDeadline: { en: "20 November 2026", si: "2026 නොවැම්බර් 20" },
  hashtag: "#DewminiWedsShehan",
  shareText: {
    en: "You're invited to the wedding of Dewmini & Shehan! Open our invitation:",
    si: "දෙව්මිණි සහ ෂෙහාන්ගේ විවාහ මංගල්යයට ඔබට ආරාධනායි! ආරාධනා පත්රිකාව බලන්න:",
  },
};
