import React from "react";
import { AbsoluteFill } from "remotion";
import {
  ARP_MULTIPLIER_DATA,
  ARP_MULTIPLIER_DESCRIPTION,
  ARP_MULTIPLIER_SUBTITLE,
} from "../data/presentationData";
import { ArpMultiplierBarChart } from "../components/charts/ArpMultiplierBarChart";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";

const CREAM_BG = "#F9F8F4";

const cardShell: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  border: `1px solid ${theme.cardBorder}`,
  borderRadius: 16,
  boxShadow: "0 4px 28px rgba(15, 23, 42, 0.07)",
  boxSizing: "border-box",
  overflow: "hidden",
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
};

export const Slide20EfeitoMultiplicadorARP: React.FC = () => (
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
          marginBottom: 14,
          minHeight: 52,
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
          Efeito Multiplicador — Ata de Registro de Preços (ARP)
        </h1>
        <BrandLogo layout="inline" height={52} mixBlendMode="multiply" />
      </div>

      <div style={cardShell}>
        <div
          style={{
            padding: "22px 28px 16px",
            flexShrink: 0,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: theme.text, lineHeight: 1.3 }}>
            {ARP_MULTIPLIER_SUBTITLE}
          </h2>
          <p
            style={{
              margin: "10px 0 0",
              fontSize: 16,
              fontWeight: 500,
              color: theme.textMuted,
              lineHeight: 1.45,
              maxWidth: 1100,
            }}
          >
            {ARP_MULTIPLIER_DESCRIPTION}
          </p>
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px 20px",
            boxSizing: "border-box",
          }}
        >
          <ArpMultiplierBarChart data={ARP_MULTIPLIER_DATA} chartWidth={1240} chartHeight={440} startFrame={20} />
        </div>
      </div>
    </div>
  </AbsoluteFill>
);
