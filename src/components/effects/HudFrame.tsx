import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const HudFrame: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = interpolate(frame % 90, [0, 45, 90], [0.3, 0.6, 0.3]);
  const scanY = interpolate(frame % 180, [0, 180], [0, 100]);

  return (
    <div className="absolute inset-6 pointer-events-none">
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-500/40" style={{ opacity: pulse }} />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-500/40" style={{ opacity: pulse }} />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-500/40" style={{ opacity: pulse }} />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500/40" style={{ opacity: pulse }} />
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        style={{ top: `${scanY}%` }}
      />
    </div>
  );
};
