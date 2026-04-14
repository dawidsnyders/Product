export function KaminoLogo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-black tracking-[-0.02em] ${className}`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <span className="font-black">k</span>amino
    </span>
  );
}

export function KaminoStackedIcon({
  size = 80,
  color = "currentColor",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  const scale = size / 80;
  return (
    <svg
      className={className}
      width={size}
      height={size * 1.2}
      viewBox="0 0 80 96"
      fill="none"
    >
      <circle cx="40" cy="8" r={4 * scale + 2} fill={color} />
      <circle cx="28" cy="20" r={3 * scale + 1.5} fill={color} />
      <circle cx="40" cy="20" r={3 * scale + 1.5} fill={color} />
      <circle cx="52" cy="20" r={3 * scale + 1.5} fill={color} />
      <rect x="12" y="36" width="56" height={5} rx="2.5" fill={color} />
      <rect x="6" y="46" width="68" height={5} rx="2.5" fill={color} />
      <rect x="0" y="56" width="80" height={6} rx="3" fill={color} />
      <rect x="0" y="67" width="80" height={6} rx="3" fill={color} />
      <rect x="0" y="78" width="80" height={7} rx="3.5" fill={color} />
      <rect x="0" y="89" width="80" height={7} rx="3.5" fill={color} />
    </svg>
  );
}
