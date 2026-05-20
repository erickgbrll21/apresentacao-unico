import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CONTRATOS_PUBLICOS, CONTRATOS_PUBLICOS_FONTE } from "../data/presentationData";
import type { ContratoPublicoRow } from "../data/presentationData";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";
import { staggerDelay } from "../utils/animation";

const CREAM_BG = "#F9F8F4";

const GRID = "44px minmax(168px, 1.05fr) minmax(280px, 2fr) minmax(118px, 0.85fr) minmax(132px, 0.95fr)";

const HEADERS = ["RANK", "ÓRGÃO / ENTIDADE", "OBJETO", "VALOR", "MODALIDADE"] as const;

const valorPill: Record<ContratoPublicoRow["valorTone"], React.CSSProperties> = {
  blue: { backgroundColor: "rgba(59, 130, 246, 0.14)", color: "#1D4ED8", border: "1px solid rgba(59, 130, 246, 0.28)" },
  purple: { backgroundColor: "rgba(124, 58, 237, 0.12)", color: "#6D28D9", border: "1px solid rgba(124, 58, 237, 0.28)" },
  green: { backgroundColor: "rgba(16, 185, 129, 0.14)", color: "#047857", border: "1px solid rgba(16, 185, 129, 0.28)" },
  orange: { backgroundColor: "rgba(245, 158, 11, 0.14)", color: "#B45309", border: "1px solid rgba(245, 158, 11, 0.28)" },
  yellow: { backgroundColor: "rgba(234, 179, 8, 0.14)", color: "#A16207", border: "1px solid rgba(234, 179, 8, 0.28)" },
};

const rankBadge = (rank: number): React.CSSProperties => {
  if (rank === 1) {
    return { backgroundColor: "rgba(245, 158, 11, 0.28)", color: "#92400E", border: "1px solid rgba(245, 158, 11, 0.45)" };
  }
  if (rank === 2) {
    return { backgroundColor: "rgba(148, 163, 184, 0.28)", color: "#475569", border: "1px solid rgba(148, 163, 184, 0.45)" };
  }
  if (rank === 3) {
    return { backgroundColor: "rgba(248, 113, 113, 0.2)", color: "#B91C1C", border: "1px solid rgba(248, 113, 113, 0.4)" };
  }
  return { backgroundColor: "#F1F5F9", color: theme.textMuted, border: `1px solid ${theme.borderLight}` };
};

export const Slide08ContratosPublicos: React.FC = () => {
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
        <div
          style={{
            flexShrink: 0,
            minHeight: 92,
            marginBottom: 10,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 36,
              fontWeight: 700,
              color: theme.text,
              lineHeight: 1.2,
              maxWidth: "calc(100% - 280px)",
            }}
          >
            Contratos Reais Identificados — Capacitação Gov. 2024–Mar/2026
          </h1>
        </div>

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
                gridTemplateColumns: GRID,
                gap: "0 12px",
                padding: "12px 20px",
                backgroundColor: theme.headerBg,
                borderBottom: `1px solid ${theme.borderSubtle}`,
                flexShrink: 0,
              }}
            >
              {HEADERS.map((h) => (
                <span
                  key={h}
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    color: theme.text,
                  }}
                >
                  {h}
                </span>
              ))}
            </div>

            <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
              {CONTRATOS_PUBLICOS.map((row, i) => {
                const delay = staggerDelay(i, 6, 3);
                const s = spring({ frame: frame - delay, fps, config: { damping: 22, stiffness: 100 } });
                const opacity = interpolate(s, [0, 1], [0, 1]);

                return (
                  <div
                    key={row.rank}
                    style={{
                      display: "grid",
                      gridTemplateColumns: GRID,
                      gap: "0 12px",
                      padding: "11px 20px",
                      borderBottom: i < CONTRATOS_PUBLICOS.length - 1 ? `1px solid ${theme.borderSubtle}` : undefined,
                      alignItems: "center",
                      opacity,
                      flex: 1,
                      backgroundColor: i % 2 === 1 ? theme.surface : "#FFFFFF",
                    }}
                  >
                    <span
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                        fontWeight: 800,
                        justifySelf: "center",
                        ...rankBadge(row.rank),
                      }}
                    >
                      {row.rank}
                    </span>

                    <div>
                      <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: theme.text, lineHeight: 1.3 }}>
                        {row.orgaoNome}
                      </p>
                      <p style={{ margin: "3px 0 0", fontSize: 12, fontWeight: 500, color: theme.textMuted, lineHeight: 1.3 }}>
                        {row.orgaoDetalhe}
                      </p>
                    </div>

                    <span style={{ fontSize: 12, fontWeight: 500, color: theme.text, lineHeight: 1.45 }}>{row.objeto}</span>

                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        padding: "5px 10px",
                        borderRadius: 9999,
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        justifySelf: "start",
                        ...valorPill[row.valorTone],
                      }}
                    >
                      {row.valor}
                    </span>

                    <span style={{ fontSize: 12, fontWeight: 600, color: theme.textMuted }}>{row.modalidade}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <p
            style={{
              margin: "10px 0 0",
              fontSize: 12,
              fontWeight: 500,
              color: theme.textMuted,
              lineHeight: 1.45,
              flexShrink: 0,
            }}
          >
            {CONTRATOS_PUBLICOS_FONTE}
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
