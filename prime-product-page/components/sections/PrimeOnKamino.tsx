"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { growthData } from "@/data/growth-data";

const kaminoStats = [
  { value: "$550M", label: "PRIME on Kamino", sublabel: "Feb 2026" },
  { value: "$230M", label: "Total Borrowed", sublabel: "" },
  { value: "3,219", label: "Active Loans", sublabel: "" },
  { value: "Zero", label: "Bad Debt", sublabel: "" },
];

// Chart dimensions
const CHART_W = 900;
const CHART_H = 320;
const PAD = { top: 20, right: 20, bottom: 40, left: 50 };
const innerW = CHART_W - PAD.left - PAD.right;
const innerH = CHART_H - PAD.top - PAD.bottom;

const maxDeposits = 600;

function sx(i: number, total: number) {
  return PAD.left + (i / (total - 1)) * innerW;
}
function sy(val: number) {
  return PAD.top + (1 - val / maxDeposits) * innerH;
}

function buildAreaPath(
  data: typeof growthData,
  key: "deposits" | "borrows"
): string {
  const points = data.map((d, i) => `${sx(i, data.length)},${sy(d[key])}`);
  const baseline = `${sx(data.length - 1, data.length)},${sy(0)} ${sx(0, data.length)},${sy(0)}`;
  return `M ${points.join(" L ")} L ${baseline} Z`;
}

interface TooltipState {
  visible: boolean;
  index: number;
  svgX: number;
  // Position in container-relative pixels for tooltip placement
  containerX: number;
  containerY: number;
}

