import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../../theme";

type Segment = { label: string; value: number; color: string };

/** Donut do slide compradores — furo central amplo e rótulos externos com % */
export const AreaAtuacaoDonut: React.FC<{
  data: Segment[];
  size?: number;
  startFrame?: number;
}> = ({ data, size = 240, startFrame = 18 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 20, stiffness: 60 },
  });

  const total = data.reduce((s, d) => s + d.value, 0);
  const cx = size / 2;
  const cy = size / 2;
  const strokeW = 22;
  const r = size / 2 - strokeW - 8;
  const circumference = 2 * Math.PI * r;

  let offset = 0;
  const segments = data.map((seg) => {
    const pct = seg.value / total;
    const startAngle = (offset / total) * 360 - 90;
    const midAngle = startAngle + (pct * 360) / 2;
    offset += seg.value;
    return { ...seg, pct, midAngle };
  });

  const labelOpacity = interpolate(progress, [0.7, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  let dashOffset = 0;
  const pad = 72;

  return (
    <svg
      width="100%"
      height={size + pad}
      viewBox={`${-pad} ${-pad / 2} ${size + pad * 2} ${size + pad}`}
      preserveAspectRatio="xMidYMid meet"
      style={{ display: "block", overflow: "visible", maxHeight: size + pad }}
    >
      <g transform={`translate(${pad}, ${pad / 2})`}>
        {segments.map((seg) => {
          const dash = seg.pct * circumference * progress;
          const gap = circumference - dash;
          const rotation = (dashOffset / total) * 360 - 90;
          dashOffset += seg.value;
          const rad = (seg.midAngle * Math.PI) / 180;
          const innerR = r + strokeW / 2;
          const outerR = r + strokeW / 2 + 36;
          const x1 = cx + innerR * Math.cos(rad);
          const y1 = cy + innerR * Math.sin(rad);
          const x2 = cx + outerR * Math.cos(rad);
          const y2 = cy + outerR * Math.sin(rad);
          const pushX = x2 < cx - 4 ? -14 : x2 > cx + 4 ? 14 : 0;
          const x3 = x2 + pushX;
          const anchor = pushX < 0 ? "end" : pushX > 0 ? "start" : "middle";

          return (
            <g key={seg.label}>
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeW}
                strokeDasharray={`${dash} ${gap}`}
                transform={`rotate(${rotation} ${cx} ${cy})`}
                strokeLinecap="butt"
              />
              <g style={{ opacity: labelOpacity }}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={seg.color} strokeWidth={1.2} opacity={0.55} />
                <line x1={x2} y1={y2} x2={x3} y2={y2} stroke={seg.color} strokeWidth={1.2} opacity={0.55} />
                <text x={x3} y={y2 + 5} textAnchor={anchor} fontSize={13} fontWeight={700}>
                  <tspan fill={seg.color}>{seg.label} </tspan>
                  <tspan fill={theme.textMuted} fontWeight={600}>
                    {seg.value}%
                  </tspan>
                </text>
              </g>
            </g>
          );
        })}
      </g>
    </svg>
  );
};
