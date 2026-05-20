import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { InvestmentPhaseRow } from "../../data/presentationData";
import { staggerDelay } from "../../utils/animation";
import { theme } from "../../theme";

const SEGMENTS = [
  { key: "produto" as const, color: "#EF4444" },
  { key: "timeGov" as const, color: "#3B82F6" },
  { key: "parceiros" as const, color: "#10B981" },
  { key: "marketing" as const, color: "#F59E0B" },
];

const MAX_Y = 4.5;
const Y_TICKS = [0, 1.5, 3, 4.5];

const totalOf = (row: InvestmentPhaseRow) =>
  row.produto + row.timeGov + row.parceiros + row.marketing;

export const InvestmentPhaseStackedChart: React.FC<{
  data: InvestmentPhaseRow[];
  startFrame?: number;
  chartWidth?: number;
  chartHeight?: number;
}> = ({ data, startFrame = 18, chartWidth = 520, chartHeight = 300 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const padL = 54;
  const padT = 22;
  const padB = 36;
  const plotH = chartHeight - padT - padB;
  const svgW = padL + chartWidth + 16;
  const svgH = chartHeight;
  const baseY = padT + plotH;

  const scaleY = (v: number) => padT + plotH - (v / MAX_Y) * plotH;
  const barW = Math.min(56, (chartWidth - 32) / data.length - 14);
  const gap = (chartWidth - barW * data.length) / (data.length + 1);

  return (
    <svg width="100%" height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ maxWidth: svgW, overflow: "visible" }}>
      {Y_TICKS.map((tick) => {
        const y = scaleY(tick);
        return (
          <g key={tick}>
            <line x1={padL} y1={y} x2={padL + chartWidth} y2={y} stroke={theme.chartGrid} strokeWidth={1} />
            <text x={padL - 8} y={y + 4} textAnchor="end" fill={theme.chartLabel} fontSize={12} fontWeight={500}>
              R${tick % 1 === 0 ? tick : tick.toFixed(1)}M
            </text>
          </g>
        );
      })}

      {data.map((row, i) => {
        const delay = staggerDelay(i, startFrame, 7);
        const progress = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 72 } });
        const total = totalOf(row);
        const x = padL + gap + i * (barW + gap);
        const fullH = interpolate(progress, [0, 1], [0, (total / MAX_Y) * plotH]);
        let stackY = baseY;
        const labelOpacity =
          progress > 0.75
            ? interpolate(progress, [0.75, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
            : 0;

        const heights = SEGMENTS.map((seg) => (row[seg.key] / total) * fullH);

        return (
          <g key={row.quarter}>
            <text
              x={x + barW / 2}
              y={scaleY(total) - 6}
              textAnchor="middle"
              fill={theme.text}
              fontSize={12}
              fontWeight={700}
              opacity={labelOpacity}
            >
              R${total.toFixed(1)}M
            </text>
            {SEGMENTS.map((seg, si) => {
              const h = heights[si];
              stackY -= h;
              const isTop = si === SEGMENTS.length - 1;
              return (
                <rect
                  key={seg.key}
                  x={x}
                  y={stackY}
                  width={barW}
                  height={Math.max(h, 0)}
                  fill={seg.color}
                  rx={isTop ? 4 : 0}
                />
              );
            })}
            <text
              x={x + barW / 2}
              y={baseY + 20}
              textAnchor="middle"
              fill={theme.chartLabel}
              fontSize={11}
              fontWeight={600}
            >
              {row.quarter}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
