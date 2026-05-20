import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { HERO_KPIS } from "../data/presentationData";
import { theme, typography } from "../theme";
import { formatKpiCount, getCountUpValue, type KpiCountFormat } from "../utils/countUp";

const CREAM_BG = "#F9F8F4";
const TITLE_LINE1 = "#001845";
const BADGE_BORDER = "#2D5BFF";
const BADGE_BG = "#E8EEFF";
const HEADLINE_BLUE = "#2D5BFF";
const DIVIDER = "#E5E7EB";

const KpiColumn: React.FC<{
  count: KpiCountFormat;
  delay: number;
  label: string;
  footer: string;
  color: string;
}> = ({ count, delay, label, footer, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const animated = getCountUpValue(frame, fps, delay, count.to);
  const display = formatKpiCount(animated, count);

  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 10px",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: typography.kpiValue,
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {display}
      </p>
      <p
        style={{
          margin: "12px 0 0",
          fontSize: typography.kpiLabel,
          fontWeight: 700,
          color: theme.text,
          lineHeight: 1.35,
          maxWidth: 210,
        }}
      >
        {label}
      </p>
      <p
        style={{
          margin: "6px 0 0",
          fontSize: typography.kpiFooter,
          fontWeight: 500,
          color: theme.textDim,
          lineHeight: 1.4,
          maxWidth: 210,
        }}
      >
        {footer}
      </p>
    </div>
  );
};

export const Slide02MarketIntro: React.FC = () => (
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
        padding: "24px 72px 40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          minHeight: 0,
        }}
      >
        <Img
          src={staticFile("concorreai-logo.png")}
          alt="ConcorreAI"
          style={{
            height: 56,
            width: "auto",
            maxWidth: 320,
            objectFit: "contain",
            marginBottom: 20,
            mixBlendMode: "multiply",
          }}
        />
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 22px",
            borderRadius: 9999,
            border: `1.5px solid ${BADGE_BORDER}`,
            backgroundColor: BADGE_BG,
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              fontSize: typography.micro,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: BADGE_BORDER,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Inteligência Competitiva · Benefício Educação · Setor Público 2024 – Mar/2026
          </span>
        </div>

        <h1
          style={{
            margin: "28px 0 0",
            fontSize: 38,
            fontWeight: 700,
            lineHeight: 1.22,
            maxWidth: 960,
            letterSpacing: "-0.02em",
            color: TITLE_LINE1,
          }}
        >
          O Setor Público Brasileiro tem{" "}
          <span style={{ color: HEADLINE_BLUE }}>12,65 milhões</span> de servidores sem benefício de
          educação
        </h1>

        <p
          style={{
            margin: "20px 0 0",
            fontSize: typography.slideSubtitle,
            fontWeight: 500,
            lineHeight: 1.6,
            color: theme.textMuted,
            maxWidth: 860,
          }}
        >
          Mapeamento estratégico do mercado de benefício educacional no setor público — Federal,
          Estadual e Municipal — para posicionamento da Unico Skill frente a Alura, UOL Edtech,
          Educamundo e concorrentes.
        </p>
      </div>

      <footer style={{ flexShrink: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            boxShadow: "0 4px 28px rgba(15, 23, 42, 0.07)",
            padding: "28px 8px",
          }}
        >
          {HERO_KPIS.map((kpi, i) => (
            <React.Fragment key={kpi.label}>
              {i > 0 && (
                <div
                  style={{
                    width: 1,
                    alignSelf: "stretch",
                    backgroundColor: DIVIDER,
                    flexShrink: 0,
                    margin: "4px 0",
                  }}
                  aria-hidden
                />
              )}
              <KpiColumn
                count={kpi.count}
                delay={18 + i * 8}
                label={kpi.label}
                footer={kpi.footer}
                color={kpi.color}
              />
            </React.Fragment>
          ))}
        </div>
      </footer>
    </div>
  </AbsoluteFill>
);
