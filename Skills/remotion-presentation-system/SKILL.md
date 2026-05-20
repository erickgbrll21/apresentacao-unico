---
name: remotion-presentation-system
description: >-
  Presentation Design System AI para vídeos institucionais/comerciais em Remotion 4.
  Recria apresentações no padrão ConcorreAI/Valecard: tema claro premium, TransitionSeries,
  KPIs com gradiente, gráficos SVG animados, cabeçalho institucional, narrativa B2G/B2B.
  Use ao criar nova apresentação Remotion, slide corporativo, deck em vídeo, apresentação
  para licitações, órgãos públicos, frotas, inteligência competitiva ou ao clonar este projeto.
---

# Remotion Presentation System (ConcorreAI Pattern)

Sistema de design e engenharia para **apresentações em vídeo** 1920×1080 @ 30fps, com identidade corporativa premium, motion design refinado e narrativa comercial estratégica (mercado público, licitações, competidores).

**Referência canônica:** projeto `Apresentacao` (composição `ConcorreAI`).

## Antes de codar

1. Ler [design-tokens.md](design-tokens.md) — paleta, tipografia, espaçamento, sombras.
2. Ler [reference.md](reference.md) — arquitetura, mapa de slides, componentes.
3. Para novo slide: [templates.md](templates.md).
4. Para roteiro: [narrative.md](narrative.md).

## Stack real do projeto (usar isto)

| Tecnologia | Uso |
|------------|-----|
| **Remotion 4** | Composição, frames, `Audio`, `Img`, `staticFile` |
| **React 18 + TypeScript** | Slides e componentes |
| **@remotion/transitions** | `TransitionSeries`, fade, slide, wipe, `springTiming` |
| **@remotion/google-fonts** | Inter (corpo), Syne (display) |
| **@remotion/tailwind** | Classes utilitárias em cards/shell |
| **Remotion spring/interpolate** | Animações (preferir sobre Framer Motion) |
| **SVG custom** | Gráficos (`HorizontalBarChart`, `StackedBarChart`, `DonutChart`, `LineChart`) |

**Não instalado por padrão:** Recharts, Shadcn, Lucide. Só adicionar se o usuário pedir; manter gráficos SVG para consistência visual e render.

**framer-motion** está no `package.json` mas o padrão do projeto é `useCurrentFrame` + `spring` do Remotion.

## Regras obrigatórias de design

- Visual **premium corporativo**, tema **claro** (`#FFFFFF` bg).
- Alto contraste em títulos (`#0F172A`, `#002060`, `#0056D2`).
- Espaçamento generoso: padding de slide `48px` (SlideShell) ou `72–88px` (institucional).
- **Glassmorphism leve:** `GlassCard` — `borderRadius: 16`, `boxShadow: 0 8px 32px rgba(15,23,42,0.08)`, borda `rgba(15,23,42,0.1)`.
- Gráficos com **glow** opcional: `drop-shadow(0 0 14px ${color}99)`.
- KPIs: número **44–48px**, peso **800**, texto com **gradiente** + `backgroundClip: text`.
- Legibilidade: subtítulos `#64748B` / `#666`, fontes mínimas 11px (header) a 16px (corpo).
- **Nunca** usar o typo JSX `motionParticles` — sempre a tag **`div`**.
- Logos PNG com fundo escuro: `mixBlendMode: "screen"` (capa escura/clara com bg) ou `"multiply"` (fundo branco).
- Respostas ao usuário em **português** quando for regra do projeto.

## Arquitetura modular

```
src/
├── Root.tsx                    # Composition 1920×1080, fontes
├── ConcorreAIPresentation.tsx  # TransitionSeries + lista de slides
├── theme.ts                    # Tokens JS
├── data/presentationData.ts    # TODO conteúdo e dados de gráficos
├── utils/
│   ├── animation.ts            # fadeIn, blurReveal, staggerDelay, slideUp
│   └── countUp.ts              # KPI count-up
├── slides/SlideXX*.tsx         # Um arquivo por slide
└── components/
    ├── ui/                     # Shell, cards, header, títulos
    ├── charts/                 # SVG animados
    ├── cover/                  # Logos institucionais
    └── effects/                # Grid, partículas, HUD (slides cinematográficos)
public/                         # Imagens, logos, áudio
```

