"use client";

import { useLang } from "@/lib/i18n";
import { wedding } from "@/lib/config";
import Section, { Card, Row } from "./Section";
import { IconClock, IconPin, OilLamp } from "./decorations";

export default function Reception() {
  const { t, pick } = useLang();

  return (
    <Section id="reception" title={t("receptionTitle")}>
      <Card className="relative space-y-6 overflow-hidden">
        <OilLamp className="pointer-events-none absolute -right-3 -top-3 h-24 w-20 opacity-15" />
        <Row icon={<IconClock className="h-5 w-5" />} label={t("timeLabel")}>
          <span className="font-semibold">{pick(wedding.reception.time)}</span>
        </Row>
        <Row icon={<IconPin className="h-5 w-5" />} label={t("venueLabel")}>
          <span className="font-semibold">{pick(wedding.reception.place)}</span>
        </Row>
        <p className="rounded-2xl bg-peach-100/80 px-5 py-4 text-sm leading-relaxed text-maroon-800 sm:text-base">
          {pick(wedding.reception.details)}
        </p>
      </Card>
    </Section>
  );
}
