import React from "react";
import type { GovCapabilityMatrixRow } from "../../data/presentationData";
import { theme } from "../../theme";

const statusIcon: Record<string, { icon: string; color: string }> = {
  full: { icon: "✓", color: "#059669" },
  partial: { icon: "◑", color: "#D97706" },
  none: { icon: "✘", color: "#DC2626" },
};

const Cell: React.FC<{ status: string; detail: string }> = ({ status, detail }) => {
  const s = statusIcon[status] ?? statusIcon.partial;
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "flex-start", lineHeight: 1.35 }}>
      <span style={{ color: s.color, fontWeight: 800, flexShrink: 0, fontSize: 16, lineHeight: 1.2 }}>
        {s.icon}
      </span>
      <span style={{ fontSize: 13, fontWeight: 500, color: theme.text }}>{detail}</span>
    </div>
  );
};

const HEADERS = [
  "EMPRESA",
  "PLATAFORMA CONTÍNUA",
  "26K+ CURSOS (GRAD/PÓS/IDIOMAS)",
  "MODELO BENEFÍCIO (ASSINATURA)",
  "EXPERIÊNCIA GOV. B2G",
] as const;

export const GovCapabilityMatrixTable: React.FC<{ rows: GovCapabilityMatrixRow[] }> = ({ rows }) => (
  <div style={{ width: "100%", display: "flex", flexDirection: "column", minHeight: 0 }}>
    <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 700, color: theme.text }}>
      Matriz de Capacidades — Unico Skill vs. Concorrentes no Gov.
    </h3>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(140px, 1fr) repeat(4, minmax(0, 1.1fr))",
        gridTemplateRows: `auto repeat(${rows.length}, minmax(48px, auto))`,
        backgroundColor: "#FFFFFF",
        border: `1px solid ${theme.cardBorder}`,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)",
      }}
    >
      {HEADERS.map((h, i) => (
        <div
          key={h}
          style={{
            padding: "10px 12px",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.06em",
            color: theme.text,
            backgroundColor: theme.headerBg,
            borderBottom: `1px solid ${theme.borderSubtle}`,
            borderRight: i < 4 ? `1px solid ${theme.borderLight}` : undefined,
            display: "flex",
            alignItems: "center",
          }}
        >
          {h}
        </div>
      ))}
      {rows.map((row, ri) => {
        const rowBg = row.highlight ? "rgba(59, 130, 246, 0.06)" : ri % 2 === 1 ? theme.surface : "#FFFFFF";
        const cols = ["plataforma", "cursos", "beneficio", "experienciaGov"] as const;
        return (
          <React.Fragment key={row.empresa}>
            <div
              style={{
                padding: "10px 12px",
                fontSize: 14,
                fontWeight: row.highlight ? 800 : 700,
                color: row.highlight ? "#2563EB" : theme.text,
                borderBottom: ri < rows.length - 1 ? `1px solid ${theme.borderSubtle}` : undefined,
                borderRight: `1px solid ${theme.borderLight}`,
                backgroundColor: rowBg,
                display: "flex",
                alignItems: "center",
              }}
            >
              {row.empresa}
            </div>
            {cols.map((col) => (
              <div
                key={col}
                style={{
                  padding: "10px 12px",
                  borderBottom: ri < rows.length - 1 ? `1px solid ${theme.borderSubtle}` : undefined,
                  borderRight: col !== "experienciaGov" ? `1px solid ${theme.borderLight}` : undefined,
                  backgroundColor: rowBg,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Cell status={row[col].status} detail={row[col].detail} />
              </div>
            ))}
          </React.Fragment>
        );
      })}
    </div>
    <p style={{ margin: "8px 0 0", fontSize: 13, color: theme.textMuted, fontWeight: 500, display: "flex", gap: 16, flexWrap: "wrap" }}>
      <span>
        <span style={{ color: statusIcon.full.color, fontWeight: 700 }}>✓</span> Capacidade plena
      </span>
      <span>
        <span style={{ color: statusIcon.partial.color, fontWeight: 700 }}>◑</span> Capacidade parcial
      </span>
      <span>
        <span style={{ color: statusIcon.none.color, fontWeight: 700 }}>✘</span> Não oferece
      </span>
    </p>
  </div>
);
