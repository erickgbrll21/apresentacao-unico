import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { staggerDelay } from "../../utils/animation";
import { theme } from "../../theme";

export type GroupedBarItem = {
  region: string;
  competitor: number;
  open: number;
};

const topRoundedBarPath = (x: number, y: number, w: number, h: number, r: number) => {
  if (h <= 0) return "";
  const radius = Math.min(r, w / 2, h);
  return `M ${x} ${y + h} L ${x} ${y + radius} Q ${x} ${y} ${x + radius} ${y} L ${x + w - radius} ${y} Q ${x + w} ${y} ${x + w} ${y + radius} L ${x + w} ${y + h} Z`;
};

export const GroupedBarChart: React.FC<{
  data: GroupedBarItem[];
  startFrame?: number;
  chartWidth?: number;
  chartHeight?: number;
  maxY?: number;
  yTicks?: number[];
  competitorColor?: string;
  openColor?: string;
}> = ({
  data,
  startFrame = 20,
  chartWidth = 520,
  chartHeight = 280,
  maxY = 100,
  yTicks,
  competitorColor = "#C0715B",
  openColor = "#6BAA7D",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ticks = yTicks ?? (maxY === 115 ? [0, 20, 40, 60, 80, 100, 115] : [0, 20, 40, 60, 80, 100]);
  const padL = 52;
  const padB = 40;
  const padT = 20;
  const padR = 16;
  const plotW = chartWidth;
  const plotH = chartHeight - padB - padT;
  const svgW = padL + plotW + padR;
  const svgH = chartHeight;
  const groupW = plotW / data.length;
  const barW = Math.min(34, groupW * 0.3);
  const innerGap = Math.max(6, (groupW - barW * 2) / 3);

  const scaleY = (v: number) => padT + plotH - (v / maxY) * plotH;
  const baseY = padT + plotH;

  return (
    <svg
      width="100%"
      height={svgH}
      viewBox={`0 0 ${svgW} ${svgH}`}
      preserveAspectRatio="xMidYMid meet"
      style={{ maxWidth: svgW, display: "block", overflow: "visible" }}
    >
      {ticks.map((tick) => (
        <g key={tick}>
          <line
            x1={padL}
            y1={scaleY(tick)}
            x2={padL + plotW}
            y2={scaleY(tick)}
            stroke={theme.chartGrid}
            strokeWidth={1}
          />
          <text x={padL - 10} y={scaleY(tick) + 4} textAnchor="end" fill={theme.chartLabel} fontSize={12} fontWeight={500}>
            {tick}%
          </text>
        </g>
      ))}

      {data.map((row, i) => {
        const delay = staggerDelay(i, startFrame, 6);
        const progress = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 75 } });
        const gx = padL + i * groupW + innerGap;
        const compH = interpolate(progress, [0, 1], [0, (row.competitor / maxY) * plotH]);
        const openH = interpolate(progress, [0, 1], [0, (row.open / maxY) * plotH]);
        const openX = gx + barW + innerGap;
        const groupCenterX = gx + barW + innerGap / 2;
        const showLabels = progress > 0.85;

        return (
          <g key={row.region}>
            <path d={topRoundedBarPath(gx, baseY - compH, barW, compH, 4)} fill={competitorColor} />
            <path d={topRoundedBarPath(openX, baseY - openH, barW, openH, 4)} fill={openColor} />
            {showLabels && (
              <>
                <text
                  x={gx + barW / 2}
                  y={baseY - compH - 8}
                  textAnchor="middle"
                  fill="#0F172A"
                  fontSize={13}
                  fontWeight={600}
                >
                  {row.competitor}%
                </text>
                <text
                  x={openX + barW / 2}
                  y={baseY - openH - 8}
                  textAnchor="middle"
                  fill="#0F172A"
                  fontSize={13}
                  fontWeight={600}
                >
                  {row.open}%
                </text>
              </>
            )}
            <text
              x={groupCenterX}
              y={baseY + 22}
              textAnchor="middle"
              fill={theme.chartLabel}
              fontSize={12}
              fontWeight={500}
            >
              {row.region}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
