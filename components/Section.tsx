"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { OrnamentDivider } from "./decorations";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-gold-300/60 bg-white/70 p-6 shadow-card backdrop-blur-sm sm:p-8 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function Row({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100 text-maroon-700 ring-1 ring-gold-300/70">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-600">{label}</p>
        <div className="mt-1 text-sm leading-relaxed text-ink sm:text-base">{children}</div>
      </div>
    </div>
  );
}

export default function Section({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const { lang } = useLang();
  return (
    <section id={id} className={`relative mx-auto w-full max-w-2xl px-5 py-12 sm:py-16 ${className ?? ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2
          className={`text-center text-maroon-700 ${
            lang === "si" ? "font-sinhala text-2xl font-bold" : "font-script text-4xl sm:text-5xl"
          }`}
        >
          {title}
        </h2>
        <OrnamentDivider className="mt-3" />
        <div className="mt-8">{children}</div>
      </motion.div>
    </section>
  );
}
