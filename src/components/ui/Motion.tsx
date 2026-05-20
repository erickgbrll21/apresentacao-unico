import { motion } from "framer-motion";
import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { blurReveal, slideUp } from "../../utils/animation";

/** Framer Motion wrapper com animações sincronizadas ao frame do Remotion */
export const MotionReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { opacity, filter } = blurReveal(frame, delay, 24);
  const y = slideUp(frame, fps, delay, 30);

  return (
    <motion.div
      className={className}
      style={{ opacity, filter, transform: `translateY(${y}px)` }}
    >
      {children}
    </motion.div>
  );
};

export { motion };
