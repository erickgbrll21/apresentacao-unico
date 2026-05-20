import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { PaybackPoint } from "../../data/presentationData";
import { theme } from "../../theme";

const MAX_Y = 90;
const Y_TICKS = [0, 20, 40, 60, 80, 90];

const SERIES = [
  { key: "investimentoAcumulado" as const, color: "#EF4444", label: "inv" },
  { key: "arrGov" as const, color: "#10B981", label: "arr" },
];

export const PaybackDualLineChart: React.FC<{
  data: PaybackPoint[];
  startFrame?: number;
  width?: number;
  height?: number;
}> = ({ data, startFrame = 20, width = 520, height = 300 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pad = { l: 52, r: 20, t: 24, b: 36 };
  const chartW = width - pad.l - pad.r;
  const chartH = height - pad.t - pad.b;

  const progress = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 22, stiffness: 65 },
  });

  const toX = (i: number) => pad.l + (i / (data.length - 1)) * chartW;
  const toY = (v: number) => pad.t + (1 - v / MAX_Y) * chartH;

  const pathLen = 1600;
  const dashOffset = interpolate(progress, [0, 1], [pathLen, 0]);
  const dotsOpacity = interpolate(progress, [0.82, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: "visible" }}>
      {Y_TICKS.map((tick) => {
        const y = toY(tick);
        return (
          <g key={tick}>
            <line x1={pad.l} y1={y} x2={width - pad.r} y2={y} stroke={theme.chartGrid} strokeWidth={1} />
            <text x={pad.l - 8} y={y + 4} textAnchor="end" fill={theme.chartLabel} fontSize={11} fontWeight={500}>
              R${tick}M
            </text>
          </g>
        );
      })}

      {SERIES.map(({ key, color }) => {
        const path = data.map((d, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(d[key])}`).join(" ");
        return (
          <path
            key={key}
            d={path}
            fill="none"
            stroke={color}
            strokeWidth={2.5}
            strokeDasharray={pathLen}
            strokeDashoffset={dashOffset}
          />
        );
      })}

      {data.map((d, i) =>
        SERIES.map(({ key, color }) => {
          const value = d[key];
          const cx = toX(i);
          const cy = toY(value);
          return (
            <g key={`${d.quarter}-${key}`} style={{ opacity: dotsOpacity }}>
              <circle cx={cx} cy={cy} r={4} fill={color} stroke="#FFFFFF" strokeWidth={1.5} />
            </g>
          );
        })
      )}

      {data.map((d, i) => (
        <text
          key={`label-${d.quarter}`}
          x={toX(i)}
          y={height - 10}
          textAnchor="middle"
          fill={theme.chartLabel}
          fontSize={10}
          fontWeight={600}
        >
          {d.quarter}
        </text>
      ))}
    </svg>
  );
};
