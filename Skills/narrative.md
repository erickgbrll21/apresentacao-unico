# Narrativa Comercial e Inteligência de Conteúdo

Padrão extraído da apresentação ConcorreAI × Valecard (mercado público de gestão de frotas).

## Arco narrativo (14 atos)

```
CAPA → CONTEXTO MACRO → TAMANHO MERCADO → COMPRA → CONCORRÊNCIA → MATRIZ
  → LICITAÇÕES → PROVAS (CONTRATOS) → REQUISITOS → COMPRADORES
  → OPORTUNIDADES → RISCOS → ENCERRAMENTO
```

| Ato | Objetivo persuasivo | Emoção / lógica |
|-----|---------------------|-----------------|
| Capa | Credibilidade + parceria | Confiança institucional |
| Mapeamento + KPIs | "O mercado é grande e está crescendo" | Urgência positiva |
| Tamanho / evolução | Prova quantitativa | Racional |
| Comportamento compra | "Sabemos como o governo compra" | Expertise |
| Concorrentes | "Conhecemos o campo de batalha" | Alerta estratégico |
| Matriz | Posicionamento relativo | Clareza decisória |
| Licitações | Dados operacionais reais | Autoridade |
| Top contratos | Prova social / benchmarks | Aspiração |
| Requisitos | "Sabemos o que o edital exige" | Segurança técnica |
| Órgãos / compradores | Segmentação ICP | Personalização |
| Oportunidades | "Há espaço para entrar" | Esperança + ação |
| Alertas | Honestidade + mitigação | Credibilidade |
| Outro | Próximo passo | Compromisso |

## Tom de comunicação

- **Registro:** corporativo alto, analítico, sem coloquialismo.
- **Pessoa:** impessoal ou primeira plural institucional ("mapeamos", "identificamos").
- **Verbos:** mapear, posicionar, integrar, licitar, competir, monitorar.
- **Evitar:** superlativos vazios ("o melhor do mercado") sem dado; promessas sem fonte.

## Fórmulas de copy

### Headline (H1 slide)
```
[Mapeamento / Panorama / Radiografia] + [objeto de mercado] + [escopo opcional]
```
Ex.: "Panorama de Licitações 2024 – Maio de 2026"

### Subtítulo
```
[Verbo estratégico] + [cliente/marca] + [produtos/serviços] + [segmentos geográficos ou institucionais]
```
Ex.: "Análise estratégica para posicionamento da Valercard em licitações de Gestão de Abastecimento, Frota Integrada e Telemetria nos segmentos Federal, Estadual e Municipal."

### Fonte de dados (obrigatório em slides de dados)
```
Dados coletados do [fonte A], [fonte B] e [fonte C]
```
Ex.: Portal da Transparência, PNCP, Compras.gov.br

### Badge período
```
INTELIGÊNCIA COMPETITIVA YYYY-YYYY
```

### KPI label + footer
```
label: métrica de negócio clara (sem jargão)
footer: período + fonte entre parênteses
```

### Competidor
```
name + threat badge (AMEAÇA ALTA/MÉDIA/BAIXA)
origin: nacionalidade · contexto corporativo
description: 3–4 frases factuais
tags: produtos/serviços
metrics: 4 indicadores comparáveis
```

### CTA encerramento
```
Pergunta de engajamento + benefício + contato (URL/email)
```

## Adaptação por segmento

### Órgão público / B2G (padrão atual)
- Vocabulário: licitação, pregão, edital, órgão, transparência, SIASG, PNCP.
- Métricas: volume de contratos, pregões abertos, exigências técnicas.
- Visual: institucional claro, fontes governamentais citadas.

### Empresa privada B2B
- Vocabulário: ROI, TCO, frota corporativa, eficiência operacional.
- Métricas: economia %, tempo de implementação, SLA.
- Visual: pode manter claro; outro slide pode ser mais tech.

### Apresentação de produto / onboarding
- Reduzir densidade de dados por slide.
- Mais slides `Requisitos` e passos numerados.
- Tom didático: "Como funciona", "Etapas de implantação".

### Pitch investidor
- Antecipar KPIs macro e CAGR.
- Slide de oportunidade antes de concorrência.
- CTA com métrica de tração.

## Estrutura de slide por densidade

| Densidade | Elementos máx. |
|-----------|----------------|
| Baixa (capa, outro) | 1 headline + 1 sub + logos |
| Média | Título + 4–6 bullets ou 1 gráfico |
| Alta | Título + 2 gráficos ou grid 6 cards |
| Muito alta | Evitar — dividir em 2 slides |

## Cores semânticas em texto

| Cor | Significado |
|-----|-------------|
| `#EF4444` / red badge | Ameaça, risco alto |
| `#F59E0B` | Alerta médio, oportunidade cautelosa |
| `#10B981` | Positivo, ponto forte, baixa ameaça |
| `#3B82F6` | Neutro institucional / primário |

## CTAs estratégicos (exemplos)

- "Vamos mapear sua próxima oportunidade em licitações?"
- "Solicite o relatório completo em concorreai.ia.br"
- "Agende uma demonstração da plataforma"

## Checklist de conteúdo por novo deck

- [ ] Capa com marca cliente + parceiro (se houver)
- [ ] Pelo menos 3 KPIs macro com fonte
- [ ] 1 slide concorrência ou matriz
- [ ] 1 slide prova social (contratos, cases, logos)
- [ ] 1 slide requisitos ou benefícios
- [ ] 1 slide oportunidade + 1 slide risco (equilíbrio)
- [ ] Outro com CTA único e claro
- [ ] Ano no header institucional atualizado

## Geração automática de dados (coerência)

Ao inventar dados para protótipo:
- Manter ordens de grandeza realistas (pregões: centenas–milhares; contratos gov: milhões).
- Soma de % donut = 100%.
- Barras ordenadas por impacto narrativo (maior primeiro).
- Cores consistentes por categoria em todo o deck.
- Nomes de concorrentes reais só se factual; senão usar "Player A/B" em rascunho.

## Reorganização de slides por objetivo

| Objetivo | Ordem sugerida |
|----------|----------------|
| Fechamento comercial | Capa → Oportunidades → Requisitos → Prova → CTA |
| Educação mercado | Capa → KPIs → Tamanho → Compra → Licitações |
| War room competitivo | Capa → Concorrentes → Matriz → Licitações → Alertas |
| Institucional marca | Capa → Sobre → Métricas → Clientes → Outro |

Registrar ordem final apenas em `slides[]` da composição.
