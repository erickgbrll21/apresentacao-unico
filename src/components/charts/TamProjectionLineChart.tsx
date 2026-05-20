import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../../theme";

export type TamProjectionPoint = {
  year: string;
  municipal: number;
  estadual: number;
  federal: number;
};

const SERIES = [
  { key: "municipal" as const, color: "#3B82F6", fill: "rgba(59, 130, 246, 0.12)" },
  { key: "estadual" as const, color: "#059669", fill: "transparent" },
  { key: "federal" as const, color: "#F59E0B", fill: "transparent" },
];

const MUNICIPAL_LABELS = ["R$355M", "R$520M", "R$760M", "R$1100M", "R$1580M"];

export const TAM_PROJECTION_LEGEND = [
  { color: "#3B82F6", label: "Municipal" },
  { color: "#059669", label: "Estadual" },
  { color: "#F59E0B", label: "Federal" },
] as const;

export const TamProjectionLineChart: React.FC<{
  data: TamProjectionPoint[];
  startFrame?: number;
  width?: number;
  height?: number;
  maxY?: number;
}> = ({ data, startFrame = 16, width = 1180, height = 320, maxY = 1800 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pad = { l: 62, r: 100, t: 28, b: 36 };
  const chartW = width - pad.l - pad.r;
  const chartH = height - pad.t - pad.b;

  const progress = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 22, stiffness: 65 },
  });

  const toX = (i: number) => pad.l + (i / (data.length - 1)) * chartW;
  const toY = (v: number) => pad.t + (1 - v / maxY) * chartH;

  const yTicks: number[] = [];
  for (let v = 0; v <= maxY; v += 200) yTicks.push(v);

  const pathLen = 2000;
  const dashOffset = interpolate(progress, [0, 1], [pathLen, 0]);
  const dotsOpacity = interpolate(progress, [0.8, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const municipalPath = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(d.municipal)}`)
    .join(" ");
  const municipalArea = `${municipalPath} L ${toX(data.length - 1)} ${toY(0)} L ${toX(0)} ${toY(0)} Z`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: "visible" }}>
      {yTicks.map((tick) => {
        const y = toY(tick);
        return (
          <g key={tick}>
            <line x1={pad.l} y1={y} x2={width - pad.r} y2={y} stroke="rgba(15, 23, 42, 0.1)" strokeWidth={1} />
            <text x={pad.l - 8} y={y + 4} textAnchor="end" fill={theme.chartLabel} fontSize={12} fontWeight={500}>
              R${tick}M
            </text>
          </g>
        );
      })}

      <path d={municipalArea} fill="rgba(59, 130, 246, 0.1)" style={{ opacity: interpolate(progress, [0, 1], [0, 1]) }} />

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
        SERIES.map(({ key, color }) => (
          <circle
            key={`${d.year}-${key}`}
            cx={toX(i)}
            cy={toY(d[key])}
            r={5}
            fill={color}
            stroke="#FFFFFF"
            strokeWidth={2}
            style={{ opacity: dotsOpacity }}
          />
        ))
      )}

      {data.map((d, i) => (
        <text
          key={`x-${d.year}`}
          x={toX(i)}
          y={height - 10}
          textAnchor="middle"
          fill={theme.chartLabel}
          fontSize={12}
          fontWeight={500}
        >
          {d.year}
        </text>
      ))}

      {data.map((d, i) => (
        <text
          key={`m-label-${i}`}
          x={toX(i)}
          y={toY(d.municipal) - 12}
          textAnchor="middle"
          fill="#3B82F6"
          fontSize={12}
          fontWeight={700}
          style={{ opacity: dotsOpacity }}
        >
          {MUNICIPAL_LABELS[i]}
        </text>
      ))}

      {(() => {
        const last = data.length - 1;
        const lx = toX(last);
        return (
          <>
            <text
              x={lx + 8}
              y={toY(data[last].estadual) + 4}
              fill="#059669"
              fontSize={12}
              fontWeight={700}
              style={{ opacity: dotsOpacity }}
            >
              2028 proj.: R$750M
            </text>
            <text
              x={lx + 8}
              y={toY(data[last].federal) + 4}
              fill="#F59E0B"
              fontSize={12}
              fontWeight={700}
              style={{ opacity: dotsOpacity }}
            >
              2028 proj.: R$375M
            </text>
          </>
        );
      })()}
    </svg>
  );
};
