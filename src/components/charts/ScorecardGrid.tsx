import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { Scorecard } from "../../data/presentationData";
import { staggerDelay } from "../../utils/animation";
import { theme } from "../../theme";

const LABEL_COL = "minmax(128px, 48%)";
const SCORE_COL = "minmax(90px, auto)";

export const ScorecardGrid: React.FC<{
  cards: Scorecard[];
  startFrame?: number;
  cardBackground?: string;
}> = ({ cards, startFrame = 12, cardBackground = theme.card }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: 14,
        width: "100%",
        height: "100%",
      }}
    >
      {cards.map((card, ci) => {
        const delay = staggerDelay(ci, startFrame, 6);
        const progress = spring({ frame: frame - delay, fps, config: { damping: 20, stiffness: 85 } });
        const opacity = interpolate(progress, [0, 1], [0, 1]);
        const translateY = interpolate(progress, [0, 1], [16, 0]);

        return (
          <div
            key={card.title}
            style={{
              opacity,
              transform: `translateY(${translateY}px)`,
              backgroundColor: cardBackground,
              border: `1px solid ${theme.cardBorder}`,
              borderRadius: 16,
              padding: "18px 20px",
              boxSizing: "border-box",
              boxShadow: "0 4px 28px rgba(15, 23, 42, 0.07)",
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              overflow: "hidden",
            }}
          >
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: 20,
                fontWeight: 700,
                color: theme.text,
                display: "flex",
                alignItems: "center",
                gap: 6,
                lineHeight: 1.25,
              }}
            >
              <span>{card.icon}</span>
              {card.title}
            </h3>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
              {card.entries.map((entry, ei) => {
                const barDelay = delay + ei * 3;
                const barProgress = spring({
                  frame: frame - barDelay,
                  fps,
                  config: { damping: 18, stiffness: 90 },
                });
                const widthPct = interpolate(barProgress, [0, 1], [0, entry.score]);

                return (
                  <div
                    key={entry.name}
                    style={{
                      display: "grid",
                      gridTemplateColumns: `${LABEL_COL} 1fr ${SCORE_COL}`,
                      columnGap: 12,
                      alignItems: "center",
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: 1.35,
                        color: entry.warning ? "#D97706" : theme.textMuted,
                        fontWeight: entry.highlight ? 600 : 500,
                        wordBreak: "break-word",
                        hyphens: "auto",
                      }}
                    >
                      {entry.name}
                    </span>
                    <div
                      style={{
                        height: 10,
                        minWidth: 0,
                        backgroundColor: theme.borderSubtle,
                        borderRadius: 4,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${widthPct}%`,
                          height: "100%",
                          backgroundColor: entry.color,
                          borderRadius: 4,
                          boxShadow: entry.highlight ? `0 0 10px ${entry.color}66` : undefined,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        textAlign: "right",
                        fontSize: 15,
                        fontWeight: 700,
                        color: entry.highlight ? "#2563EB" : theme.text,
                        fontVariantNumeric: "tabular-nums",
                        whiteSpace: "nowrap",
                        paddingLeft: 2,
                      }}
                    >
                      {entry.score}/100
                      {entry.highlight ? " ✨+" : ""}
                    </span>
                  </div>
                );
              })}
            </div>

            {card.footer && (
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: 14,
                  lineHeight: 1.45,
                  fontWeight: 600,
                  color: card.footerColor === "red" ? "#DC2626" : "#059669",
                }}
              >
                {card.footer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};
