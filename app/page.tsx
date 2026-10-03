"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import Envelope from "@/components/Envelope";
import Petals from "@/components/Petals";
import FloatingButtons from "@/components/FloatingButtons";
import Hero from "@/components/Hero";
import Details from "@/components/Details";
import Reception from "@/components/Reception";
import DressCode from "@/components/DressCode";
import Accommodation from "@/components/Accommodation";
import TransportParking from "@/components/TransportParking";
import Rsvp from "@/components/Rsvp";
import Footer from "@/components/Footer";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen overflow-x-clip">
        <Petals active={opened} />
        <FloatingButtons />
        <Hero />
        <Details />
        <Reception />
        <DressCode />
        <Accommodation />
        <TransportParking />
        <Rsvp />
        <Footer />
        {!opened && <Envelope onOpened={() => setOpened(true)} />}
      </main>
    </MotionConfig>
  );
}
