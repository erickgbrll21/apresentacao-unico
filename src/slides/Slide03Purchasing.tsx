import React from "react";
import { AbsoluteFill } from "remotion";
import {
  PURCHASE_MODALIDADES,
  PURCHASE_SAZONALIDADE,
  PURCHASE_TICKET,
  TAM_BENEFICIO_PROJECTION,
} from "../data/presentationData";
import {
  TAM_PROJECTION_LEGEND,
  TamProjectionLineChart,
} from "../components/charts/TamProjectionLineChart";
import { BrandLogo } from "../components/ui/BrandLogo";
import { ProgressBar } from "../components/ui/ProgressBar";
import { theme } from "../theme";

const CREAM_BG = "#F9F8F4";

const cardStyle: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  borderRadius: 16,
  boxShadow: "0 4px 28px rgba(15, 23, 42, 0.07)",
};

type PurchaseCardProps = {
  icon: string;
  title: string;
  footer: string;
  items: typeof PURCHASE_MODALIDADES.items;
  startFrame?: number;
};

const PurchaseCard: React.FC<PurchaseCardProps> = ({ icon, title, footer, items, startFrame = 12 }) => (
  <div style={{ ...cardStyle, display: "flex", flexDirection: "column", height: "100%", padding: "16px 18px", boxSizing: "border-box" }}>
    <h3
      style={{
        margin: "0 0 10px",
        fontSize: 16,
        fontWeight: 700,
        color: theme.text,
        display: "flex",
        gap: 8,
        alignItems: "center",
      }}
    >
      <span>{icon}</span>
      {title}
    </h3>
    {items.map((m, i) => (
      <ProgressBar
        key={m.label}
        label={m.label}
        pct={m.pct}
        color={m.color}
        highlight={m.highlight}
        valueLabel={m.value ?? `${m.pct}%`}
        index={i}
        startFrame={startFrame}
      />
    ))}
    <p
      style={{
        margin: "auto 0 0",
        paddingTop: 10,
        fontSize: 13,
        fontWeight: 500,
        color: theme.textMuted,
        lineHeight: 1.45,
        borderTop: `1px solid ${theme.borderLight}`,
      }}
    >
      {footer}
    </p>
  </div>
);

const LegendItem: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500, color: theme.textMuted }}>
    <span style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: color }} />
    {label}
  </span>
);

export const Slide03Purchasing: React.FC = () => (
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
        padding: "20px 72px 32px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ ...cardStyle, flexShrink: 0, padding: "18px 22px 12px", marginBottom: 14 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: theme.text }}>
          TAM do Benefício Educação no Setor Público — Projeção 2024–Mar/2026
        </h2>
        <p style={{ margin: "6px 0 12px", fontSize: 14, fontWeight: 500, color: theme.textMuted, lineHeight: 1.45 }}>
          Total Addressable Market estimado por ticket médio mensal por servidor (R$ milhões/ano)
        </p>
        <div style={{ display: "flex", gap: 18, marginBottom: 8 }}>
          {TAM_PROJECTION_LEGEND.map((l) => (
            <LegendItem key={l.label} color={l.color} label={l.label} />
          ))}
        </div>
        <TamProjectionLineChart data={TAM_BENEFICIO_PROJECTION} chartWidth={1180} chartHeight={300} startFrame={16} />
      </div>

      <h2 style={{ margin: "0 0 10px", fontSize: 22, fontWeight: 700, color: theme.text, flexShrink: 0 }}>
        Comportamento de Compras Públicas de Capacitação
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, flex: 1, minHeight: 0 }}>
        <PurchaseCard
          icon="📋"
          title="Modalidades de Contratação"
          footer={PURCHASE_MODALIDADES.footer}
          items={PURCHASE_MODALIDADES.items}
          startFrame={20}
        />
        <PurchaseCard
          icon="📅"
          title="Sazonalidade — Abertura de Editais"
          footer={PURCHASE_SAZONALIDADE.footer}
          items={PURCHASE_SAZONALIDADE.items}
          startFrame={24}
        />
        <PurchaseCard
          icon="💰"
          title="Ticket Médio por Esfera"
          footer={PURCHASE_TICKET.footer}
          items={PURCHASE_TICKET.items}
          startFrame={28}
        />
      </div>
    </div>
  </AbsoluteFill>
);
