import React from "react";
import { AbsoluteFill } from "remotion";
import { SCORECARDS } from "../data/presentationData";
import { ScorecardGrid } from "../components/charts/ScorecardGrid";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";

const CREAM_BG = "#F9F8F4";

export const Slide06Matrix: React.FC = () => (
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
      <h1 style={{ margin: "0 0 6px", fontSize: 36, fontWeight: 700, color: theme.text, flexShrink: 0 }}>
        Comparativo Estratégico
      </h1>
      <p
        style={{
          margin: "0 0 14px",
          fontSize: 17,
          fontWeight: 500,
          color: theme.textMuted,
          lineHeight: 1.45,
          flexShrink: 0,
          maxWidth: "85%",
        }}
      >
        Scorecard de posicionamento da Unico Skill frente aos principais concorrentes no setor público.
      </p>

      <div style={{ flex: 1, minHeight: 0, width: "100%" }}>
        <ScorecardGrid cards={SCORECARDS} startFrame={14} cardBackground="#FFFFFF" />
      </div>
    </div>
  </AbsoluteFill>
);
