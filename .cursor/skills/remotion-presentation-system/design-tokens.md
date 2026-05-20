# Design Tokens — ConcorreAI Presentation System

Extraídos de `src/theme.ts`, `tailwind.config.js`, slides e componentes.

## Paleta — tema institucional claro

### Superfícies
| Token | Hex / valor | Uso |
|-------|-------------|-----|
| `theme.bg` | `#FFFFFF` | Fundo principal |
| `theme.surface` | `#F8FAFC` | Áreas secundárias |
| `theme.card` | `#FFFFFF` | GlassCard fill |
| `theme.cardFill` | `#F8FAFC` | Preenchimento alternativo |
| `theme.headerBg` | `rgba(15,23,42,0.04)` | Faixas de header |

### Texto
| Token | Hex | Uso |
|-------|-----|-----|
| `theme.text` | `#0F172A` | Títulos, labels fortes |
| `theme.textMuted` | `#475569` | Legendas, corpo secundário |
| `theme.textDim` | `#64748B` | Subtítulos, fontes |
| `TEXT_MUTED` (slide 2) | `#666666` | Parágrafo analítico |
| `TEXT_DIM` (KPI footer) | `#999999` | Rodapé de métrica |
| Header institucional | `#94A3B8` | `00 \| APRESENTAÇÃO...` |

### Marca — azuis Valecard / ConcorreAI
| Token | Hex | Uso |
|-------|-----|-----|
| `TITLE_LINE1` | `#002060` | Primeira linha do título |
| `TITLE_LINE2` | `#0056D2` | Segunda linha do título |
| `BADGE_BORDER` | `#1D5FA8` | Pill badge |
| `BADGE_BG` | `#E8EDF2` | Fundo badge |
| Capa `NAVY` | `#0A1F44` | Headlines capa |
| Capa `BLUE` | `#007BFF` | Destaques |
| Capa `BLUE_LIGHT` | `#3B82F6` | Eyebrow uppercase |

### Acentos de dados (gráficos e KPIs)
| Nome | Hex | Uso típico |
|------|-----|------------|
| Blue | `#3B82F6` | Abastecimento, Federal, primário |
| Green | `#10B981` | Integrado, Estadual, positivo |
| Amber | `#F59E0B` | Telemetria, Municipal, alerta médio |
| Red | `#EF4444` | Ameaça alta, competidor líder |
| Purple | `#A855F7` | Manutenção, telemetria alt. |
| Pink | `#EC4899` | Pedágio, destaque terciário |
| Cyan | `#22D3EE` | Gradientes KPI (início) |

### Gradientes KPI (padrão)
```css
/* Volume */ linear-gradient(180deg, #22D3EE 0%, #2563EB 100%)
/* Licitações */ linear-gradient(180deg, #4ADE80 0%, #059669 100%)
/* Frota */ linear-gradient(180deg, #FBBF24 0%, #EA580C 100%)
/* CAGR */ linear-gradient(180deg, #FB7185 0%, #E11D48 100%)
/* Conectadas */ linear-gradient(180deg, #C4B5FD 0%, #7C3AED 100%)
```

### Bordas e linhas
| Token | Valor |
|-------|-------|
| `theme.cardBorder` | `rgba(15, 23, 42, 0.1)` |
| `theme.borderSubtle` | `rgba(15, 23, 42, 0.08)` |
| `GRAY_LINE` institucional | `#E2E8F0` |
| `GRAY_LINE` KPI area | `#E5E7EB` |
| Grid de gráfico | `rgba(15, 23, 42, 0.08)` |

### Tema cinematográfico (Tailwind extend — slides escuros)
| Token | Hex |
|-------|-----|
| midnight | `#05070A` |
| surface | `#0B0E14` |
| card | `#161B22` |

Usar apenas em `SlideShell` + efeitos, não em slides institucionais de dados.

## Tipografia

### Famílias
- **Corpo:** Inter — weights 400, 500, 600, 700 (`@remotion/google-fonts/Inter`)
- **Display:** Syne — 700, 800 (títulos hero cinematográficos)
- **Fallback:** `system-ui, -apple-system, 'Segoe UI', sans-serif`
- **CSS vars:** `--font-sans`, `--font-display`

