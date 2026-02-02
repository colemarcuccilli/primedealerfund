"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
  margin?: string;
}

export function useScrollAnimation({
  threshold = 0,
  once = true,
  margin = "-100px",
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold || undefined,
    margin: margin as `${number}px`,
  });

  return { ref, isInView };
}