export function PrimeOnKamino() {
  const chartRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(chartRef, { once: true, margin: "-80px" });

  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    index: 0,
    svgX: 0,
    containerX: 0,
    containerY: 0,
  });

  const yTicks = [0, 100, 200, 300, 400, 500, 600];

  function handleMouseMove(e: React.MouseEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    // Mouse position in pixel space relative to the rendered SVG element
    const mouseXPx = e.clientX - rect.left;
    const mouseYPx = e.clientY - rect.top;

    // Scale factor: SVG viewBox width vs rendered pixel width
    const scaleX = CHART_W / rect.width;
    // Mouse position in SVG coordinate space
    const mouseXSvg = mouseXPx * scaleX;

    // Find the nearest data point by x distance in SVG space
    let nearestIndex = 0;
    let minDist = Infinity;
    growthData.forEach((_, i) => {
      const dist = Math.abs(sx(i, growthData.length) - mouseXSvg);
      if (dist < minDist) {
        minDist = dist;
        nearestIndex = i;
      }
    });

    // SVG x coordinate of the nearest point
    const pointSvgX = sx(nearestIndex, growthData.length);
    // Convert back to pixel space relative to the SVG element for the vertical line
    const pointPxX = pointSvgX / scaleX;

    setTooltip({
      visible: true,
      index: nearestIndex,
      svgX: pointSvgX,
      containerX: pointPxX,
      containerY: mouseYPx,
    });
  }

  function handleMouseLeave() {
    setTooltip((prev) => ({ ...prev, visible: false }));
  }

  const hoveredPoint = tooltip.visible ? growthData[tooltip.index] : null;

  // Tooltip width estimate for clamping (px)
  const TOOLTIP_W = 160;
  const TOOLTIP_H = 72;

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-6">
          <ScrollReveal>
            <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.03em]">
              PRIME on Kamino
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="max-w-[400px]">
            <p className="text-[15px] leading-relaxed text-[#444]">
              PRIME is now the largest RWA actively deployed in DeFi, driven by
              Kamino&apos;s PRIME Market. Growth driven entirely by native yield demand —
              no liquidity mining, no token emissions, no artificial subsidies.
            </p>
          </ScrollReveal>
        </div>

        {/* Stats row */}
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] mb-16"
          staggerDelay={0.1}
        >
          {kaminoStats.map((stat) => (
            <StaggerItem key={stat.label} className="bg-[#C6F4FF] p-6">
              <div className="text-[clamp(1.8rem,3vw,2.5rem)] font-black tracking-[-0.02em] mb-2">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm text-[#444]">
                {stat.label}
                {stat.sublabel && (
                  <span className="text-[#888]"> {stat.sublabel}</span>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Growth chart */}
        <div ref={chartRef}>
          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-black" />
              <span className="text-sm text-[#444]">Deposits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#96DCFF]" />
              <span className="text-sm text-[#444]">Borrows</span>
            </div>
          </div>

          <div className="bg-[#F7F7F5] p-6 overflow-x-auto">
            {/* Wrapper with relative positioning to anchor the tooltip */}
            <div className="relative">
              <svg
                ref={svgRef}
                viewBox={`0 0 ${CHART_W} ${CHART_H}`}
                className="w-full h-auto cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Y-axis grid */}
                {yTicks.map((tick) => (
                  <g key={tick}>
                    <line
                      x1={PAD.left}
                      y1={sy(tick)}
                      x2={CHART_W - PAD.right}
                      y2={sy(tick)}
                      stroke="#E0E0E0"
                      strokeWidth={1}
                    />
                    <text
                      x={PAD.left - 10}
                      y={sy(tick) + 4}
                      textAnchor="end"
                      style={{ fontFamily: "var(--font-sans)", fontSize: "10px" }}
                      className="fill-[#999]"
                    >
                      {tick}M
                    </text>
                  </g>
                ))}

                {/* X-axis labels */}
                {growthData
                  .filter((_, i) => i % 5 === 0 || i === growthData.length - 1)
                  .map((d, idx) => {
                    const origIndex = growthData.indexOf(d);
                    return (
                      <text
                        key={idx}
                        x={sx(origIndex, growthData.length)}
                        y={CHART_H - 10}
                        textAnchor="middle"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "10px",
                        }}
                        className="fill-[#999]"
                      >
                        {d.date}
                      </text>
                    );
                  })}

                {/* Deposits area */}
                <motion.path
                  d={buildAreaPath(growthData, "deposits")}
                  fill="#000"
                  fillOpacity={0.85}
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
                />

                {/* Borrows area */}
                <motion.path
                  d={buildAreaPath(growthData, "borrows")}
                  fill="#96DCFF"
                  fillOpacity={0.7}
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
                  transition={{
                    duration: 2,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />

                {/* Hover overlay — vertical dashed line + dots */}
                {tooltip.visible && hoveredPoint && (
                  <g pointerEvents="none">
                    {/* Vertical dashed line */}
                    <line
                      x1={tooltip.svgX}
                      y1={PAD.top}
                      x2={tooltip.svgX}
                      y2={CHART_H - PAD.bottom}
                      stroke="#666"
                      strokeWidth={1}
                      strokeDasharray="4 3"
                    />

                    {/* Dot on deposits line */}
                    <circle
                      cx={tooltip.svgX}
                      cy={sy(hoveredPoint.deposits)}
                      r={5}
                      fill="#000"
                      stroke="#fff"
                      strokeWidth={2}
                    />

                    {/* Dot on borrows line */}
                    <circle
                      cx={tooltip.svgX}
                      cy={sy(hoveredPoint.borrows)}
                      r={5}
                      fill="#96DCFF"
                      stroke="#fff"
                      strokeWidth={2}
                    />
                  </g>
                )}
              </svg>

              {/* Tooltip — positioned in pixel space over the SVG wrapper */}
              {tooltip.visible && hoveredPoint && (() => {
                // Clamp so tooltip stays within the container
                // Get a safe left position: prefer right of cursor, flip left near edge
                const svgEl = svgRef.current;
                const containerWidth = svgEl ? svgEl.getBoundingClientRect().width : 0;
                const OFFSET = 12;
                let left = tooltip.containerX + OFFSET;
                if (left + TOOLTIP_W > containerWidth) {
                  left = tooltip.containerX - TOOLTIP_W - OFFSET;
                }
                // Keep tooltip vertically near the cursor but within the SVG height
                const svgEl2 = svgRef.current;
                const containerHeight = svgEl2 ? svgEl2.getBoundingClientRect().height : 0;
                let top = tooltip.containerY - TOOLTIP_H / 2;
                top = Math.max(0, Math.min(top, containerHeight - TOOLTIP_H));

                return (
                  <div
                    className="absolute pointer-events-none z-10 bg-black text-white text-xs rounded px-3 py-2 whitespace-nowrap shadow-lg"
                    style={{ left, top, width: TOOLTIP_W }}
                  >
                    <div className="font-semibold mb-1">{hoveredPoint.date}</div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-white opacity-80" />
                      <span className="text-[#ccc]">Deposits</span>
                      <span className="ml-auto font-medium">${hoveredPoint.deposits}M</span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#96DCFF]" />
                      <span className="text-[#ccc]">Borrows</span>
                      <span className="ml-auto font-medium">${hoveredPoint.borrows}M</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          <div className="flex justify-between mt-4 text-xs text-[#888]">
            <span>12 / 03 / 2025</span>
            <span>02 / 20 / 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
