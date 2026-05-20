import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { staggerDelay } from "../../utils/animation";
import { theme } from "../../theme";

export const ProgressBar: React.FC<{
  label: string;
  pct: number;
  color?: string;
  highlight?: boolean;
  index?: number;
  startFrame?: number;
  valueLabel?: string;
}> = ({
  label,
  pct,
  color = "#8B5CF6",
  highlight = false,
  index = 0,
  startFrame = 12,
  valueLabel,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const delay = staggerDelay(index, startFrame, 5);
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 85 },
  });
  const width = interpolate(progress, [0, 1], [0, pct]);
  const barColor = highlight ? "#EC4899" : color;

  return (
    <div style={{ marginBottom: 10 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 6,
        }}
      >
        <span style={{ fontSize: 15, color: theme.text, fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: 15, color: theme.textMuted, fontWeight: 700 }}>
          {valueLabel ?? `${pct}%`}
        </span>
      </div>
      <div
        style={{
          height: 10,
          backgroundColor: "rgba(15, 23, 42, 0.08)",
          borderRadius: 9999,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            backgroundColor: barColor,
            borderRadius: 9999,
            boxShadow: `0 0 14px ${barColor}55`,
          }}
        />
      </div>
    </div>
  );
};
