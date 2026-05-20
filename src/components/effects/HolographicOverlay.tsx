import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

/** Camada holográfica sutil — scanlines + reflexo */
export const HolographicOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const shift = interpolate(frame % 120, [0, 120], [0, 100]);

  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(59,130,246,0.5) 2px,
            rgba(59,130,246,0.5) 3px
          )`,
          backgroundPosition: `0 ${shift}%`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, transparent 40%, rgba(59,130,246,0.04) 50%, transparent 60%)`,
          transform: `translateX(${shift * 0.1 - 5}%)`,
        }}
      />
    </>
  );
};
