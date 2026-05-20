/** Dados Unico Skill Gov — Benefício Educação Setor Público (2024 – Mar/2026) */

export const HERO_KPIS = [
  {
    value: "12,65Mi",
    count: { to: 12.65, suffix: "Mi", decimals: 2, decimalSeparator: "," },
    label: "Servidores públicos no Brasil",
    footer: "Federal + Estadual + Municipal · 2024 (IBGE/Ipea)",
    color: "#2D5BFF",
  },
  {
    value: "R$2,1Bi",
    count: { to: 2.1, prefix: "R$", suffix: "Bi", decimals: 1, decimalSeparator: "," },
    label: "Gastos anuais em capacitação pública",
    footer: "PACs consolidados + contratos PNCP 2024",
    color: "#008B5E",
  },
  {
    value: "+1.050",
    count: { to: 1050, prefix: "+", suffix: "", decimals: 0, thousandsSeparator: "." },
    label: "Edtechs ativas no Brasil",
    footer: "EdTech Report 2025 · Distrito Hub",
    color: "#E37C1B",
  },
  {
    value: "400%",
    count: { to: 400, suffix: "%", decimals: 0 },
    label: "Crescimento Unico Skill em 2024",
    footer: "Faturamento · Startups to Watch 2025",
    color: "#D63031",
  },
  {
    value: "0%",
    count: { to: 0, suffix: "%", decimals: 0 },
    label: "Participação gov. atual",
    footer: "Unico Skill: apenas mercado privado hoje",
    color: "#7D3CFF",
  },
];

/** Banner — slide Tamanho e Dinâmica do Mercado */
export const SIAFIC_BANNER = {
  title: "O setor público é o maior empregador do Brasil — e praticamente não tem benefício de educação",
  body: "12,65 milhões de servidores representam 12,3% de todos os vínculos formais do país. A maioria não tem acesso a plataformas modernas de educação — dependendo de ENAPs, escolas de governo com orçamento limitado ou nenhuma oferta. Isso é o maior TAM inexplorado do mercado de benefício educacional no Brasil.",
};

export const MARKET_SLIDE_SOURCE =
  "Dados consolidados de fontes primárias: IBGE, Ipea Atlas do Estado Brasileiro, PNCP, Portal Transparência e relatórios setoriais 2024–Mar/2026.";

/** Distribuição de servidores por esfera — slide Tamanho e Dinâmica do Mercado */
export const SERVIDORES_ESFERA_2024 = [
  { label: "Municipal", value: 7.4, color: "#3B82F6", valueLabel: "7,4M" },
  { label: "Estadual", value: 3.5, color: "#10B981", valueLabel: "3,5M" },
  { label: "Federal", value: 1.75, color: "#F59E0B", valueLabel: "1,75M" },
];

/** Crescimento de contratos públicos de capacitação (R$ milhões) — empilhado */
export const CAPACITATION_STACKED_GROWTH = [
  { year: "2022", abast: 180, gestao: 220, telem: 20, totalLabel: "R$420M" },
  { year: "2023", abast: 260, gestao: 300, telem: 40, totalLabel: "R$600M" },
  { year: "2024", abast: 420, gestao: 380, telem: 80, totalLabel: "R$880M" },
  { year: "Mar/2026 proj.", abast: 580, gestao: 420, telem: 160, totalLabel: "R$1160M" },
];

/** Gastos Federais em TI — contratos vs. aprovados SGD (R$ bilhões) */
export const FEDERAL_IT_SPENDING = [
  { year: "2020", contratos: 1.4, aprovados: 1.2 },
  { year: "2021", contratos: 1.8, aprovados: 1.5 },
  { year: "2022", contratos: 2.4, aprovados: 2.1 },
  { year: "2023", contratos: 3.6, aprovados: 3.2 },
  { year: "2024", contratos: 4.6, aprovados: 4.3 },
  { year: "Mar/2026 proj.", contratos: 5.2, aprovados: 4.4 },
];

/** Crescimento ERP por segmento — volume contratos gov. (R$ milhões, empilhado) */
export type ErpSegmentGrowthRow = {
  year: string;
  municipal: number;
  estadual: number;
  federal: number;
  total: number;
  totalLabel: string;
};

export const ERP_SEGMENT_GROWTH: ErpSegmentGrowthRow[] = [
  { year: "2023", municipal: 620, estadual: 540, federal: 460, total: 1620, totalLabel: "R$1620M" },
  { year: "2024", municipal: 780, estadual: 680, federal: 580, total: 2040, totalLabel: "R$2040M" },
  { year: "2025 est.", municipal: 940, estadual: 820, federal: 680, total: 2440, totalLabel: "R$2440M" },
  { year: "Mar/2026 proj.", municipal: 1150, estadual: 980, federal: 780, total: 2910, totalLabel: "R$2910M" },
];

/** Distribuição por esfera administrativa (%) */
export const ERP_MARKET_SHARE = [
  { label: "Municipal", value: 53, color: "#3B82F6" },
  { label: "Federal", value: 28, color: "#F59E0B" },
  { label: "Estadual", value: 19, color: "#10B981" },
];

/** Investimento estimado por esfera (R$ milhões) — barras horizontais */
export const INVESTIMENTO_ESFERA = [
  { label: "Municipal", value: 4200, color: "#3B82F6", valueLabel: "R$ 4,2Bi" },
  { label: "Estadual", value: 3800, color: "#10B981", valueLabel: "R$ 3,8Bi" },
  { label: "Federal", value: 3200, color: "#F59E0B", valueLabel: "R$ 3,2Bi" },
];

export const TAM_REGION_FOOTNOTE =
  "Potencial Unico Skill: 100 = mercado totalmente aberto, sem concorrente com modelo de benefício. Fontes: IBGE ESTADIC 2024 · Ipea Atlas · MEC/INEP.";

/** TAM por região — Benefício Educação Público (R$ milhões/ano) */
export const TAM_REGION = [
  { label: "Sudeste", value: 4940, color: "#3B82F6", valueLabel: "R$ 4940M" },
  { label: "Sul", value: 2640, color: "#10B981", valueLabel: "R$ 2640M" },
  { label: "Nordeste", value: 2352, color: "#F59E0B", valueLabel: "R$ 2352M" },
  { label: "Centro-Oeste", value: 1152, color: "#A855F7", valueLabel: "R$ 1152M" },
  { label: "Norte", value: 768, color: "#94A3B8", valueLabel: "R$ 768M" },
];

/** Cobertura concorrentes vs. mercado aberto (%) */
export const MARKET_COVERAGE = [
  { region: "Sudeste", competitor: 35, open: 65 },
  { region: "Sul", competitor: 28, open: 72 },
  { region: "Nordeste", competitor: 18, open: 82 },
  { region: "Norte", competitor: 10, open: 90 },
  { region: "Centro-Oeste", competitor: 22, open: 78 },
  { region: "DF/Federal", competitor: 65, open: 35 },
];

export const MARKET_COVERAGE_COLORS = {
  competitor: "#C0715B",
  open: "#6BAA7D",
} as const;

export const GOV_DISTRIBUTION = [
  { label: "Municipal", value: 53, color: "#3B82F6" },
  { label: "Federal", value: 28, color: "#F59E0B" },
  { label: "Estadual", value: 19, color: "#10B981" },
];

/** Distribuição de servidores por área de atuação (slide compradores) */
export const AREA_SERVIDORES = [
  { label: "Educação", value: 32, color: "#3B82F6" },
  { label: "Saúde", value: 22, color: "#10B981" },
  { label: "Administ.", value: 24, color: "#F59E0B" },
  { label: "Segurança", value: 12, color: "#EF4444" },
  { label: "Outros", value: 10, color: "#94A3B8" },
];

/** Posicionamento — compliance gov. (0–100) */
export const PLAYER_COMPLIANCE = [
  { label: "Educamundo/IBEGESP", value: 98, color: "#EF4444", valueLabel: "98/100" },
  { label: "Zênite/ESAFI", value: 92, color: "#F97316", valueLabel: "92/100" },
  { label: "Alura (gov. TI)", value: 70, color: "#A855F7", valueLabel: "70/100" },
  { label: "UOL Edtech", value: 55, color: "#F59E0B", valueLabel: "55/100" },
  { label: "Unico Skill", value: 15, color: "#3B82F6", valueLabel: "15/100" },
];

/** Posicionamento — modernidade / inovação (0–100) */
export const PLAYER_MODERNIDADE = [
  { label: "Unico Skill", value: 92, color: "#3B82F6", valueLabel: "92/100" },
  { label: "UOL Edtech", value: 75, color: "#F59E0B", valueLabel: "75/100" },
  { label: "Alura", value: 68, color: "#A855F7", valueLabel: "68/100" },
  { label: "Zênite/ESAFI", value: 35, color: "#F97316", valueLabel: "35/100" },
  { label: "Educamundo", value: 20, color: "#EF4444", valueLabel: "20/100" },
];

