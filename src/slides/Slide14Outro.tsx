import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { blurReveal } from "../utils/animation";
import { theme } from "../theme";

const TITLE_LINE1 = "#002060";
const TITLE_LINE2 = "#0056D2";
const GRAY_LINE = "#E2E8F0";

export const Slide14Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const main = spring({ frame: frame - 8, fps, config: { damping: 18, stiffness: 75 } });
  const mainOpacity = interpolate(main, [0, 1], [0, 1]);
  const mainY = interpolate(main, [0, 1], [32, 0]);
  const logoY = interpolate(main, [0, 1], [20, 0]);

  const sub = blurReveal(frame, 28, 30);
  const footer = blurReveal(frame, 48, 28);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.bg,
        fontFamily: "var(--font-sans), system-ui, -apple-system, 'Segoe UI', sans-serif",
      }}
    >
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 72px",
        }}
      >
        <Img
          src={staticFile("concorreai-logo.png")}
          alt="Sankhya"
          style={{
            height: 72,
            width: "auto",
            maxWidth: "min(400px, 40vw)",
            objectFit: "contain",
            marginBottom: 36,
            opacity: mainOpacity,
            transform: `translateY(${logoY}px)`,
            mixBlendMode: "multiply",
          }}
        />

        <h1
          style={{
            margin: 0,
            fontSize: 52,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: TITLE_LINE1,
            textAlign: "center",
            lineHeight: 1.1,
            opacity: mainOpacity,
            transform: `translateY(${mainY}px)`,
          }}
        >
          A Sankhya tem tudo para ser a maior disrupção no mercado público de ERP
        </h1>

        <p
          style={{
            margin: "28px 0 0",
            fontSize: 20,
            fontWeight: 500,
            color: theme.textMuted,
            textAlign: "center",
            maxWidth: 820,
            lineHeight: 1.55,
            opacity: sub.opacity,
            filter: sub.filter,
          }}
        >
          ARR R$770M, 35K clientes, 50+ unidades regionais, 9 M&As e arquitetura moderna. Falta
          somente o módulo SIAFIC e um atestado público. A janela está aberta.
        </p>

        <p
          style={{
            margin: "24px 0 0",
            fontSize: 17,
            fontWeight: 500,
            color: theme.textMuted,
            textAlign: "center",
            maxWidth: 720,
            lineHeight: 1.5,
            opacity: footer.opacity,
            filter: footer.filter,
          }}
        >
          Meta 2026: 200 municípios · R$100M ARR Gov · 98%+ renovação
        </p>

        <div
          style={{
            width: "100%",
            maxWidth: 480,
            height: 1,
            backgroundColor: GRAY_LINE,
            marginTop: 48,
            opacity: footer.opacity,
          }}
        />

        <p
          style={{
            marginTop: 24,
            fontSize: 15,
            fontWeight: 600,
            color: theme.textMuted,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            opacity: footer.opacity,
            filter: footer.filter,
          }}
        >
          Maio 2026
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
