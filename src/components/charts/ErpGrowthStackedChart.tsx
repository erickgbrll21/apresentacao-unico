import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../../theme";

export type ErpGrowthRow = {
  year: string;
  municipal: number;
  estadual: number;
  federal: number;
  totalLabel?: string;
};

const COLORS = {
  municipal: "#7B61FF",
  estadual: "#27AE60",
  federal: "#F2994A",
} as const;

const MAX_Y = 3000;
const Y_TICKS = [0, 500, 1000, 1500, 2000, 2500, 3000];

export const ERP_GROWTH_LEGEND = [
  { color: COLORS.municipal, label: "Municipal" },
  { color: COLORS.estadual, label: "Estadual" },
  { color: COLORS.federal, label: "Federal" },
] as const;

type StackSegment = {
  h: number;
  color: string;
  value: number;
  isTop: boolean;
};

export const ErpGrowthStackedChart: React.FC<{
  data: ErpGrowthRow[];
  startFrame?: number;
  chartWidth?: number;
  chartHeight?: number;
}> = ({ data, startFrame = 18, chartWidth = 1180, chartHeight = 340 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const padL = 72;
  const padB = 44;
  const padT = 36;
  const padR = 24;
  const plotH = chartHeight - padT;
  const svgW = padL + chartWidth + padR;
  const svgH = chartHeight + padB;

  const scaleY = (v: number) => padT + plotH - (v / MAX_Y) * plotH;
  const baseY = scaleY(0);

  const barW = Math.min(88, (chartWidth - 80) / data.length - 32);
  const gap = (chartWidth - barW * data.length) / (data.length + 1);

  return (
    <svg width="100%" height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ maxWidth: svgW, overflow: "visible" }}>
      {Y_TICKS.map((tick) => {
        const y = scaleY(tick);
        return (
          <g key={tick}>
            <line x1={padL} y1={y} x2={padL + chartWidth} y2={y} stroke={theme.chartGrid} strokeWidth={1} />
            <text x={padL - 10} y={y + 5} textAnchor="end" fill={theme.chartLabel} fontSize={13} fontWeight={500}>
              R${tick === 0 ? "0" : tick}M
            </text>
          </g>
        );
      })}

      {data.map((row, i) => {
        const delay = startFrame + i * 8;
        const progress = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 70 } });
        const total = row.municipal + row.estadual + row.federal;
        const x = padL + gap + i * (barW + gap);
        const fullH = interpolate(progress, [0, 1], [0, (total / MAX_Y) * plotH]);

        const fH = (row.federal / total) * fullH;
        const eH = (row.estadual / total) * fullH;
        const mH = (row.municipal / total) * fullH;

        // De cima para baixo: Federal (laranja) → Estadual (verde) → Municipal (roxo, base)
        const stacks: StackSegment[] = [
          { h: fH, color: COLORS.federal, value: row.federal, isTop: true },
          { h: eH, color: COLORS.estadual, value: row.estadual, isTop: false },
          { h: mH, color: COLORS.municipal, value: row.municipal, isTop: false },
        ];

        let yCursor = baseY - fullH;
        const topY = baseY - fullH;
        const totalLabel = row.totalLabel ?? `R$${total}M`;
        const labelOpacity =
          progress > 0.75
            ? interpolate(progress, [0.75, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
            : 0;

        return (
          <g key={row.year}>
            {stacks.map((seg, si) => {
              const segH = Math.max(seg.h, 0);
              const y = yCursor;
              yCursor += segH;
              return (
                <g key={si}>
                  <rect
                    x={x}
                    y={y}
                    width={barW}
                    height={segH}
                    fill={seg.color}
                    rx={seg.isTop ? 6 : 0}
                    ry={seg.isTop ? 6 : 0}
                  />
                  {segH >= 26 && labelOpacity > 0 && (
                    <text
                      x={x + barW / 2}
                      y={y + segH / 2 + 5}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize={13}
                      fontWeight={700}
                      opacity={labelOpacity}
                    >
                      {seg.value}
                    </text>
                  )}
                </g>
              );
            })}

            {labelOpacity > 0 && (
              <text
                x={x + barW / 2}
                y={topY - 10}
                textAnchor="middle"
                fill={theme.text}
                fontSize={14}
                fontWeight={800}
                opacity={labelOpacity}
              >
                {totalLabel}
              </text>
            )}

            <text
              x={x + barW / 2}
              y={baseY + 24}
              textAnchor="middle"
              fill={theme.chartLabel}
              fontSize={row.year.length > 10 ? 11 : 13}
              fontWeight={600}
            >
              {row.year}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
