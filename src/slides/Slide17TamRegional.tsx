import React from "react";
import { AbsoluteFill } from "remotion";
import { MARKET_COVERAGE, MARKET_COVERAGE_COLORS, TAM_REGION, TAM_REGION_FOOTNOTE } from "../data/presentationData";
import { GroupedBarChart } from "../components/charts/GroupedBarChart";
import { HorizontalBarChart } from "../components/charts/HorizontalBarChart";
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
  minHeight: 0,
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

const LegendItem: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 500, color: theme.textMuted }}>
    <span style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: color, flexShrink: 0 }} />
    {label}
  </span>
);

export const Slide17TamRegional: React.FC = () => (
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
        padding: "16px 240px 20px 48px",
        boxSizing: "border-box",
        gap: 10,
      }}
    >
      <div style={{ flexShrink: 0, minHeight: 64 }}>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            fontWeight: 500,
            color: theme.textMuted,
            lineHeight: 1.45,
          }}
        >
          {TAM_REGION_FOOTNOTE}
        </p>
      </div>

      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
          marginTop: 4,
        }}
      >
        <div style={{ ...cardShell, padding: "16px 18px" }}>
          <h3
            style={{
              margin: 0,
              fontSize: 17,
              fontWeight: 700,
              color: theme.text,
              lineHeight: 1.3,
              fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
            }}
          >
            TAM por Região – Benefício Educação Público (R$ milhões/ano)
          </h3>
          <p style={{ margin: "6px 0 10px", fontSize: 14, fontWeight: 500, color: theme.textMuted, lineHeight: 1.4 }}>
            Total Addressable Market estimado com ticket R$80/servidor/mês por região
          </p>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0 }}>
            <HorizontalBarChart
              data={TAM_REGION}
              maxValue={5600}
              xTicks={[0, 1000, 2000, 3000, 4000, 5600]}
              formatXTick={(t) => `R$${t}M`}
              chartHeight={320}
              chartWidth={760}
              labelWidth={100}
              roundedBarEnd
              labelColor="#0F172A"
              labelFontSize={15}
              tickFontSize={12}
              startFrame={20}
            />
          </div>
        </div>

        <div style={{ ...cardShell, padding: "16px 18px" }}>
          <h3
            style={{
              margin: 0,
              fontSize: 17,
              fontWeight: 700,
              color: theme.text,
              lineHeight: 1.3,
              fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
            }}
          >
            Cobertura de Concorrentes vs. Oportunidade Aberta por Região
          </h3>
          <p style={{ margin: "6px 0 10px", fontSize: 14, fontWeight: 500, color: theme.textMuted, lineHeight: 1.4 }}>
            % do mercado regional já coberto por modelo de benefício contínuo
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", marginBottom: 8, flexShrink: 0 }}>
            <LegendItem color={MARKET_COVERAGE_COLORS.competitor} label="Coberto por concorrentes %" />
            <LegendItem color={MARKET_COVERAGE_COLORS.open} label="Mercado aberto %" />
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0, width: "100%" }}>
            <GroupedBarChart
              data={MARKET_COVERAGE}
              startFrame={22}
              chartWidth={600}
              chartHeight={340}
              maxY={115}
              yTicks={[0, 20, 40, 60, 80, 100, 115]}
              competitorColor={MARKET_COVERAGE_COLORS.competitor}
              openColor={MARKET_COVERAGE_COLORS.open}
            />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", marginTop: 4, flexShrink: 0, justifyContent: "center" }}>
            <LegendItem color={MARKET_COVERAGE_COLORS.competitor} label="Coberto por concorrentes %" />
            <LegendItem color={MARKET_COVERAGE_COLORS.open} label="Mercado aberto %" />
          </div>
        </div>
      </div>
    </div>
  </AbsoluteFill>
);
