"use client";

import { MotionConfig } from "framer-motion";

/**
 * Honors the OS-level "reduce motion" setting for every Framer Motion
 * animation on the site: transform/layout animations are disabled,
 * opacity fades are kept so content still appears.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
