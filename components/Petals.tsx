"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Petal } from "./decorations";

const COLORS = ["#FFFDF6", "#F6C6A4", "#F2A6B4"];

const PETALS = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 7.3 + 3) % 100,
  delay: (i * 0.9) % 7,
  duration: 9 + (i % 5) * 2,
  sway: i % 2 ? 26 : -26,
  scale: 0.7 + (i % 4) * 0.18,
  color: COLORS[i % 3],
}));

export default function Petals({ active }: { active: boolean }) {
  const reduce = useReducedMotion();
  if (!active || reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {PETALS.map((p, i) => (
        <motion.span
          key={i}
          className="absolute -top-[6%]"
          style={{ left: `${p.left}%` }}
          initial={{ y: "-10vh", opacity: 0, rotate: 0 }}
          animate={{ y: "112vh", opacity: [0, 1, 1, 0], rotate: 320 }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        >
          <motion.span
            className="block"
            style={{ scale: p.scale }}
            animate={{ x: [0, p.sway, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Petal color={p.color} className="h-5 w-4 drop-shadow-sm" />
          </motion.span>
        </motion.span>
      ))}
    </div>
  );
}
