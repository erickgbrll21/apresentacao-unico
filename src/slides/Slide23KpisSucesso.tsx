import React from "react";
import { SUCCESS_BADGES, SUCCESS_CLOSING, SUCCESS_KPIS } from "../data/presentationData";
import type { SuccessKpiCard } from "../data/presentationData";
import { GlassCard } from "../components/ui/GlassCard";
import { SlideShell } from "../components/ui/SlideShell";
import { theme } from "../theme";

const KpiCard: React.FC<SuccessKpiCard & { index: number }> = ({
  kpiLabel,
  icon,
  value,
  description,
  footer,
  accent,
  footerBg,
  footerBorder,
  index,
}) => (
  <GlassCard index={index} className="h-full w-full">
    <div
      style={{
        height: "100%",
        boxSizing: "border-box",
        padding: "20px 22px 18px",
        display: "flex",
        flexDirection: "column",
        borderTop: `3px solid ${accent}`,
      }}
    >
      <span style={{ fontSize: 28, lineHeight: 1 }} aria-hidden>
        {icon}
      </span>
      <p style={{ margin: "14px 0 0", fontSize: 14, fontWeight: 700, color: accent, lineHeight: 1.3 }}>{kpiLabel}</p>
      <p
        style={{
          margin: "12px 0 0",
          fontSize: 56,
          fontWeight: 800,
          color: accent,
          lineHeight: 1,
          letterSpacing: "-0.03em",
        }}
      >
        {value}
      </p>
      <p style={{ margin: "14px 0 0", fontSize: 14, fontWeight: 500, color: theme.textMuted, lineHeight: 1.45, flex: 1 }}>
        {description}
      </p>
      <div
        style={{
          marginTop: 14,
          padding: "12px 14px",
          borderRadius: 10,
          backgroundColor: footerBg,
          border: `1px solid ${footerBorder}`,
        }}
      >
        <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: accent, lineHeight: 1.4 }}>{footer}</p>
      </div>
    </div>
  </GlassCard>
);

export const Slide23KpisSucesso: React.FC = () => (
  <SlideShell showHud={false}>
    <h1 style={{ margin: "0 0 12px", fontSize: 34, fontWeight: 700, color: theme.text, flexShrink: 0, lineHeight: 1.2 }}>
      Os 3 KPIs que Definem o Sucesso
    </h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 14,
        flex: "1 1 0",
        minHeight: 0,
        maxHeight: "50%",
        marginBottom: 12,
      }}
    >
      {SUCCESS_KPIS.map((kpi, index) => (
        <KpiCard key={kpi.kpiLabel} {...kpi} index={index} />
      ))}
    </div>

    <div style={{ flex: "0 0 auto", minHeight: 380, width: "100%" }}>
      <GlassCard index={3} className="h-full w-full">
        <div
          style={{
            padding: "48px 40px 52px",
            minHeight: 380,
            height: "100%",
            boxSizing: "border-box",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 40, lineHeight: 1 }} aria-hidden>
            {SUCCESS_CLOSING.icon}
          </span>
          <h2
            style={{
              margin: "20px auto 0",
              maxWidth: 1100,
              fontSize: 26,
              fontWeight: 800,
              color: theme.text,
              lineHeight: 1.35,
            }}
          >
            {SUCCESS_CLOSING.headline}
          </h2>
          <p
            style={{
              margin: "20px auto 0",
              maxWidth: 1040,
              fontSize: 17,
              fontWeight: 500,
              color: theme.textMuted,
              lineHeight: 1.55,
            }}
          >
            {SUCCESS_CLOSING.body}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              marginTop: 28,
            }}
          >
            {SUCCESS_BADGES.map((badge) => (
              <span
                key={badge.label}
                style={{
                  padding: "10px 16px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 700,
                  color: badge.color,
                  backgroundColor: badge.bg,
                  border: `1px solid ${badge.border}`,
                  whiteSpace: "nowrap",
                }}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  </SlideShell>
);
