import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CinematicBackground } from "../components/effects/CinematicBackground";
import { FloatingParticles } from "../components/effects/FloatingParticles";
import { HudFrame } from "../components/effects/HudFrame";
import { HolographicOverlay } from "../components/effects/HolographicOverlay";
import { NoiseOverlay } from "../components/effects/NoiseOverlay";
import { TechGrid } from "../components/effects/TechGrid";
import { blurReveal } from "../utils/animation";
import { theme } from "../theme";

export const Slide00Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logoEnter = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 80 } });
  const logoScale = interpolate(logoEnter, [0, 1], [0.55, 1]);
  const logoOpacity = interpolate(logoEnter, [0, 1], [0, 1]);
  const subtitle = blurReveal(frame, 35, 30);
  const tagline = blurReveal(frame, 50, 28);

  return (
    <AbsoluteFill style={{ backgroundColor: theme.bg }}>
      <CinematicBackground />
      <TechGrid />
      <FloatingParticles count={25} />
      <HudFrame />
      <NoiseOverlay />
      <HolographicOverlay />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <div
          style={{
            marginBottom: 32,
            transform: `scale(${logoScale})`,
            opacity: logoOpacity,
          }}
        >
          <Img
            src={staticFile("concorreai-logo.png")}
            alt="ConcorreAI"
            style={{
              height: 220,
              width: "auto",
              maxWidth: "min(680px, 72vw)",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        <p
          style={{
            margin: 0,
            fontSize: 20,
            color: theme.textMuted,
            letterSpacing: "0.02em",
            textAlign: "center",
            opacity: subtitle.opacity,
            filter: subtitle.filter,
          }}
        >
          Inteligência Competitiva · Setor Público · Gestão de Frotas
        </p>

        <p
          style={{
            marginTop: 16,
            fontSize: 12,
            color: theme.textDim,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            textAlign: "center",
            opacity: tagline.opacity,
            filter: tagline.filter,
          }}
        >
          Plataforma Enterprise de Análise de Licitações
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
