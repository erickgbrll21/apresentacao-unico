import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { blurReveal } from "../utils/animation";

const NAVY = "#0A1F44";
const BLUE = "#007BFF";
const BLUE_LIGHT = "#3B82F6";
const GRAY = "#475569";
const GRAY_TEXT = "#334155";
const GRAY_LINE = "#E2E8F0";

const FooterItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: GRAY }}>
    {children}
  </span>
);

export const Slide24Obrigado: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logo = spring({ frame: frame - 6, fps, config: { damping: 18, stiffness: 80 } });
  const logoOpacity = interpolate(logo, [0, 1], [0, 1]);
  const logoY = interpolate(logo, [0, 1], [20, 0]);

  const title = blurReveal(frame, 18, 30);
  const body = blurReveal(frame, 32, 28);
  const bottom = blurReveal(frame, 48, 26);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
        overflow: "hidden",
      }}
    >
      <Img
        src={staticFile("cover-bg-light.png")}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center right",
        }}
      />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 72px 32px",
          boxSizing: "border-box",
          zIndex: 2,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: 720,
            paddingTop: 24,
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
              marginBottom: 36,
              flexWrap: "wrap",
              opacity: logoOpacity,
              transform: `translateY(${logoY}px)`,
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
                objectPosition: "left center",
                flexShrink: 0,
                mixBlendMode: "screen",
              }}
            />
            <span
              style={{
                width: 1,
                height: 48,
                backgroundColor: GRAY_LINE,
                flexShrink: 0,
              }}
              aria-hidden
            />
            <Img
              src={staticFile("unico-skill-logo.svg")}
              alt="Unico Skill"
              style={{
                height: 56,
                width: "auto",
                maxWidth: 320,
                objectFit: "contain",
                objectPosition: "left center",
                flexShrink: 0,
              }}
            />
          </span>

          <h1
            style={{
              margin: 0,
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: NAVY,
              lineHeight: 1,
              textTransform: "uppercase",
              opacity: title.opacity,
              filter: title.filter,
            }}
          >
            Obrigado
          </h1>
          <h1
            style={{
              margin: "8px 0 0",
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: BLUE,
              lineHeight: 1,
              textTransform: "uppercase",
              opacity: title.opacity,
              filter: title.filter,
            }}
          >
            pela atenção!
          </h1>

          <span
            style={{
              width: 56,
              height: 3,
              backgroundColor: BLUE_LIGHT,
              marginTop: 24,
              borderRadius: 2,
              opacity: title.opacity,
            }}
          />

          <p
            style={{
              margin: "28px 0 0",
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 1.55,
              color: GRAY_TEXT,
              maxWidth: 560,
              opacity: body.opacity,
              filter: body.filter,
            }}
          >
            Inteligência estratégica para empresas que vendem ao governo
          </p>
        </div>

        <span
          style={{
            flexShrink: 0,
            opacity: bottom.opacity,
            filter: bottom.filter,
          }}
        >
          <span style={{ height: 1, backgroundColor: GRAY_LINE, marginBottom: 20 }} />

          <span
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px" }}>
              <FooterItem>
                <span aria-hidden>🌐</span> concorreai.ia.br
              </FooterItem>
              <FooterItem>
                <span aria-hidden>✉</span> contato@concorreai.ia.br
              </FooterItem>
            </span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: GRAY,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textAlign: "right",
                whiteSpace: "nowrap",
              }}
            >
              Confidencial
            </span>
          </span>
        </span>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
