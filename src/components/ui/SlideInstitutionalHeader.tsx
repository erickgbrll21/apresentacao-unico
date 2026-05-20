import React from "react";
import { theme, typography } from "../../theme";

const GRAY_LINE = "#E2E8F0";

export const SlideInstitutionalHeader: React.FC<{ slideNumber: number }> = ({ slideNumber }) => {
  const label = String(slideNumber).padStart(2, "0");

  return (
    <div
      style={{
        flexShrink: 0,
        padding: "36px 72px 0",
        boxSizing: "border-box",
        zIndex: 200,
        pointerEvents: "none",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: typography.micro,
          fontWeight: 600,
          color: theme.textDim,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
        }}
      >
        {label} &nbsp;|&nbsp; Apresentação Institucional — 2026
      </p>
      <div style={{ height: 1, backgroundColor: GRAY_LINE, marginTop: 16 }} />
    </div>
  );
};
