import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../../theme";

type Row = { year: string; abast: number; gestao: number; telem: number; totalLabel?: string };

const COLORS = { abast: "#3B82F6", gestao: "#059669", telem: "#F59E0B" };

const buildTicks = (maxY: number, step = 200) => {
  const ticks: number[] = [];
  for (let v = 0; v <= maxY; v += step) ticks.push(v);
  return ticks;
};

export const StackedBarChart: React.FC<{
  data: Row[];
  startFrame?: number;
  chartWidth?: number;
  chartHeight?: number;
  maxY?: number;
}> = ({ data, startFrame = 20, chartWidth = 540, chartHeight = 270, maxY = 1200 }) => {
  const Y_TICKS = buildTicks(maxY);
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const chartH = chartHeight;
  const chartW = chartWidth;
  const padL = 62;
  const padB = 32;
  const svgW = padL + chartW;
  const svgH = chartH + padB;
  const barW = 64;

  const scaleY = (v: number) => chartH - (v / maxY) * chartH;
  const formatTick = (tick: number) => `R$${tick}M`;

  const gap = (chartW - barW * data.length) / (data.length + 1);
  const barCenters = data.map((_, i) => padL + gap + i * (barW + gap) + barW / 2);

  return (
    <div
      style={{
        width: svgW,
        height: svgH,
        margin: "0 auto",
      }}
    >
      <svg width={svgW} height={svgH} style={{ overflow: "visible" }}>
        {/* Grid horizontal */}
        {Y_TICKS.map((tick) => {
          const y = scaleY(tick);
          return (
            <g key={`h-${tick}`}>
              <line x1={padL} y1={y} x2={svgW} y2={y} stroke="rgba(15, 23, 42, 0.1)" strokeWidth={1} />
              <text
                x={padL - 8}
                y={y + 4}
                textAnchor="end"
                fill={theme.chartLabel}
                fontSize={12}
                fontWeight={500}
              >
                {formatTick(tick)}
              </text>
            </g>
          );
        })}

        {/* Grid vertical */}
        {barCenters.map((cx, i) => (
          <line
            key={`v-${i}`}
            x1={cx}
            y1={0}
            x2={cx}
            y2={chartH}
            stroke="rgba(15, 23, 42, 0.08)"
            strokeWidth={1}
          />
        ))}
        <line x1={svgW} y1={0} x2={svgW} y2={chartH} stroke="rgba(15, 23, 42, 0.08)" strokeWidth={1} />

        {data.map((row, i) => {
          const delay = startFrame + i * 8;
          const progress = spring({
            frame: frame - delay,
            fps,
            config: { damping: 16, stiffness: 70 },
          });
          const total = row.abast + row.gestao + row.telem;
          const x = padL + gap + i * (barW + gap);
          const fullH = interpolate(progress, [0, 1], [0, (total / maxY) * chartH]);
          const barTopY = chartH - fullH;

          const segmentDefs = [
            { h: (row.abast / total) * fullH, color: COLORS.abast, value: row.abast },
            { h: (row.gestao / total) * fullH, color: COLORS.gestao, value: row.gestao },
            { h: (row.telem / total) * fullH, color: COLORS.telem, value: row.telem },
          ];

          let stackY = chartH;
          const totalLabelOpacity = interpolate(progress, [0.85, 1], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <g key={row.year}>
              {row.totalLabel && (
                <text
                  x={x + barW / 2}
                  y={barTopY - 8}
                  textAnchor="middle"
                  fill={theme.text}
                  fontSize={13}
                  fontWeight={700}
                  style={{ opacity: totalLabelOpacity }}
                >
                  {row.totalLabel}
                </text>
              )}

              {segmentDefs.map((seg, si) => {
                const segH = Math.max(seg.h, 0);
                stackY -= segH;
                const isTop = si === segmentDefs.length - 1;
                const showValue = segH >= 20 && seg.value > 0;
                const labelY = stackY + segH / 2 + 5;

                return (
                  <g key={si}>
                    <rect
                      x={x}
                      y={stackY}
                      width={barW}
                      height={segH}
                      fill={seg.color}
                      rx={isTop ? 6 : 0}
                      ry={isTop ? 6 : 0}
                    />
                    {showValue && (
                      <text
                        x={x + barW / 2}
                        y={labelY}
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize={13}
                        fontWeight={700}
                        style={{
                          opacity: interpolate(progress, [0.5, 1], [0, 1], {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp",
                          }),
                        }}
                      >
                        {seg.value}
                      </text>
                    )}
                  </g>
                );
              })}

              <text
                x={x + barW / 2}
                y={chartH + 22}
                textAnchor="middle"
                fill={theme.chartLabel}
                fontSize={13}
                fontWeight={500}
              >
                {row.year}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
