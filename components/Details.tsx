"use client";

import { useLang } from "@/lib/i18n";
import { wedding } from "@/lib/config";
import { downloadCalendarInvite } from "@/lib/calendar";
import Section, { Card, Row } from "./Section";
import { IconCalendar, IconClock, IconPin } from "./decorations";

export default function Details() {
  const { t, pick } = useLang();

  function addCalendar() {
    const start = new Date(wedding.dateTime);
    const end = new Date(start.getTime() + 6 * 60 * 60 * 1000);
    downloadCalendarInvite({
      summary: `Wedding of ${wedding.bride.en} & ${wedding.groom.en}`,
      description: `${wedding.dateDisplay.en}, ${wedding.timeDisplay.en}`,
      location: `${wedding.venue.name.en}, ${wedding.venue.address.en}`,
      start,
      end,
    });
  }

  return (
    <Section id="details" title={t("detailsTitle")}>
      <Card className="space-y-6">
        <Row icon={<IconCalendar className="h-5 w-5" />} label={t("dateLabel")}>
          <span className="font-semibold">{pick(wedding.dateDisplay)}</span>
        </Row>
        <Row icon={<IconClock className="h-5 w-5" />} label={t("timeLabel")}>
          <span className="font-semibold">{pick(wedding.timeDisplay)}</span>
        </Row>
        <Row icon={<IconPin className="h-5 w-5" />} label={t("venueLabel")}>
          <span className="font-semibold">{pick(wedding.venue.name)}</span>
          <br />
          <span className="text-ink/80">{pick(wedding.venue.address)}</span>
        </Row>
        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:justify-center">
          <a href={wedding.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <IconPin className="h-4 w-4" />
            {t("openMaps")}
          </a>
          <button type="button" onClick={addCalendar} className="btn-outline">
            <IconCalendar className="h-4 w-4" />
            {t("addCalendar")}
          </button>
        </div>
      </Card>
    </Section>
  );
}
