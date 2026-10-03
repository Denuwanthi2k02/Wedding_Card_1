"use client";

import { useLang } from "@/lib/i18n";
import { wedding } from "@/lib/config";
import Section, { Card, Row } from "./Section";
import { IconBed, IconPin } from "./decorations";

export default function Accommodation() {
  const { t, pick } = useLang();

  return (
    <Section id="accommodation" title={t("accomTitle")}>
      <Card className="space-y-5">
        <Row icon={<IconBed className="h-5 w-5" />} label={t("accomTitle")}>
          <span className="font-semibold">{pick(wedding.accommodation.hotel)}</span>
        </Row>
        <Row icon={<IconPin className="h-5 w-5" />} label={t("transportLabel")}>
          {pick(wedding.accommodation.distance)}
        </Row>
        <div className="pt-1 text-center">
          <a
            href={wedding.accommodation.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {pick(wedding.accommodation.bookingLabel)}
          </a>
        </div>
      </Card>
    </Section>
  );
}