/** Projeção ARR Unico Skill Gov — cenários (R$ milhões) */
export const ARR_SCENARIOS = [
  { quarter: "Q3/25", otimista: 0.5, base: 0.3, conservador: 0.1 },
  { quarter: "Q4/25", otimista: 8, base: 4, conservador: 2 },
  { quarter: "Q1/26", otimista: 25, base: 12, conservador: 6 },
  { quarter: "Q2/26", otimista: 55, base: 28, conservador: 14 },
  { quarter: "Q3/26", otimista: 95, base: 50, conservador: 25 },
  { quarter: "Q4/26", otimista: 140, base: 75, conservador: 38 },
  { quarter: "Q1/27", otimista: 185, base: 100, conservador: 45 },
  { quarter: "Q2/27", otimista: 225, base: 125, conservador: 50 },
];

export type FinancialRevenueKpi = {
  value: string;
  label: string;
  footer: string;
  accent: string;
  footerMuted?: boolean;
};

export const FINANCIAL_REVENUE_KPIS: FinancialRevenueKpi[] = [
  {
    value: "12,65Mi",
    label: "Servidores Públicos BR (2024)",
    footer: "↑ +3,8% municipal vs. 2023",
    accent: "#3B82F6",
  },
  {
    value: "R$12,1Bi",
    label: "TAM Total (ticket R$80/mês)",
    footer: "↑ Mercado virgem · 0% penetrado",
    accent: "#10B981",
  },
  {
    value: "4x",
    label: "ROI documentado",
    footer: "NeoFeed · fev/2026",
    accent: "#F59E0B",
    footerMuted: true,
  },
  {
    value: "98%+",
    label: "Renovação via Inexigibilidade",
    footer: "↑ Churn quase zero após 1º contrato",
    accent: "#EF4444",
  },
  {
    value: "10 anos",
    label: "Contrato máximo possível",
    footer: "Lei 14.133/2021",
    accent: "#7C3AED",
    footerMuted: true,
  },
];

export type PublicPrivateMetricRow = {
  metric: string;
  privado: number;
  publico: number;
  privadoLabel: string;
  publicoLabel: string;
};

export const PUBLIC_PRIVATE_METRICS: PublicPrivateMetricRow[] = [
  { metric: "Margem Bruta %", privado: 65, publico: 70, privadoLabel: "65%", publicoLabel: "70%" },
  { metric: "Churn Anual %", privado: 18, publico: 2, privadoLabel: "18%", publicoLabel: "2%" },
  { metric: "LTV/CAC (x)", privado: 38, publico: 92, privadoLabel: "3,8x", publicoLabel: "11,5x" },
  { metric: "Renovação %", privado: 82, publico: 98, privadoLabel: "82%", publicoLabel: "98%" },
];

export type PricingSegmentCard = {
  icon: string;
  title: string;
  price: string;
  features: string[];
  ltv: string;
  accent: string;
};

/** Modelo de precificação recomendado por segmento público */
export const PRICING_SEGMENTS: PricingSegmentCard[] = [
  {
    icon: "🏢",
    title: "Pequeno Órgão (<500 serv.)",
    price: "R$60–80/serv./mês",
    features: [
      "Acesso ilimitado plataforma base",
      "Cursos livres + idiomas",
      "Certificados com carga horária",
      "Dashboard gestor básico",
      "Implantação em 15 dias",
    ],
    ltv: "LTV 5 anos: R$180K–240K",
    accent: "#3B82F6",
  },
  {
    icon: "🏛️",
    title: "Médio Órgão (500–5K serv.)",
    price: "R$80–110/serv./mês",
    features: [
      "Plataforma completa + graduação",
      "Pós-graduação + MBA + idiomas",
      "Dependentes incluídos",
      "Dashboard com KPIs de uso por setor",
      "Relatórios PAC automáticos",
    ],
    ltv: "LTV 5 anos: R$2,4M–6,6M",
    accent: "#10B981",
  },
  {
    icon: "🚩",
    title: "Grande Órgão / IF / TRE (5K–50K)",
    price: "R$90–130/serv./mês",
    features: [
      "Plataforma enterprise personalizada",
      "Trilhas de formação por cargo/carreira",
      "Integração com sistema de RH do órgão",
      "Gestor de conta dedicado",
      "SLA 99,5% + suporte 8×5",
    ],
    ltv: "LTV 5 anos: R$27M–78M",
    accent: "#F59E0B",
  },
  {
    icon: "🏢",
    title: "Governo Estadual (+50K serv.)",
    price: "R$70–100/serv./mês",
    features: [
      "Plataforma white-label do estado",
      "Integração com Escola de Governo estadual",
      "Conteúdo de gestão pública customizado",
      "Relatórios para Tribunal de Contas",
      "Equipe de implantação dedicada",
    ],
    ltv: "LTV 5 anos: R$210M–600M",
    accent: "#7C3AED",
  },
];

export type ArpMultiplierRow = {
  label: string;
  multiplier: number;
  valueLabel: string;
  color: string;
};

/** Efeito multiplicador — ARP e caronas (múltiplo de receita) */
export const ARP_MULTIPLIER_DATA: ArpMultiplierRow[] = [
  { label: "Sem ARP (1 órgão)", multiplier: 1, valueLabel: "1x receita", color: "#94A3B8" },
  { label: "ARP + 3 caronas", multiplier: 4, valueLabel: "4x receita", color: "#7B47C4" },
  { label: "ARP + 8 caronas", multiplier: 9, valueLabel: "9x receita", color: "#2A5BD7" },
  { label: "ARP + 15 caronas", multiplier: 16, valueLabel: "16x receita", color: "#00875A" },
  { label: "ARP nacional", multiplier: 25, valueLabel: "25x receita", color: "#E67E00" },
];

export const ARP_MULTIPLIER_SUBTITLE = "1 Licitação → Múltiplos Órgãos via Carona";

export const ARP_MULTIPLIER_DESCRIPTION =
  "Uma ARP nacional permite que qualquer órgão contrate o benefício Unico Skill sem nova licitação — multiplicador de ARR sem custo de aquisição adicional";

export const ROADMAP_SUBTITLE =
  "Plano de execução em 4 fases com marcos, investimentos e key results para construir a vertical de governo do zero.";

export const ROADMAP_URGENCY = {
  title: "A Janela Fecha em 18 Meses",
  body: "UOL Edtech e Alura estão olhando para o governo. O IBEGESP está bem estabelecido em cursos pontuais. A Unico Skill tem até o final de 2025 para criar o primeiro precedente de 'benefício educacional ilimitado para servidores' e conquistar os primeiros órgãos antes que os concorrentes entendam o modelo.",
};

export type RoadmapPhase = {
  phaseNumber: number;
  period: string;
  phaseLabel: string;
  title: string;
  icon: string;
  accent: string;
  bulletColor: string;
  items: string[];
  keyResult: string;
};

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phaseNumber: 1,
    period: "Q2/2025",
    phaseLabel: "FUNDAÇÃO",
    title: "Habilitação e Primeiro Contato",
    icon: "⚖️",
    accent: "#F59E0B",
    bulletColor: "#F59E0B",
    items: [
      "Registrar no SICAF — habilitação completa",
      "Elaborar documentação de notória especialização",
      "Contratar 1 especialista em licitações educação",
      "Mapear 30 editais de capacitação abertos no PNCP",
      "Criar Termo de Referência modelo para órgãos",
    ],
    keyResult: "SICAF ativo + TR modelo + 1ª proposta enviada",
  },
  {
    phaseNumber: 2,
    period: "Q3/2025",
    phaseLabel: "PRIMEIRO CONTRATO",
    title: "Atestado Público",
    icon: "🎯",
    accent: "#EAB308",
    bulletColor: "#EAB308",
    items: [
      "POC gratuita para 1 IF federal (ex: IFSP ou UFMG)",
      "Usar ROI 4x + case Bradesco como argumento",
      "Contratar via inexigibilidade art. 74, III, f",
      "Gerar primeiro atestado de capacidade técnica gov.",
      "Participar do CONSAD 2025 e eventos de RH público",
    ],
    keyResult: "1 contrato assinado · primeiro atestado público",
  },
  {
    phaseNumber: 3,
    period: "Q4/2025–Q1/2026",
    phaseLabel: "ESCALA",
    title: "15 Órgãos + ARP Nacional",
    icon: "🚀",
    accent: "#10B981",
    bulletColor: "#14B8A6",
    items: [
      "Campanha ativa nos 5 TREs maiores (SP, MG, RJ, RS, PR)",
      "Abordar 10 Institutos Federais com PAC 2026",
      "Lançar ARP nacional para adesão de qualquer órgão",
      'Publicar whitepaper "Benefício Educação no Gov. BR"',
      "Produzir vídeo case do primeiro órgão atendido",
    ],
    keyResult: "15 contratos · ARP nacional · R$12M ARR Gov.",
  },
  {
    phaseNumber: 4,
    period: "Q2/2026–Q4/2026",
    phaseLabel: "CONSOLIDAÇÃO",
    title: "50 Órgãos · 3 Estados",
    icon: "🏆",
    accent: "#7C3AED",
    bulletColor: "#8B5CF6",
    items: [
      "50 órgãos públicos ativos na plataforma",
      "3 secretarias estaduais com contrato ativo",
      "Parceria formal com CONSAD e CNM",
      'Lançar módulo "Trilha do Servidor" customizado',
      "Meta: R$30M ARR Gov. até dez/2026",
    ],
    keyResult: "50 órgãos · 3 estados · R$30M ARR Gov.",
  },
];

