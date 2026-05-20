import type { CSSProperties } from "react";

/** Cores e estilos base — tema institucional claro (alto contraste para vídeo) */
export const theme = {
  bg: "#FFFFFF",
  surface: "#F8FAFC",
  card: "#FFFFFF",
  cardFill: "#F8FAFC",
  cardBorder: "rgba(15, 23, 42, 0.12)",
  borderSubtle: "rgba(15, 23, 42, 0.1)",
  borderLight: "rgba(15, 23, 42, 0.06)",
  text: "#020617",
  textMuted: "#334155",
  textDim: "#475569",
  blue: "#2563EB",
  violet: "#7C3AED",
  cyan: "#0891B2",
  green: "#059669",
  chartGrid: "rgba(15, 23, 42, 0.1)",
  chartLabel: "#475569",
  headerBg: "rgba(15, 23, 42, 0.04)",
  sankhya: "#6D28D9",
} as const;

/** Escala tipográfica — 1920×1080, legível em projeção e vídeo */
export const typography = {
  slideTitle: 38,
  slideSubtitle: 17,
  sectionTitle: 36,
  cardTitle: 19,
  cardSubtitle: 16,
  body: 16,
  bodySmall: 14,
  caption: 13,
  micro: 12,
  kpiValue: 46,
  kpiLabel: 15,
  kpiFooter: 12,
} as const;

export const fillScreen: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "absolute",
  inset: 0,
};
