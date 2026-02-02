"use client";

import { motion } from "framer-motion";
import { lineReveal } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface GoldDividerProps {
  className?: string;
  width?: string;
}

export default function GoldDivider({ className = "", width = "w-24" }: GoldDividerProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      variants={lineReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`h-px ${width} bg-gradient-to-r from-gold-400 via-gold-300 to-transparent mx-auto ${className}`}
    />
  );
}
