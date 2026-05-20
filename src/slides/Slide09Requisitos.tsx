import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { REQUISITOS } from "../data/presentationData";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";
import { staggerDelay } from "../utils/animation";

const CREAM_BG = "#F9F8F4";

const cardStyle: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  borderRadius: 16,
  boxShadow: "0 4px 28px rgba(15, 23, 42, 0.07)",
  flex: 1,
  minWidth: 0,
  boxSizing: "border-box",
};

export const Slide09Requisitos: React.FC = () => {
  const frame = useCurrentFrame();

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
          padding: "20px 72px 32px",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ margin: "0 0 20px", fontSize: 36, fontWeight: 700, color: theme.text, flexShrink: 0 }}>
          Requisitos Técnicos Típicos em Editais de Capacitação
        </h1>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 0,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 18,
              width: "100%",
              alignItems: "stretch",
            }}
          >
            {REQUISITOS.map((card, ci) => (
              <div key={card.title} style={cardStyle}>
                <div style={{ padding: "24px 22px", boxSizing: "border-box" }}>
                  <h3
                    style={{
                      margin: "0 0 18px",
                      fontSize: 19,
                      fontWeight: 700,
                      lineHeight: 1.35,
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ marginRight: 8 }}>{card.icon}</span>
                    <span style={{ color: card.accent }}>{card.title}</span>
                  </h3>

                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {card.items.map((item, ii) => {
                      const delay = staggerDelay(ii, 14 + ci * 5, 4);
                      const opacity = interpolate(frame, [delay, delay + 12], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      });

                      return (
                        <li
                          key={item}
                          style={{
                            display: "flex",
                            gap: 10,
                            marginBottom: ii < card.items.length - 1 ? 14 : 0,
                            fontSize: 15,
                            fontWeight: 500,
                            color: theme.text,
                            lineHeight: 1.5,
                            opacity,
                          }}
                        >
                          <span style={{ color: theme.textDim, flexShrink: 0, width: 12, textAlign: "center" }}>
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
