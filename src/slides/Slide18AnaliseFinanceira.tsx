import React from "react";
import { AbsoluteFill } from "remotion";
import {
  ARR_SCENARIOS,
  FINANCIAL_REVENUE_KPIS,
  PUBLIC_PRIVATE_METRICS,
} from "../data/presentationData";
import { ARR_SCENARIO_LEGEND, ArrScenarioLineChart } from "../components/charts/LineChart";
import { PUBLIC_PRIVATE_LEGEND, PublicPrivateBarChart } from "../components/charts/PublicPrivateBarChart";
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
};

const LegendItem: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, color: theme.textMuted }}>
    <span style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: color, flexShrink: 0 }} />
    {label}
  </span>
);

export const Slide18AnaliseFinanceira: React.FC = () => (
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
        padding: "12px 48px 20px 48px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ flexShrink: 0, paddingRight: 200, marginBottom: 12 }}>
        <h1
          style={{
            margin: 0,
            fontSize: 34,
            fontWeight: 700,
            color: theme.text,
            lineHeight: 1.2,
            fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
          }}
        >
          Análise Financeira — Modelo de Receita Pública
        </h1>
        <p style={{ margin: "8px 0 0", fontSize: 16, fontWeight: 500, color: theme.textMuted, lineHeight: 1.45 }}>
          Como se comporta a receita do benefício educação no setor público e qual o potencial de ARR incremental para a
          Unico Skill.
        </p>
      </div>

      <div
        style={{
          ...cardShell,
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          flexShrink: 0,
          marginBottom: 14,
        }}
      >
        {FINANCIAL_REVENUE_KPIS.map((kpi, i) => (
          <div
            key={kpi.label}
            style={{
              padding: "14px 16px",
              borderRight: i < FINANCIAL_REVENUE_KPIS.length - 1 ? `1px solid ${theme.borderLight}` : undefined,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: 108,
            }}
          >
            <p style={{ margin: 0, fontSize: 28, fontWeight: 800, color: kpi.accent, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {kpi.value}
            </p>
            <p style={{ margin: "8px 0 0", fontSize: 13, fontWeight: 700, color: theme.text, lineHeight: 1.3 }}>{kpi.label}</p>
            <p
              style={{
                margin: "6px 0 0",
                fontSize: 12,
                fontWeight: 600,
                color: kpi.footerMuted ? theme.textMuted : "#059669",
                lineHeight: 1.35,
              }}
            >
              {kpi.footer}
            </p>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, minHeight: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ ...cardShell, padding: "16px 18px", display: "flex", flexDirection: "column", minHeight: 0 }}>
          <h3
            style={{
              margin: 0,
              fontSize: 17,
              fontWeight: 700,
              color: theme.text,
              lineHeight: 1.25,
              fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
            }}
          >
            Projeção ARR Unico Skill Gov — 3 Cenários
          </h3>
          <p style={{ margin: "6px 0 0", fontSize: 14, fontWeight: 500, color: theme.textMuted }}>
            Receita Anual Recorrente incremental (R$ milhões) — setor público
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 14px", marginTop: 10, marginBottom: 6 }}>
            {ARR_SCENARIO_LEGEND.map((l) => (
              <LegendItem key={l.label} color={l.color} label={l.label} />
            ))}
          </div>
          <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ArrScenarioLineChart data={ARR_SCENARIOS} width={820} height={268} showEndLabels startFrame={18} />
          </div>
        </div>

        <div style={{ ...cardShell, padding: "16px 18px", display: "flex", flexDirection: "column", minHeight: 0 }}>
          <h3
            style={{
              margin: 0,
              fontSize: 17,
              fontWeight: 700,
              color: theme.text,
              lineHeight: 1.25,
              fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
            }}
          >
            Público vs. Privado — Métricas de Negócio Comparadas
          </h3>
          <p style={{ margin: "6px 0 0", fontSize: 14, fontWeight: 500, color: theme.textMuted }}>
            Como o setor público se compara ao privado para a Unico Skill
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 14px", marginTop: 10, marginBottom: 6 }}>
            {PUBLIC_PRIVATE_LEGEND.map((l) => (
              <LegendItem key={l.label} color={l.color} label={l.label} />
            ))}
          </div>
          <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <PublicPrivateBarChart data={PUBLIC_PRIVATE_METRICS} chartWidth={560} chartHeight={268} startFrame={24} />
          </div>
        </div>
      </div>
    </div>
  </AbsoluteFill>
);
