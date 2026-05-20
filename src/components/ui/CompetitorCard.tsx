import React from "react";
import { GlassCard } from "./GlassCard";
import { theme } from "../../theme";

type Metric = { label: string; value: string; highlight?: "red" | "orange" | "green" };

const threatBadge: Record<string, React.CSSProperties> = {
  red: {
    border: "1px solid rgba(239,68,68,0.45)",
    color: "#F87171",
    backgroundColor: "rgba(239,68,68,0.12)",
  },
  orange: {
    border: "1px solid rgba(245,158,11,0.45)",
    color: "#FBBF24",
    backgroundColor: "rgba(245,158,11,0.12)",
  },
  green: {
    border: "1px solid rgba(16,185,129,0.45)",
    color: "#34D399",
    backgroundColor: "rgba(16,185,129,0.12)",
  },
};

const valueColor: Record<string, string> = {
  red: "#F87171",
  orange: "#FBBF24",
  green: "#34D399",
};

export const CompetitorCard: React.FC<{
  name: string;
  threat: string;
  threatColor: string;
  origin: string;
  description: string;
  tags: string[];
  metrics: Metric[];
  index: number;
  compact?: boolean;
  /** Sobrescreve o tamanho do parágrafo principal (descrição) */
  descriptionSize?: number;
  tagBackground?: string;
}> = ({
  name,
  threat,
  threatColor,
  origin,
  description,
  tags,
  metrics,
  index,
  compact = false,
  descriptionSize,
  tagBackground = theme.surface,
}) => {
  const pad = compact ? "12px 14px" : "18px 22px";
  const titleSize = compact ? 16 : 19;
  const originSize = compact ? 12 : 14;
  const descSize = descriptionSize ?? (compact ? 13 : 15);
  const descLineHeight = descSize >= 16 ? 1.5 : compact ? 1.45 : 1.55;
  const tagSize = compact ? 12 : 14;
  const tagPad = compact ? "4px 8px" : "6px 11px";
  const labelSize = compact ? 13 : 15;
  const valueSize = compact ? 15 : 17;
  const metricsGap = compact ? "6px 10px" : "10px 14px";
  const metricsPadTop = compact ? 8 : 12;

  return (
    <GlassCard index={index} className="h-full">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: pad,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 6,
            marginBottom: compact ? 4 : 6,
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: titleSize,
              fontWeight: 700,
              color: theme.text,
              lineHeight: 1.25,
            }}
          >
            {name}
          </h3>
          <span
            style={{
              fontSize: compact ? 11 : 12,
              fontWeight: 600,
              letterSpacing: "0.04em",
              padding: compact ? "3px 7px" : "5px 10px",
              borderRadius: 9999,
              flexShrink: 0,
              ...threatBadge[threatColor],
            }}
          >
            {threat}
          </span>
        </div>

        <p style={{ margin: "0 0 6px", fontSize: originSize, color: theme.textDim }}>{origin}</p>

        <p
          style={{
            margin: 0,
            fontSize: descSize,
            fontWeight: 500,
            color: theme.textMuted,
            lineHeight: descLineHeight,
          }}
        >
          {description}
        </p>

        <div style={{ flex: 1, minHeight: 0 }} />

        <div style={{ flexShrink: 0 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: compact ? 5 : 8,
              margin: compact ? "0 0 6px" : "0 0 8px",
            }}
          >
            {tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: tagSize,
                  padding: tagPad,
                  borderRadius: 6,
                  backgroundColor: tagBackground,
                  color: theme.textMuted,
                  border: `1px solid ${theme.borderLight}`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: metricsGap,
              paddingTop: metricsPadTop,
              borderTop: `1px solid ${theme.borderLight}`,
            }}
          >
            {metrics.map((m) => (
              <div key={m.label}>
                <p style={{ margin: 0, fontSize: labelSize, color: theme.textDim, lineHeight: 1.3 }}>
                  {m.label}
                </p>
                <p
                  style={{
                    margin: "2px 0 0",
                    fontSize: valueSize,
                    fontWeight: 600,
                    color: m.highlight ? valueColor[m.highlight] : theme.text,
                    lineHeight: 1.3,
                  }}
                >
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
