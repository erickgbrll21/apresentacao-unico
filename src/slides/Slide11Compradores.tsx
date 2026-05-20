import React from "react";
import { AbsoluteFill } from "remotion";
import { AREA_SERVIDORES, BUBBLE_SEGMENTS } from "../data/presentationData";
import { BubbleChart } from "../components/charts/BubbleChart";
import { AreaAtuacaoDonut } from "../components/charts/AreaAtuacaoDonut";
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

const ChartCard: React.FC<{
  title: string;
  subtitle: string;
  children: React.ReactNode;
}> = ({ title, subtitle, children }) => (
  <div style={cardStyle}>
    <h3 style={{ margin: 0, fontSize: 19, fontWeight: 700, color: theme.text, lineHeight: 1.25 }}>{title}</h3>
    <p style={{ margin: "8px 0 0", fontSize: 14, fontWeight: 500, color: theme.textMuted, lineHeight: 1.4 }}>
      {subtitle}
    </p>
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 0,
        marginTop: 12,
        overflow: "visible",
      }}
    >
      {children}
    </div>
  </div>
);

export const Slide11Compradores: React.FC = () => (
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
      <h1 style={{ margin: "0 0 6px", fontSize: 36, fontWeight: 700, color: theme.text, flexShrink: 0, lineHeight: 1.2 }}>
        Quem Mais Compra — Radiografia dos Compradores
      </h1>
      <p
        style={{
          margin: "0 0 16px",
          fontSize: 17,
          fontWeight: 500,
          color: theme.textMuted,
          lineHeight: 1.45,
          flexShrink: 0,
          maxWidth: "90%",
        }}
      >
        Os segmentos com maior volume, frequência e atratividade para o benefício educacional público.
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
          title="Distribuição de Servidores por Área de Atuação"
          subtitle="5 em cada 10 servidores municipais atuam em Educação ou Saúde (IBGE 2024)"
        >
          <AreaAtuacaoDonut data={AREA_SERVIDORES} size={200} startFrame={18} />
        </ChartCard>

        <ChartCard
          title="Atratividade por Segmento — Ticket × Volume de Servidores"
          subtitle="Bolha = potencial de receita (tamanho = TAM relativo)"
        >
          <BubbleChart data={BUBBLE_SEGMENTS} width={500} height={360} startFrame={14} compradoresLayout />
        </ChartCard>
      </div>
    </div>
  </AbsoluteFill>
);
