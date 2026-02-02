"use client";

import { motion } from "framer-motion";
import { fadeInUp, lineReveal } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <motion.span
          variants={fadeInUp}
          className="inline-block text-gold-400 font-mono text-sm tracking-[0.2em] uppercase mb-4"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 ${
          light ? "text-cream-50" : "text-cream-50"
        }`}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={lineReveal}
        className={`h-px w-20 bg-gradient-to-r from-gold-400 to-transparent ${
          align === "center" ? "mx-auto" : ""
        } mb-6`}
      />
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`text-lg md:text-xl max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-navy-600" : "text-navy-300"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
