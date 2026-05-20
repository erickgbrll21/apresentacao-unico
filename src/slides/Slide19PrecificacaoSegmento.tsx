import React from "react";
import { PRICING_SEGMENTS } from "../data/presentationData";
import type { PricingSegmentCard } from "../data/presentationData";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";
import { AbsoluteFill } from "remotion";

const CREAM_BG = "#F9F8F4";

const cardShell: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  border: `1px solid ${theme.cardBorder}`,
  borderRadius: 16,
  boxShadow: "0 4px 28px rgba(15, 23, 42, 0.07)",
  boxSizing: "border-box",
  overflow: "hidden",
  height: "100%",
  width: "100%",
};

const cellStyle = (col: number, row: number): React.CSSProperties => ({
  gridColumn: col,
  gridRow: row,
  minWidth: 0,
  minHeight: 0,
  display: "flex",
});

const PriceDisplay: React.FC<{ price: string; accent: string }> = ({ price, accent }) => {
  const match = price.match(/^(R\$[\d.,]+[–-][\d.,]+)(\/serv\.\/mês)$/);
  if (!match) {
    return (
      <p style={{ margin: "0 0 14px", fontSize: 32, fontWeight: 800, color: accent, lineHeight: 1.05 }}>
        {price}
      </p>
    );
  }
  return (
    <p style={{ margin: "0 0 14px", lineHeight: 1.05 }}>
      <span style={{ fontSize: 32, fontWeight: 800, color: accent, letterSpacing: "-0.02em" }}>{match[1]}</span>
      <span style={{ fontSize: 18, fontWeight: 600, color: theme.textMuted }}>{match[2]}</span>
    </p>
  );
};

const PricingCard: React.FC<PricingSegmentCard> = ({ icon, title, price, features, ltv, accent }) => (
  <div style={{ ...cardShell, padding: "18px 20px", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
      <span style={{ fontSize: 22, lineHeight: 1 }} aria-hidden>
        {icon}
      </span>
      <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: accent, lineHeight: 1.3 }}>{title}</p>
    </div>

    <PriceDisplay price={price} accent={accent} />

    <ul
      style={{
        margin: 0,
        padding: "0 0 0 18px",
        flex: 1,
        listStyle: "disc",
        color: theme.textMuted,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.5,
      }}
    >
      {features.map((item) => (
        <li key={item} style={{ marginBottom: 5 }}>
          {item}
        </li>
      ))}
    </ul>

    <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${theme.borderLight}` }}>
      {(() => {
        const ltvMatch = ltv.match(/^(LTV 5 anos:)\s*(.+)$/);
        if (!ltvMatch) {
          return <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: theme.text }}>{ltv}</p>;
        }
        return (
          <p style={{ margin: 0, fontSize: 13, color: theme.text }}>
            <span style={{ fontWeight: 500 }}>{ltvMatch[1]} </span>
            <span style={{ fontWeight: 700 }}>{ltvMatch[2]}</span>
          </p>
        );
      })()}
    </div>
  </div>
);

export const Slide19PrecificacaoSegmento: React.FC = () => {
  const [pequeno, medio, grande, estadual] = PRICING_SEGMENTS;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: CREAM_BG,
        fontFamily: "var(--font-sans), system-ui, -apple-system, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          padding: "12px 48px 24px 48px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 24,
            flexShrink: 0,
            marginBottom: 16,
            minHeight: 56,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 34,
              fontWeight: 700,
              color: theme.text,
              lineHeight: 1.2,
              flex: 1,
              minWidth: 0,
              fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
            }}
          >
            Modelo de Precificação Recomendado por Segmento Público
          </h1>
          <BrandLogo layout="inline" height={52} mixBlendMode="multiply" />
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gridTemplateRows: "1fr 1fr",
            gap: 14,
            alignItems: "stretch",
          }}
        >
          <div style={cellStyle(1, 1)}>
            <PricingCard {...pequeno} />
          </div>
          <div style={cellStyle(2, 1)}>
            <PricingCard {...medio} />
          </div>
          <div style={cellStyle(3, 1)}>
            <PricingCard {...grande} />
          </div>
          <div style={cellStyle(1, 2)}>
            <PricingCard {...estadual} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
