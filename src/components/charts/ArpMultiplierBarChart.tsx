import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { ArpMultiplierRow } from "../../data/presentationData";
import { staggerDelay } from "../../utils/animation";
import { theme } from "../../theme";

const MAX_Y = 25;
const Y_TICKS = [0, 5, 10, 15, 20, 25];

export const ArpMultiplierBarChart: React.FC<{
  data: ArpMultiplierRow[];
  startFrame?: number;
  chartWidth?: number;
  chartHeight?: number;
}> = ({ data, startFrame = 18, chartWidth = 920, chartHeight = 340 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const padL = 52;
  const padT = 28;
  const padB = 56;
  const padR = 24;
  const plotW = chartWidth;
  const plotH = chartHeight - padT - padB;
  const svgW = padL + plotW + padR;
  const svgH = chartHeight;

  const scaleY = (v: number) => padT + plotH - (v / MAX_Y) * plotH;
  const baseY = padT + plotH;
  const barW = Math.min(88, (plotW - 40) / data.length - 24);
  const gap = (plotW - barW * data.length) / (data.length + 1);

  return (
    <svg width="100%" height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ maxWidth: svgW, overflow: "visible" }}>
      {Y_TICKS.map((tick) => {
        const y = scaleY(tick);
        return (
          <g key={tick}>
            <line x1={padL} y1={y} x2={padL + plotW} y2={y} stroke={theme.chartGrid} strokeWidth={1} />
            <text x={padL - 10} y={y + 5} textAnchor="end" fill={theme.chartLabel} fontSize={12} fontWeight={500}>
              {tick}x
            </text>
          </g>
        );
      })}

      {data.map((row, i) => {
        const delay = staggerDelay(i, startFrame, 6);
        const progress = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 75 } });
        const x = padL + gap + i * (barW + gap);
        const barH = interpolate(progress, [0, 1], [0, (row.multiplier / MAX_Y) * plotH]);
        const labelOpacity =
          progress > 0.7
            ? interpolate(progress, [0.7, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
            : 0;

        return (
          <g key={row.label}>
            <text
              x={x + barW / 2}
              y={baseY - barH - 10}
              textAnchor="middle"
              fill={theme.text}
              fontSize={13}
              fontWeight={700}
              opacity={labelOpacity}
            >
              {row.valueLabel}
            </text>
            <rect
              x={x}
              y={baseY - barH}
              width={barW}
              height={Math.max(barH, 0)}
              fill={row.color}
              rx={6}
              ry={6}
            />
            <text
              x={x + barW / 2}
              y={baseY + 22}
              textAnchor="middle"
              fill={theme.chartLabel}
              fontSize={row.label.length > 16 ? 11 : 12}
              fontWeight={600}
            >
              {row.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
