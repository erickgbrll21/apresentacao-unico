import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { blurReveal, staggerDelay } from "../../utils/animation";
import { theme } from "../../theme";

export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
  static?: boolean;
}> = ({ children, className = "", delay, index = 0, static: isStatic = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = delay ?? staggerDelay(index);
  const { opacity, filter } = isStatic
    ? { opacity: 1, filter: "none" }
    : blurReveal(frame, start, 22);
  const y = isStatic
    ? 1
    : spring({
        frame: frame - start,
        fps,
        config: { damping: 22, stiffness: 90 },
      });
  const translateY = isStatic ? 0 : interpolate(y, [0, 1], [24, 0]);

  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-card/80 backdrop-blur-xl shadow-deep ${className}`}
      style={{
        opacity,
        filter,
        transform: `translateY(${translateY}px)`,
        backgroundColor: theme.card,
        border: `1px solid ${theme.cardBorder}`,
        borderRadius: 16,
        boxShadow: "0 8px 32px rgba(15, 23, 42, 0.08)",
        width: className.includes("w-full") ? "100%" : undefined,
        height: className.includes("h-full") ? "100%" : undefined,
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};
