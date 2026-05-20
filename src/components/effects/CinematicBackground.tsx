import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { theme } from "../../theme";

export const CinematicBackground: React.FC<{ variant?: "default" | "green" }> = ({
  variant = "default",
}) => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame % 300, [0, 150, 300], [0, 1, 0]);

  const meshColors =
    variant === "green"
      ? ["rgba(16,185,129,0.08)", "rgba(6,78,59,0.05)", theme.bg]
      : ["rgba(59,130,246,0.1)", "rgba(139,92,246,0.06)", theme.bg];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.bg,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at ${30 + drift * 15}% ${40 + drift * 10}%, ${meshColors[0]}, transparent 50%),
            radial-gradient(circle at ${70 - drift * 12}% ${60 - drift * 8}%, ${meshColors[1]}, transparent 45%),
            ${meshColors[2]}
          `,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
          background: `radial-gradient(ellipse 80% 50% at ${20 + drift * 10}% ${30 + drift * 5}%, rgba(59,130,246,0.06), transparent),
            radial-gradient(ellipse 60% 40% at ${80 - drift * 8}% ${70 - drift * 3}%, rgba(168,85,247,0.04), transparent)`,
        }}
      />
    </AbsoluteFill>
  );
};