export type InvestmentPhaseRow = {
  quarter: string;
  produto: number;
  timeGov: number;
  parceiros: number;
  marketing: number;
};

export const INVESTMENT_BY_PHASE: InvestmentPhaseRow[] = [
  { quarter: "Q2/25", produto: 0.8, timeGov: 0.5, parceiros: 0.1, marketing: 0.1 },
  { quarter: "Q3/25", produto: 0.4, timeGov: 0.5, parceiros: 0.3, marketing: 0.3 },
  { quarter: "Q4/25", produto: 0.3, timeGov: 0.8, parceiros: 0.5, marketing: 0.4 },
  { quarter: "Q1/26", produto: 0, timeGov: 1.2, parceiros: 0.8, marketing: 0.5 },
  { quarter: "Q2/26", produto: 0, timeGov: 1.6, parceiros: 0.8, marketing: 0.8 },
  { quarter: "Q3/26", produto: 0, timeGov: 2.0, parceiros: 1.0, marketing: 0.8 },
  { quarter: "Q4/26", produto: 0, timeGov: 2.4, parceiros: 1.2, marketing: 0.8 },
];

export const INVESTMENT_PHASE_LEGEND = [
  { color: "#EF4444", label: "Produto/Certificações" },
  { color: "#3B82F6", label: "Time Comercial Gov" },
  { color: "#10B981", label: "Mkt/Eventos Gov" },
  { color: "#F59E0B", label: "POCs / Implantação" },
] as const;

export const INVESTMENT_PHASE_SUBTITLE = "CAPEX + OPEX estimado para construção da vertical Gov";

export const INVESTMENT_PHASE_LEGEND_SHORT = [
  { color: "#EF4444", label: "Produto/Cert." },
  { color: "#3B82F6", label: "Time Gov" },
  { color: "#10B981", label: "Mkt/Eventos" },
  { color: "#F59E0B", label: "POCs/Implant." },
] as const;

export type PaybackPoint = {
  quarter: string;
  investimentoAcumulado: number;
  arrGov: number;
};

export const PAYBACK_SERIES: PaybackPoint[] = [
  { quarter: "Q2/25", investimentoAcumulado: 1.5, arrGov: 0 },
  { quarter: "Q3/25", investimentoAcumulado: 3.0, arrGov: 0.2 },
  { quarter: "Q4/25", investimentoAcumulado: 5.0, arrGov: 0.5 },
  { quarter: "Q1/26", investimentoAcumulado: 7.5, arrGov: 8 },
  { quarter: "Q2/26", investimentoAcumulado: 10.5, arrGov: 18 },
  { quarter: "Q3/26", investimentoAcumulado: 14.0, arrGov: 42 },
  { quarter: "Q4/26", investimentoAcumulado: 17.5, arrGov: 62 },
  { quarter: "Q1/27", investimentoAcumulado: 20.0, arrGov: 82 },
];

export const PAYBACK_LEGEND = [
  { color: "#EF4444", label: "Investimento acumulado" },
  { color: "#10B981", label: "ARR Gov. gerado" },
] as const;

export const PAYBACK_SUBTITLE = "Crossover estimado em ~Q1/2026 (12 meses)";

export const SUCCESS_KPIS_SECTION_TITLE = "Os 3 KPIs que Definem o Sucesso";

export type SuccessKpiCard = {
  kpiLabel: string;
  icon: string;
  value: string;
  description: string;
  footer: string;
  accent: string;
  footerBg: string;
  footerBorder: string;
};

export const SUCCESS_KPIS: SuccessKpiCard[] = [
  {
    kpiLabel: "KPI 1 — Órgãos Públicos Ativos",
    icon: "🏛️",
    value: "50",
    description:
      "órgãos com benefício Unico Skill ativo até dez/2026. Cada órgão bloqueado por inexigibilidade por 5-10 anos após o primeiro contrato.",
    footer: "Q3/25: 1 → Q4/25: 5 → Q2/26: 20 → Q4/26: 50",
    accent: "#3B82F6",
    footerBg: "rgba(37, 99, 235, 0.08)",
    footerBorder: "rgba(37, 99, 235, 0.22)",
  },
  {
    kpiLabel: "KPI 2 — ARR Governamental",
    icon: "💰",
    value: "R$30M",
    description:
      "de Receita Anual Recorrente do setor público até dez/2026. Representa uma nova vertical com margens melhores que o privado.",
    footer: "Q4/25: R$500K → Q2/26: R$12M → Q4/26: R$30M",
    accent: "#059669",
    footerBg: "rgba(5, 150, 105, 0.08)",
    footerBorder: "rgba(5, 150, 105, 0.22)",
  },
  {
    kpiLabel: "KPI 3 — NPS Órgão Público",
    icon: "🔒",
    value: "70+",
    description:
      "NPS mínimo com os órgãos públicos atendidos. Alto NPS gera novos contratos via indicação entre gestores e facilita caronas em ARPs.",
    footer: "Gestores de RH público são altamente conectados em redes profissionais",
    accent: "#D97706",
    footerBg: "rgba(217, 119, 6, 0.1)",
    footerBorder: "rgba(217, 119, 6, 0.28)",
  },
];

export const SUCCESS_CLOSING = {
  icon: "🚀",
  headline: "A Unico Skill pode ser o primeiro benefício educacional de cobertura nacional para o setor público",
  body:
    "26 mil cursos, 90+ IES parceiras, ROI 4x documentado e know-how de validação de identidade do ecossistema Unico. Falta o primeiro atestado público — a janela de 18 meses está aberta.",
};

export const SUCCESS_BADGES = [
  { label: "✓ Catálogo inigualável", color: "#059669", bg: "rgba(5, 150, 105, 0.1)", border: "rgba(5, 150, 105, 0.25)" },
  { label: "✓ Modelo de benefício único", color: "#7C3AED", bg: "rgba(124, 58, 237, 0.1)", border: "rgba(124, 58, 237, 0.25)" },
  { label: "✓ ROI 4x comprovado", color: "#D97706", bg: "rgba(217, 119, 6, 0.12)", border: "rgba(217, 119, 6, 0.28)" },
  { label: "⚡ Janela fecha em 18 meses", color: "#DC2626", bg: "rgba(220, 38, 38, 0.08)", border: "rgba(220, 38, 38, 0.22)" },
] as const;

export type PurchaseBarItem = {
  label: string;
  pct: number;
  color: string;
  highlight?: boolean;
  value?: string;
};

export type PurchaseSection = {
  items: PurchaseBarItem[];
  footer: string;
};

/** TAM Benefício Educação — projeção por esfera (R$ milhões/ano) */
export const TAM_BENEFICIO_PROJECTION = [
  { year: "2024", municipal: 355, estadual: 210, federal: 95 },
  { year: "2025", municipal: 520, estadual: 310, federal: 130 },
  { year: "2026 proj.", municipal: 760, estadual: 430, federal: 185 },
  { year: "2027 proj.", municipal: 1100, estadual: 580, federal: 265 },
  { year: "2028 proj.", municipal: 1580, estadual: 750, federal: 375 },
];

export const PURCHASE_MODALIDADES: PurchaseSection = {
  items: [
    { label: "Inexigibilidade", pct: 58, color: "#3B82F6", highlight: true },
    { label: "Pregão Eletrônico", pct: 28, color: "#1E40AF" },
    { label: "Dispensa", pct: 14, color: "#F59E0B" },
  ],
  footer:
    "Inexigibilidade domina: o art. 74, III, f da Lei 14.133/2021 permite contratar diretamente instrutores de notória especialização — sem licitação. Porta de entrada direta para a Unico Skill.",
};

export const PURCHASE_SAZONALIDADE: PurchaseSection = {
  items: [
    { label: "Jan–Mar", pct: 16, color: "#7C3AED" },
    { label: "Abr–Jun", pct: 28, color: "#3B82F6", highlight: true },
    { label: "Jul–Set", pct: 35, color: "#991B1B" },
    { label: "Out–Dez", pct: 21, color: "#8B5CF6" },
  ],
  footer:
    "Pico Jul–Set: coincide com execução orçamentária e Planos Anuais de Capacitação (PAC). Estratégia: prospectar em Jan–Mar para fechar em Jul–Set.",
};

export const PURCHASE_TICKET: PurchaseSection = {
  items: [
    { label: "Federal grande", value: "R$2,4M", pct: 100, color: "#3B82F6", highlight: true },
    { label: "Estadual", value: "R$1,4M", pct: 58, color: "#059669" },
    { label: "Federal médio/IF", value: "R$900K", pct: 38, color: "#7C3AED" },
    { label: "Municipal grande", value: "R$520K", pct: 22, color: "#F59E0B" },
    { label: "Municipal médio", value: "R$148K", pct: 6, color: "#DC2626" },
  ],
  footer:
    "PAC do TRE-SP 2024: R$148,7K de contratos de capacitação em um único tribunal. Multiplicado por 5.570 municípios = mercado bilionário.",
};

