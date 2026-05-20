import React from "react";
import { AbsoluteFill } from "remotion";
import { CinematicBackground } from "../effects/CinematicBackground";
import { FloatingParticles } from "../effects/FloatingParticles";
import { HudFrame } from "../effects/HudFrame";
import { NoiseOverlay } from "../effects/NoiseOverlay";
import { TechGrid } from "../effects/TechGrid";
import { HolographicOverlay } from "../effects/HolographicOverlay";
import { theme } from "../../theme";
import { BrandLogo } from "./BrandLogo";

export const SlideShell: React.FC<{
  children: React.ReactNode;
  variant?: "default" | "green";
  showHud?: boolean;
  showLogo?: boolean;
  showEffects?: boolean;
}> = ({
  children,
  variant = "default",
  showHud = true,
  showLogo = true,
  showEffects = false,
}) => (
  <AbsoluteFill style={{ backgroundColor: theme.bg, overflow: "visible" }}>
    {showEffects && (
      <>
        <CinematicBackground variant={variant} />
        <TechGrid />
        <FloatingParticles count={18} />
        {showHud && <HudFrame />}
        <NoiseOverlay />
        <HolographicOverlay />
      </>
    )}
    <div
      className="absolute inset-0 flex flex-col p-12 z-10"
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        padding: 48,
        zIndex: 10,
      }}
    >
      {children}
    </div>
    {showLogo && <BrandLogo />}
  </AbsoluteFill>
);
