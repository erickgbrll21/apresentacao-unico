import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { PresencaSegmentoRow } from "../../data/presentationData";
import { staggerDelay } from "../../utils/animation";
import { theme } from "../../theme";

const SERIES = [
  { key: "ibegesp" as const, color: "#EF4444", label: "IBEGESP" },
  { key: "uolEdtech" as const, color: "#F59E0B", label: "UOL Edtech" },
  { key: "alura" as const, color: "#3B82F6", label: "Alura" },
  { key: "unicoPotencial" as const, color: "#10B981", label: "Unico Skill pot." },
];

export const PresencaSegmentoChart: React.FC<{
  data: PresencaSegmentoRow[];
  startFrame?: number;
  chartWidth?: number;
  chartHeight?: number;
  valueFontSize?: number;
  axisFontSize?: number;
  maxY?: number;
}> = ({ data, startFrame = 22, chartWidth = 520, chartHeight = 300, valueFontSize = 9, axisFontSize = 10, maxY = 100 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const padL = 48;
  const padB = 44;
  const padT = 16;
  const plotW = chartWidth;
  const plotH = chartHeight - padB - padT;
  const svgW = padL + plotW + 20;
  const svgH = chartHeight;
  const groupW = plotW / data.length;
  const barW = Math.min(chartHeight > 320 ? 18 : 14, groupW * 0.2);
  const gap = (groupW - barW * 4) / 5;

  const scaleY = (v: number) => padT + plotH - (v / maxY) * plotH;

  return (
    <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ overflow: "visible" }}>
      {(maxY === 115 ? [0, 23, 46, 69, 92, 115] : [0, 20, 40, 60, 80, 100]).map((tick) => (
        <g key={tick}>
          <line x1={padL} y1={scaleY(tick)} x2={padL + plotW} y2={scaleY(tick)} stroke={theme.chartGrid} strokeWidth={1} />
          <text x={padL - 8} y={scaleY(tick) + 4} textAnchor="end" fill={theme.chartLabel} fontSize={axisFontSize + 1} fontWeight={500}>
            {tick}%
          </text>
        </g>
      ))}

      {data.map((row, i) => {
        const delay = staggerDelay(i, startFrame, 5);
        const progress = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 75 } });
        const gx = padL + i * groupW + gap;
        const baseY = padT + plotH;

        return (
          <g key={row.segment}>
            {SERIES.map((s, si) => {
              const val = row[s.key];
              const h = interpolate(progress, [0, 1], [0, (val / maxY) * plotH]);
              const x = gx + si * (barW + gap);
              return (
                <g key={s.key}>
                  <rect x={x} y={baseY - h} width={barW} height={h} fill={s.color} rx={3} />
                  {progress > 0.85 && val > 0 && (
                    <text x={x + barW / 2} y={baseY - h - 4} textAnchor="middle" fill={theme.text} fontSize={valueFontSize} fontWeight={700}>
                      {val}%
                    </text>
                  )}
                </g>
              );
            })}
            <text x={gx + (barW * 4 + gap * 3) / 2} y={baseY + 18} textAnchor="middle" fill={theme.chartLabel} fontSize={axisFontSize} fontWeight={600}>
              {row.segment}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export const PRESENCA_LEGEND = SERIES;
