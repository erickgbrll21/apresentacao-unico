import React from "react";
import { AbsoluteFill } from "remotion";
import { ROADMAP_PHASES, ROADMAP_SUBTITLE, ROADMAP_URGENCY } from "../data/presentationData";
import type { RoadmapPhase } from "../data/presentationData";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";

const CREAM_BG = "#F9F8F4";

const phaseCardShell: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  border: `1px solid ${theme.cardBorder}`,
  borderRadius: 16,
  boxShadow: "0 4px 28px rgba(15, 23, 42, 0.07)",
  boxSizing: "border-box",
  overflow: "hidden",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

const RoadmapPhaseCard: React.FC<RoadmapPhase> = ({
  phaseNumber,
  period,
  phaseLabel,
  title,
  icon,
  accent,
  bulletColor,
  items,
  keyResult,
}) => (
  <div style={phaseCardShell}>
    <div
      style={{
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        borderTop: `3px solid ${accent}`,
        padding: "14px 14px 12px",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.06em",
          color: theme.textMuted,
          textTransform: "uppercase",
          lineHeight: 1.35,
        }}
      >
        FASE {phaseNumber} · {period} · {phaseLabel}
      </p>
      <p style={{ margin: "8px 0 10px", fontSize: 18, fontWeight: 700, color: theme.text, lineHeight: 1.25 }}>
        <span style={{ marginRight: 6 }}>{icon}</span>
        {title}
      </p>

      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {items.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              gap: 8,
              alignItems: "flex-start",
              fontSize: 14,
              fontWeight: 500,
              color: theme.textMuted,
              lineHeight: 1.4,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: bulletColor,
                flexShrink: 0,
                marginTop: 6,
              }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div
        style={{
          marginTop: 10,
          padding: "9px 10px",
          borderRadius: 8,
          border: `1px solid ${theme.borderSubtle}`,
          backgroundColor: theme.surface,
        }}
      >
        <p
          style={{
            margin: "0 0 4px",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: theme.textDim,
            textTransform: "uppercase",
          }}
        >
          Key result
        </p>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: theme.text, lineHeight: 1.35 }}>{keyResult}</p>
      </div>
    </div>
  </div>
);

export const Slide21RoadmapExecutivo: React.FC = () => (
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
        padding: "12px 48px 20px 48px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 24,
          flexShrink: 0,
          marginBottom: 8,
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
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
            Roadmap Executivo — Unico Skill Gov 2025–2027
          </h1>
          <p style={{ margin: "8px 0 0", fontSize: 16, fontWeight: 500, color: theme.textMuted, lineHeight: 1.45 }}>
            {ROADMAP_SUBTITLE}
          </p>
        </div>
        <BrandLogo layout="inline" height={52} mixBlendMode="multiply" />
      </div>

      <div
        style={{
          flexShrink: 0,
          marginBottom: 12,
          display: "flex",
          gap: 14,
          padding: "14px 18px",
          backgroundColor: "rgba(254, 226, 226, 0.55)",
          border: "1px solid rgba(248, 113, 113, 0.35)",
          borderRadius: 12,
          boxSizing: "border-box",
        }}
      >
        <span style={{ fontSize: 22, lineHeight: 1, flexShrink: 0 }} aria-hidden>
          🔥
        </span>
        <div>
          <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: theme.text, lineHeight: 1.3 }}>
            {ROADMAP_URGENCY.title}
          </p>
          <p style={{ margin: "8px 0 0", fontSize: 14, fontWeight: 500, color: theme.textMuted, lineHeight: 1.45 }}>
            {ROADMAP_URGENCY.body}
          </p>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 12,
          alignItems: "stretch",
        }}
      >
        {ROADMAP_PHASES.map((phase) => (
          <RoadmapPhaseCard key={phase.phaseLabel} {...phase} />
        ))}
      </div>
    </div>
  </AbsoluteFill>
);
