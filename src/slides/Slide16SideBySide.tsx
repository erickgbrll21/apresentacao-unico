import React from "react";
import { AbsoluteFill } from "remotion";
import { SANKHYA_VS_TOTVS } from "../data/presentationData";
import type { SankhyaTotvsTone } from "../data/presentationData";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";

const CREAM_BG = "#F9F8F4";
const CARD_BG = "#FFFFFF";

const toneColor: Record<SankhyaTotvsTone, string> = {
  positive: "#059669",
  negative: "#DC2626",
  warning: "#D97706",
  neutral: theme.textMuted,
};

const ComparisonCard: React.FC<{
  badge: string;
  badgeBg: string;
  title: string;
  titleColor: string;
  subtitle: string;
  valueKey: "sankhya" | "totvs";
  toneKey: "sankhyaTone" | "totvsTone";
}> = ({ badge, badgeBg, title, titleColor, subtitle, valueKey, toneKey }) => (
  <div
    style={{
      backgroundColor: CARD_BG,
      border: `1px solid ${theme.cardBorder}`,
      borderRadius: 16,
      boxShadow: "0 4px 28px rgba(15, 23, 42, 0.07)",
      padding: "20px 24px",
      boxSizing: "border-box",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexShrink: 0 }}>
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: 8,
          backgroundColor: badgeBg,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: 15,
          flexShrink: 0,
        }}
      >
        {badge}
      </span>
      <div>
        <p style={{ margin: 0, fontSize: 20, fontWeight: 700, color: titleColor, lineHeight: 1.25 }}>
          {title}
        </p>
        <p style={{ margin: "6px 0 0", fontSize: 14, fontWeight: 500, color: theme.textMuted, lineHeight: 1.4 }}>
          {subtitle}
        </p>
      </div>
    </div>
    {SANKHYA_VS_TOTVS.rows.map((row) => (
      <div
        key={row.criterio}
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          padding: "9px 0",
          borderBottom: `1px solid ${theme.borderLight}`,
          fontSize: 15,
          lineHeight: 1.35,
        }}
      >
        <span style={{ color: theme.textMuted, fontWeight: 500, display: "flex", gap: 6, minWidth: 0 }}>
          <span style={{ flexShrink: 0 }}>{row.icon}</span>
          <span>{row.criterio}</span>
        </span>
        <span style={{ fontWeight: 700, color: toneColor[row[toneKey]], textAlign: "right", flexShrink: 0, maxWidth: "52%" }}>
          {row[valueKey]}
        </span>
      </div>
    ))}
  </div>
);

export const Slide16SideBySide: React.FC = () => (
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
        padding: "16px 72px 24px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ margin: "0 0 14px", fontSize: 28, fontWeight: 700, color: theme.text, flexShrink: 0 }}>
        Side-by-Side: Unico Skill vs. IBEGESP — Proposta de Valor
      </h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1, minHeight: 0 }}>
        <ComparisonCard
          badge="US"
          badgeBg="#2563EB"
          title="Unico Skill"
          titleColor="#2563EB"
          subtitle={SANKHYA_VS_TOTVS.sankhyaHeader}
          valueKey="sankhya"
          toneKey="sankhyaTone"
        />
        <ComparisonCard
          badge="IG"
          badgeBg="#EF4444"
          title="IBEGESP / Educamundo"
          titleColor="#EF4444"
          subtitle={SANKHYA_VS_TOTVS.totvsHeader}
          valueKey="totvs"
          toneKey="totvsTone"
        />
      </div>
    </div>
  </AbsoluteFill>
);
