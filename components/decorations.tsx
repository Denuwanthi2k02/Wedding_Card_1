type SvgProps = { className?: string };

export function Jasmine({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse
          key={r}
          cx="32"
          cy="17"
          rx="8.5"
          ry="13.5"
          fill="#FFFDF6"
          stroke="#EAD9B4"
          strokeWidth="1.5"
          transform={`rotate(${r} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="5.5" fill="#E9B44C" />
    </svg>
  );
}

export function Lotus({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 96 60" className={className} aria-hidden="true">
      <path d="M48 4 C40 18 40 32 48 42 C56 32 56 18 48 4 Z" fill="#F2A6B4" />
      <path d="M28 10 C24 24 30 36 44 42 C42 30 38 18 28 10 Z" fill="#F6BCC7" />
      <path d="M68 10 C72 24 66 36 52 42 C54 30 58 18 68 10 Z" fill="#F6BCC7" />
      <path d="M10 22 C12 34 24 42 42 44 C34 34 24 26 10 22 Z" fill="#FAD3DA" />
      <path d="M86 22 C84 34 72 42 54 44 C62 34 72 26 86 22 Z" fill="#FAD3DA" />
      <path d="M18 46 C30 54 66 54 78 46 C66 50 30 50 18 46 Z" fill="#C9A227" />
    </svg>
  );
}

export function OilLamp({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 64 84" className={className} aria-hidden="true">
      <path d="M32 4 C38 12 39 19 32 26 C25 19 26 12 32 4 Z" fill="#F5B301" />
      <path d="M32 10 C35 15 35 19 32 23 C29 19 29 15 32 10 Z" fill="#FFE08A" />
      <ellipse cx="32" cy="32" rx="17" ry="6" fill="#C9A227" />
      <path d="M15 32 C18 41 46 41 49 32 C46 37 18 37 15 32 Z" fill="#A9861C" />
      <path d="M29 37 h6 v13 h-6 Z" fill="#B98A2F" />
      <ellipse cx="32" cy="53" rx="13" ry="4.5" fill="#C9A227" />
      <path d="M19 53 C22 61 42 61 45 53 C42 57 22 57 19 53 Z" fill="#A9861C" />
      <ellipse cx="32" cy="66" rx="17" ry="5" fill="#C9A227" />
      <path d="M15 66 C19 76 45 76 49 66 C45 71 19 71 15 66 Z" fill="#A9861C" />
    </svg>
  );
}

export function Elephant({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 128 100" className={className} aria-hidden="true">
      <path d="M104 44 C112 48 114 56 110 62" stroke="#9C8096" strokeWidth="4" fill="none" strokeLinecap="round" />
      <rect x="80" y="60" width="14" height="28" rx="7" fill="#9C8096" />
      <rect x="60" y="64" width="13" height="26" rx="6.5" fill="#9C8096" />
      <ellipse cx="74" cy="52" rx="34" ry="26" fill="#B493AC" />
      <path d="M52 32 C64 24 86 24 98 34 L94 58 C80 66 62 66 54 58 Z" fill="#7A1F1F" />
      <path d="M52 32 C64 24 86 24 98 34 L96 42 C84 34 64 34 54 40 Z" fill="#C9A227" />
      <circle cx="64" cy="50" r="2.4" fill="#E4C878" />
      <circle cx="76" cy="52" r="2.4" fill="#E4C878" />
      <circle cx="88" cy="50" r="2.4" fill="#E4C878" />
      <rect x="30" y="60" width="13" height="28" rx="6.5" fill="#B493AC" />
      <rect x="46" y="64" width="13" height="26" rx="6.5" fill="#B493AC" />
      <circle cx="34" cy="42" r="21" fill="#B493AC" />
      <path d="M17 44 C9 52 10 64 20 70" stroke="#B493AC" strokeWidth="9" strokeLinecap="round" fill="none" />
      <ellipse cx="42" cy="42" rx="10" ry="13" fill="#9C8096" />
      <circle cx="27" cy="38" r="2.6" fill="#3B2A33" />
      <circle cx="22" cy="47" r="3.4" fill="#E8A7B0" opacity="0.7" />
      <path d="M30 23 L34 14 L38 23 Z" fill="#C9A227" />
    </svg>
  );
}

export function Petal({ className, color = "#F6C6A4" }: SvgProps & { color?: string }) {
  return (
    <svg viewBox="0 0 16 20" className={className} aria-hidden="true">
      <path d="M8 0 C13 5 13 13 8 20 C3 13 3 5 8 0 Z" fill={color} />
    </svg>
  );
}

export function OrnamentDivider({ className }: SvgProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className ?? ""}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-l from-gold-500/70 to-transparent sm:w-24" />
      <Lotus className="h-7 w-12" />
      <span className="h-px w-16 bg-gradient-to-r from-gold-500/70 to-transparent sm:w-24" />
    </div>
  );
}

export function ScallopDivider({ fill = "#FFF8EE", flip = false }: { fill?: string; flip?: boolean }) {
  const bumps = Array.from({ length: 12 }, (_, i) => `Q${i * 100 + 50} -6 ${(i + 1) * 100} 28`).join(" ");
  return (
    <svg
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      className={`block h-7 w-full sm:h-9 ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d={`M0 48 L0 28 ${bumps} L1200 48 Z`} fill={fill} />
    </svg>
  );
}

type IconProps = { className?: string };

function strokeProps(className?: string) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  };
}

export function IconCalendar({ className }: IconProps) {
  return (
    <svg {...strokeProps(className)}>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8 14h3M8 17.5h6" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...strokeProps(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...strokeProps(className)}>
      <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconBus({ className }: IconProps) {
  return (
    <svg {...strokeProps(className)}>
      <rect x="4" y="4" width="16" height="13" rx="3" />
      <path d="M4 10h16M8 20v-3M16 20v-3" />
      <circle cx="8.5" cy="13.8" r="0.6" fill="currentColor" />
      <circle cx="15.5" cy="13.8" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconParking({ className }: IconProps) {
  return (
    <svg {...strokeProps(className)}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M10 16.5v-9h3a2.8 2.8 0 0 1 0 5.6h-3" />
    </svg>
  );
}

export function IconBed({ className }: IconProps) {
  return (
    <svg {...strokeProps(className)}>
      <path d="M3 18v-8M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5" />
      <circle cx="7" cy="11" r="1.8" />
    </svg>
  );
}

export function IconHeart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 21s-7.5-4.9-9.8-9.2C.6 8.7 2.4 5 6 5c2.2 0 3.6 1.2 4.4 2.6h1.2C12.4 6.2 13.8 5 16 5c3.6 0 5.4 3.7 3.8 6.8C17.5 16.1 12 21 12 21z" />
    </svg>
  );
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
