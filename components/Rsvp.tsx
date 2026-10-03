"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { wedding } from "@/lib/config";
import Section, { Card } from "./Section";
import { Jasmine } from "./decorations";

type Status = "idle" | "sending" | "done" | "error";

const CONFETTI = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2;
  return {
    x: Math.cos(angle) * 110,
    y: Math.sin(angle) * 90,
    color: ["#C9A227", "#7A1F1F", "#F2A6B4", "#F6C6A4"][i % 4],
    delay: i * 0.03,
  };
});

export default function Rsvp() {
  const { t, pick } = useLang();
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(true);
  const [guests, setGuests] = useState(2);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [savedAttending, setSavedAttending] = useState(true);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          attending,
          guestCount: attending ? guests : 0,
          message: message.trim(),
        }),
      });
      if (!res.ok) throw new Error("RSVP request failed");
      setSavedAttending(attending);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="rsvp" title={t("rsvpTitle")}>
      <Card>
        {status === "done" ? (
          <div className="relative py-4 text-center">
            <div className="pointer-events-none absolute left-1/2 top-24 z-10" aria-hidden="true">
              {CONFETTI.map((c, i) => (
                <motion.span
                  key={i}
                  className="absolute h-2.5 w-2.5 rounded-sm"
                  style={{ backgroundColor: c.color }}
                  initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                  animate={{ x: c.x, y: c.y, opacity: 0, rotate: 240 }}
                  transition={{ duration: 1.1, delay: 0.35 + c.delay, ease: "easeOut" }}
                />
              ))}
            </div>
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="relative mx-auto w-52 overflow-hidden rounded-3xl border-4 border-gold-500 shadow-soft sm:w-60"
            >
              <Image
                src="/images/celebrate.png"
                alt="Cartoon couple celebrating joyfully with confetti"
                width={1024}
                height={1024}
                className="h-auto w-full"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-sm font-semibold leading-relaxed text-maroon-700 sm:text-base"
            >
              {t(savedAttending ? "rsvpThanksYes" : "rsvpThanksNo")}
            </motion.p>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gold-600">
              {wedding.hashtag}
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-5">
            <p className="text-center text-sm leading-relaxed text-ink/80">{t("rsvpSub")}</p>

            <div>
              <label htmlFor="rsvp-name" className="mb-1.5 block text-sm font-bold text-maroon-700">
                {t("nameLabel")}
              </label>
              <input
                id="rsvp-name"
                className="field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("namePlaceholder")}
                maxLength={120}
                required
              />
            </div>

            <div>
              <span className="mb-1.5 block text-sm font-bold text-maroon-700">
                {t("attendingLabel")}
              </span>
              <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label={t("attendingLabel")}>
                {[true, false].map((value) => (
                  <button
                    key={String(value)}
                    type="button"
                    role="radio"
                    aria-checked={attending === value}
                    onClick={() => setAttending(value)}
                    className={`rounded-xl border-2 px-4 py-2.5 text-sm font-bold transition ${
                      attending === value
                        ? "border-maroon-700 bg-maroon-700 text-cream shadow-soft"
                        : "border-gold-300 bg-white/70 text-maroon-700 hover:border-maroon-300"
                    }`}
                  >
                    {t(value ? "yes" : "no")}
                  </button>
                ))}
              </div>
            </div>

            {attending && (
              <div>
                <label htmlFor="rsvp-guests" className="mb-1.5 block text-sm font-bold text-maroon-700">
                  {t("guestsLabel")}
                </label>
                <select
                  id="rsvp-guests"
                  className="field"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label htmlFor="rsvp-message" className="mb-1.5 block text-sm font-bold text-maroon-700">
                {t("messageLabel")}
              </label>
              <textarea
                id="rsvp-message"
                className="field resize-none"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("messagePlaceholder")}
                maxLength={500}
              />
            </div>

            {status === "error" && (
              <p role="alert" className="rounded-xl bg-maroon-50 px-4 py-3 text-sm font-semibold text-maroon-700">
                {t("rsvpError")}
              </p>
            )}

            <button type="submit" disabled={status === "sending"} className="btn-gold w-full disabled:opacity-60">
              {status === "sending" ? t("sending") : t("sendRsvp")}
            </button>

            <p className="text-center text-xs font-semibold text-ink/70">
              {t("rsvpBy")} <span className="text-maroon-700">{pick(wedding.rsvpDeadline)}</span>
            </p>
          </form>
        )}
      </Card>
      <Jasmine className="absolute -bottom-2 left-2 h-10 w-10 rotate-12 opacity-50" />
    </Section>
  );
}
