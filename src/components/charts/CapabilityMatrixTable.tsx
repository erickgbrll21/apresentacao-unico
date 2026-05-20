import React from "react";
import type { CapabilityMatrixRow } from "../../data/presentationData";
import { theme } from "../../theme";

const statusIcon: Record<string, { icon: string; color: string }> = {
  full: { icon: "✔", color: "#059669" },
  partial: { icon: "◐", color: "#D97706" },
  none: { icon: "✘", color: "#DC2626" },
};

const Cell: React.FC<{ status: string; detail: string }> = ({ status, detail }) => {
  const s = statusIcon[status] ?? statusIcon.partial;
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "flex-start", lineHeight: 1.4 }}>
      <span style={{ color: s.color, fontWeight: 800, flexShrink: 0, fontSize: 17, lineHeight: 1.2 }}>{s.icon}</span>
      <span style={{ fontSize: 14, fontWeight: 600, color: theme.text }}>{detail}</span>
    </div>
  );
};

const HEADERS = ["EMPRESA", "FEDERAL GRANDE", "ESTADUAL", "MUNICIPAL MÉDIO", "SIAFIC COMPLIANCE"] as const;

export const CapabilityMatrixTable: React.FC<{ rows: CapabilityMatrixRow[] }> = ({ rows }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
    }}
  >
    <div
      style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "minmax(168px, 0.95fr) repeat(4, minmax(178px, 1fr))",
        gridTemplateRows: `auto repeat(${rows.length}, minmax(52px, 1fr))`,
        gap: 0,
        backgroundColor: theme.card,
        border: `1.5px solid ${theme.cardBorder}`,
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(15, 23, 42, 0.1)",
      }}
    >
      {HEADERS.map((h, i) => (
        <div
          key={h}
          style={{
            padding: "14px 16px",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: "0.1em",
            color: theme.text,
            backgroundColor: theme.headerBg,
            borderBottom: `1.5px solid ${theme.borderSubtle}`,
            borderRight: i < 4 ? `1px solid ${theme.borderLight}` : undefined,
            display: "flex",
            alignItems: "center",
          }}
        >
          {h}
        </div>
      ))}
      {rows.map((row, ri) => {
        const highlight = row.empresa.includes("Sankhya");
        const rowBg = highlight ? "rgba(37, 99, 235, 0.09)" : ri % 2 === 1 ? theme.surface : theme.card;
        return (
          <React.Fragment key={row.empresa}>
            <div
              style={{
                padding: "14px 16px",
                fontSize: 16,
                fontWeight: highlight ? 800 : 700,
                color: highlight ? "#1D4ED8" : theme.text,
                borderBottom: ri < rows.length - 1 ? `1px solid ${theme.borderSubtle}` : undefined,
                borderRight: `1px solid ${theme.borderLight}`,
                backgroundColor: rowBg,
                display: "flex",
                alignItems: "center",
                lineHeight: 1.3,
              }}
            >
              {row.empresa}
            </div>
            {(["federal", "estadual", "municipal", "siafic"] as const).map((col) => (
              <div
                key={col}
                style={{
                  padding: "14px 16px",
                  borderBottom: ri < rows.length - 1 ? `1px solid ${theme.borderSubtle}` : undefined,
                  borderRight: col !== "siafic" ? `1px solid ${theme.borderLight}` : undefined,
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
    <p
      style={{
        margin: "12px 0 0",
        fontSize: 15,
        color: theme.textMuted,
        fontWeight: 600,
        flexShrink: 0,
        display: "flex",
        gap: 20,
        flexWrap: "wrap",
      }}
    >
      <span>
        <span style={{ color: statusIcon.full.color, fontWeight: 800 }}>✔</span> Capacidade plena
      </span>
      <span>
        <span style={{ color: statusIcon.partial.color, fontWeight: 800 }}>◐</span> Capacidade parcial
      </span>
      <span>
        <span style={{ color: statusIcon.none.color, fontWeight: 800 }}>✘</span> Não oferece / não certificado
      </span>
    </p>
  </div>
);
