# Sinhala Wedding Invitation 💌

A cute, mobile-first digital wedding invitation for a Sri Lankan (Sinhala) wedding.
One scrolling page: tap-to-open envelope, cartoon couple hero with live countdown,
all wedding details, bilingual English / සිංහල toggle, RSVP form backed by Supabase,
WhatsApp sharing and a pretty Open Graph preview for WhatsApp links.

Built with **Next.js (App Router) + Tailwind CSS + Framer Motion + Supabase**.

## Features

- Closed envelope opening animation ("Tap to open") with falling flower petals
- Hero with original cartoon couple illustration, names and live countdown timer
- Wedding details with **Open in Google Maps** and **Add to Calendar** (.ics) buttons
- Reception, dress code (color swatches), accommodation, transport & parking sections
- RSVP form (name / attending / guest count / message) saved to a `rsvps` table,
  with a happy cartoon celebration animation after submit
- English / සිංහල language toggle (all UI strings and content are bilingual)
- WhatsApp share button + WhatsApp contact link
- Open Graph / Twitter preview image so shared links look nice in WhatsApp
- Respects `prefers-reduced-motion` (animations are disabled for those users)

## Folder structure

```
app/
  layout.tsx            fonts + metadata + Open Graph preview
  page.tsx              single scrolling page (composes the sections)
  globals.css           Tailwind layers, buttons, patterns
  api/rsvp/route.ts     POST endpoint that saves RSVPs to Supabase
components/
  Envelope.tsx          tap-to-open opening screen
  Hero.tsx              couple illustration, names, date, countdown
  Countdown.tsx         live countdown timer
  Details.tsx           date / time / venue + Maps + Add to Calendar
  Reception.tsx         reception information
  DressCode.tsx         dress code + color circles
  Accommodation.tsx     hotel + booking link
  TransportParking.tsx  shuttle / taxi + parking cards
  Rsvp.tsx              RSVP form + success animation
  Footer.tsx            thank-you in English and Sinhala
  FloatingButtons.tsx   language toggle + WhatsApp share
  Petals.tsx            falling petals overlay
  decorations.tsx       original SVG jasmine / lotus / oil lamp / elephant / icons
  Section.tsx           section wrapper + shared Card/Row
lib/
  config.ts             ★ ALL WEDDING DETAILS — edit this file
  i18n.tsx              language context + EN/SI UI strings
  calendar.ts           .ics "Add to Calendar" generation
public/images/          couple.png, celebrate.png, og.png (replace with your art)
supabase/schema.sql     creates the rsvps table + RLS policy
.env.example            environment variable template
```

## 1. Customize the invitation

1. Open `lib/config.ts` and replace the sample values (names, date, venue, maps link,
   reception, dress code, accommodation, transport, parking, WhatsApp number,
   RSVP deadline, hashtag, share text). Every text field has `en` and `si` versions.
2. Drop your own artwork into `public/images/` (keep the same file names):
   - `couple.png` — hero portrait of the couple (portrait ratio, ~3:4)
   - `celebrate.png` — happy couple shown after a guest submits the RSVP (square)
   - `og.png` — link preview banner shown in WhatsApp (wide, ~16:9)

## 2. Run locally

```bash
npm install
cp .env.example .env.local     # then fill in your Supabase keys (see step 3)
npm run dev                    # http://localhost:3000
```

Tip: without Supabase keys, `npm run dev` still works — RSVPs are appended to a
gitignored local file `.data/rsvps.dev.jsonl` so you can test the form immediately.
In production builds missing keys return a clear error instead.

## 3. Connect the database (Supabase)

1. Create a free project at https://supabase.com
2. Open **SQL Editor** in the Supabase dashboard, paste the contents of
   `supabase/schema.sql` and run it. This creates:

   ```
   rsvps (id, name, attending, guest_count, message, created_at)
   ```

   with Row Level Security enabled and a policy that allows anonymous inserts
   (guests can submit, but cannot read other responses).
3. Copy your credentials from **Project Settings → API**:
   - `SUPABASE_URL` → project URL
   - `SUPABASE_ANON_KEY` → anon/public key
4. Put them in `.env.local` (see `.env.example`).
5. Read responses in the Supabase **Table Editor** under `rsvps`.

## 4. Deploy on Vercel

1. Push this folder to a GitHub repository.
2. On https://vercel.com choose **Add New → Project** and import the repository.
   Vercel auto-detects Next.js — no build settings needed.
3. In **Project → Settings → Environment Variables** add:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL` = your deployed URL, e.g. `https://your-site.vercel.app`
     (used for the Open Graph preview image in WhatsApp)
4. Deploy. Share the URL on WhatsApp — the preview card uses `public/images/og.png`.

Alternatively with the CLI: `npm i -g vercel && vercel` then `vercel --prod`.

## Notes

- The illustrations in `public/images/` are original artwork generated for this
  template — replace them freely with your own artist's work.
- Fonts: Great Vibes (script names), Nunito (details), Noto Sans Sinhala (සිංහල).
- The countdown, calendar file and all sections update automatically from
  `lib/config.ts`.
