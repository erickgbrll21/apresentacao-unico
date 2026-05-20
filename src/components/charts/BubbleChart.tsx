import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { BubbleSegment } from "../../data/presentationData";
import { theme } from "../../theme";

const RISK_COLOR: Record<BubbleSegment["riskColor"], string> = {
  low: "#3B82F6",
  medium: "#F59E0B",
  high: "#EF4444",
  volume: "#94A3B8",
  neutral: "#10B981",
};

const X_TICKS_DEFAULT = [0, 2, 4, 6, 8, 10, 12];
const X_TICKS_COMPRADORES = [2, 4, 6, 8, 10, 12];
const Y_TICKS = [40, 60, 80, 100, 120, 140, 160];

export const BubbleChart: React.FC<{
  data: BubbleSegment[];
  startFrame?: number;
  width?: number;
  height?: number;
  /** Eixo X começa em 2 (slide compradores) */
  compradoresLayout?: boolean;
}> = ({ data, startFrame = 20, width = 520, height = 340, compradoresLayout = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const padL = 52;
  const padR = 20;
  const padT = 24;
  const padB = 44;
  const plotW = width - padL - padR;
  const plotH = height - padT - padB;
  const maxTicket = 160;
  const minVol = compradoresLayout ? 2 : 0;
  const maxVol = 12;
  const volRange = maxVol - minVol;

  const toX = (v: number) => padL + ((v - minVol) / volRange) * plotW;
  const toY = (v: number) => padT + plotH - (v / maxTicket) * plotH;

  const xTicks = compradoresLayout ? X_TICKS_COMPRADORES : X_TICKS_DEFAULT;

  const bubbleRadius = (d: BubbleSegment, progress: number) => {
    if (compradoresLayout && d.tam != null) {
      return interpolate(progress, [0, 1], [0, 10 + d.tam * 5.5]);
    }
    return interpolate(progress, [0, 1], [0, 8 + d.volume * 2.2]);
  };

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      style={{ display: "block", maxWidth: width, overflow: "visible" }}
    >
      {Y_TICKS.map((tick) => (
        <g key={`y-${tick}`}>
          <line
            x1={padL}
            y1={toY(tick)}
            x2={width - padR}
            y2={toY(tick)}
            stroke="rgba(15, 23, 42, 0.08)"
            strokeWidth={1}
          />
          <text x={padL - 8} y={toY(tick) + 4} textAnchor="end" fill={theme.chartLabel} fontSize={11} fontWeight={500}>
            {tick}
          </text>
        </g>
      ))}

      {compradoresLayout &&
        xTicks.map((tick) => (
          <line
            key={`xg-${tick}`}
            x1={toX(tick)}
            y1={padT}
            x2={toX(tick)}
            y2={padT + plotH}
            stroke="rgba(15, 23, 42, 0.08)"
            strokeWidth={1}
          />
        ))}

      {xTicks.map((tick) => (
        <text
          key={`x-${tick}`}
          x={toX(tick)}
          y={height - 14}
          textAnchor="middle"
          fill={theme.chartLabel}
          fontSize={11}
          fontWeight={500}
        >
          {tick}
        </text>
      ))}

      <text x={padL + plotW / 2} y={height - 2} textAnchor="middle" fill={theme.textMuted} fontSize={12} fontWeight={600}>
        Volume de Processos →
      </text>
      <text
        x={16}
        y={padT + plotH / 2}
        textAnchor="middle"
        fill={theme.textMuted}
        fontSize={12}
        fontWeight={600}
        transform={`rotate(-90 16 ${padT + plotH / 2})`}
      >
        Ticket Médio (R$/serv.) →
      </text>

      {data.map((d, i) => {
        const delay = startFrame + i * 4;
        const progress = spring({ frame: frame - delay, fps, config: { damping: 18, stiffness: 80 } });
        const r = bubbleRadius(d, progress);
        const cx = toX(d.volume);
        const cy = toY(d.ticket);
        const color = d.color ?? RISK_COLOR[d.riskColor];

        return (
          <g key={d.label} style={{ opacity: progress }}>
            <circle cx={cx} cy={cy} r={r} fill={color} fillOpacity={0.82} stroke={color} strokeWidth={1.5} />
            <text x={cx} y={cy - r - 8} textAnchor="middle" fill={theme.text} fontSize={11} fontWeight={700}>
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
