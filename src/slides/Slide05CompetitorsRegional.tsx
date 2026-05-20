import React from "react";
import { AbsoluteFill } from "remotion";
import { COMPETITORS_MED, GOV_CAPABILITY_MATRIX } from "../data/presentationData";
import { CompetitorCard } from "../components/ui/CompetitorCard";
import { GovCapabilityMatrixTable } from "../components/charts/GovCapabilityMatrixTable";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";

const CREAM_BG = "#F9F8F4";
const INFO_BG = "#E8F0FE";
const INFO_BORDER = "#C6D9FB";
const INFO_TEXT = "#3C78D8";

export const Slide05CompetitorsRegional: React.FC = () => (
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
        gap: 12,
      }}
    >
      <h1 style={{ margin: "0 0 6px", fontSize: 36, fontWeight: 700, color: theme.text, flexShrink: 0 }}>
        Mapeamento de Concorrentes
      </h1>
      <p
        style={{
          margin: "0 0 10px",
          fontSize: 17,
          fontWeight: 500,
          color: theme.textMuted,
          lineHeight: 1.45,
          flexShrink: 0,
          maxWidth: "78%",
        }}
      >
        Quem atende o setor público em capacitação e benefício educacional — e onde a Unico Skill tem vantagem
        real.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          padding: "12px 16px",
          marginBottom: 2,
          borderRadius: 10,
          backgroundColor: INFO_BG,
          border: `1px solid ${INFO_BORDER}`,
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 16, lineHeight: 1.4 }}>⚡</span>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: INFO_TEXT, lineHeight: 1.45 }}>
          Ameaça avaliada por presença em licitações, portfólio GovTech, volume de contratos e capacidade de
          implantação pública.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          flexShrink: 0,
          alignItems: "stretch",
          minHeight: 300,
        }}
      >
        {COMPETITORS_MED.map((c, i) => (
          <CompetitorCard key={c.name} {...c} index={i} compact descriptionSize={14} tagBackground="#F0EEE9" />
        ))}
      </div>
      <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        <GovCapabilityMatrixTable rows={GOV_CAPABILITY_MATRIX} />
      </div>
    </div>
  </AbsoluteFill>
);