**Separação de responsabilidades:**
- **Dados e copy** → `presentationData.ts` (ou `data/<cliente>.ts`).
- **Layout do slide** → `slides/`.
- **Visual reutilizável** → `components/`.
- **Orquestração temporal** → `ConcorreAIPresentation.tsx`.

## Configuração global da composição

```ts
const SLIDE_DURATION = 180;        // 6s @ 30fps
const TRANSITION_DURATION = 20;    // frames entre slides
const HERO_TRANSITION_DURATION = 36; // capa → slide 2: wipe + spring

// Transições: index 0 = wipe from-left; demais alternam fade / slide from-right
// Cada slide: SlideInstitutionalHeader(slideNumber) + conteúdo
```

Exportar `FPS`, `DURATION_IN_FRAMES` (descontar overlaps do TransitionSeries).

## Dois modos visuais

| Modo | Quando | Wrapper |
|------|--------|---------|
| **Institucional claro** | Capa, mapeamento, KPIs, maioria B2G | `AbsoluteFill` branco, sem `SlideShell` effects |
| **Cinematográfico tech** | Outro, intro antiga, variantes com HUD | `SlideShell` + `CinematicBackground`, `TechGrid`, `FloatingParticles` |

Slides institucionais atuais: **sem** `showHud`, `showEffects: false` ou `AbsoluteFill` direto.

## Tipos de slide (presets)

| Tipo | Arquivo ref. | Elementos |
|------|--------------|-----------|
| Capa hero | `Slide01Hero` | `cover-bg-light.png`, logos, headline navy/blue, rodapé URL |
| Mapeamento + KPIs | `Slide02MarketIntro` | Logo, badge pill, título 2 cores, 5 KPIs gradiente + count-up |
| Mercado / gráficos duplos | `Slide02MarketSize`, `Slide07`, `Slide11` | `GlassCard` + `HorizontalBarChart` / `StackedBarChart` / `DonutChart` |
| Competidores | `Slide04CompetitorsHigh` | `CompetitorCard` grid, badges de ameaça |
| Matriz / tabela | `Slide06Matrix` | Grid comparativo |
| Ranking | `Slide08TopContratos` | Lista numerada, cores por segmento |
| Requisitos / benefícios | `Slide09Requisitos` | Colunas com ícone + lista |
| Órgãos / compradores | `Slide10Orgaos`, `Slide11` | Donut + barras |
| Oportunidades / alertas | `Slide12`, `Slide13` | Cards destaque, ícones semânticos |
| Encerramento | `Slide14Outro` | Logo grande, CTA, efeitos cinematográficos |

Detalhes em [templates.md](templates.md).

## Animações (timing padrão)

| Elemento | Utilitário | Parâmetros |
|----------|------------|------------|
| Entrada de card | `blurReveal` + spring Y | `staggerDelay(index)`, duração ~22 frames |
| Barras horizontais | `spring` em `HorizontalBarChart` | `startFrame: 18–28`, stagger `+5` por barra |
| KPI count-up | `getCountUpValue` | delay `18 + i * 8`, damping 24, stiffness 65 |
| Barras empilhadas | `StackedBarChart` | `startFrame + i * 8` |
| Donut | `DonutChart` | `startFrame: 25`, stroke dash animado |
| Fade simples | `fadeIn(frame, start, 20)` | opacity 0→1 |

**Regra:** animações devem completar antes do fim dos 6s do slide (~frame 150–165 para stills/PDF).

## Gráficos — contrato de dados

```ts
// Barras horizontais
{ label: string; value: number; color: string; valueLabel?: string; noGlow?: boolean }

// KPI
{ count: KpiCountFormat; label; footer; gradient: string }

// Cores de série (ordem padrão)
"#3B82F6" | "#10B981" | "#F59E0B" | "#EF4444" | "#A855F7" | "#EC4899"
```

Sempre definir `maxValue`, `xTicks` ou `xStep` coerentes com os dados.

## Conteúdo e tom (inteligência de copy)

