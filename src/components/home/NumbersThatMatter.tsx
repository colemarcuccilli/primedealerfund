"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import NumberCounter from "@/components/ui/NumberCounter";
import SectionHeader from "@/components/ui/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { end: 1.2, prefix: "$", suffix: "T", decimals: 1, label: "Industry Size" },
  { end: 17, prefix: "", suffix: "K+", decimals: 0, label: "Franchise Dealers" },
  { end: 3.2, prefix: "$", suffix: "B", decimals: 1, label: "Avg Group Revenue" },
  { end: 90, prefix: "", suffix: " Days", decimals: 0, label: "Avg Turnaround" },
];

export default function NumbersThatMatter() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 relative bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="By The Numbers"
          title="The Numbers That Matter"
          subtitle="The automotive retail industry represents one of the largest untapped opportunities in alternative investments."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center p-8 rounded-2xl bg-navy-950/50 border border-navy-800/30"
            >
              <div className="text-4xl md:text-5xl font-bold text-gold-gradient mb-3">
                <NumberCounter
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="text-navy-400 font-mono text-xs tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
