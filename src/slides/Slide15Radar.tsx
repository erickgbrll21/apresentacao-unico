import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  PRESENCA_SEGMENTO,
  SANKHYA_VS_TOTVS,
  SANKHYA_VS_TOTVS_RADAR,
  type SankhyaTotvsTone,
} from "../data/presentationData";
import { PRESENCA_LEGEND, PresencaSegmentoChart } from "../components/charts/PresencaSegmentoChart";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";

const CREAM_BG = "#F9F8F4";
const CARD_BG = "#FFFFFF";

const RADAR_COLORS = {
  unico: "#2563EB",
  uol: "#F59E0B",
  ibegesp: "#EF4444",
} as const;

const toneColor: Record<SankhyaTotvsTone, string> = {
  positive: "#059669",
  negative: "#DC2626",
  warning: "#D97706",
  neutral: "#EA580C",
};

const cardShell: React.CSSProperties = {
  backgroundColor: CARD_BG,
  border: `1px solid ${theme.cardBorder}`,
  borderRadius: 16,
  boxShadow: "0 4px 28px rgba(15, 23, 42, 0.07)",
  boxSizing: "border-box",
  overflow: "hidden",
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
};

const valueColor = (valueKey: "sankhya" | "totvs", criterio: string, tone: SankhyaTotvsTone) => {
  if (valueKey === "sankhya" && criterio === "Cursos disponíveis") return "#2563EB";
  return toneColor[tone];
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
  <div style={{ ...cardShell, padding: "12px 16px", flex: 1 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexShrink: 0 }}>
      <span
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          backgroundColor: badgeBg,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: 13,
          flexShrink: 0,
        }}
      >
        {badge}
      </span>
      <div>
        <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: titleColor, lineHeight: 1.25 }}>{title}</p>
        <p style={{ margin: "3px 0 0", fontSize: 12, fontWeight: 500, color: theme.textMuted, lineHeight: 1.35 }}>
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
          gap: 8,
          padding: "5px 0",
          borderBottom: `1px solid ${theme.borderLight}`,
          fontSize: 13,
          lineHeight: 1.3,
        }}
      >
        <span style={{ color: theme.textMuted, fontWeight: 500, display: "flex", gap: 5, minWidth: 0 }}>
          <span style={{ flexShrink: 0 }}>{row.icon}</span>
          <span>{row.criterio}</span>
        </span>
        <span
          style={{
            fontWeight: 700,
            color: valueColor(valueKey, row.criterio, row[toneKey]),
            textAlign: "right",
            flexShrink: 0,
            maxWidth: "54%",
          }}
        >
          {row[valueKey]}
        </span>
      </div>
    ))}
  </div>
);

