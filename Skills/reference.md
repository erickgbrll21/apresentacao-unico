# Referência Técnica — Arquitetura e Componentes

## Composição Remotion

| Propriedade | Valor |
|-------------|-------|
| ID | `ConcorreAI` |
| Resolução | 1920 × 1080 |
| FPS | 30 |
| Duração | `DURATION_IN_FRAMES` (~2244 para 14 slides) |
| Slide | 180 frames (6s) |
| Transições | 20f (fade/slide), 36f (wipe capa) |

## Ordem narrativa dos slides (referência ConcorreAI)

| # | Componente | Função narrativa |
|---|------------|------------------|
| 1 | `Slide01Hero` | Capa — parceria ConcorreAI + Valecard, promessa |
| 2 | `Slide02MarketIntro` | Tese — mapeamento mercado + 5 KPIs macro |
| 3 | `Slide02MarketSize` | Tamanho mercado — gráficos crescimento/distribuição |
| 4 | `Slide03Purchasing` | Comportamento de compra — modalidades, sazonalidade |
| 5 | `Slide04CompetitorsHigh` | Ameaças — players fortes |
| 6 | `Slide06Matrix` | Matriz competitiva |
| 7 | `Slide07Licitacoes` | Licitações — produtos e vencedores |
| 8 | `Slide08TopContratos` | Prova social — maiores contratos |
| 9 | `Slide09Requisitos` | Requisitos técnicos por produto |
| 10 | `Slide10Orgaos` | Quem compra — perfil órgãos |
| 11 | `Slide11Compradores` | Setores e porte |
| 12 | `Slide12Oportunidades` | Oportunidades estratégicas |
| 13 | `Slide13Alertas` | Riscos e alertas |
| 14 | `Slide14Outro` | Encerramento + CTA |

`Slide00Intro` existe mas **não** está na composição principal (intro cinematográfica legada).

## Arquivos-chave

### `ConcorreAIPresentation.tsx`
- Array `slides` define ordem.
- `TransitionSeries` + `Sequence` + `Transition`.
- Wrapper por slide: `SlideInstitutionalHeader` + conteúdo.
- Exporta `FPS`, `TOTAL_SLIDES`, `DURATION_IN_FRAMES`.

### `presentationData.ts` — blocos de dados
- `HERO_KPIS` — métricas com count, gradient, footer
- `CONTRACT_GROWTH` — stacked bar
- `GOV_DISTRIBUTION`, `FLEET_EVOLUTION`, `MODALIDADES`, `SAZONALIDADE`
- `TICKET_SEGMENTO`, `DURACAO_CONTRATOS`
- `COMPETITORS_HIGH` — cards concorrentes
- `LICITACOES_PRODUTO`, `LICITACOES_VENCEDORES`
- `TOP_CONTRATOS`, `REQUISITOS`, `SETORES_VOLUME`, `PORTE_ORGAO`
- `OPORTUNIDADES`, `ALERTAS`

## Componentes UI

### `SlideInstitutionalHeader`
- Props: `slideNumber: number`
- Formato: `01 | APRESENTAÇÃO INSTITUCIONAL — 2026`
- Padding `36px 72px 0`, linha `#E2E8F0`

### `SlideShell`
- Props: `variant`, `showHud`, `showLogo`, `showEffects`
- Efeitos: `CinematicBackground`, `TechGrid`, `FloatingParticles`, `HudFrame`, `NoiseOverlay`, `HolographicOverlay`
- Padding interno 48px, `BrandLogo` canto superior direito

### `GlassCard`
- Props: `index`, `delay`, `static`
- Animação: blurReveal + translateY 24→0
- Usar `index` para stagger em grids

### `SlideTitle` / `BrandLogo` / `BrandWatermark`
- Títulos padronizados e marca d'água

### `CompetitorCard`
- Props: dados de `COMPETITORS_HIGH`, `index`, `compact`
- Badge ameaça, tags, grid de métricas

## Componentes Charts (SVG + Remotion)

### `HorizontalBarChart`
- Barras horizontais animadas com spring
- Props importantes: `data`, `maxValue`, `startFrame`, `animated`, `roundedBarEnd`, `barGlow`, `valueLabel`
- Default `animated: true`

### `StackedBarChart`
- Barras empilhadas verticais (abast/gestão/telem)
- Eixo Y em R$ M, `MAX_Y = 1800`

### `DonutChart` + `DonutLegend`
- Segmentos com stroke dash animado
- `startFrame` default 25

### `LineChart`
- Linhas de evolução temporal

## Utils

### `animation.ts`
- `fadeIn(frame, start, duration?)`
- `blurReveal(frame, start, duration?)` → `{ opacity, blur, filter }`
- `slideUp(frame, fps, start, fromY?)`
- `staggerDelay(index, base?, step?)` → default `8 + index * 6`
- `useSlideProgress(delay?, duration?)`

### `countUp.ts`
- `KpiCountFormat` — to, prefix, suffix, decimals, separators
- `formatKpiCount(value, fmt)`
- `getCountUpValue(frame, fps, delay, target)`

## Efeitos (`components/effects/`)

| Componente | Função |
|------------|--------|
| `CinematicBackground` | Gradiente animado variant default/green |
| `TechGrid` | Grid tecnológico sutil |
| `FloatingParticles` | Partículas flutuantes (`count` prop) |
| `HudFrame` | Moldura HUD cantos |
| `NoiseOverlay` | Ruído film grain |
| `HolographicOverlay` | Brilho holográfico |

## Cover (`components/cover/`)

- `InstitutionalCover.tsx` — SVG logos, cristal (legado)
- `CoverScene.tsx` — cenas de capa alternativas

## Scripts npm

```json
"dev": "remotion studio"
"build": "remotion bundle"
"render": "remotion render ConcorreAI out/concorreai.mp4"
```

## Cálculo de duração

```
DURATION = N * SLIDE_DURATION - sum(transitionDurations)
transition[0] = 36, transition[i>0] = 20
```

Ao adicionar slide: incrementar array e recalcular.

## Áudio (opcional)

```tsx
import { Audio, staticFile } from "remotion";
<Audio src={staticFile("musica-fundo.mp3")} volume={0.35} />
```

Colocar em `ConcorreAIPresentation.tsx` dentro do `AbsoluteFill` raiz.

## Export still / PDF

Frame recomendado por slide: ~150–165 (animações completas).
Calcular offset na timeline por causa do overlap do `TransitionSeries`.

## Dependências (package.json)

- remotion 4.0.286
- @remotion/cli, transitions, google-fonts, motion-blur, tailwind
- framer-motion (opcional, não padrão)
- react 18, typescript 5.7

## Checklist de componentização para novo slide

1. Dados em `presentationData.ts`
2. Slide importa só componentes + dados
3. Animações via `useCurrentFrame` / props `startFrame`
4. Tema via `theme.ts` ou constantes locais alinhadas aos tokens
5. Registrar em `slides[]` na ordem correta
