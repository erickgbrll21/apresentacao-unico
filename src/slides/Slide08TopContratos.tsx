import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { HEAT_MAP_UF } from "../data/presentationData";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";
import { staggerDelay } from "../utils/animation";

const CREAM_BG = "#F9F8F4";

const GRID_COLS =
  "minmax(136px, 1.25fr) 80px 92px minmax(128px, 1.15fr) minmax(168px, 1.35fr) 64px minmax(132px, 1.1fr)";

const HEADERS = [
  "UF / ESTADO",
  "SERVIDORES ESTADUAIS",
  "ORÇAMENTO CAP. EST.",
  "IFS / IFES PRESENTES",
  "CONCORRENTE ATUAL",
  "POTENCIAL UNICO",
  "PRIORIDADE",
] as const;

const potencialBadge: Record<string, React.CSSProperties> = {
  high: { color: "#047857", backgroundColor: "#D1FAE5" },
  "mid-high": { color: "#1D4ED8", backgroundColor: "#DBEAFE" },
  mid: { color: "#B45309", backgroundColor: "#FFEDD5" },
};

const prioridadeBadge: Record<string, React.CSSProperties> = {
  p1: { color: "#047857", backgroundColor: "#D1FAE5" },
  p2: { color: "#1D4ED8", backgroundColor: "#DBEAFE" },
  p3: { color: "#B45309", backgroundColor: "#FFEDD5" },
};

export const Slide08TopContratos: React.FC = () => {
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
          padding: "12px 48px 20px 48px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ flexShrink: 0, minHeight: 76, marginBottom: 12, paddingRight: 200 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 32,
              fontWeight: 700,
              color: theme.text,
              lineHeight: 1.22,
              fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
            }}
          >
            Mapa de Calor — Atratividade por UF para Benefício Educação
          </h1>
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            border: `1px solid ${theme.cardBorder}`,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 4px 28px rgba(15, 23, 42, 0.07)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: GRID_COLS,
              gap: "0 14px",
              padding: "10px 16px",
              borderBottom: `1px solid ${theme.borderSubtle}`,
              backgroundColor: "#FAFAF9",
              flexShrink: 0,
            }}
          >
            {HEADERS.map((h) => (
              <span
                key={h}
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: theme.textMuted,
                  textTransform: "uppercase",
                  lineHeight: 1.3,
                }}
              >
                {h}
              </span>
            ))}
          </div>

          <div style={{ flex: 1, minHeight: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            {HEAT_MAP_UF.map((row, i) => {
              const delay = staggerDelay(i, 8, 3);
              const s = spring({ frame: frame - delay, fps, config: { damping: 22, stiffness: 100 } });
              const opacity = interpolate(s, [0, 1], [0, 1]);

              return (
                <div
                  key={row.uf}
                  style={{
                    flex: 1,
                    display: "grid",
                    gridTemplateColumns: GRID_COLS,
                    gap: "0 14px",
                    padding: "0 16px",
                    borderBottom: i < HEAT_MAP_UF.length - 1 ? `1px solid ${theme.borderLight}` : undefined,
                    alignItems: "center",
                    minHeight: 0,
                    opacity,
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 700, color: theme.text, lineHeight: 1.25 }}>{row.uf}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: theme.textMuted }}>{row.servidores}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: theme.textMuted }}>{row.orcamento}</span>
                  <span style={{ fontSize: 12, fontWeight: 500, color: theme.textMuted, lineHeight: 1.35 }}>{row.ifsIfes}</span>
                  <span style={{ fontSize: 12, fontWeight: 500, color: theme.textMuted, lineHeight: 1.35 }}>{row.concorrente}</span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      textAlign: "center",
                      padding: "4px 8px",
                      borderRadius: 6,
                      justifySelf: "center",
                      minWidth: 36,
                      ...potencialBadge[row.potencialLevel],
                    }}
                  >
                    {row.potencial}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      padding: "3px 8px",
                      borderRadius: 9999,
                      width: "fit-content",
                      whiteSpace: "nowrap",
                      justifySelf: "start",
                      ...prioridadeBadge[row.prioridadeLevel],
                    }}
                  >
                    {row.prioridade}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
