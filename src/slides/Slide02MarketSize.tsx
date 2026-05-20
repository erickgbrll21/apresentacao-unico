import React from "react";
import { AbsoluteFill } from "remotion";
import {
  CAPACITATION_STACKED_GROWTH,
  MARKET_SLIDE_SOURCE,
  SERVIDORES_ESFERA_2024,
  SIAFIC_BANNER,
} from "../data/presentationData";
import { StackedBarChart } from "../components/charts/StackedBarChart";
import { MarketShareDonut } from "../components/charts/MarketShareDonut";
import { DonutLegend } from "../components/charts/DonutChart";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";

const CREAM_BG = "#F9F8F4";
const BANNER_BG = "#EDE9FE";

const LegendItem: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500, color: theme.textMuted }}>
    <span style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: color, flexShrink: 0 }} />
    {label}
  </span>
);

const CardHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <>
    <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: theme.text }}>{title}</h3>
    <p style={{ margin: "6px 0 0", fontSize: 14, fontWeight: 500, color: theme.textMuted, lineHeight: 1.45 }}>{subtitle}</p>
  </>
);

const cardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "18px 20px",
  boxSizing: "border-box",
  backgroundColor: "#FFFFFF",
  borderRadius: 16,
  boxShadow: "0 4px 28px rgba(15, 23, 42, 0.07)",
};

export const Slide02MarketSize: React.FC = () => (
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
        padding: "20px 72px 36px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ margin: "0 0 6px", fontSize: 36, fontWeight: 700, color: theme.text, flexShrink: 0 }}>
        Tamanho e Dinâmica do Mercado
      </h1>
      <p style={{ margin: "0 0 14px", fontSize: 16, fontWeight: 500, color: theme.textMuted, lineHeight: 1.45, flexShrink: 0 }}>
        {MARKET_SLIDE_SOURCE}
      </p>

      <div style={{ flexShrink: 0, marginBottom: 14 }}>
        <div
          style={{
            display: "flex",
            gap: 14,
            padding: "16px 20px",
            alignItems: "flex-start",
            backgroundColor: BANNER_BG,
            borderRadius: 12,
          }}
        >
          <span style={{ fontSize: 22, lineHeight: 1, flexShrink: 0 }}>⚡</span>
          <div>
            <p style={{ margin: 0, fontSize: 17, fontWeight: 700, color: theme.text, lineHeight: 1.35 }}>
              {SIAFIC_BANNER.title}
            </p>
            <p style={{ margin: "8px 0 0", fontSize: 15, fontWeight: 500, color: theme.textMuted, lineHeight: 1.55 }}>
              {SIAFIC_BANNER.body}
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, flex: 1, minHeight: 0, width: "100%" }}>
        <div style={cardStyle}>
          <CardHeader
            title="Distribuição de Servidores por Esfera — 2024"
            subtitle="Total: 12,65 milhões (IBGE MUNIC/ESTADIC + Ipea Atlas 2024)"
          />
          <div style={{ marginTop: 10, marginBottom: 4, display: "flex", gap: 16 }}>
            <DonutLegend data={SERVIDORES_ESFERA_2024} />
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0 }}>
            <MarketShareDonut data={SERVIDORES_ESFERA_2024} size={200} startFrame={26} />
          </div>
        </div>

        <div style={cardStyle}>
          <CardHeader
            title="Crescimento de Contratos Públicos de Capacitação"
            subtitle="Volume estimado de processos (R$ milhões) — PNCP 2024–Mar/2026"
          />
          <div style={{ display: "flex", gap: 16, marginTop: 10, marginBottom: 6, flexWrap: "wrap" }}>
            <LegendItem color="#3B82F6" label="EAD/Plataforma" />
            <LegendItem color="#059669" label="Presencial/In Company" />
            <LegendItem color="#F59E0B" label="Benefício/Subsídio" />
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0 }}>
            <StackedBarChart
              data={CAPACITATION_STACKED_GROWTH}
              startFrame={24}
              chartHeight={260}
              chartWidth={500}
              maxY={1200}
            />
          </div>
        </div>
      </div>
    </div>
  </AbsoluteFill>
);
