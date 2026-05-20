import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ALERTAS_DEFESA, AMEACAS_CRITICAS } from "../data/presentationData";
import { BrandLogo } from "../components/ui/BrandLogo";
import { theme } from "../theme";
import { staggerDelay } from "../utils/animation";

const CREAM_BG = "#F9F8F4";
const CARD_BG = "#F1F3F2";
const ORANGE_ACCENT = "#EA580C";
const RED_ACCENT = "#DC2626";

type AlertItem = { title: string; text: string };

const AlertCard: React.FC<{
  item: AlertItem;
  accentColor: string;
  index: number;
  baseDelay: number;
}> = ({ item, accentColor, index, baseDelay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const delay = staggerDelay(index, baseDelay, 6);
  const s = spring({ frame: frame - delay, fps, config: { damping: 20, stiffness: 85 } });
  const opacity = interpolate(s, [0, 1], [0, 1]);
  const y = interpolate(s, [0, 1], [12, 0]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        borderRadius: 10,
        backgroundColor: CARD_BG,
        borderLeft: `4px solid ${accentColor}`,
        padding: "18px 22px 18px 20px",
        boxSizing: "border-box",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: 100,
      }}
    >
      <h4 style={{ margin: "0 0 10px", fontSize: 19, fontWeight: 700, color: theme.text, lineHeight: 1.35 }}>
        {item.title}
      </h4>
      <p style={{ margin: 0, fontSize: 16, fontWeight: 500, color: theme.textMuted, lineHeight: 1.5 }}>
        {item.text}
      </p>
    </div>
  );
};

const AlertSection: React.FC<{
  title: string;
  icon: string;
  color: string;
  items: AlertItem[];
  accentColor: string;
  baseDelay: number;
}> = ({ title, icon, color, items, accentColor, baseDelay }) => (
  <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
    <h2
      style={{
        margin: "0 0 10px",
        fontSize: 18,
        fontWeight: 700,
        color,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span>{icon}</span>
      {title}
    </h2>
    <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1, minHeight: 0 }}>
      {items.map((item, i) => (
        <AlertCard key={item.title} item={item} accentColor={accentColor} index={i} baseDelay={baseDelay} />
      ))}
    </div>
  </div>
);

export const Slide13Alertas: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundColor: CREAM_BG,
      fontFamily: "var(--font-sans), system-ui, -apple-system, 'Segoe UI', sans-serif",
    }}
  >
    <BrandLogo top={32} right={72} mixBlendMode="multiply" />
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        padding: "88px 260px 28px 72px",
        boxSizing: "border-box",
        gap: 20,
      }}
    >
      <AlertSection
        title="Alertas de Defesa"
        icon="⚠️"
        color={ORANGE_ACCENT}
        items={ALERTAS_DEFESA}
        accentColor={ORANGE_ACCENT}
        baseDelay={8}
      />

      <AlertSection
        title="Ameaças Críticas"
        icon="🚨"
        color={RED_ACCENT}
        items={AMEACAS_CRITICAS}
        accentColor={RED_ACCENT}
        baseDelay={8 + ALERTAS_DEFESA.length * 6 + 10}
      />
    </div>
  </AbsoluteFill>
);
