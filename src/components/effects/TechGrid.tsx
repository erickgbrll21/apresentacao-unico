import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const TechGrid: React.FC = () => {
  const frame = useCurrentFrame();
  const offset = interpolate(frame % 120, [0, 120], [0, 40]);

  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        backgroundPosition: `${offset}px ${offset}px`,
      }}
    />
  );
};
