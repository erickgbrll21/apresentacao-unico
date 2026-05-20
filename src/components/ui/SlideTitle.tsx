import React from "react";
import { useCurrentFrame } from "remotion";
import { blurReveal } from "../../utils/animation";
import { theme, typography } from "../../theme";

export const SlideTitle: React.FC<{
  title: string;
  subtitle?: string;
  delay?: number;
  badge?: string;
}> = ({ title, subtitle, delay = 0, badge }) => {
  const frame = useCurrentFrame();
  const { opacity, filter } = blurReveal(frame, delay, 28);

  return (
    <div style={{ opacity, filter, marginBottom: 32 }}>
      {badge && (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <span
            style={{
              padding: "6px 16px",
              borderRadius: 9999,
              border: "1px solid rgba(59,130,246,0.4)",
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "rgba(147,197,253,0.9)",
              textTransform: "uppercase",
            }}
          >
            {badge}
          </span>
        </div>
      )}
      <h1
        className="text-4xl font-display font-bold tracking-tight leading-tight"
        style={{ color: theme.text, margin: 0, fontSize: typography.slideTitle, fontWeight: 700 }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="mt-3 text-sm max-w-4xl leading-relaxed"
          style={{ color: theme.textMuted, marginTop: 12, fontSize: typography.slideSubtitle, lineHeight: 1.55, fontWeight: 500 }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