export const Slide15Radar: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - 18, fps, config: { damping: 20, stiffness: 60 } });
  const cx = 200;
  const cy = 158;
  const r = 108;
  const labelOffset = 20;
  const dims = SANKHYA_VS_TOTVS_RADAR;

  const point = (angle: number, value: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    const dist = (value / 100) * r * progress;
    return { x: cx + dist * Math.cos(rad), y: cy + dist * Math.sin(rad) };
  };

  const angles = dims.map((_, i) => (360 / dims.length) * i);

  const pathFor = (key: "sankhya" | "totvs" | "betha") => {
    const pts = dims.map((d, i) => point(angles[i], d[key]));
    return pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
  };

  const dotsFor = (key: "sankhya" | "totvs" | "betha", color: string) =>
    dims.map((d, i) => {
      const p = point(angles[i], d[key]);
      return <circle key={`${key}-${i}`} cx={p.x} cy={p.y} r={3.5} fill={CARD_BG} stroke={color} strokeWidth={2} />;
    });

  return (
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
        }}
      >
        <h1
          style={{
            margin: "0 0 6px",
            fontSize: 36,
            fontWeight: 700,
            color: theme.text,
            flexShrink: 0,
            maxWidth: "78%",
            lineHeight: 1.2,
          }}
        >
          Comparativo Estratégico
        </h1>
        <p
          style={{
            margin: "0 0 12px",
            fontSize: 17,
            fontWeight: 500,
            color: theme.textMuted,
            lineHeight: 1.45,
            flexShrink: 0,
            maxWidth: "85%",
          }}
        >
          Radar competitivo, penetração por segmento de governo e comparativo de proposta de valor Unico Skill × IBEGESP.
        </p>

        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            flex: "0 0 44%",
            minHeight: 0,
          }}
        >
          <div style={{ ...cardShell, padding: "12px 14px" }}>
            <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: theme.text }}>
              Radar — Unico Skill × UOL Edtech × IBEGESP
            </h3>
            <p style={{ margin: "4px 0 6px", fontSize: 12, fontWeight: 500, color: theme.textMuted }}>
              6 dimensões competitivas no setor público (0–100)
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 12px", marginBottom: 4, flexShrink: 0 }}>
              {[
                { label: "Unico Skill", color: RADAR_COLORS.unico },
                { label: "UOL Edtech", color: RADAR_COLORS.uol },
                { label: "IBEGESP", color: RADAR_COLORS.ibegesp },
              ].map((item) => (
                <span
                  key={item.label}
                  style={{ fontSize: 11, color: theme.textMuted, display: "flex", gap: 5, alignItems: "center" }}
                >
                  <span style={{ width: 9, height: 9, borderRadius: 2, backgroundColor: item.color, flexShrink: 0 }} />
                  {item.label}
                </span>
              ))}
            </div>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0 }}>
              <svg width="100%" height="100%" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet">
                {[20, 40, 60, 80, 100].map((level) => (
                  <circle
                    key={level}
                    cx={cx}
                    cy={cy}
                    r={(level / 100) * r}
                    fill="none"
                    stroke={theme.chartGrid}
                    strokeWidth={1}
                  />
                ))}
                {angles.map((a, i) => {
                  const rad = ((a - 90) * Math.PI) / 180;
                  return (
                    <line
                      key={i}
                      x1={cx}
                      y1={cy}
                      x2={cx + r * Math.cos(rad)}
                      y2={cy + r * Math.sin(rad)}
                      stroke={theme.chartGrid}
                      strokeWidth={1}
                    />
                  );
                })}
                <path
                  d={pathFor("betha")}
                  fill="rgba(239,68,68,0.08)"
                  stroke={RADAR_COLORS.ibegesp}
                  strokeWidth={2}
                  strokeDasharray="6 4"
                />
                {dotsFor("betha", RADAR_COLORS.ibegesp)}
                <path
                  d={pathFor("totvs")}
                  fill="rgba(245,158,11,0.08)"
                  stroke={RADAR_COLORS.uol}
                  strokeWidth={2}
                  strokeDasharray="6 4"
                />
                {dotsFor("totvs", RADAR_COLORS.uol)}
                <path d={pathFor("sankhya")} fill="rgba(37,99,235,0.1)" stroke={RADAR_COLORS.unico} strokeWidth={2.5} />
                {dotsFor("sankhya", RADAR_COLORS.unico)}
                {dims.map((d, i) => {
                  const rad = ((angles[i] - 90) * Math.PI) / 180;
                  const lx = cx + (r + labelOffset) * Math.cos(rad);
                  const ly = cy + (r + labelOffset) * Math.sin(rad);
                  return (
                    <text
                      key={d.dimension}
                      x={lx}
                      y={ly}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={theme.chartLabel}
                      fontSize={10}
                      fontWeight={600}
                    >
                      {d.dimension}
                    </text>
                  );
                })}
              </svg>
            </div>
          </div>

          <div style={{ ...cardShell, padding: "12px 14px" }}>
            <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: theme.text }}>
              Presença por Segmento de Governo
            </h3>
            <p style={{ margin: "4px 0 6px", fontSize: 12, fontWeight: 500, color: theme.textMuted }}>
              % de penetração estimada por esfera
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 10px", marginBottom: 4, flexShrink: 0 }}>
              {PRESENCA_LEGEND.map((s) => (
                <span
                  key={s.label}
                  style={{ fontSize: 11, color: theme.textMuted, display: "flex", gap: 4, alignItems: "center" }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: s.color }} />
                  {s.label}
                </span>
              ))}
            </div>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0 }}>
              <PresencaSegmentoChart
                data={PRESENCA_SEGMENTO}
                chartWidth={640}
                chartHeight={280}
                valueFontSize={10}
                axisFontSize={11}
                maxY={115}
              />
            </div>
          </div>
        </div>

        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 700,
              color: theme.text,
              flexShrink: 0,
              lineHeight: 1.25,
            }}
          >
            Side-by-Side: Unico Skill vs. IBEGESP — Proposta de Valor
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, flex: 1, minHeight: 0 }}>
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
        </div>
      </div>
    </AbsoluteFill>
  );
};