/** @deprecated use PURCHASE_* — mantido para slides legados */
export const MODALIDADES = PURCHASE_MODALIDADES.items;
export const SAZONALIDADE = PURCHASE_SAZONALIDADE.items;
export const TICKET_SEGMENTO = PURCHASE_TICKET.items;

export const DURACAO_CONTRATOS = [
  { label: "5 anos", pct: 28, color: "#8B5CF6" },
  { label: "7 anos", pct: 35, highlight: true, color: "#8B5CF6" },
  { label: "10 anos", pct: 27, color: "#8B5CF6" },
  { label: "Outros", pct: 10, color: "#8B5CF6" },
];

export type CompetitorMetric = { label: string; value: string; highlight?: "red" | "orange" | "green" };

export type Competitor = {
  name: string;
  threat: string;
  threatColor: "red" | "orange" | "green";
  origin: string;
  description: string;
  tags: string[];
  metrics: CompetitorMetric[];
};

export const COMPETITORS_HIGH: Competitor[] = [
  {
    name: "Educamundo",
    threat: "AMEAÇA CRÍTICA",
    threatColor: "red",
    origin: "Especialista público · 450+ órgãos · 120K alunos certif.",
    description:
      "Referência nacional em capacitação para gestão pública. IBEGESP, sua marca principal, já certificou mais de 120 mil alunos, atendeu mais de 450 órgãos e é especialista em Nova Lei de Licitações. Modelo B2G puro. Contrata por inexigibilidade como empresa de notória especialização. Forte em Federal e Judiciário.",
    tags: ["Capacitação Gov.", "Nova Lei Licitações", "EAD ao vivo", "In company"],
    metrics: [
      { label: "Órgãos atendidos", value: "450+", highlight: "red" },
      { label: "Alunos certificados", value: "120 mil", highlight: "red" },
      { label: "Presença Gov.", value: "Dominante", highlight: "red" },
      { label: "Ponto fraco", value: "Não é benefício — é curso avulso", highlight: "green" },
    ],
  },
  {
    name: "ESAFI / Zênite / Negócios Públicos",
    threat: "AMEAÇA ALTA",
    threatColor: "red",
    origin: "Especialistas capacitação Gov. · modelo presencial + EAD",
    description:
      "Grupo de escolas especializadas em servidores públicos. ESAFI contrata in company e EAD ao vivo. Zênite aparece em PAC 2024 do TRE-SP por R$13,5K para 9 servidores. Negócios Públicos contratados no PAC do TRE-SP por R$8,6K para 2 servidores. Modelo de venda por curso, não por assinatura mensal.",
    tags: ["In Company", "Pregões", "Licitações", "Presencial"],
    metrics: [
      { label: "Modelo", value: "Por curso/evento" },
      { label: "Ticket", value: "R$1K–15K/contrato" },
      { label: "Presença Gov.", value: "Forte", highlight: "red" },
      { label: "Ponto fraco", value: "Não tem plataforma digital contínua", highlight: "green" },
    ],
  },
  {
    name: "UOL Edtech / UOL Cursos",
    threat: "AMEAÇA ALTA",
    threatColor: "red",
    origin: "Brasileira · Grupo UOL · GSV Edtech 150 · 2024",
    description:
      "Reconhecida no GSV Edtech 150 em 2024 como uma das mais transformadoras do mundo. Plataforma B2B de educação corporativa com portfólio amplo. Forte em médias e grandes empresas privadas. Expandindo para governo com licenças EAD. Modelo de assinatura por colaborador — mesma lógica da Unico Skill.",
    tags: ["EAD corporativo", "Plataforma SaaS", "B2B/B2G", "GSV 150"],
    metrics: [
      { label: "Reconhecimento", value: "GSV Edtech 150 · 2024" },
      { label: "Foco principal", value: "Privado + expansão gov." },
      { label: "Presença Gov.", value: "Crescendo", highlight: "orange" },
      { label: "Ponto fraco", value: "Não integra graduação/pós/IES", highlight: "green" },
    ],
  },
];

export const COMPETITORS_MED: Competitor[] = [
  {
    name: "Alura Para Empresas",
    threat: "AMEAÇA MÉDIA",
    threatColor: "orange",
    origin: "Maior plataforma tech BR · GSV Edtech 150 · 2x",
    description:
      "Líder em tecnologia corporativa B2B. Mais de 2.000 cursos, 22 trilhas progressivas, IA para personalização. Selecionada no GSV Edtech 150 por dois anos consecutivos (2023 e 2024). Fortíssima em TI/tech. Presente em Secretarias de TI de estados e órgãos tech. Mas foco é tecnologia — não educação ilimitada multidisciplinar.",
    tags: ["Tecnologia", "IA para aprendizado", "Trilhas", "MBA tech"],
    metrics: [
      { label: "Cursos", value: "2.000+ (só tech)" },
      { label: "Reconhecimento", value: "GSV 150 · 2x" },
      { label: "Presença Gov.", value: "Moderada (TI)", highlight: "orange" },
      { label: "Ponto fraco", value: "Só tech · sem graduação/idiomas", highlight: "green" },
    ],
  },
  {
    name: "ENAP — Escola Nac. Adm. Pública",
    threat: "AMEAÇA MÉDIA",
    threatColor: "orange",
    origin: "Federal · gratuita · concorrência interna",
    description:
      "Principal escola de governo do Brasil. Oferece certificação profissional em Licitações (2024), cursos EAD gratuitos e programas de liderança. É o principal argumento de resistência interna: “já temos a ENAP”. Mas capacidade limitada — em 2024 certificou apenas ~15 mil servidores, dos 1,7 milhão federais. Foco exclusivo no federal.",
    tags: ["Gratuita", "Federal", "Liderança Gov.", "Certificação"],
    metrics: [
      { label: "Alcance", value: "~15K serv./ano" },
      { label: "Custo", value: "Gratuito (orçamento)" },
      { label: "Presença Gov.", value: "Federal apenas", highlight: "orange" },
      { label: "Ponto fraco", value: "Capacidade limitada · sem IES parceiras", highlight: "green" },
    ],
  },
  {
    name: "Hotmart / Descomplica / Kultivi",
    threat: "AMEAÇA BAIXA",
    threatColor: "green",
    origin: "Plataformas B2C com algum B2B público",
    description:
      "Hotmart reconhecida no GSV Edtech 150 em 2024. Descomplica e Kultivi fortes em concursos públicos (B2C). Nenhuma tem modelo de benefício corporativo robusto para governo. Kultivi oferece cursos gratuitos com foco em concursos. Eventualmente aparecem em editais de pequenos municípios via dispensa, mas sem estrutura B2G.",
    tags: ["B2C", "Concursos", "Cursos avulsos"],
    metrics: [
      { label: "Foco", value: "Consumidor final" },
      { label: "Modelo", value: "Assinatura B2C" },
      { label: "Presença Gov.", value: "Marginal", highlight: "green" },
      { label: "Ponto fraco", value: "Sem estrutura de venda B2G", highlight: "green" },
    ],
  },
];

export const COMPETITORS_ALL = [...COMPETITORS_HIGH, ...COMPETITORS_MED];

export type ScoreEntry = { name: string; score: number; color: string; highlight?: boolean; warning?: boolean };

export type Scorecard = {
  title: string;
  icon: string;
  entries: ScoreEntry[];
  footer?: string;
  footerColor?: "green" | "red";
};

export const SCORECARDS: Scorecard[] = [
  {
    title: "Amplitude do Catálogo",
    icon: "📚",
    entries: [
      { name: "Unico Skill", score: 95, color: "#3B82F6", highlight: true },
      { name: "UOL Edtech", score: 72, color: "#F59E0B" },
      { name: "Alura", score: 58, color: "#A855F7" },
      { name: "IBEGESP/Educamundo", score: 35, color: "#EF4444" },
    ],
    footer: "✨ 26K cursos + IES nacionais e internacionais é inigualável no segmento.",
    footerColor: "green",
  },
  {
    title: "Experiência em Gov. (B2G)",
    icon: "🏛️",
    entries: [
      { name: "IBEGESP/Educamundo", score: 98, color: "#EF4444" },
      { name: "ESAFI / Zênite", score: 90, color: "#F97316" },
      { name: "UOL Edtech", score: 42, color: "#F59E0B" },
      { name: "Unico Skill ⚠", score: 5, color: "#EF4444", warning: true },
    ],
    footer: "⚠ Ausência total no gov. — barreira a corrigir urgentemente.",
    footerColor: "red",
  },
  {
    title: "Custo-Benefício Percebido",
    icon: "💰",
    entries: [
      { name: "Unico Skill", score: 92, color: "#3B82F6", highlight: true },
      { name: "UOL Edtech", score: 70, color: "#F59E0B" },
      { name: "Alura", score: 65, color: "#A855F7" },
      { name: "IBEGESP", score: 50, color: "#94A3B8" },
    ],
    footer: "✨ ROI 4x documentado. Benefício ilimitado vs. pagamento por curso avulso.",
    footerColor: "green",
  },
  {
    title: "Modelo de Benefício (Assinatura)",
    icon: "🤝",
    entries: [
      { name: "Unico Skill", score: 98, color: "#3B82F6", highlight: true },
      { name: "UOL Edtech", score: 68, color: "#F59E0B" },
      { name: "Alura", score: 62, color: "#A855F7" },
      { name: "IBEGESP / Educamundo", score: 10, color: "#EF4444" },
    ],
    footer: "✨ Único player com modelo ilimitado + dependentes + validação de identidade.",
    footerColor: "green",
  },
  {
    title: "Segurança / Validação de Identidade",
    icon: "🔐",
    entries: [
      { name: "Unico Skill", score: 100, color: "#3B82F6", highlight: true },
      { name: "Todos os outros", score: 15, color: "#EF4444" },
    ],
    footer:
      "✨ Know-how da Unico (identidade digital) garante que o benefício é usado pelo servidor real — argumento irresistível para controle público.",
    footerColor: "green",
  },
  {
    title: "Crescimento e Estabilidade Financeira",
    icon: "📈",
    entries: [
      { name: "UOL / Grupo UOL", score: 88, color: "#F59E0B" },
      { name: "Alura", score: 82, color: "#A855F7" },
      { name: "Unico Skill", score: 80, color: "#3B82F6", highlight: true },
      { name: "IBEGESP", score: 45, color: "#94A3B8" },
    ],
    footer: "✨ +400% em 2024, meta +250% em 2025. Startup to Watch 2025. Empresa do ecossistema Unico.",
    footerColor: "green",
  },
];

