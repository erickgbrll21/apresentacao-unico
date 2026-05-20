import React from "react";
import { PLAYER_COMPLIANCE, PLAYER_MODERNIDADE } from "../data/presentationData";
import { HorizontalBarChart } from "../components/charts/HorizontalBarChart";
import { GlassCard } from "../components/ui/GlassCard";
import { SlideShell } from "../components/ui/SlideShell";
import { theme } from "../theme";

const ChartCard: React.FC<{
  index: number;
  title: string;
  subtitle: string;
  data: typeof PLAYER_COMPLIANCE;
  maxValue: number;
}> = ({ index, title, subtitle, data, maxValue }) => (
  <GlassCard index={index} className="h-full">
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px 22px", boxSizing: "border-box" }}>
      <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600, color: theme.text }}>{title}</h3>
      <p style={{ margin: "8px 0 0", fontSize: 15, color: theme.textMuted, lineHeight: 1.45 }}>{subtitle}</p>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0, marginTop: 12 }}>
        <HorizontalBarChart
          data={data}
          maxValue={maxValue}
          startFrame={20 + index * 6}
          chartHeight={300}
          chartWidth={720}
          labelWidth={160}
          roundedBarEnd
          labelColor="#0F172A"
        />
      </div>
    </div>
  </GlassCard>
);

export const Slide05CapabilityMatrix: React.FC = () => (
  <SlideShell showHud={false}>
    <h1 style={{ margin: "0 0 8px", fontSize: 34, fontWeight: 700, color: theme.text, flexShrink: 0 }}>
      Posicionamento dos Players no Mercado Público
    </h1>
    <p style={{ margin: "0 0 14px", fontSize: 16, color: theme.textMuted, lineHeight: 1.45, flexShrink: 0 }}>
      Onde cada concorrente se posiciona em compliance governamental vs. modernidade tecnológica (0–100).
    </p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, flex: 1, minHeight: 0 }}>
      <ChartCard
        index={0}
        title="Compliance Governamental"
        subtitle="Experiência com licitações, atestados e SICAF"
        data={PLAYER_COMPLIANCE}
        maxValue={100}
      />
      <ChartCard
        index={1}
        title="Modernidade / Inovação"
        subtitle="Plataforma digital, modelo de benefício e UX"
        data={PLAYER_MODERNIDADE}
        maxValue={100}
      />
    </div>
  </SlideShell>
);
