import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { OPORTUNIDADES } from "../data/presentationData";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";
import { staggerDelay } from "../utils/animation";

const CREAM_BG = "#F9F8F4";
const GREEN_ACCENT = "#007A5E";
const CARD_BG = "#F1F3F2";

export const Slide12Oportunidades: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: CREAM_BG,
        fontFamily: "var(--font-sans), system-ui, -apple-system, 'Segoe UI', sans-serif",
      }}
    >
      <BrandLogo top={28} right={72} mixBlendMode="multiply" />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          padding: "20px 72px 28px",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ margin: "0 0 6px", fontSize: 36, fontWeight: 700, color: theme.text, flexShrink: 0, lineHeight: 1.2 }}>
          Oportunidades e Ameaças
        </h1>
        <p
          style={{
            margin: "0 0 14px",
            fontSize: 17,
            fontWeight: 500,
            color: theme.textMuted,
            lineHeight: 1.45,
            flexShrink: 0,
            maxWidth: "90%",
          }}
        >
          Onde a Unico Skill pode entrar agora — e o que pode bloquear o avanço se não agir.
        </p>

        <p style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 700, color: GREEN_ACCENT, flexShrink: 0 }}>
          🎯 Oportunidades de Ataque
        </p>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            minHeight: 0,
          }}
        >
          {OPORTUNIDADES.map((op, i) => {
            const delay = staggerDelay(i, 10, 6);
            const s = spring({ frame: frame - delay, fps, config: { damping: 20, stiffness: 85 } });
            const x = interpolate(s, [0, 1], [-20, 0]);
            const opacity = interpolate(s, [0, 1], [0, 1]);

            return (
              <div
                key={op.title}
                style={{
                  opacity,
                  transform: `translateX(${x}px)`,
                  borderRadius: 10,
                  backgroundColor: CARD_BG,
                  borderLeft: `4px solid ${GREEN_ACCENT}`,
                  padding: "18px 22px 18px 20px",
                  boxSizing: "border-box",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minHeight: 118,
                }}
              >
                <h4
                  style={{
                    margin: "0 0 10px",
                    fontSize: 19,
                    fontWeight: 700,
                    color: theme.text,
                    lineHeight: 1.35,
                  }}
                >
                  {op.title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: 16,
                    fontWeight: 500,
                    color: theme.textMuted,
                    lineHeight: 1.5,
                  }}
                >
                  {op.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
