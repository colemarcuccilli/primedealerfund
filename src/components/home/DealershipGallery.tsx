"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { galleryHighlights } from "@/lib/dealerships";

export default function DealershipGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionHeader
          label="On the Ground"
          title="Our Dealerships"
          subtitle="Real locations. Real operations. See our portfolio in action across the Midwest."
        />
      </div>

      <motion.div style={{ x }} className="flex gap-4 pl-6">
        {galleryHighlights.map((src, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[320px] md:w-[420px] h-[220px] md:h-[280px] rounded-xl overflow-hidden group"
          >
            <Image
              src={src}
              alt={`Dealership photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 320px, 420px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
