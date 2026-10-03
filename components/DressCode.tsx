"use client";

import { useLang } from "@/lib/i18n";
import { wedding } from "@/lib/config";
import Section, { Card } from "./Section";

export default function DressCode() {
  const { t, pick } = useLang();

  return (
    <Section id="dress-code" title={t("dressTitle")}>
      <Card className="text-center">
        <p className="text-sm leading-relaxed text-ink sm:text-base">{pick(wedding.dressCode.details)}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-4">
          {wedding.dressCode.colors.map((color) => (
            <div key={color.hex} className="flex w-16 flex-col items-center gap-1.5">
              <span
                className="h-11 w-11 rounded-full border-2 border-white shadow-soft ring-2 ring-gold-500/60"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-xs font-semibold text-maroon-700">{pick(color.name)}</span>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}
