import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TOP_ORGAOS } from "../data/presentationData";
import type { TopOrgaoAtratividadeStyle } from "../data/presentationData";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";
import { staggerDelay } from "../utils/animation";

const CREAM_BG = "#F9F8F4";

const GRID_COLS =
  "minmax(200px, 1.25fr) minmax(100px, 0.75fr) minmax(118px, 0.85fr) minmax(96px, 0.7fr) minmax(130px, 0.9fr) minmax(148px, 1fr)";

const HEADERS = [
  "TIPO DE ÓRGÃO",
  "SERVIDORES ESTIMADOS",
  "TICKET MENSAL POTENCIAL",
  "CICLO DECISÃO",
  "BASE LEGAL",
  "ATRATIVIDADE",
] as const;

const atratividadeStyles: Record<TopOrgaoAtratividadeStyle, React.CSSProperties> = {
  "plain-green": { color: "#059669", backgroundColor: "transparent", border: "none", padding: 0 },
  "pill-green": {
    color: "#059669",
    backgroundColor: "rgba(16, 185, 129, 0.14)",
    border: "1px solid rgba(16, 185, 129, 0.28)",
  },
  "pill-blue": {
    color: "#2563EB",
    backgroundColor: "rgba(59, 130, 246, 0.12)",
    border: "1px solid rgba(59, 130, 246, 0.25)",
  },
  "pill-orange": {
    color: "#D97706",
    backgroundColor: "rgba(245, 158, 11, 0.12)",
    border: "1px solid rgba(245, 158, 11, 0.28)",
  },
};

export const Slide10Orgaos: React.FC = () => {
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
          padding: "20px 72px 24px",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ margin: "0 0 14px", fontSize: 36, fontWeight: 700, color: theme.text, flexShrink: 0 }}>
          Top Compradores — Classificação por Atratividade
        </h1>

        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", width: "100%" }}>
          <div
            style={{
              flex: 1,
              minHeight: 0,
              backgroundColor: "#FFFFFF",
              border: `1px solid ${theme.cardBorder}`,
              borderRadius: 16,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 4px 28px rgba(15, 23, 42, 0.07)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: GRID_COLS,
                gap: "0 10px",
                padding: "11px 20px",
                backgroundColor: theme.headerBg,
                borderBottom: `1px solid ${theme.borderSubtle}`,
                flexShrink: 0,
                alignItems: "center",
              }}
            >
              {HEADERS.map((h) => (
                <span
                  key={h}
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.05em",
                    color: theme.textMuted,
                  }}
                >
                  {h}
                </span>
              ))}
            </div>

            <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
              {TOP_ORGAOS.map((row, i) => {
                const delay = staggerDelay(i, 6, 3);
                const s = spring({ frame: frame - delay, fps, config: { damping: 22, stiffness: 100 } });
                const opacity = interpolate(s, [0, 1], [0, 1]);
                const pillBase = atratividadeStyles[row.atratividadeStyle];
                const isPill = row.atratividadeStyle !== "plain-green";

                return (
                  <div
                    key={row.tipo}
                    style={{
                      display: "grid",
                      gridTemplateColumns: GRID_COLS,
                      gap: "0 10px",
                      padding: "9px 20px",
                      borderBottom: i < TOP_ORGAOS.length - 1 ? `1px solid ${theme.borderSubtle}` : undefined,
                      alignItems: "center",
                      opacity,
                      flex: 1,
                      backgroundColor: i % 2 === 1 ? theme.surface : "#FFFFFF",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 700, color: theme.text, lineHeight: 1.35 }}>
                      {row.tipo}
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 500, color: theme.textMuted }}>{row.servidores}</span>
                    <span style={{ fontSize: 12, fontWeight: 500, color: theme.textMuted }}>{row.ticket}</span>
                    <span style={{ fontSize: 12, fontWeight: 500, color: theme.textMuted }}>{row.ciclo}</span>
                    <span style={{ fontSize: 12, fontWeight: 500, color: theme.textMuted, lineHeight: 1.35 }}>
                      {row.baseLegal}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        width: "fit-content",
                        fontSize: 12,
                        fontWeight: 600,
                        padding: isPill ? "4px 10px" : 0,
                        borderRadius: isPill ? 9999 : 0,
                        whiteSpace: "nowrap",
                        ...pillBase,
                      }}
                    >
                      {row.showStar ? <span style={{ fontSize: 11 }}>⭐</span> : null}
                      {row.atratividade}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
