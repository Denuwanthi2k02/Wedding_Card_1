"use client";

import { useLang } from "@/lib/i18n";
import { wedding } from "@/lib/config";
import Section, { Card } from "./Section";
import { IconBus, IconParking } from "./decorations";

export default function TransportParking() {
  const { t, pick } = useLang();

  return (
    <Section id="transport" title={t("transportTitle")}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="h-full">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-maroon-700 ring-1 ring-gold-300/70">
            <IconBus className="h-6 w-6" />
          </span>
          <h3 className="mt-3 text-sm font-bold uppercase tracking-widest text-gold-600">
            {t("transportLabel")}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink">{pick(wedding.transport)}</p>
        </Card>
        <Card className="h-full">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-maroon-700 ring-1 ring-gold-300/70">
            <IconParking className="h-6 w-6" />
          </span>
          <h3 className="mt-3 text-sm font-bold uppercase tracking-widest text-gold-600">
            {t("parkingLabel")}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink">{pick(wedding.parking)}</p>
        </Card>
      </div>
    </Section>
  );
}
