import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../../theme";

type Point = { year: string; total: number; managed: number };

const Y_TICKS = [0, 20, 40, 60, 80, 100, 120, 140];
const MAX_Y = 140;

export const FleetLineChart: React.FC<{
  data: Point[];
  startFrame?: number;
  width?: number;
}> = ({ data, startFrame = 20, width = 900 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const h = 200;
  const pad = { l: 48, r: 24, t: 16, b: 32 };
  const chartW = width - pad.l - pad.r;
  const chartH = h - pad.t - pad.b;

  const progress = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 22, stiffness: 65 },
  });

  const toX = (i: number) => pad.l + (i / (data.length - 1)) * chartW;
  const toY = (v: number) => pad.t + (1 - v / MAX_Y) * chartH;

  const totalPath = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(d.total)}`)
    .join(" ");
  const managedPath = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(d.managed)}`)
    .join(" ");

  const pathLen = 1200;
  const dashOffset = interpolate(progress, [0, 1], [pathLen, 0]);
  const dotsOpacity = interpolate(progress, [0.85, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <svg width={width} height={h} viewBox={`0 0 ${width} ${h}`} style={{ overflow: "visible" }}>
      {/* Grid + labels Y */}
      {Y_TICKS.map((tick) => {
        const y = toY(tick);
        return (
          <g key={tick}>
            <line
              x1={pad.l}
              y1={y}
              x2={width - pad.r}
              y2={y}
              stroke="rgba(15, 23, 42, 0.08)"
              strokeWidth={1}
            />
            <text x={pad.l - 8} y={y + 3} textAnchor="end" fill={theme.chartLabel} fontSize={11} fontWeight={500}>
              {tick}
            </text>
          </g>
        );
      })}

      {/* Linha frota total */}
      <path
        d={totalPath}
        fill="none"
        stroke="#94A3B8"
        strokeWidth={2.5}
        strokeDasharray={pathLen}
        strokeDashoffset={dashOffset}
      />
      {/* Linha frota gerenciada */}
      <path
        d={managedPath}
        fill="none"
        stroke="#3B82F6"
        strokeWidth={2.5}
        strokeDasharray={`6 4`}
        strokeDashoffset={interpolate(progress, [0, 1], [pathLen, 0])}
        style={{ filter: "drop-shadow(0 0 8px rgba(59,130,246,0.45))" }}
      />

      {/* Pontos */}
      {data.map((d, i) => (
        <g key={d.year} style={{ opacity: dotsOpacity }}>
          <circle cx={toX(i)} cy={toY(d.total)} r={4} fill="#94A3B8" stroke="#FFFFFF" strokeWidth={1.5} />
          <circle cx={toX(i)} cy={toY(d.managed)} r={4} fill="#3B82F6" stroke="#FFFFFF" strokeWidth={1.5} />
        </g>
      ))}

      {/* Labels X */}
      {data.map((d, i) => (
        <text
          key={`label-${d.year}`}
          x={toX(i)}
          y={h - 8}
          textAnchor="middle"
          fill={theme.chartLabel}
          fontSize={12}
          fontWeight={500}
        >
          {d.year}
        </text>
      ))}
    </svg>
  );
};

type ArrPoint = { quarter: string; otimista: number; base: number; conservador: number };

const ARR_Y_TICKS = [0, 50, 100, 150, 200, 250];
const ARR_MAX_Y = 250;

export const ArrScenarioLineChart: React.FC<{
  data: ArrPoint[];
  startFrame?: number;
  width?: number;
  height?: number;
  showEndLabels?: boolean;
}> = ({ data, startFrame = 20, width = 1100, height = 200, showEndLabels = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const h = height;
  const pad = { l: 52, r: 24, t: 20, b: 36 };
  const chartW = width - pad.l - pad.r;
  const chartH = h - pad.t - pad.b;

  const progress = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 22, stiffness: 65 },
  });

  const toX = (i: number) => pad.l + (i / (data.length - 1)) * chartW;
  const toY = (v: number) => pad.t + (1 - v / ARR_MAX_Y) * chartH;

  const series = [
    { key: "otimista" as const, color: "#10B981", label: "Otimista" },
    { key: "base" as const, color: "#3B82F6", label: "Base" },
    { key: "conservador" as const, color: "#94A3B8", label: "Conservador" },
  ];

  const pathLen = 1400;
  const dashOffset = interpolate(progress, [0, 1], [pathLen, 0]);
  const dotsOpacity = interpolate(progress, [0.85, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <svg width={width} height={h} viewBox={`0 0 ${width} ${h}`} style={{ overflow: "visible" }}>
      {ARR_Y_TICKS.map((tick) => {
        const y = toY(tick);
        return (
          <g key={tick}>
            <line x1={pad.l} y1={y} x2={width - pad.r} y2={y} stroke="rgba(15, 23, 42, 0.08)" strokeWidth={1} />
            <text x={pad.l - 8} y={y + 3} textAnchor="end" fill={theme.chartLabel} fontSize={11} fontWeight={500}>
              R${tick}M
            </text>
          </g>
        );
      })}

      {series.map(({ key, color }) => {
        const path = data
          .map((d, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(d[key])}`)
          .join(" ");
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
        series.map(({ key, color }) => (
          <circle
            key={`${d.quarter}-${key}`}
            cx={toX(i)}
            cy={toY(d[key])}
            r={4}
            fill={color}
            stroke="#FFFFFF"
            strokeWidth={1.5}
            style={{ opacity: dotsOpacity }}
          />
        ))
      )}

      {data.map((d, i) => (
        <text key={`label-${d.quarter}`} x={toX(i)} y={h - 10} textAnchor="middle" fill={theme.chartLabel} fontSize={10} fontWeight={500}>
          {d.quarter}
        </text>
      ))}

      {showEndLabels &&
        (() => {
          const last = data.length - 1;
          const lastRow = data[last];
          const lx = toX(last);
          return series.map(({ key, color }) => (
            <text
              key={`end-${key}`}
              x={lx + 6}
              y={toY(lastRow[key]) - 6}
              fill={color}
              fontSize={12}
              fontWeight={700}
              style={{ opacity: dotsOpacity }}
            >
              {lastRow[key]}
            </text>
          ));
        })()}
    </svg>
  );
};

export const ARR_SCENARIO_LEGEND = [
  { color: "#10B981", label: "Otimista" },
  { color: "#3B82F6", label: "Base" },
  { color: "#94A3B8", label: "Conservador" },
] as const;