export type CapabilityStatus = "full" | "partial" | "none";

export type CapabilityCell = {
  status: CapabilityStatus;
  detail: string;
};

export type GovCapabilityMatrixRow = {
  empresa: string;
  highlight?: boolean;
  plataforma: CapabilityCell;
  cursos: CapabilityCell;
  beneficio: CapabilityCell;
  experienciaGov: CapabilityCell;
};

export const GOV_CAPABILITY_MATRIX: GovCapabilityMatrixRow[] = [
  {
    empresa: "Unico Skill",
    highlight: true,
    plataforma: { status: "full", detail: "Portal + app · 26K cursos" },
    cursos: { status: "full", detail: "90+ IES parceiras nacionais" },
    beneficio: { status: "full", detail: "Ticket fixo/servidor/mês" },
    experienciaGov: { status: "none", detail: "Ainda sem contratos gov." },
  },
  {
    empresa: "Educamundo / IBEGESP",
    plataforma: { status: "partial", detail: "Plataforma EAD básica" },
    cursos: { status: "none", detail: "Só gestão pública" },
    beneficio: { status: "none", detail: "Venda por curso/evento" },
    experienciaGov: { status: "full", detail: "450+ órgãos atendidos" },
  },
  {
    empresa: "UOL Edtech",
    plataforma: { status: "full", detail: "Plataforma corporativa SaaS" },
    cursos: { status: "partial", detail: "Diversificado · sem IES" },
    beneficio: { status: "full", detail: "Assinatura por colaborador" },
    experienciaGov: { status: "partial", detail: "Alguns órgãos" },
  },
  {
    empresa: "Alura Para Empresas",
    plataforma: { status: "full", detail: "Plataforma IA + trilhas" },
    cursos: { status: "none", detail: "Só tecnologia (2K cursos)" },
    beneficio: { status: "full", detail: "Assinatura por colaborador" },
    experienciaGov: { status: "partial", detail: "TI/Secretarias tech" },
  },
  {
    empresa: "ENAP",
    plataforma: { status: "full", detail: "Plataforma gratuita EAD" },
    cursos: { status: "none", detail: "Só gestão pública" },
    beneficio: { status: "none", detail: "Sem benefício — é escola" },
    experienciaGov: { status: "full", detail: "Federal exclusivo" },
  },
];

export type CapabilityMatrixRow = {
  empresa: string;
  federal: CapabilityCell;
  estadual: CapabilityCell;
  municipal: CapabilityCell;
  siafic: CapabilityCell;
};

export const CAPABILITY_MATRIX: CapabilityMatrixRow[] = [
  {
    empresa: "Sankhya (potencial)",
    federal: { status: "partial", detail: "ERP completo · sem certificação" },
    estadual: { status: "partial", detail: "Capaz · sem histórico gov." },
    municipal: { status: "partial", detail: "Middle market · adaptável" },
    siafic: { status: "none", detail: "Módulo público não certificado" },
  },
  {
    empresa: "TOTVS Protheus/RM",
    federal: { status: "full", detail: "Presente em centenas de órgãos" },
    estadual: { status: "full", detail: "Dominante nos estados" },
    municipal: { status: "full", detail: "RM forte em médios" },
    siafic: { status: "full", detail: "Compliance pleno" },
  },
  {
    empresa: "SAP S/4HANA",
    federal: { status: "full", detail: "Domina grandes estatais" },
    estadual: { status: "partial", detail: "Caro · poucos estados" },
    municipal: { status: "none", detail: "Inacessível por preço" },
    siafic: { status: "full", detail: "Compliance + Gartner Gov." },
  },
  {
    empresa: "Oracle Fusion",
    federal: { status: "partial", detail: "Presente em alguns federais" },
    estadual: { status: "none", detail: "Pouca presença" },
    municipal: { status: "none", detail: "Inacessível" },
    siafic: { status: "partial", detail: "Cloud gov. em evolução" },
  },
  {
    empresa: "Betha Sistemas",
    federal: { status: "none", detail: "Não atende" },
    estadual: { status: "none", detail: "Não atende" },
    municipal: { status: "full", detail: "Líder absoluta" },
    siafic: { status: "full", detail: "Compliance total" },
  },
  {
    empresa: "IPM (Atende.Net)",
    federal: { status: "none", detail: "Não atende" },
    estadual: { status: "none", detail: "Não atende" },
    municipal: { status: "full", detail: "Cloud nativo · crescendo" },
    siafic: { status: "full", detail: "Compliance total" },
  },
];

export const LICITACOES_PRODUTO = [
  { label: "Capacitação Licitações/Contratos", value: 3200, color: "#3B82F6", valueLabel: "3200 proc." },
  { label: "Capacitação Gestão Pública", value: 1800, color: "#10B981", valueLabel: "1800 proc." },
  { label: "Idiomas / Qualif. Geral", value: 980, color: "#F59E0B", valueLabel: "980 proc." },
  { label: "Tecnologia / TI Gov.", value: 750, color: "#A855F7", valueLabel: "750 proc." },
  { label: "Liderança / Gestão Pessoas", value: 640, color: "#EC4899", valueLabel: "640 proc." },
  { label: "EAD Corporativo (gov.)", value: 420, color: "#EF4444", valueLabel: "420 proc." },
  { label: "Benefício Educação (novo)", value: 180, color: "#64748B", noGlow: true, valueLabel: "180 proc." },
];

export const LICITACOES_VENCEDORES = [
  { label: "Educamundo/IBEGESP", value: 450, color: "#EF4444", valueLabel: "450 contratos" },
  { label: "Zênite/ESAFI", value: 380, color: "#3B82F6", valueLabel: "380 contratos" },
  { label: "Neg. Públicos", value: 320, color: "#F59E0B", valueLabel: "320 contratos" },
  { label: "UOL Edtech", value: 85, color: "#10B981", valueLabel: "85 contratos" },
  { label: "Alura (gov. TI)", value: 60, color: "#A855F7", valueLabel: "60 contratos" },
  { label: "Hotmart (algum)", value: 30, color: "#EC4899", valueLabel: "30 contratos" },
  { label: "Outros regionais", value: 480, color: "#64748B", noGlow: true, valueLabel: "480 contratos" },
];

export type ContratoPublicoRow = {
  rank: number;
  orgaoNome: string;
  orgaoDetalhe: string;
  objeto: string;
  valor: string;
  valorTone: "blue" | "purple" | "green" | "orange" | "yellow";
  modalidade: string;
  fornecedor: string;
};

