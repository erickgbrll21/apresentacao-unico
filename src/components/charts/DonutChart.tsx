import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../../theme";

type Segment = { label: string; value: number; color: string };

export const DonutChart: React.FC<{
  data: Segment[];
  size?: number;
  startFrame?: number;
  animated?: boolean;
}> = ({ data, size = 160, startFrame = 25, animated = true }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = animated
    ? spring({
        frame: frame - startFrame,
        fps,
        config: { damping: 20, stiffness: 60 },
      })
    : 1;
  const total = data.reduce((s, d) => s + d.value, 0);
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 14;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {data.map((seg) => {
        const pct = seg.value / total;
        const dash = pct * circumference * progress;
        const gap = circumference - dash;
        const rotation = (offset / total) * 360 - 90;
        offset += seg.value;
        return (
          <circle
            key={seg.label}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={24}
            strokeDasharray={`${dash} ${gap}`}
            transform={`rotate(${rotation} ${cx} ${cy})`}
            style={{ filter: `drop-shadow(0 0 6px ${seg.color}55)` }}
          />
        );
      })}
    </svg>
  );
};

export const DonutLegend: React.FC<{ data: Segment[]; vertical?: boolean }> = ({
  data,
  vertical = false,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      flexWrap: vertical ? "nowrap" : "wrap",
      gap: vertical ? 10 : 16,
      justifyContent: vertical ? "center" : "flex-start",
    }}
  >
    {data.map((d) => (
      <div
        key={d.label}
        style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500, color: theme.textMuted }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: 2,
            backgroundColor: d.color,
            flexShrink: 0,
          }}
        />
        {d.label}
      </div>
    ))}
  </div>
);
