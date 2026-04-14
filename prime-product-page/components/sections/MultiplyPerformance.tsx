"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { multiplyPerformanceData } from "@/data/growth-data";

const CHART_WIDTH = 800;
const CHART_HEIGHT = 380;
const PADDING = { top: 20, right: 30, bottom: 50, left: 55 };

const innerWidth = CHART_WIDTH - PADDING.left - PADDING.right;
const innerHeight = CHART_HEIGHT - PADDING.top - PADDING.bottom;

const maxY = 5;
const dataLength = multiplyPerformanceData.length;

function scaleX(index: number): number {
  return PADDING.left + (index / (dataLength - 1)) * innerWidth;
}

function scaleY(value: number): number {
  return PADDING.top + (1 - value / maxY) * innerHeight;
}

type LineKey = "prime1x" | "multiply3x" | "multiply5x" | "multiply8x";

interface LineConfig {
  key: LineKey;
  label: string;
  apy: string;
  color: string;
}

const lines: LineConfig[] = [
  { key: "prime1x", label: "PRIME 1x", apy: "8% APY", color: "#2563EB" },
  { key: "multiply3x", label: "Multiply 3x", apy: "12.45%", color: "#EF4444" },
  { key: "multiply5x", label: "Multiply 5x", apy: "16.64%", color: "#22C55E" },
  { key: "multiply8x", label: "Multiply 8x", apy: "23.14%", color: "#F97316" },
];

