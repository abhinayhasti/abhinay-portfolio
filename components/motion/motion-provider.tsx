"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/** Disables entrance animations for users with prefers-reduced-motion set. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
