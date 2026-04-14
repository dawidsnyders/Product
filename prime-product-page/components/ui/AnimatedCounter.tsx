"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  className = "",
  duration = 1.5,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract numeric part and prefix/suffix
    const match = value.match(/^([^0-9]*)([\d,.]+)([^0-9]*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const hasDecimal = numStr.includes(".");
    const decimalPlaces = hasDecimal ? numStr.split(".")[1]?.length || 0 : 0;
    const hasComma = numStr.includes(",");

    animate(0, target, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => {
        let formatted = hasDecimal
          ? latest.toFixed(decimalPlaces)
          : Math.round(latest).toString();

        if (hasComma) {
          const parts = formatted.split(".");
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          formatted = parts.join(".");
        }

        setDisplayValue(`${prefix}${formatted}${suffix}`);
      },
    });
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
