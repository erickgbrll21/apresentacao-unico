import React from "react";

const TEAL = "#2DD4BF";

/** Céu noturno + reflexos e chão digital */
export const CoverSky: React.FC = () => (
  <>
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(ellipse 90% 70% at 75% 35%, rgba(30, 64, 120, 0.55) 0%, transparent 55%),
          radial-gradient(ellipse 60% 40% at 20% 80%, rgba(45, 212, 191, 0.08) 0%, transparent 50%),
          linear-gradient(165deg, #060e1a 0%, #0a1628 35%, #0f1f3d 70%, #0a1628 100%)
        `,
      }}
    />
    {/* Horizonte luminoso */}
    <div
      style={{
        position: "absolute",
        right: 0,
        bottom: "18%",
        width: "65%",
        height: 280,
        background:
          "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(251, 191, 36, 0.12) 0%, rgba(45, 212, 191, 0.06) 40%, transparent 70%)",
        pointerEvents: "none",
      }}
    />
    {/* Linhas de chão — efeito tech */}
    <svg
      style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 220, opacity: 0.35 }}
      viewBox="0 0 1920 220"
      preserveAspectRatio="none"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line
          key={`h-${i}`}
          x1={0}
          y1={180 - i * 18}
          x2={1920}
          y2={180 - i * 18}
          stroke={TEAL}
          strokeWidth={i === 0 ? 1.5 : 0.6}
          opacity={0.15 + i * 0.04}
        />
      ))}
      {[200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800].map((x) => (
        <line
          key={`v-${x}`}
          x1={x}
          y1={80}
          x2={960 + (x - 960) * 0.3}
          y2={220}
          stroke={TEAL}
          strokeWidth={0.5}
          opacity={0.12}
        />
      ))}
    </svg>
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 4,
        background: `linear-gradient(90deg, transparent, ${TEAL}, transparent)`,
        opacity: 0.5,
        boxShadow: `0 0 24px ${TEAL}`,
      }}
    />
  </>
);

/** Congresso Nacional — silhueta estilizada em SVG */
export const CongressBuilding: React.FC = () => (
  <svg
    style={{
      position: "absolute",
      right: "-2%",
      bottom: "8%",
      width: "58%",
      height: "72%",
      opacity: 0.95,
    }}
    viewBox="0 0 900 620"
    fill="none"
  >
    <defs>
      <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="domeGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <filter id="buildingGlow">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Base / platô */}
    <ellipse cx={450} cy={580} rx={420} ry={40} fill="rgba(15,23,42,0.8)" />
    <rect x={80} y={520} width={740} height={60} fill="#0f172a" opacity={0.9} />

    {/* Torre esquerda */}
    <rect x={120} y={80} width={90} height={440} fill="url(#towerGrad)" filter="url(#buildingGlow)" />
    <rect x={128} y={100} width={74} height={400} fill="#1e293b" />
    {Array.from({ length: 18 }).map((_, row) =>
      Array.from({ length: 4 }).map((_, col) => (
        <rect
          key={`wl-${row}-${col}`}
          x={136 + col * 16}
          y={110 + row * 20}
          width={10}
          height={12}
          rx={1}
          fill={(row + col) % 3 !== 0 ? "rgba(251,191,36,0.7)" : "rgba(251,191,36,0.25)"}
        />
      ))
    )}

    {/* Torre direita */}
    <rect x={690} y={80} width={90} height={440} fill="url(#towerGrad)" filter="url(#buildingGlow)" />
    <rect x={698} y={100} width={74} height={400} fill="#1e293b" />
    {Array.from({ length: 18 }).map((_, row) =>
      Array.from({ length: 4 }).map((_, col) => (
        <rect
          key={`wr-${row}-${col}`}
          x={706 + col * 16}
          y={110 + row * 20}
          width={10}
          height={12}
          rx={1}
          fill={row % 3 !== col % 2 ? "rgba(251,191,36,0.65)" : "rgba(251,191,36,0.2)"}
        />
      ))
    )}

    {/* Cúpula esquerda (Senado) */}
    <ellipse cx={340} cy={380} rx={110} ry={75} fill="url(#domeGrad)" />
    <path
      d="M230 380 Q230 280 340 250 Q450 280 450 380 Z"
      fill="#334155"
      opacity={0.95}
    />
    <ellipse cx={340} cy={250} rx={110} ry={40} fill="#475569" />
    <rect x={300} y={240} width={80} height={8} fill="#64748b" />

    {/* Cúpula direita (Câmara) */}
    <ellipse cx={560} cy={400} rx={130} ry={85} fill="url(#domeGrad)" />
    <path
      d="M430 400 Q430 290 560 255 Q690 290 690 400 Z"
      fill="#334155"
      opacity={0.95}
    />
    <ellipse cx={560} cy={255} rx={130} ry={45} fill="#475569" />
    <rect x={515} y={245} width={90} height={8} fill="#64748b" />

    {/* Eixo central — reflexo água */}
    <ellipse cx={450} cy={530} rx={200} ry={25} fill="rgba(45,212,191,0.08)" />
    <ellipse cx={450} cy={535} rx={120} ry={12} fill="rgba(45,212,191,0.15)" />
  </svg>
);

/** Mapa do Brasil — malha digital */
const BRAZIL_NODES: [number, number][] = [
  [155, 45], [175, 38], [200, 42], [220, 55], [235, 75], [240, 100], [235, 125],
  [225, 150], [210, 175], [195, 195], [175, 210], [150, 218], [125, 210], [105, 190],
  [95, 165], [90, 140], [88, 115], [95, 90], [110, 68], [130, 52], [155, 45],
];

const BRAZIL_INNER_NODES: [number, number][] = [
  [140, 80], [170, 75], [195, 95], [200, 120], [185, 145], [160, 160], [135, 150],
  [120, 125], [125, 100], [140, 80],
];

export const BrazilNetworkMap: React.FC = () => {
  const allNodes = [...BRAZIL_NODES.slice(0, -1), ...BRAZIL_INNER_NODES];

  return (
    <svg
      style={{ position: "absolute", top: 20, right: 40, width: 340, height: 300 }}
      viewBox="0 0 280 240"
    >
      <defs>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse cx={165} cy={125} rx={95} ry={105} fill="rgba(45,212,191,0.04)" stroke="none" />
      {/* Contorno Brasil */}
      <path
        d={BRAZIL_NODES.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ") + " Z"}
        fill="rgba(45,212,191,0.06)"
        stroke={TEAL}
        strokeWidth={1.2}
        opacity={0.55}
      />
      {/* Conexões malha */}
      {allNodes.flatMap((a, i) =>
        allNodes.slice(i + 1).map((b, j) => {
          const dist = Math.hypot(a[0] - b[0], a[1] - b[1]);
          if (dist > 55) return null;
          return (
            <line
              key={`${i}-${j}`}
              x1={a[0]}
              y1={a[1]}
              x2={b[0]}
              y2={b[1]}
              stroke={TEAL}
              strokeWidth={0.6}
              opacity={0.25}
            />
          );
        })
      )}
      {allNodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i < 12 ? 3.5 : 2.5} fill={TEAL} filter="url(#nodeGlow)" opacity={0.85} />
      ))}
    </svg>
  );
};

export const ConcorreAILogo: React.FC<{ height?: number }> = ({ height = 44 }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, height }}>
    <svg width={height} height={height} viewBox="0 0 48 48" fill="none">
      <circle cx={24} cy={24} r={22} stroke={TEAL} strokeWidth={3} fill="rgba(45,212,191,0.12)" />
      <path
        d="M30 14 A14 14 0 1 0 30 38 L30 24 L18 24"
        stroke={TEAL}
        strokeWidth={4}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
    <span style={{ fontSize: height * 0.55, fontWeight: 700, letterSpacing: "-0.02em" }}>
      <span style={{ color: "#FFFFFF" }}>Concorre</span>
      <span style={{ color: TEAL }}>AI</span>
    </span>
  </div>
);