### Escala (px @ 1920×1080)

| Elemento | Size | Weight | Extras |
|----------|------|--------|--------|
| Header institucional | 11 | 500 | `letter-spacing: 0.18em`, uppercase |
| Badge pill | 10 | 700 | `letter-spacing: 0.14em`, uppercase |
| Eyebrow capa | 15 | 600 | `letter-spacing: 0.38em`, uppercase |
| Subtítulo slide | 14–16 | 400–500 | `line-height: 1.45–1.65` |
| Título slide (H1) | 32–36 | 700 | `letter-spacing: -0.01em` |
| Título card (H3) | 19–22 | 600 | — |
| KPI valor | 44 | 800 | gradient text, `tabular-nums` |
| KPI label | 13 | 700 | `max-width: 210px` |
| KPI footer | 11 | 400 | cor `#9CA3AF` |
| Gráfico label | 13–18 | 600/400 | — |
| Gráfico tick | 10–16 | 400 | `#64748B` |
| Outro H1 | 52 | 800 | `letter-spacing: -0.02em` |
| Legenda | 15–16 | — | com quadrado 11–12px |

## Espaçamento

| Contexto | Valor |
|----------|-------|
| SlideShell padding | `48px` (`p-12`) |
| Header institucional | `36px 72px 0` |
| Capa padding | `40px 72px 36px` |
| Slide mapeamento horizontal | `88px` lateral |
| GlassCard interno | `20–24px` |
| Gap grid 2 colunas | `16px` |
| Margin título → subtítulo | `8–18px` |
| Margin título → KPIs | `28px` |
| Linha header → conteúdo | `16px` |
| Footer linha → barras | `28px` |

## Radius

| Elemento | Radius |
|----------|--------|
| GlassCard | `16px` (`rounded-2xl`) |
| Badge pill | `9999` |
| Barras gráfico | `6px` (cantos arredondados à direita) |
| Legend square | `2px` |
| Competitor tags | `4–6px` |

## Sombras e efeitos

| Efeito | Valor |
|--------|-------|
| Card shadow | `0 8px 32px rgba(15, 23, 42, 0.08)` |
| Bar glow padrão | `drop-shadow(0 0 10px ${color}55)` |
| Bar glow forte | `drop-shadow(0 0 14px ${color}99)` |
| Donut glow | `drop-shadow(0 0 6px ${color}55)` |
| Tailwind glow-blue | `0 0 24px rgba(59, 130, 246, 0.35)` |
| blurReveal | blur `12px → 0` em 25 frames |

## Glassmorphism (GlassCard)

```ts
backgroundColor: theme.card
border: `1px solid ${theme.cardBorder}`
borderRadius: 16
boxShadow: "0 8px 32px rgba(15, 23, 42, 0.08)"
// + backdrop-blur-xl via className quando em shell escuro
```

## Grid layouts

| Layout | CSS |
|--------|-----|
| 2 gráficos | `gridTemplateColumns: "1fr 1fr"`, `gap: 16` |
| Competidores | `grid` 2–3 colunas responsivo interno |
| KPI row | `display: flex`, `justifyContent: space-between`, `gap: 8–12` |
| Capa | flex column, `justifyContent: center` |

## Composição 1920×1080

- Área útil abaixo do header institucional: ~`flex: 1` com `minHeight: 0`
- Gráficos: `viewBox` + `preserveAspectRatio: xMidYMid meet`
- Logos capa: height `52px`; slide mapeamento: `72px`

## Badges de ameaça (CompetitorCard)

| Nível | Border | Text | Background |
|-------|--------|------|------------|
| red | `rgba(239,68,68,0.45)` | `#F87171` | `rgba(239,68,68,0.12)` |
| orange | `rgba(245,158,11,0.45)` | `#FBBF24` | `rgba(245,158,11,0.12)` |
| green | `rgba(16,185,129,0.45)` | `#34D399` | `rgba(16,185,129,0.12)` |

## Assets públicos (padrão)

- `public/concorreai-logo.png`
- `public/valecard-logo.png`
- `public/cover-bg-light.png`

Novos projetos: replicar estrutura `public/` com assets do cliente.
