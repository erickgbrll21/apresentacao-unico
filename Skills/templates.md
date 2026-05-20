# Templates de Código — Slides e Componentes

Copiar e adaptar. Substituir `XX`, textos e imports de dados.

## 1. Registrar novo slide

**`ConcorreAIPresentation.tsx`**
```ts
import { Slide15Novo } from "./slides/Slide15Novo";

const slides = [
  // ...existentes
  Slide15Novo,
];
```

## 2. Slide institucional com gráficos (padrão Slide07)

```tsx
import React from "react";
import { MEUS_DADOS } from "../data/presentationData";
import { HorizontalBarChart } from "../components/charts/HorizontalBarChart";
import { GlassCard } from "../components/ui/GlassCard";
import { SlideShell } from "../components/ui/SlideShell";
import { theme } from "../theme";

const LegendItem: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, color: theme.textMuted }}>
    <span style={{ width: 11, height: 11, borderRadius: 2, backgroundColor: color }} />
    {label}
  </span>
);

const ChartCard: React.FC<{
  index: number;
  title: string;
  subtitle: string;
  legend: React.ReactNode;
  children: React.ReactNode;
}> = ({ index, title, subtitle, legend, children }) => (
  <GlassCard index={index} className="h-full">
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px 22px", boxSizing: "border-box" }}>
      <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600, color: theme.text }}>{title}</h3>
      <p style={{ margin: "8px 0 0", fontSize: 16, color: theme.textDim, lineHeight: 1.45 }}>{subtitle}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 14px", marginTop: 12, marginBottom: 8 }}>{legend}</div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0 }}>{children}</div>
    </div>
  </GlassCard>
);

export const Slide15Exemplo: React.FC = () => (
  <SlideShell showHud={false}>
    <h1 style={{ margin: "0 0 8px", fontSize: 34, fontWeight: 700, color: theme.text }}>Título do Slide</h1>
    <p style={{ margin: "0 0 16px", fontSize: 16, color: theme.textDim, lineHeight: 1.45 }}>
      Subtítulo com fonte de dados e período.
    </p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, flex: 1, minHeight: 0 }}>
      <ChartCard index={0} title="Gráfico A" subtitle="Descrição" legend={<LegendItem color="#3B82F6" label="Série A" />}>
        <HorizontalBarChart data={MEUS_DADOS} maxValue={100} startFrame={20} chartHeight={310} chartWidth={780} labelWidth={148} roundedBarEnd labelColor="#0F172A" />
      </ChartCard>
    </div>
  </SlideShell>
);
```

> **Atenção:** ao gerar JSX, usar sempre `div` — nunca o typo `motionParticles`.

## 3. Slide mapeamento + KPIs (padrão Slide02)

```tsx
import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { HERO_KPIS } from "../data/presentationData";
import { formatKpiCount, getCountUpValue, type KpiCountFormat } from "../utils/countUp";

const TITLE_LINE1 = "#002060";
const TITLE_LINE2 = "#0056D2";
const BADGE_BORDER = "#1D5FA8";
const BADGE_BG = "#E8EDF2";

// KpiColumn: gradient text + countUp (ver Slide02MarketIntro.tsx completo)

export const Slide02Template: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#FFFFFF", fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", padding: "12px 88px 36px" }}>
      {/* Logo + badge + título + subtítulo centralizados */}
      {/* Footer: linha GRAY_LINE + flex 5x KpiColumn */}
    </div>
  </AbsoluteFill>
);
```

## 4. Capa hero (padrão Slide01)

```tsx
export const Slide01Template: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
    <Img src={staticFile("cover-bg-light.png")} style={{ position: "absolute", inset: 0, objectFit: "cover" }} />
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", padding: "40px 72px 36px", zIndex: 2 }}>
      {/* Logos: mixBlendMode screen */}
      {/* Eyebrow uppercase letter-spacing 0.38em */}
      {/* H1 navy + palavra em BLUE */}
      {/* Rodapé: URL + ano */}
    </div>
  </AbsoluteFill>
);
```

## 5. Encerramento cinematográfico (Slide14)

```tsx
import { blurReveal } from "../utils/animation";
import { CinematicBackground } from "../components/effects/CinematicBackground";
// spring logo + blurReveal subtítulo/footer
// variant="green" no background opcional
```

## 6. Entrada em presentationData.ts

```ts
export const HERO_KPIS = [
  {
    value: "R$ 2,4Bi",
    count: { to: 2.4, prefix: "R$ ", suffix: "Bi", decimals: 1, decimalSeparator: "," },
    label: "Volume estimado de contratos",
    footer: "Últimos 24 meses (Federal + Estados)",
    gradient: "linear-gradient(180deg, #22D3EE 0%, #2563EB 100%)",
  },
];

export const MEU_GRAFICO = [
  { label: "Categoria A", value: 1420, color: "#3B82F6", valueLabel: "1420 un." },
];
```

## 7. CompetitorCard grid

```tsx
import { CompetitorCard } from "../components/ui/CompetitorCard";
import { COMPETITORS_HIGH } from "../data/presentationData";

{COMPETITORS_HIGH.map((c, i) => (
  <CompetitorCard key={c.name} {...c} index={i} />
))}
```

## 8. Donut + barras (Slide11)

```tsx
<DonutChart data={PORTE_ORGAO} size={200} startFrame={20} />
<HorizontalBarChart data={SETORES_CHART} maxValue={35} xStep={5} xTickSuffix="%" startFrame={12} />
```

## 9. Áudio global

```tsx
// ConcorreAIPresentation.tsx — dentro do AbsoluteFill raiz
import { Audio, staticFile } from "remotion";
<Audio src={staticFile("bg-music.mp3")} volume={0.35} />
```

## 10. Novo projeto do zero

```bash
npx create-video@latest
# Alinhar versões remotion 4.0.286
# Copiar: theme.ts, utils/, components/, estrutura slides/
# Configurar remotion.config.ts com enableTailwind
# Root.tsx com Inter + Syne
```

## Presets de slide por objetivo

| Objetivo | Template base |
|----------|----------------|
| Institucional / capa | §4 |
| Métricas macro | §3 + HERO_KPIS |
| Dois gráficos comparativos | §2 |
| Concorrência | §7 |
| Ranking / top N | Slide08TopContratos |
| Requisitos / benefícios | Slide09Requisitos |
| Alertas / riscos | Slide13Alertas |
| Fechamento | §5 |