- **Tom:** institucional, analítico, orientado a decisão (licitações, mercado público, vantagem competitiva).
- **Headline:** verbo + objeto estratégico ("Mapeamento do Mercado Público de Gestão de Frotas").
- **Subtítulo:** escopo + segmentos (Federal, Estadual, Municipal) + produto (Abastecimento, Frota Integrada, Telemetria).
- **KPI footer:** fonte de dados entre parênteses ("PNCP + ComprasNet 2023-2024").
- **Badge:** `INTELIGÊNCIA COMPETITIVA YYYY-YYYY` — uppercase, letter-spacing `0.14em`.
- **CTA outro:** pergunta + contato + URL.

Adaptação por segmento → ver [narrative.md](narrative.md).

## Workflow: nova apresentação

### Fase 1 — Descoberta
- Cliente, setor (público/privado), objetivo (venda, institucional, onboarding).
- Número de slides e tipos (usar presets acima).
- Assets: logos em `public/`, capa opcional.

### Fase 2 — Scaffold
- Clonar estrutura `src/` ou usar `npx create-video` e alinhar versões Remotion 4.
- Configurar `theme.ts` (ajustar azuis da marca se necessário).
- Criar `data/<projeto>Data.ts` espelhando `presentationData.ts`.

### Fase 3 — Implementação
1. `ConcorreAIPresentation.tsx`: registrar slides na ordem narrativa.
2. Um arquivo por slide em `slides/`.
3. Reutilizar componentes existentes antes de criar novos.
4. Dados apenas em `data/`.
5. `npm run dev` — validar no Studio frame a frame.

### Fase 4 — Qualidade
- [ ] Cabeçalho `NN | APRESENTAÇÃO INSTITUCIONAL — ANO` em todos (exceto capa se full-bleed).
- [ ] Transição capa com wipe 36f.
- [ ] Gráficos com `animated` (não `false` salvo still).
- [ ] Sem typos JSX (`div` válido).
- [ ] `npx remotion compositions` sem erro.
- [ ] Contraste e padding consistentes.

### Fase 5 — Entrega
- Vídeo: `npx remotion render <CompositionId> out/video.mp4`
- Áudio: `<Audio src={staticFile("bg.mp3")} volume={0.35} />` em `ConcorreAIPresentation.tsx`
- PDF: `remotion still` por slide + merge externo

## Adaptação por cliente (automática)

| Contexto | Ajustes visuais | Ajustes de copy |
|----------|-----------------|-----------------|
| Órgão público / B2G | Manter institucional claro, fontes de dados PNCP/Compras.gov | Ênfase em licitações, transparência, compliance |
| Empresa privada B2B | Pode intensificar `SlideShell` tech no outro | ROI, eficiência, redução de custo |
| Onboarding produto | Slides `Requisitos` + passos numerados | Linguagem didática, menos jargão |
| Comparativo concorrência | `CompetitorCard`, matriz, ranking | Badges AMEAÇA ALTA/MÉDIA, métricas lado a lado |

Reorganizar array `slides` conforme jornada; não alterar tokens base sem pedido explícito.

## Compatibilidade técnica

- **PowerShell (Windows):** usar `;` entre comandos, não `&&`.
- **Imports de transição:** `springTiming`, `linearTiming` de `@remotion/transitions`.
- **Commits:** só quando o usuário pedir.
- **Markdown docs:** não criar README/skill extras não solicitados além desta skill.

## Anti-padrões

- Misturar tema escuro cinematográfico em slides de dados institucionais.
- Hardcodar dados grandes dentro de `.tsx` de slide.
- Animações Framer em vez de frame-based Remotion.
- Gráficos estáticos com `animated={false}` em apresentação final.
- Ignorar `DURATION_IN_FRAMES` após mudar número de slides/transições.

## Recursos da skill

| Arquivo | Conteúdo |
|---------|----------|
| [design-tokens.md](design-tokens.md) | Tokens completos, escala tipográfica, grid |
| [reference.md](reference.md) | Mapa de arquivos, APIs de componentes, narrativa dos 14 slides |
| [templates.md](templates.md) | Código base por tipo de slide |
| [narrative.md](narrative.md) | Arco narrativo, copy, CTAs, segmentos |

## Resultado esperado

Toda nova apresentação deve ser **indistinguível em qualidade** da ConcorreAI: mesma hierarquia, mesmos ritmos de animação, mesma componentização e mesma estratégia de conteúdo — com dados e marca do novo cliente.
