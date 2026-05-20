import React, { useMemo } from "react";
import { interpolate, useCurrentFrame } from "remotion";

const SEED = [
  { x: 12, y: 18, s: 2, sp: 0.3 },
  { x: 85, y: 22, s: 1.5, sp: 0.5 },
  { x: 45, y: 75, s: 2.5, sp: 0.2 },
  { x: 72, y: 55, s: 1, sp: 0.6 },
  { x: 28, y: 42, s: 1.8, sp: 0.4 },
  { x: 58, y: 12, s: 2, sp: 0.35 },
  { x: 92, y: 68, s: 1.2, sp: 0.45 },
  { x: 8, y: 82, s: 2.2, sp: 0.25 },
  { x: 38, y: 28, s: 1.4, sp: 0.55 },
  { x: 65, y: 88, s: 1.6, sp: 0.38 },
  { x: 18, y: 58, s: 1, sp: 0.48 },
  { x: 78, y: 35, s: 2.3, sp: 0.32 },
  { x: 52, y: 48, s: 1.7, sp: 0.42 },
  { x: 95, y: 15, s: 1.3, sp: 0.5 },
  { x: 5, y: 45, s: 2, sp: 0.28 },
];

export const FloatingParticles: React.FC<{ count?: number }> = ({ count = 15 }) => {
  const frame = useCurrentFrame();
  const particles = useMemo(() => SEED.slice(0, count), [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => {
        const yOffset = interpolate(
          (frame * p.sp + i * 20) % 200,
          [0, 100, 200],
          [0, -15, 0]
        );
        const opacity = interpolate(
          (frame + i * 30) % 120,
          [0, 60, 120],
          [0.15, 0.5, 0.15]
        );
        return (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/60"
            style={{
              left: `${p.x}%`,
              top: `${p.y + yOffset * 0.1}%`,
              width: p.s,
              height: p.s,
              opacity,
              boxShadow: `0 0 ${p.s * 4}px rgba(59,130,246,0.4)`,
            }}
          />
        );
      })}
    </div>
  );
};
