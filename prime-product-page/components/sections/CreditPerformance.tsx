"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { vintageData, vintageColors } from "@/data/vintage-data";

const CHART_WIDTH = 800;
const CHART_HEIGHT = 340;
const PADDING = { top: 20, right: 30, bottom: 40, left: 55 };

const innerWidth = CHART_WIDTH - PADDING.left - PADDING.right;
const innerHeight = CHART_HEIGHT - PADDING.top - PADDING.bottom;

const maxMonth = 83;
const maxRate = 2.0;

function scaleX(month: number): number {
  return PADDING.left + (month / maxMonth) * innerWidth;
}

function scaleY(rate: number): number {
  return PADDING.top + (1 - rate / maxRate) * innerHeight;
}

function buildPath(data: { month: number; rate: number }[]): string {
  return data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${scaleX(d.month)} ${scaleY(d.rate)}`)
    .join(" ");
}

const years = Object.keys(vintageData);

export function CreditPerformance() {
  const chartRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(chartRef, { once: true, margin: "-100px" });
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    year: string;
    rate: number;
    month: number;
  } | null>(null);

  // Y-axis grid lines
  const yTicks = [0, 0.5, 1.0, 1.5, 2.0];
  // X-axis ticks (every 10 months)
  const xTicks = [0, 10, 20, 30, 40, 50, 60, 70, 80];

  return (
    <section className="py-32 bg-[#F7F7F5]">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Text */}
          <div className="lg:w-[35%]">
            <ScrollReveal>
              <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-[0.95] tracking-[-0.03em] mb-4">
                Credit
                <br />
                Performance
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-sm text-[#555] mb-2 font-medium">
                Figure HELOC MoB Performance
              </p>
              <p className="text-sm text-[#888] mb-8">
                (180+DQ by Yearly Vintage)
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-6 mb-6">
                <h4 className="text-sm font-bold mb-3">
                  Historical Loss Performance
                </h4>
                <p className="text-sm text-[#444] leading-relaxed mb-3">
                  Cumulative severe delinquencies (180+ days past due) have peaked{" "}
                  <strong>below 1.75%</strong> across every origination vintage
                  since 2019, with recent cohorts tracking at or below historical
                  levels.
                </p>
                <p className="text-sm text-[#444] leading-relaxed">
                  Realized cumulative gross loss across entirety of
                  Figure&apos;s originations: <strong>&lt;1.25%</strong>
                </p>
              </div>
            </ScrollReveal>

            {/* Legend */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                {years.map((year) => (
                  <button
                    key={year}
                    className={`flex items-center gap-2 text-sm cursor-pointer transition-opacity ${
                      hoveredYear && hoveredYear !== year ? "opacity-30" : "opacity-100"
                    }`}
                    onMouseEnter={() => setHoveredYear(year)}
                    onMouseLeave={() => setHoveredYear(null)}
                  >
                    <div
                      className="w-4 h-1 rounded-full"
                      style={{ backgroundColor: vintageColors[year] }}
                    />
                    <span className="font-medium">{year}</span>
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Chart */}
          <div className="flex-1" ref={chartRef}>
            <div className="bg-white p-6 overflow-x-auto">
              <svg
                viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                className="w-full h-auto"
                onMouseLeave={() => setTooltip(null)}
              >
                {/* Grid lines */}
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
                      className="text-[11px] fill-[#999]"
                      style={{ fontFamily: "var(--font-sans)", fontSize: "11px" }}
                    >
                      {tick}%
                    </text>
                  </g>
                ))}

                {/* X-axis labels */}
                {xTicks.map((tick) => (
                  <text
                    key={tick}
                    x={scaleX(tick)}
                    y={CHART_HEIGHT - 10}
                    textAnchor="middle"
                    className="text-[10px] fill-[#999]"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "10px" }}
                  >
                    {tick}
                  </text>
                ))}

                {/* 1.75% annotation line */}
                <line
                  x1={PADDING.left}
                  y1={scaleY(1.75)}
                  x2={CHART_WIDTH - PADDING.right}
                  y2={scaleY(1.75)}
                  stroke="#EF4444"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                  opacity={0.4}
                />
                <text
                  x={CHART_WIDTH - PADDING.right + 5}
                  y={scaleY(1.75) + 4}
                  className="text-[10px] fill-[#EF4444] font-bold"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "10px" }}
                >
                  1.75%
                </text>

                {/* Vintage lines */}
                {years.map((year, yearIndex) => {
                  const data = vintageData[year];
                  const path = buildPath(data);
                  const isHovered = hoveredYear === year;
                  const isMuted = hoveredYear !== null && !isHovered;

                  return (
                    <g key={year}>
                      <motion.path
                        d={path}
                        fill="none"
                        stroke={vintageColors[year]}
                        strokeWidth={isHovered ? 3 : 2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={
                          isInView
                            ? {
                                pathLength: 1,
                                opacity: isMuted ? 0.15 : 1,
                              }
                            : {}
                        }
                        transition={{
                          pathLength: {
                            duration: 1.5,
                            delay: yearIndex * 0.2,
                            ease: [0.25, 0.1, 0.25, 1],
                          },
                          opacity: { duration: 0.3 },
                        }}
                        onMouseEnter={() => setHoveredYear(year)}
                        onMouseLeave={() => setHoveredYear(null)}
                        className="cursor-pointer"
                      />
                      {/* Invisible wider hitbox for hover */}
                      <path
                        d={path}
                        fill="none"
                        stroke="transparent"
                        strokeWidth={12}
                        onMouseEnter={() => setHoveredYear(year)}
                        onMouseLeave={() => setHoveredYear(null)}
                        onMouseMove={(e) => {
                          const svg = e.currentTarget.closest("svg");
                          if (!svg) return;
                          const pt = svg.createSVGPoint();
                          pt.x = e.clientX;
                          pt.y = e.clientY;
                          const svgPt = pt.matrixTransform(
                            svg.getScreenCTM()?.inverse()
                          );
                          // Find closest data point
                          const month = Math.round(
                            ((svgPt.x - PADDING.left) / innerWidth) * maxMonth
                          );
                          const closest = data.reduce((prev, curr) =>
                            Math.abs(curr.month - month) <
                            Math.abs(prev.month - month)
                              ? curr
                              : prev
                          );
                          setTooltip({
                            x: scaleX(closest.month),
                            y: scaleY(closest.rate),
                            year,
                            rate: closest.rate,
                            month: closest.month,
                          });
                        }}
                        className="cursor-pointer"
                      />
                    </g>
                  );
                })}

                {/* Tooltip */}
                {tooltip && (
                  <g>
                    <circle
                      cx={tooltip.x}
                      cy={tooltip.y}
                      r={4}
                      fill={vintageColors[tooltip.year]}
                      stroke="white"
                      strokeWidth={2}
                    />
                    <foreignObject
                      x={tooltip.x + 10}
                      y={tooltip.y - 35}
                      width={120}
                      height={40}
                    >
                      <div className="bg-black text-white text-xs px-2 py-1 rounded">
                        <div className="font-bold">{tooltip.year}</div>
                        <div>
                          Month {tooltip.month}: {tooltip.rate.toFixed(2)}%
                        </div>
                      </div>
                    </foreignObject>
                  </g>
                )}
              </svg>
            </div>

            <div className="mt-4 text-xs text-[#888]">
              Securitization exit consistently receives AAA ratings from S&P,
              Moody&apos;s, DBRS Morningstar, and KBRA.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
