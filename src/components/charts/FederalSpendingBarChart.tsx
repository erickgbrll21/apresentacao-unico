import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { staggerDelay } from "../../utils/animation";
import { theme } from "../../theme";

export type FederalSpendingRow = {
  year: string;
  contratos: number;
  aprovados: number;
};

const COLOR_CONTRATOS = "#6366F1";
const COLOR_APROVADOS = "#10B981";
const MAX_Y = 6;
const Y_TICKS = [0, 1, 2, 3, 4, 5, 6];

const formatBi = (v: number) => `R$${v.toFixed(1).replace(".", ",")}Bi`;

export const FederalSpendingBarChart: React.FC<{
  data: FederalSpendingRow[];
  startFrame?: number;
  chartWidth?: number;
  chartHeight?: number;
}> = ({ data, startFrame = 22, chartWidth = 520, chartHeight = 300 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const padL = 52;
  const padR = 16;
  const padT = 28;
  const padB = 44;
  const plotW = chartWidth - padL - padR;
  const plotH = chartHeight - padT - padB;
  const svgW = chartWidth;
  const svgH = chartHeight;
  const groupW = plotW / data.length;
  const barW = Math.min(22, groupW * 0.22);
  const innerGap = (groupW - barW * 2) / 3;

  const scaleY = (v: number) => padT + plotH - (v / MAX_Y) * plotH;
  const baseY = padT + plotH;

  return (
    <svg width="100%" height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ overflow: "visible", maxWidth: svgW }}>
      {Y_TICKS.map((tick) => {
        const y = scaleY(tick);
        return (
          <g key={tick}>
            <line
              x1={padL}
              y1={y}
              x2={padL + plotW}
              y2={y}
              stroke={theme.chartGrid}
              strokeWidth={1}
            />
            <text
              x={padL - 8}
              y={y + 4}
              textAnchor="end"
              fill={theme.chartLabel}
              fontSize={11}
              fontWeight={500}
            >
              R${tick}Bi
            </text>
          </g>
        );
      })}

      {data.map((row, i) => {
        const delay = staggerDelay(i, startFrame, 5);
        const progress = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 75 } });
        const gx = padL + i * groupW + innerGap;
        const contratosH = interpolate(progress, [0, 1], [0, (row.contratos / MAX_Y) * plotH]);
        const aprovadosH = interpolate(progress, [0, 1], [0, (row.aprovados / MAX_Y) * plotH]);
        const showLabels = progress > 0.82;

        return (
          <g key={row.year}>
            <rect
              x={gx}
              y={baseY - contratosH}
              width={barW}
              height={contratosH}
              fill={COLOR_CONTRATOS}
              rx={4}
            />
            <rect
              x={gx + barW + innerGap}
              y={baseY - aprovadosH}
              width={barW}
              height={aprovadosH}
              fill={COLOR_APROVADOS}
              rx={4}
            />
            {showLabels && (
              <>
                <text
                  x={gx + barW / 2}
                  y={baseY - contratosH - 5}
                  textAnchor="middle"
                  fill={theme.text}
                  fontSize={9}
                  fontWeight={700}
                >
                  {formatBi(row.contratos)}
                </text>
                <text
                  x={gx + barW + innerGap + barW / 2}
                  y={baseY - aprovadosH - 5}
                  textAnchor="middle"
                  fill={theme.text}
                  fontSize={9}
                  fontWeight={700}
                >
                  {formatBi(row.aprovados)}
                </text>
              </>
            )}
            <text
              x={gx + barW + innerGap / 2}
              y={baseY + 16}
              textAnchor="middle"
              fill={theme.chartLabel}
              fontSize={row.year.length > 8 ? 9 : 11}
              fontWeight={500}
            >
              {row.year}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export const FEDERAL_SPENDING_LEGEND = [
  { color: COLOR_CONTRATOS, label: "Contratos analisados" },
  { color: COLOR_APROVADOS, label: "Aprovados pelo SGD" },
] as const;
