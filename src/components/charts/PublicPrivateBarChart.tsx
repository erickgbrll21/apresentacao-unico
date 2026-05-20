import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { PublicPrivateMetricRow } from "../../data/presentationData";
import { staggerDelay } from "../../utils/animation";
import { theme } from "../../theme";

const PRIVADO_COLOR = "#94A3B8";
const PUBLICO_COLOR = "#3B82F6";

export const PublicPrivateBarChart: React.FC<{
  data: PublicPrivateMetricRow[];
  startFrame?: number;
  chartWidth?: number;
  chartHeight?: number;
}> = ({ data, startFrame = 22, chartWidth = 520, chartHeight = 300 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const maxY = 100;
  const padL = 48;
  const padB = 44;
  const padT = 16;
  const plotW = chartWidth;
  const plotH = chartHeight - padB - padT;
  const svgW = padL + plotW + 24;
  const svgH = chartHeight;
  const groupW = plotW / data.length;
  const barW = Math.min(26, groupW * 0.26);
  const gap = (groupW - barW * 2) / 3;

  const scaleY = (v: number) => padT + plotH - (v / maxY) * plotH;

  return (
    <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ overflow: "visible", maxWidth: "100%" }}>
      {[0, 20, 40, 60, 80, 100].map((tick) => (
        <g key={tick}>
          <line x1={padL} y1={scaleY(tick)} x2={padL + plotW} y2={scaleY(tick)} stroke={theme.chartGrid} strokeWidth={1} />
          <text x={padL - 8} y={scaleY(tick) + 4} textAnchor="end" fill={theme.chartLabel} fontSize={12} fontWeight={500}>
            {tick}
          </text>
        </g>
      ))}

      {data.map((row, i) => {
        const delay = staggerDelay(i, startFrame, 6);
        const progress = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 75 } });
        const gx = padL + i * groupW + gap;
        const privH = interpolate(progress, [0, 1], [0, (row.privado / maxY) * plotH]);
        const pubH = interpolate(progress, [0, 1], [0, (row.publico / maxY) * plotH]);
        const baseY = padT + plotH;

        return (
          <g key={row.metric}>
            <rect x={gx} y={baseY - privH} width={barW} height={privH} fill={PRIVADO_COLOR} rx={4} />
            <rect x={gx + barW + gap} y={baseY - pubH} width={barW} height={pubH} fill={PUBLICO_COLOR} rx={4} />
            {progress > 0.85 && (
              <>
                <text x={gx + barW / 2} y={baseY - privH - 6} textAnchor="middle" fill={theme.text} fontSize={12} fontWeight={700}>
                  {row.privadoLabel}
                </text>
                <text
                  x={gx + barW + gap + barW / 2}
                  y={baseY - pubH - 6}
                  textAnchor="middle"
                  fill={PUBLICO_COLOR}
                  fontSize={12}
                  fontWeight={700}
                >
                  {row.publicoLabel}
                </text>
              </>
            )}
            <text
              x={gx + barW + gap / 2}
              y={baseY + 20}
              textAnchor="middle"
              fill={theme.chartLabel}
              fontSize={11}
              fontWeight={600}
            >
              {row.metric}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export const PUBLIC_PRIVATE_LEGEND = [
  { color: PRIVADO_COLOR, label: "Privado (atual)" },
  { color: PUBLICO_COLOR, label: "Público (estimado)" },
] as const;
