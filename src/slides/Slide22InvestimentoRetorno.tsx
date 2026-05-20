import React from "react";
import { AbsoluteFill } from "remotion";
import {
  INVESTMENT_BY_PHASE,
  INVESTMENT_PHASE_LEGEND,
  INVESTMENT_PHASE_LEGEND_SHORT,
  INVESTMENT_PHASE_SUBTITLE,
  PAYBACK_LEGEND,
  PAYBACK_SERIES,
  PAYBACK_SUBTITLE,
  SUCCESS_KPIS,
  SUCCESS_KPIS_SECTION_TITLE,
} from "../data/presentationData";
import type { SuccessKpiCard } from "../data/presentationData";
import { InvestmentPhaseStackedChart } from "../components/charts/InvestmentPhaseStackedChart";
import { PaybackDualLineChart } from "../components/charts/PaybackDualLineChart";
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
  height: "100%",
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
};

const LegendItem: React.FC<{ color: string; label: string; compact?: boolean }> = ({
  color,
  label,
  compact,
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: compact ? 11 : 12,
      fontWeight: 500,
      color: theme.textMuted,
    }}
  >
    <span style={{ width: compact ? 9 : 10, height: compact ? 9 : 10, borderRadius: 2, backgroundColor: color, flexShrink: 0 }} />
    {label}
  </span>
);

const ChartCard: React.FC<{
  title: string;
  subtitle: string;
  legend: React.ReactNode;
  footerLegend?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, subtitle, legend, footerLegend, children }) => (
  <div style={cardShell}>
    <div style={{ padding: "12px 14px 8px", flexShrink: 0 }}>
      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: theme.text, lineHeight: 1.25 }}>{title}</h3>
      <p style={{ margin: "6px 0 0", fontSize: 12, fontWeight: 500, color: theme.textMuted, lineHeight: 1.4 }}>{subtitle}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 10px", marginTop: 8 }}>{legend}</div>
    </div>
    <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 8px" }}>
      {children}
    </div>
    {footerLegend && (
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px 12px",
          padding: "6px 12px 10px",
          borderTop: `1px solid ${theme.borderLight}`,
        }}
      >
        {footerLegend}
      </div>
    )}
  </div>
);

const KpiCard: React.FC<SuccessKpiCard> = ({
  kpiLabel,
  icon,
  value,
  description,
  footer,
  accent,
  footerBg,
  footerBorder,
}) => (
  <div style={{ ...cardShell, borderTop: `3px solid ${accent}` }}>
    <div
      style={{
        height: "100%",
        boxSizing: "border-box",
        padding: "12px 14px 10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span style={{ fontSize: 22, lineHeight: 1 }} aria-hidden>
        {icon}
      </span>
      <p style={{ margin: "8px 0 0", fontSize: 12, fontWeight: 700, color: accent, lineHeight: 1.3 }}>{kpiLabel}</p>
      <p
        style={{
          margin: "6px 0 0",
          fontSize: 40,
          fontWeight: 800,
          color: accent,
          lineHeight: 1,
          letterSpacing: "-0.03em",
        }}
      >
        {value}
      </p>
      <p style={{ margin: "8px 0 0", fontSize: 12, fontWeight: 500, color: theme.textMuted, lineHeight: 1.4, flex: 1 }}>
        {description}
      </p>
      <div
        style={{
          marginTop: 8,
          padding: "8px 10px",
          borderRadius: 8,
          backgroundColor: footerBg,
          border: `1px solid ${footerBorder}`,
        }}
      >
        <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: accent, lineHeight: 1.35 }}>{footer}</p>
      </div>
    </div>
  </div>
);

export const Slide22InvestimentoRetorno: React.FC = () => (
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
        padding: "10px 48px 16px 48px",
        boxSizing: "border-box",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 20,
          flexShrink: 0,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 32,
            fontWeight: 700,
            color: theme.text,
            lineHeight: 1.2,
            flex: 1,
            minWidth: 0,
            fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
          }}
        >
          Investimento Estimado × Retorno Projetado
        </h1>
        <BrandLogo layout="inline" height={48} mixBlendMode="multiply" />
      </div>

      <div
        style={{
          flex: "1.05 1 0",
          minHeight: 0,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
        }}
      >
        <ChartCard
          title="Investimento por Fase (R$ milhões)"
          subtitle={INVESTMENT_PHASE_SUBTITLE}
          legend={INVESTMENT_PHASE_LEGEND.map((item) => (
            <LegendItem key={item.label} color={item.color} label={item.label} />
          ))}
          footerLegend={INVESTMENT_PHASE_LEGEND_SHORT.map((item) => (
            <LegendItem key={item.label} color={item.color} label={item.label} compact />
          ))}
        >
          <InvestmentPhaseStackedChart data={INVESTMENT_BY_PHASE} chartWidth={560} chartHeight={250} startFrame={18} />
        </ChartCard>

        <ChartCard
          title="Payback — Investimento Acumulado vs. ARR Gerado"
          subtitle={PAYBACK_SUBTITLE}
          legend={PAYBACK_LEGEND.map((item) => (
            <LegendItem key={item.label} color={item.color} label={item.label} />
          ))}
        >
          <PaybackDualLineChart data={PAYBACK_SERIES} width={560} height={250} startFrame={22} />
        </ChartCard>
      </div>

      <h2
        style={{
          margin: 0,
          flexShrink: 0,
          fontSize: 20,
          fontWeight: 700,
          color: theme.text,
          fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
        }}
      >
        {SUCCESS_KPIS_SECTION_TITLE}
      </h2>

      <div
        style={{
          flex: "0.95 1 0",
          minHeight: 0,
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 12,
        }}
      >
        {SUCCESS_KPIS.map((kpi) => (
          <KpiCard key={kpi.kpiLabel} {...kpi} />
        ))}
      </div>
    </div>
  </AbsoluteFill>
);
