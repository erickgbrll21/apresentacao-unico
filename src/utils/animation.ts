import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const useSlideProgress = (delay = 0, duration = 30) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = delay;
  const end = delay + duration;
  const progress = interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const springVal = spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 120, mass: 0.8 },
  });
  return { frame, fps, progress, springVal };
};

export const fadeIn = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const blurReveal = (frame: number, start: number, duration = 25) => {
  const opacity = fadeIn(frame, start, duration);
  const blur = interpolate(frame, [start, start + duration], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { opacity, blur, filter: `blur(${blur}px)` };
};

export const slideUp = (
  frame: number,
  fps: number,
  start: number,
  fromY = 40
) => {
  const s = spring({
    frame: frame - start,
    fps,
    config: { damping: 20, stiffness: 100 },
  });
  return interpolate(s, [0, 1], [fromY, 0]);
};

export const staggerDelay = (index: number, base = 8, step = 6) =>
  base + index * step;