export const CONTRATOS_PUBLICOS: ContratoPublicoRow[] = [
  {
    rank: 1,
    orgaoNome: "TRE-SP",
    orgaoDetalhe: "Tribunal Regional Eleitoral SP",
    objeto:
      "PAC 2024 completo — 24 ações de capacitação (EAD ao vivo, presencial, congresso). Fornecedores: Zênite, Negócios Públicos, Insper, Priori, entre outros.",
    valor: "R$148,7K",
    valorTone: "blue",
    modalidade: "Inexigib. + Dispensa",
    fornecedor: "Múltiplos",
  },
  {
    rank: 2,
    orgaoNome: "TRE-AM",
    orgaoDetalhe: "Tribunal Regional Eleitoral AM",
    objeto:
      'Curso "Formação de Pregoeiro e Agente de Contratação" — 3 servidores — in company — 16 a 17 jan/2025. Conforme PAC/Portaria TRE/AM 136/2024.',
    valor: "~R$3–8K",
    valorTone: "green",
    modalidade: "Inexig. - art.74 III f",
    fornecedor: "Zênite/ESAFI",
  },
  {
    rank: 3,
    orgaoNome: "Assembleia Leg. Rondônia",
    orgaoDetalhe: "Porto Velho · PNCP out/2024",
    objeto:
      'Inscrição de 5 servidores em curso online "Orçamento Público: Procedimentos Metodológicos" — out/2024. Modalidade: Inexigibilidade Lei 14.133/2021 art. 74, III, f',
    valor: "Estimado ~R$5K",
    valorTone: "orange",
    modalidade: "Inexig. 28/2024",
    fornecedor: "Neg. Públicos",
  },
  {
    rank: 4,
    orgaoNome: "Estado da Paraíba — SEDUC",
    orgaoDetalhe: "Capacitação nas Gerências Regionais",
    objeto:
      "Formação de servidores das Gerências Regionais em Licitações e Contratações Diretas. In company + replicação interna. Professor externo. Meta: habilitação para dispensa eletrônica 2025",
    valor: "~R$20–50K",
    valorTone: "orange",
    modalidade: "Contratação direta",
    fornecedor: "A definir",
  },
  {
    rank: 5,
    orgaoNome: "TRE-SP PAC — Insper",
    orgaoDetalhe: "Compliance e governança",
    objeto:
      'Curso "Compliance e Governança no Setor Público" — 4 servidores — EAD ao vivo — Insper Instituição de Ensino.',
    valor: "R$29,4K",
    valorTone: "green",
    modalidade: "Inexigibilidade",
    fornecedor: "Insper",
  },
  {
    rank: 6,
    orgaoNome: "Institutos Federais (genérico)",
    orgaoDetalhe: "38 IFs · Plano Anual Cap.",
    objeto:
      "Benefício de qualificação/capacitação para servidores TAE: acesso a cursos EAD e presenciais. Base legal: Lei 11.091/2005 (PCCTAE) e progressão por capacitação.",
    valor: "R$100K–500K/IF",
    valorTone: "blue",
    modalidade: "Pregão/Inexig.",
    fornecedor: "Variados",
  },
];

export const CONTRATOS_PUBLICOS_FONTE =
  "Fontes: PNCP (pncp.gov.br) · TRE-SP PAC 2024 · TRE-AM TR 01/2025 · AL-RO PNCP 28/2024 · Gov. PB SEDUC · Portal Transparência";

export type BubbleSegment = {
  label: string;
  ticket: number;
  volume: number;
  riskColor: "low" | "medium" | "high" | "volume" | "neutral";
  ticketLabel: string;
  /** Cor da bolha (slide compradores) */
  color?: string;
  /** TAM relativo — define o raio da bolha (1 = pequeno, 5 = grande) */
  tam?: number;
};

export const BUBBLE_SEGMENTS: BubbleSegment[] = [
  { label: "Sec. Estaduais", ticket: 118, volume: 4, tam: 4.2, riskColor: "medium", ticketLabel: "R$118/serv.", color: "#3B82F6" },
  { label: "Fund. Fed.", ticket: 128, volume: 5, tam: 3, riskColor: "low", ticketLabel: "R$128/serv.", color: "#A855F7" },
  { label: "TREs/Judic.", ticket: 138, volume: 6, tam: 3.6, riskColor: "high", ticketLabel: "R$138/serv.", color: "#38BDF8" },
  { label: "IFs / IFES", ticket: 95, volume: 7, tam: 3, riskColor: "neutral", ticketLabel: "R$95/serv.", color: "#10B981" },
  { label: "Pref. Grandes", ticket: 78, volume: 8, tam: 3, riskColor: "neutral", ticketLabel: "R$78/serv.", color: "#F59E0B" },
  { label: "Câmara", ticket: 65, volume: 9, tam: 1.8, riskColor: "volume", ticketLabel: "R$65/serv.", color: "#94A3B8" },
  { label: "Pref. Médias", ticket: 65, volume: 10, tam: 4.5, riskColor: "low", ticketLabel: "R$65/serv.", color: "#1E40AF" },
];

export type PresencaSegmentoRow = {
  segment: string;
  ibegesp: number;
  uolEdtech: number;
  alura: number;
  unicoPotencial: number;
};

export const PRESENCA_SEGMENTO: PresencaSegmentoRow[] = [
  { segment: "Fed. Grande", ibegesp: 85, uolEdtech: 30, alura: 40, unicoPotencial: 8 },
  { segment: "Estadual", ibegesp: 78, uolEdtech: 22, alura: 28, unicoPotencial: 10 },
  { segment: "Mun. Grande", ibegesp: 55, uolEdtech: 15, alura: 12, unicoPotencial: 15 },
  { segment: "Mun. Médio", ibegesp: 40, uolEdtech: 8, alura: 5, unicoPotencial: 18 },
  { segment: "IFs/TREs", ibegesp: 80, uolEdtech: 18, alura: 35, unicoPotencial: 12 },
];

export type SankhyaTotvsTone = "positive" | "negative" | "warning" | "neutral";

export type SankhyaVsTotvsRow = {
  icon: string;
  criterio: string;
  sankhya: string;
  totvs: string;
  sankhyaTone: SankhyaTotvsTone;
  totvsTone: SankhyaTotvsTone;
};

export const SANKHYA_VS_TOTVS = {
  sankhyaHeader: "Challenger · +400% 2024 · 200K cobertos",
  totvsHeader: "Líder Gov · 450+ órgãos · 120K certs.",
  rows: [
    {
      icon: "🎓",
      criterio: "Cursos disponíveis",
      sankhya: "26.000+",
      totvs: "Gestão pública (nicho)",
      sankhyaTone: "positive",
      totvsTone: "neutral",
    },
    {
      icon: "🏗️",
      criterio: "IES Parceiras",
      sankhya: "90+ nacionais e internacionais",
      totvs: "Instrutores especializados",
      sankhyaTone: "positive",
      totvsTone: "neutral",
    },
    {
      icon: "💰",
      criterio: "Modelo de preço",
      sankhya: "Ticket fixo/mês (ilimitado)",
      totvs: "Por curso / por servidor",
      sankhyaTone: "positive",
      totvsTone: "negative",
    },
    {
      icon: "👪",
      criterio: "Dependentes",
      sankhya: "✅ Pai, mãe, filhos, cônjuge",
      totvs: "❌ Não inclui",
      sankhyaTone: "positive",
      totvsTone: "negative",
    },
    {
      icon: "📊",
      criterio: "ROI documentado",
      sankhya: "✅ 4x (NeoFeed · fev/2026)",
      totvs: "Certificações · performance",
      sankhyaTone: "positive",
      totvsTone: "neutral",
    },
    {
      icon: "✔️",
      criterio: "Validação identidade",
      sankhya: "✅ Know-how Unico",
      totvs: "❌ Sem tecnologia própria",
      sankhyaTone: "positive",
      totvsTone: "negative",
    },
    {
      icon: "🏛️",
      criterio: "Atestados públicos",
      sankhya: "⚠️ Nenhum ainda",
      totvs: "✅ 450+ órgãos",
      sankhyaTone: "warning",
      totvsTone: "positive",
    },
  ] as SankhyaVsTotvsRow[],
  footer:
    "A Unico Skill vence em catálogo, modelo de benefício e custo-benefício. A janela para conquistar o primeiro atestado público é agora.",
};

/** Dimensões do radar Unico Skill × UOL × IBEGESP (0–100) */
export const SANKHYA_VS_TOTVS_RADAR = [
  { dimension: "Catálogo", sankhya: 90, totvs: 70, betha: 40 },
  { dimension: "Compliance Gov.", sankhya: 40, totvs: 60, betha: 95 },
  { dimension: "Custo-Benefício", sankhya: 95, totvs: 50, betha: 30 },
  { dimension: "Modernidade", sankhya: 85, totvs: 60, betha: 40 },
  { dimension: "Rede Parceiros", sankhya: 80, totvs: 50, betha: 40 },
  { dimension: "Crescimento", sankhya: 95, totvs: 40, betha: 30 },
];

export const TOP_CONTRATOS = [
  { rank: 1, orgao: "Fundações Federais (Fiocruz, Funai, FNDE)", objeto: "ERP completo · RH · Financeiro · Contratos", valor: "R$ 5–15M", color: "green", ref: "TOTVS / SAP" },
  { rank: 2, orgao: "Autarquias Federais (ANEEL, ANTT, INSS)", objeto: "Financeiro · Compras · Patrimônio", valor: "R$ 3–8M", color: "green", ref: "TOTVS / Oracle" },
  { rank: 3, orgao: "Bancos e Fomento Estaduais", objeto: "ERP financeiro · RH · Compliance · Sigajuri", valor: "R$ 8–20M", color: "purple", ref: "TOTVS" },
  { rank: 4, orgao: "Secretarias Estaduais de Gestão / Fazenda", objeto: "SIAFIC · Orçamento · Contabilidade · RH", valor: "R$ 10–50M", color: "purple", ref: "TOTVS / SAP" },
  { rank: 5, orgao: "Prefeituras Grandes (+300k hab.)", objeto: "ERP completo · Tributos · Portal cidadão", valor: "R$ 2–8M", color: "blue", ref: "TOTVS / Betha / IPM" },
  { rank: 6, orgao: "Prefeituras Médias (50–300k hab.)", objeto: "SIAFIC + Tributos + Folha", valor: "R$ 300K–1,5M", color: "green", ref: "Betha / IPM / Fiorilli" },
  { rank: 7, orgao: "Institutos Federais (38 IFs · 680 campi)", objeto: "ERP Gestão · RH · Compras · Patrimônio", valor: "R$ 500K–3M/campus", color: "green", ref: "TOTVS RM" },
  { rank: 8, orgao: "Universidades Federais (69 IFES)", objeto: "RH · Financeiro · Protocolo · Almox.", valor: "R$ 1–5M", color: "blue", ref: "TOTVS RM" },
  { rank: 9, orgao: "Câmaras Municipais (5.570 câmaras)", objeto: "SIAFIC · Folha · Transparência", valor: "R$ 30–150K", color: "amber", ref: "Betha / Fiorilli" },
  { rank: 10, orgao: "Empresas Públicas / Estatais", objeto: "ERP enterprise · Governança · BI", valor: "R$ 5–30M", color: "orange", ref: "SAP / TOTVS" },
];

