import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { staggerDelay } from "../../utils/animation";
import { theme } from "../../theme";

export type HorizontalBarItem = {
  label: string;
  value: number;
  color: string;
  /** Sem brilho neon (ex.: barra cinza "Outros") */
  noGlow?: boolean;
  /** Rótulo ao final da barra (ex.: "1420 pregões") */
  valueLabel?: string;
};

const buildTicks = (max: number, step: number) => {
  const ticks: number[] = [];
  for (let v = 0; v <= max; v += step) ticks.push(v);
  return ticks;
};

const barPath = (x: number, y: number, w: number, h: number, r: number) => {
  if (w <= 0) return "";
  const rad = Math.min(r, w / 2, h / 2);
  return [
    `M ${x} ${y}`,
    `L ${x + w - rad} ${y}`,
    `Q ${x + w} ${y} ${x + w} ${y + rad}`,
    `L ${x + w} ${y + h - rad}`,
    `Q ${x + w} ${y + h} ${x + w - rad} ${y + h}`,
    `L ${x} ${y + h}`,
    "Z",
  ].join(" ");
};

export const HorizontalBarChart: React.FC<{
  data: HorizontalBarItem[];
  maxValue: number;
  xStep?: number;
  xTicks?: number[];
  startFrame?: number;
  chartWidth?: number;
  chartHeight?: number;
  labelWidth?: number;
  roundedBarEnd?: boolean;
  labelColor?: string;
  barGlow?: boolean;
  xTickSuffix?: string;
  formatXTick?: (tick: number) => string;
  labelFontSize?: number;
  tickFontSize?: number;
  animated?: boolean;
}> = ({
  data,
  maxValue,
  xStep = 200,
  xTicks: xTicksProp,
  startFrame = 15,
  chartWidth = 720,
  chartHeight = 300,
  labelWidth = 155,
  roundedBarEnd = false,
  labelColor = theme.chartLabel,
  barGlow = false,
  xTickSuffix = "",
  formatXTick,
  labelFontSize = 17,
  tickFontSize = 16,
  animated = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const xTicks = xTicksProp ?? buildTicks(maxValue, xStep);
  const hasBarLabels = data.some((d) => d.valueLabel);
  const longestValueLabel = Math.max(0, ...data.map((d) => d.valueLabel?.length ?? 0));

  const padL = labelWidth + 16;
  const padB = 34;
  const padT = 10;
  const padR = hasBarLabels ? Math.max(112, longestValueLabel * 7.5) : 12;
  const plotW = chartWidth - padL - padR;
  const plotH = chartHeight - padT - padB;
  const rowH = plotH / data.length;
  const barH = Math.min(32, rowH * 0.55);
  const svgW = chartWidth;
  const svgH = chartHeight;

  const scaleX = (v: number) => padL + (v / maxValue) * plotW;

  const barFilter = (color: string) =>
    barGlow ? `drop-shadow(0 0 14px ${color}99)` : `drop-shadow(0 0 10px ${color}55)`;

  return (
    <div style={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}>
      <svg
        width="100%"
        height={svgH}
        viewBox={`0 0 ${svgW} ${svgH}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block", maxWidth: "100%", overflow: "hidden" }}
      >
        {xTicks.map((tick) => {
          const x = scaleX(tick);
          return (
            <g key={tick}>
              <line
                x1={x}
                y1={padT}
                x2={x}
                y2={padT + plotH}
                stroke="rgba(15, 23, 42, 0.08)"
                strokeWidth={1}
              />
              <text
                x={x}
                y={padT + plotH + 22}
                textAnchor="middle"
                fill={theme.chartLabel}
                fontSize={tickFontSize}
                fontWeight={500}
              >
                {formatXTick ? formatXTick(tick) : `${tick.toLocaleString("pt-BR")}${xTickSuffix}`}
              </text>
            </g>
          );
        })}

        {data.map((item, i) => {
          const delay = staggerDelay(i, startFrame, 5);
          const progress = animated
            ? spring({
                frame: frame - delay,
                fps,
                config: { damping: 18, stiffness: 80 },
              })
            : 1;
          const rawW = (item.value / maxValue) * plotW;
          const minW = item.noGlow ? 0 : 6;
          const targetW = item.value > 0 ? Math.max(rawW, minW) : 0;
          const barW = animated ? interpolate(progress, [0, 1], [0, targetW]) : targetW;
          const cy = padT + rowH * i + rowH / 2;
          const y = cy - barH / 2;
          const x0 = padL;

          return (
            <g key={item.label}>
              <text
                x={padL - 10}
                y={cy + 4}
                textAnchor="end"
                fill={labelColor}
                fontSize={labelFontSize}
                fontWeight={labelColor === "#0F172A" || labelColor === "#FFFFFF" ? 600 : 400}
              >
                {item.label}
              </text>
              {roundedBarEnd && barW >= 12 ? (
                <path
                  d={barPath(x0, y, Math.max(barW, 0), barH, 6)}
                  fill={item.color}
                  style={{
                    filter: item.noGlow ? undefined : barFilter(item.color),
                  }}
                />
              ) : (
                <rect
                  x={x0}
                  y={y}
                  width={Math.max(barW, 0)}
                  height={barH}
                  fill={item.color}
                  rx={barW >= 12 ? 6 : 2}
                  style={{
                    filter: item.noGlow ? undefined : barFilter(item.color),
                  }}
                />
              )}
              {item.valueLabel && barW > 0 && (
                <text
                  x={x0 + barW + 8}
                  y={cy + 4}
                  fill={theme.textMuted}
                  fontSize={13}
                  fontWeight={500}
                  opacity={
                    animated
                      ? interpolate(progress, [0.72, 1], [0, 1], {
                          extrapolateLeft: "clamp",
                          extrapolateRight: "clamp",
                        })
                      : 1
                  }
                >
                  {item.valueLabel}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};