function buildPath(key: LineKey): string {
  return multiplyPerformanceData
    .map((d, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)} ${scaleY(d[key])}`)
    .join(" ");
}

const yTicks = [0, 1, 2, 3, 4, 5];

interface TooltipState {
  visible: boolean;
  index: number;
  cursorX: number;
  cursorY: number;
}

export function MultiplyPerformance() {
  const chartRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(chartRef, { once: true, margin: "-100px" });

  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    index: 0,
    cursorX: 0,
    cursorY: 0,
  });

  function handleMouseMove(e: React.MouseEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    // Map client coords into viewBox coords
    const scaleRatio = CHART_WIDTH / rect.width;
    const mouseXInViewBox = (e.clientX - rect.left) * scaleRatio;

    // Find the nearest data index by x position
    let nearestIndex = 0;
    let minDist = Infinity;
    for (let i = 0; i < dataLength; i++) {
      const dist = Math.abs(scaleX(i) - mouseXInViewBox);
      if (dist < minDist) {
        minDist = dist;
        nearestIndex = i;
      }
    }

    setTooltip({
      visible: true,
      index: nearestIndex,
      cursorX: e.clientX,
      cursorY: e.clientY,
    });
  }

  function handleMouseLeave() {
    setTooltip((prev) => ({ ...prev, visible: false }));
  }

  const hoveredData = multiplyPerformanceData[tooltip.index];

  return (
    <section className="py-32 bg-[#F7F7F5]">
      <div className="max-w-[1400px] mx-auto px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
          <ScrollReveal>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-[0.95] tracking-[-0.03em]">
              PRIME Multiply
              <br />
              Performance
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="max-w-[440px]">
            <p className="text-base font-bold mb-2">
              Cumulative Growth: PRIME vs Leveraged Multiply
            </p>
            <p className="text-[15px] leading-relaxed text-[#444]">
              Growth of position at different leverage levels, based on real
              average APYs.
            </p>
          </ScrollReveal>
        </div>

        {/* Chart */}
        <div ref={chartRef} className="relative">
          <ScrollReveal delay={0.15}>
            <div className="bg-[#F7F7F5] p-8 overflow-x-auto">
              <svg
                ref={svgRef}
                viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                className="w-full h-auto cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Y-axis grid lines and labels */}
                {yTicks.map((tick) => (
                  <g key={tick}>
                    <line
                      x1={PADDING.left}
                      y1={scaleY(tick)}
                      x2={CHART_WIDTH - PADDING.right}
                      y2={scaleY(tick)}
                      stroke="#E5E5E5"
                      strokeWidth={1}
                    />
                    <text
                      x={PADDING.left - 10}
                      y={scaleY(tick) + 4}
                      textAnchor="end"
                      fill="#999"
                      style={{ fontFamily: "var(--font-sans)", fontSize: "11px" }}
                    >
                      {tick}%
                    </text>
                  </g>
                ))}

                {/* X-axis labels */}
                {multiplyPerformanceData.map((d, i) => {
                  if (i % 2 !== 0 && i !== dataLength - 1) return null;
                  return (
                    <text
                      key={d.date}
                      x={scaleX(i)}
                      y={CHART_HEIGHT - 12}
                      textAnchor="middle"
                      fill="#999"
                      style={{ fontFamily: "var(--font-sans)", fontSize: "10px" }}
                    >
                      {d.date}
                    </text>
                  );
                })}

                {/* Data lines */}
                {lines.map((line, lineIndex) => {
                  const path = buildPath(line.key);
                  return (
                    <motion.path
                      key={line.key}
                      d={path}
                      fill="none"
                      stroke={line.color}
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={
                        isInView
                          ? { pathLength: 1, opacity: 1 }
                          : {}
                      }
                      transition={{
                        pathLength: {
                          duration: 1.8,
                          delay: lineIndex * 0.3,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                        opacity: {
                          duration: 0.3,
                          delay: lineIndex * 0.3,
                        },
                      }}
                    />
                  );
                })}

                {/* End-point labels */}
                {lines.map((line, lineIndex) => {
                  const lastPoint = multiplyPerformanceData[dataLength - 1];
                  const value = lastPoint[line.key];
                  return (
                    <motion.text
                      key={`label-${line.key}`}
                      x={scaleX(dataLength - 1) + 8}
                      y={scaleY(value) + 4}
                      fill={line.color}
                      style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 700 }}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: lineIndex * 0.3 + 1.8,
                      }}
                    >
                      {value.toFixed(2)}%
                    </motion.text>
                  );
                })}

                {/* Hover overlay: vertical dashed line + dots */}
                {tooltip.visible && hoveredData && (
                  <g>
                    {/* Vertical dashed line */}
                    <line
                      x1={scaleX(tooltip.index)}
                      y1={PADDING.top}
                      x2={scaleX(tooltip.index)}
                      y2={CHART_HEIGHT - PADDING.bottom}
                      stroke="#999"
                      strokeWidth={1}
                      strokeDasharray="4 3"
                      pointerEvents="none"
                    />
                    {/* Dots on each line */}
                    {lines.map((line) => (
                      <circle
                        key={`dot-${line.key}`}
                        cx={scaleX(tooltip.index)}
                        cy={scaleY(hoveredData[line.key])}
                        r={4}
                        fill={line.color}
                        stroke="#fff"
                        strokeWidth={1.5}
                        pointerEvents="none"
                      />
                    ))}
                  </g>
                )}
              </svg>
            </div>
          </ScrollReveal>

          {/* Tooltip — rendered in DOM outside SVG, positioned by cursor coords */}
          {tooltip.visible && hoveredData && (
            <div
              className="fixed z-50 pointer-events-none"
              style={{
                left: tooltip.cursorX + 14,
                top: tooltip.cursorY - 10,
              }}
            >
              <div className="bg-black text-white px-3 py-2 text-xs rounded shadow-lg whitespace-nowrap">
                <p className="font-semibold mb-1">{hoveredData.date}</p>
                {lines.map((line) => (
                  <div key={line.key} className="flex items-center gap-2">
                    <span
                      className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: line.color }}
                    />
                    <span className="text-white/70">{line.label}:</span>
                    <span className="font-medium">
                      {hoveredData[line.key].toFixed(2)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Legend */}
          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap gap-8 mt-8">
              {lines.map((line) => (
                <div key={line.key} className="flex items-center gap-3">
                  <div
                    className="w-5 h-[3px] rounded-full"
                    style={{ backgroundColor: line.color }}
                  />
                  <span className="text-sm font-medium text-[#222]">
                    {line.label}
                  </span>
                  <span className="text-sm text-[#888]">({line.apy})</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Disclaimer */}
          <ScrollReveal delay={0.3}>
            <p className="mt-6 text-xs text-[#888]">
              * All values are average net APYs after borrow costs. Past
              performance does not guarantee future results.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