export const REQUISITOS = [
  {
    title: "Plataforma e Conteúdo",
    accent: "#3B82F6",
    icon: "📚",
    items: [
      "Sistema EAD com acesso 24/7 via web e mobile",
      "Certificados válidos com carga horária comprovada",
      "Conteúdo atualizado às mudanças legislativas",
      "Material de apoio (PDF, slides, gravações)",
      "Avaliações e testes de proficiência",
      "Relatórios de acesso e desempenho por servidor",
    ],
  },
  {
    title: "Habilitação Jurídica",
    accent: "#10B981",
    icon: "⚖️",
    items: [
      "Registro no SICAF sem restrições",
      "Comprovação de notória especialização (inexigibilidade)",
      "Atestados de capacidade técnica com órgãos públicos",
      "Certidões negativas tributárias e trabalhistas",
      "Contrato de prestação de serviços com SLA definido",
      "CNPJ ativo e regular há mais de 2 anos",
    ],
  },
  {
    title: "Modelo de Benefício — Novo Paradigma",
    accent: "#F59E0B",
    icon: "🎯",
    items: [
      "Acesso ilimitado a cursos por servidor/mês",
      "Inclui dependentes (pai, mãe, filhos, cônjuge)",
      "Graduação, pós, MBA, idiomas, cursos livres",
      "Dashboard para gestores com KPIs de uso",
      "ROI de até 4x comprovado (NeoFeed · fev/2026)",
      "Validação de identidade (diferencial Único)",
    ],
  },
];

export type TopOrgaoAtratividadeStyle = "plain-green" | "pill-green" | "pill-blue" | "pill-orange";

export type TopOrgaoRow = {
  tipo: string;
  servidores: string;
  ticket: string;
  ciclo: string;
  baseLegal: string;
  atratividade: string;
  atratividadeStyle: TopOrgaoAtratividadeStyle;
  showStar?: boolean;
};

export const TOP_ORGAOS: TopOrgaoRow[] = [
  {
    tipo: "Secretarias Estaduais de Gestão/Educação",
    servidores: "50K–300K",
    ticket: "R$80–150/serv.",
    ciclo: "6–12 meses",
    baseLegal: "PAC obrigatório",
    atratividade: "Muito Alta",
    atratividadeStyle: "plain-green",
    showStar: true,
  },
  {
    tipo: "Institutos Federais (38 IFs · 680 campi)",
    servidores: "2K–8K/IF",
    ticket: "R$80–120/serv.",
    ciclo: "4–8 meses",
    baseLegal: "PCCTAE (Lei 11.091)",
    atratividade: "Muito Alta",
    atratividadeStyle: "plain-green",
    showStar: true,
  },
  {
    tipo: "Tribunais Eleitorais (TREs) e Judiciário",
    servidores: "500–5K",
    ticket: "R$100–180/serv.",
    ciclo: "3–6 meses",
    baseLegal: "Inexig. / PAC",
    atratividade: "Alta · Recorrente",
    atratividadeStyle: "pill-green",
    showStar: true,
  },
  {
    tipo: "Prefeituras Grandes (+300K hab.)",
    servidores: "5K–50K",
    ticket: "R$60–100/serv.",
    ciclo: "6–12 meses",
    baseLegal: "Pregão / Inexig.",
    atratividade: "Alta",
    atratividadeStyle: "pill-blue",
  },
  {
    tipo: "Universidades Federais (69 IFES)",
    servidores: "2K–15K/univ.",
    ticket: "R$80–130/serv.",
    ciclo: "4–10 meses",
    baseLegal: "PCCTAE / PAC",
    atratividade: "Alta",
    atratividadeStyle: "pill-blue",
  },
  {
    tipo: "Fundações Federais (Fiocruz, IBGE, Funai)",
    servidores: "1K–10K",
    ticket: "R$100–160/serv.",
    ciclo: "6–12 meses",
    baseLegal: "PAC / Inexig.",
    atratividade: "Alta",
    atratividadeStyle: "pill-blue",
  },
  {
    tipo: "Governo do Estado (Palácio + Secretarias)",
    servidores: "100K–400K",
    ticket: "R$60–100/serv.",
    ciclo: "12–24 meses",
    baseLegal: "Pregão / Convênio",
    atratividade: "Alta · Ciclo longo",
    atratividadeStyle: "pill-orange",
  },
  {
    tipo: "Prefeituras Médias (50–300K hab.)",
    servidores: "500–5K",
    ticket: "R$50–80/serv.",
    ciclo: "4–8 meses",
    baseLegal: "Dispensa / Inexig.",
    atratividade: "Volume + Recorrente",
    atratividadeStyle: "pill-green",
    showStar: true,
  },
  {
    tipo: "Agências Reguladoras (ANATEL, ANEEL, ANS)",
    servidores: "500–3K",
    ticket: "R$120–200/serv.",
    ciclo: "4–8 meses",
    baseLegal: "PAC / Inexig.",
    atratividade: "Média · Alto ticket",
    atratividadeStyle: "pill-orange",
  },
  {
    tipo: "Câmaras Municipais (5.570)",
    servidores: "50–500",
    ticket: "R$50–80/serv.",
    ciclo: "2–4 meses",
    baseLegal: "Dispensa",
    atratividade: "Média · Massivo",
    atratividadeStyle: "pill-orange",
  },
];

/** Ticket médio por segmento (volume de processos proxy) */
export const SEGMENTO_TICKET = [
  { label: "Câmaras", value: 1.5, color: "#94A3B8", valueLabel: "R$ 1,5M" },
  { label: "Pref. Médias", value: 3, color: "#3B82F6", valueLabel: "R$ 3M" },
  { label: "IFs / Univ.", value: 3.5, color: "#10B981", valueLabel: "R$ 3,5M" },
  { label: "Pref. Grandes", value: 5, color: "#22C55E", valueLabel: "R$ 5M" },
  { label: "Autarquias Fed.", value: 8, color: "#3B82F6", valueLabel: "R$ 8M" },
  { label: "Fund. Federais", value: 12, color: "#6366F1", valueLabel: "R$ 12M" },
  { label: "Sec. Estaduais", value: 16, color: "#F59E0B", valueLabel: "R$ 16M" },
  { label: "Estatais", value: 18.5, color: "#EF4444", valueLabel: "R$ 18,5M" },
];

export const PORTE_ORGAO = GOV_DISTRIBUTION;

export type HeatMapRow = {
  uf: string;
  servidores: string;
  orcamento: string;
  ifsIfes: string;
  concorrente: string;
  potencial: number;
  potencialLevel: "high" | "mid-high" | "mid";
  prioridade: string;
  prioridadeLevel: "p1" | "p2" | "p3";
};

