import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../../theme";

type Segment = { label: string; value: number; color: string; valueLabel?: string };

export const MarketShareDonut: React.FC<{
  data: Segment[];
  size?: number;
  startFrame?: number;
}> = ({ data, size = 200, startFrame = 28 }) => {
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
  const r = size / 2 - 26;
  const strokeW = 26;
  const circumference = 2 * Math.PI * r;

  let offset = 0;
  const segments = data.map((seg) => {
    const pct = seg.value / total;
    const startAngle = (offset / total) * 360 - 90;
    const midAngle = startAngle + (pct * 360) / 2;
    offset += seg.value;
    return { ...seg, pct, startAngle, midAngle };
  });

  const labelOpacity = interpolate(progress, [0.75, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  let dashOffset = 0;

  return (
    <svg
      width={size + 100}
      height={size + 60}
      viewBox={`-50 -30 ${size + 100} ${size + 60}`}
      style={{ overflow: "visible" }}
    >
      <g transform="translate(50, 20)">
        {segments.map((seg) => {
          const dash = seg.pct * circumference * progress;
          const gap = circumference - dash;
          const rotation = (dashOffset / total) * 360 - 90;
          dashOffset += seg.value;
          const rad = (seg.midAngle * Math.PI) / 180;
          const innerR = r + strokeW / 2;
          const outerR = r + strokeW / 2 + 28;
          const x1 = cx + innerR * Math.cos(rad);
          const y1 = cy + innerR * Math.sin(rad);
          const x2 = cx + outerR * Math.cos(rad);
          const y2 = cy + outerR * Math.sin(rad);
          const x3 = x2 + (x2 < cx ? -8 : x2 > cx ? 8 : 0);
          const anchor = x2 < cx - 8 ? "end" : x2 > cx + 8 ? "start" : "middle";

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
                style={{ filter: `drop-shadow(0 0 6px ${seg.color}44)` }}
              />
              <g style={{ opacity: labelOpacity }}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={seg.color} strokeWidth={1} opacity={0.5} />
                <text
                  x={x3}
                  y={y2 + 4}
                  textAnchor={anchor}
                  fill={seg.color}
                  fontSize={13}
                  fontWeight={700}
                >
                  {seg.valueLabel ? `${seg.label} ${seg.valueLabel}` : seg.label}
                </text>
                {!seg.valueLabel && (
                  <text
                    x={x3}
                    y={y2 + 11}
                    textAnchor={anchor}
                    fill={theme.textMuted}
                    fontSize={12}
                    fontWeight={600}
                  >
                    {seg.value}%
                  </text>
                )}
              </g>
            </g>
          );
        })}
      </g>
    </svg>
  );
};
