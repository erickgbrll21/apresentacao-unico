import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const NAVY = "#0A1F44";
const BLUE = "#007BFF";
const GRAY = "#475569";
const GRAY_TEXT = "#334155";

export const Slide01Hero: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#FFFFFF", fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif" }}>
    <Img
      src={staticFile("cover-bg-light.png")}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }}
    />

    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        padding: "40px 72px 36px",
        boxSizing: "border-box",
        zIndex: 2,
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 920 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            marginBottom: 40,
            flexWrap: "wrap",
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
          <div
            style={{
              width: 1,
              height: 48,
              backgroundColor: "#E2E8F0",
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
        </div>
        <p
          style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "0.38em",
            color: BLUE,
            textTransform: "uppercase",
          }}
        >
          Seja
        </p>
        <h1
          style={{
            margin: "10px 0 0",
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            color: NAVY,
            textTransform: "uppercase",
          }}
        >
          Bem-vindo,
        </h1>
        <h1
          style={{
            margin: 0,
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            color: BLUE,
            textTransform: "uppercase",
          }}
        >
          Unico!
        </h1>

        <div style={{ width: 52, height: 2, backgroundColor: BLUE, marginTop: 22, borderRadius: 1 }} />

        <p
          style={{
            margin: "26px 0 0",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: GRAY,
            textTransform: "uppercase",
          }}
        >
          Apresentação para
        </p>
        <p
          style={{
            margin: "10px 0 0",
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            lineHeight: 1.2,
          }}
        >
          <span style={{ color: BLUE }}>o mercado </span>
          <span style={{ color: NAVY }}>público</span>
        </p>

        <p
          style={{
            margin: "22px 0 0",
            fontSize: 18,
            fontWeight: 500,
            lineHeight: 1.55,
            color: GRAY_TEXT,
            maxWidth: 560,
          }}
        >
          Inteligência estratégica para empresas
          <br />
          que vendem ao <span style={{ color: BLUE, fontWeight: 700 }}>governo</span>.
        </p>
      </div>
    </div>
  </AbsoluteFill>
);
