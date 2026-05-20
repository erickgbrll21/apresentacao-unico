import { interpolate, spring } from "remotion";

export type KpiCountFormat = {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  decimalSeparator?: string;
  thousandsSeparator?: string;
};

export const formatKpiCount = (value: number, fmt: KpiCountFormat): string => {
  const {
    prefix = "",
    suffix = "",
    decimals = 0,
    decimalSeparator = ",",
    thousandsSeparator = ".",
  } = fmt;

  if (decimals > 0) {
    const fixed = value.toFixed(decimals);
    const [intPart, decPart] = fixed.split(".");
    return `${prefix}${intPart}${decimalSeparator}${decPart}${suffix}`;
  }

  const rounded = Math.round(value);
  const formatted = rounded
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
  return `${prefix}${formatted}${suffix}`;
};

export const getCountUpValue = (
  frame: number,
  fps: number,
  delay: number,
  target: number
): number => {
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 24, stiffness: 65, mass: 0.85 },
  });

  return interpolate(progress, [0, 1], [0, target], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};
