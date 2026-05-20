import React from "react";
import { AbsoluteFill } from "remotion";
import { LICITACOES_PRODUTO, LICITACOES_VENCEDORES } from "../data/presentationData";
import { HorizontalBarChart } from "../components/charts/HorizontalBarChart";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";

const CREAM_BG = "#F9F8F4";

const cardStyle: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  borderRadius: 16,
  boxShadow: "0 4px 28px rgba(15, 23, 42, 0.07)",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "20px 22px",
  boxSizing: "border-box",
  minHeight: 0,
};

const LegendItem: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, color: theme.textMuted }}>
    <span style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: color, flexShrink: 0 }} />
    {label}
  </span>
);

const ChartCard: React.FC<{
  title: string;
  subtitle: string;
  legend: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, subtitle, legend, children }) => (
  <div style={cardStyle}>
    <h3 style={{ margin: 0, fontSize: 19, fontWeight: 700, color: theme.text, lineHeight: 1.25 }}>{title}</h3>
    <p style={{ margin: "8px 0 0", fontSize: 14, fontWeight: 500, color: theme.textMuted, lineHeight: 1.4 }}>
      {subtitle}
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 14px", marginTop: 12, marginBottom: 4 }}>
      {legend}
    </div>
    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0, overflow: "hidden", width: "100%" }}>
      {children}
    </div>
  </div>
);

export const Slide07Licitacoes: React.FC = () => (
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
        padding: "20px 72px 28px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ margin: "0 0 6px", fontSize: 36, fontWeight: 700, color: theme.text, flexShrink: 0 }}>
        Licitações Reais — Capacitação no Setor Público
      </h1>
      <p
        style={{
          margin: "0 0 16px",
          fontSize: 17,
          fontWeight: 500,
          color: theme.textMuted,
          lineHeight: 1.45,
          flexShrink: 0,
          maxWidth: "85%",
        }}
      >
        Casos mapeados no PNCP, Compras.gov.br e portais de transparência de órgãos públicos — 2024 – Mar/2026.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          flex: 1,
          minHeight: 0,
          alignItems: "stretch",
        }}
      >
        <ChartCard
          title="Volume de Contratos por Tipo de Capacitação"
          subtitle="Estimativa de processos abertos — 2024 – Mar/2026 (PNCP)"
          legend={<LegendItem color="#3B82F6" label="Qtd. processos" />}
        >
          <HorizontalBarChart
            data={LICITACOES_PRODUTO}
            maxValue={3700}
            xTicks={[0, 1000, 2000, 3000, 3700]}
            chartHeight={300}
            chartWidth={680}
            labelWidth={200}
            labelFontSize={13}
            tickFontSize={12}
            roundedBarEnd
            labelColor="#0F172A"
            barGlow
            startFrame={20}
          />
        </ChartCard>

        <ChartCard
          title="Empresas com Maior Presença em Contratos Públicos de Capacitação"
          subtitle="Estimativa de contratos ativos no setor público"
          legend={<LegendItem color="#3B82F6" label="Contratos ativos estimados" />}
        >
          <HorizontalBarChart
            data={LICITACOES_VENCEDORES}
            maxValue={580}
            xTicks={[0, 200, 400, 580]}
            chartHeight={300}
            chartWidth={680}
            labelWidth={120}
            labelFontSize={14}
            tickFontSize={13}
            roundedBarEnd
            labelColor="#0F172A"
            barGlow
            startFrame={28}
          />
        </ChartCard>
      </div>
    </div>
  </AbsoluteFill>
);