export const HEAT_MAP_UF: HeatMapRow[] = [
  { uf: "São Paulo – SP", servidores: "~400K", orcamento: "R$80M+", ifsIfes: "9 IFs · 5 IFES", concorrente: "Educamundo / ESAFI", potencial: 95, potencialLevel: "high", prioridade: "P1 · Imediato", prioridadeLevel: "p1" },
  { uf: "Minas Gerais – MG", servidores: "~280K", orcamento: "R$55M+", ifsIfes: "IFMG · IFNMG · UFMG +", concorrente: "Educamundo / regionais", potencial: 92, potencialLevel: "high", prioridade: "P1 · Imediato", prioridadeLevel: "p1" },
  { uf: "Rio de Janeiro – RJ", servidores: "~230K", orcamento: "R$48M+", ifsIfes: "IFRJ · UERJ · UFRJ", concorrente: "UOL Edtech / Educamundo", potencial: 90, potencialLevel: "high", prioridade: "P1 · Federal+Est.", prioridadeLevel: "p1" },
  { uf: "Rio Grande do Sul – RS", servidores: "~180K", orcamento: "R$38M+", ifsIfes: "IFRS · IFSul · UFRGS", concorrente: "Zênite / Educamundo", potencial: 88, potencialLevel: "high", prioridade: "P1 · Imediato", prioridadeLevel: "p1" },
  { uf: "Paraná – PR", servidores: "~175K", orcamento: "R$35M+", ifsIfes: "IFPR · UFPR", concorrente: "Educamundo / regionais", potencial: 86, potencialLevel: "high", prioridade: "P1 · Imediato", prioridadeLevel: "p1" },
  { uf: "Santa Catarina – SC", servidores: "~140K", orcamento: "R$30M+", ifsIfes: "IFSC · UFSC", concorrente: "Educamundo (sede)", potencial: 78, potencialLevel: "mid-high", prioridade: "P2 · Curto prazo", prioridadeLevel: "p2" },
  { uf: "Bahia – BA", servidores: "~200K", orcamento: "R$36M+", ifsIfes: "IFBA · IFBaiano · UFBA", concorrente: "Regionais fracos", potencial: 82, potencialLevel: "mid-high", prioridade: "P2 · Expansão", prioridadeLevel: "p2" },
  { uf: "Goiás – GO", servidores: "~120K", orcamento: "R$24M+", ifsIfes: "IFG · UFG", concorrente: "Educamundo / regionais", potencial: 80, potencialLevel: "mid-high", prioridade: "P2 · Expansão", prioridadeLevel: "p2" },
  { uf: "Pernambuco – PE", servidores: "~160K", orcamento: "R$30M+", ifsIfes: "IFPE · UFPE", concorrente: "Educamundo / regionais", potencial: 78, potencialLevel: "mid-high", prioridade: "P2 · Expansão", prioridadeLevel: "p2" },
  { uf: "Ceará – CE", servidores: "~145K", orcamento: "R$28M+", ifsIfes: "IFCE · UFC", concorrente: "Regionais fracos", potencial: 76, potencialLevel: "mid-high", prioridade: "P2 · Expansão", prioridadeLevel: "p2" },
  { uf: "Mato Grosso – MT", servidores: "~80K", orcamento: "R$16M+", ifsIfes: "IFMT · UFMT", concorrente: "Educamundo (IFs)", potencial: 70, potencialLevel: "mid", prioridade: "P3 · Médio prazo", prioridadeLevel: "p3" },
  { uf: "Pará – PA", servidores: "~110K", orcamento: "R$20M+", ifsIfes: "IFPA · UFPA", concorrente: "Quase sem concorrência", potencial: 68, potencialLevel: "mid", prioridade: "P3 · Oportunidade", prioridadeLevel: "p3" },
  { uf: "Maranhão – MA", servidores: "~130K", orcamento: "R$18M+", ifsIfes: "IFMA · UFMA", concorrente: "Sem player relevante", potencial: 65, potencialLevel: "mid", prioridade: "P3 · Blue Ocean", prioridadeLevel: "p3" },
];

export const OPORTUNIDADES = [
  {
    title: "12,65 milhões de servidores sem benefício educacional de amplo acesso",
    text: "O Brasil tem 12,65 milhões de servidores públicos (IBGE 2024). A ENAP atinge apenas ~15 mil/ano. Escolas de governo estaduais são subfinanciadas. A Unico Skill, com 26 mil cursos de 90+ IES parceiras, pode ser o primeiro benefício educacional de cobertura nacional para o setor público. Um único estado médio com 50 mil servidores a R$80/mês = R$48M/ano de ARR.",
  },
  {
    title: "Nova Lei de Licitações cria demanda explosiva por capacitação",
    text: "A Lei 14.133/2021 (em vigor 100% desde 2024) obrigou todos os órgãos a capacitar seus agentes de contratação. O art. 74, III, f permite contratar por inexigibilidade qualquer empresa com notória especialização. O TRE-AM contratou por inexigibilidade em jan/2025; a Assembleia de Rondônia fez o mesmo em out/2024. A Unico Skill pode ser enquadrada como empresa de notória especialização em benefício educacional — sem licitação.",
  },
  {
    title: "Institutos Federais — 38 IFs, 680 campi, obrigação legal de qualificar TAEs",
    text: "A Lei 11.091/2005 (PCCTAE) garante progressão por capacitação aos servidores técnico-administrativos dos IFs e universidades federais. Cada IF tem PAC anual e dotação orçamentária específica para capacitação. O diferencial da Unico Skill: em vez de pagar R$29,4K pelo Insper para 4 pessoas, pagar R$80/servidor/mês para todos os 3.000 servidores do IF. Economia de escala imediata.",
  },
  {
    title: "ROI de 4x documentado — argumento para o TCU e gestores",
    text: "A NeoFeed reportou em fev/2026 que o Unico Skill tem ROI de até 4x — cada real investido pela empresa resulta em 4 reais de educação utilizada pelos colaboradores. Esse dado é o argumento perfeito para justificar ao TCU, CGU e Tribunais de Contas a contratação por benefício mensal contínuo em vez de cursos avulsos. 'Para cada R$100 investidos no benefício, o servidor acessa R$400 em educação.'",
  },
];

export const ALERTAS_DEFESA = [
  {
    title: "Unico Skill não tem registro no SICAF nem atestados de órgãos públicos",
    text: "Para participar de pregões e dispensas, o CNPJ deve estar ativo no SICAF sem restrições. Para inexigibilidade, precisa comprovar notória especialização com portfólio de clientes relevantes. Hoje a Unico Skill tem 100+ empresas privadas (Nestlé, Heineken, BMG), mas nenhum órgão público. Esse é o primeiro passo antes de qualquer ação comercial gov.",
  },
  {
    title: "Argumento \"já temos a ENAP\" pode bloquear vendas no Federal",
    text: "Gestores federais costumam rejeitar propostas de educação citando a ENAP. A resposta é objetiva: a ENAP atingiu ~15 mil servidores em 2024 de 1,7 milhão federais — 0,88% da cobertura. A Unico Skill pode cobrir os 99,1% restantes, com 26 mil opções de cursos que a ENAP não oferece (graduação, pós, idiomas, mentorias).",
  },
  {
    title: "UOL Edtech e Alura estão expandindo ativamente para o governo",
    text: "O GSV Edtech 150 2024 reconheceu UOL Edtech, Hotmart, Descomplica e Alura. Plataformas com mais recursos financeiros estão olhando para o setor público. A Unico Skill tem uma janela de 12–18 meses para criar diferenciação e fidelizar os primeiros órgãos antes que os grandes entrantes cheguem com força.",
  },
];

export const AMEACAS_CRITICAS = [
  {
    title: "Modelo \"benefício\" ainda não tem precedente consolidado em editais públicos",
    text: "Nenhum edital mapeado usa o modelo \"assinatura mensal por servidor com acesso ilimitado a múltiplas IES\". O padrão atual é: contratar curso por evento ou plataforma EAD específica. A Unico Skill precisará criar o primeiro edital-modelo, treinar assessorias jurídicas para usar o instrumento correto e provar que o modelo é legal — uma barreira de inovação real.",
  },
  {
    title: "81% dos empregadores têm dificuldade para encontrar talentos — isso também vale para governos",
    text: "A pesquisa Manpower Group (citada pela Unico Skill) mostra que 81% dos empregadores brasileiros não encontram profissionais com as habilidades necessárias. No setor público, esse gap é ainda mais crítico — servidores permanecem por décadas e a reciclagem é obrigatória. Quem não entrar agora no ciclo de renovação perde a chance de ser a plataforma padrão de desenvolvimento de servidores por uma geração.",
  },
];

/** @deprecated Use AMEACAS_CRITICAS */
export const AMEACAS_DIRETAS = AMEACAS_CRITICAS;

export const CLOSING_KPIS = [
  {
    icon: "🏛",
    value: "200",
    label: "municípios + órgãos ativos até dez/2026",
    detail: "Cada um bloqueado por 5-10 anos via inexigibilidade.",
    timeline: "Atual: 0 → Q4/25: 1 → Q2/26: 50 → Q4/26: 200",
    color: "#7C3AED",
  },
  {
    icon: "💰",
    value: "R$100M",
    label: "de Receita Anual Recorrente do setor público até dez/2026",
    detail: "Representa +13% sobre ARR atual.",
    timeline: "Q4/25: R$0,5M → Q2/26: R$30M → Q4/26: R$100M",
    color: "#10B981",
  },
  {
    icon: "🔒",
    value: "98%+",
    label: "de renovação por inexigibilidade",
    detail: "Contratos públicos têm churn próximo de zero — blindagem única.",
    timeline: "Privado atual: ~85% • Público estimado: 98%+",
    color: "#F59E0B",
  },
];

/** @deprecated use SEGMENTO_TICKET */
export const SETORES_VOLUME = SEGMENTO_TICKET.map((s) => ({ label: s.label, pct: s.value * 3, color: s.color }));

/** @deprecated */
export const FLEET_EVOLUTION = ARR_SCENARIOS.map((r) => ({
  year: r.quarter,
  total: r.otimista,
  managed: r.base,
}));

/** @deprecated */
export const CONTRACT_GROWTH = ARR_SCENARIOS.map((r) => ({
  year: r.quarter,
  abast: r.base,
  gestao: Math.round(r.base * 0.3),
  telem: Math.round(r.base * 0.15),
}));
