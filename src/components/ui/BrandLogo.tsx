import React from "react";
import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";

export const BrandLogo: React.FC<{
  height?: number;
  top?: number;
  right?: number;
  mixBlendMode?: React.CSSProperties["mixBlendMode"];
  /** `corner` = absoluta no slide; `inline` = dentro do fluxo (ex.: faixa do título) */
  layout?: "corner" | "inline";
}> = ({ height = 56, top = 32, right = 40, mixBlendMode, layout = "corner" }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const isInline = layout === "inline";

  return (
    <Img
      src={staticFile("concorreai-logo.png")}
      alt="ConcorreAI"
      style={{
        position: isInline ? "relative" : "absolute",
        ...(isInline ? {} : { top, right, zIndex: 100 }),
        height,
        width: "auto",
        opacity,
        objectFit: "contain",
        objectPosition: isInline ? "right center" : "right top",
        pointerEvents: "none",
        maxWidth: isInline ? 220 : "min(300px, 32vw)",
        flexShrink: 0,
        display: "block",
        ...(mixBlendMode ? { mixBlendMode } : {}),
      }}
    />
  );
};
