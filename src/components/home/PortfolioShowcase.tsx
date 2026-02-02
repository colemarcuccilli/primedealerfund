"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/ui/MagneticButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { dealerships, galleryHighlights } from "@/lib/dealerships";

export default function PortfolioShowcase() {
  const { ref, isInView } = useScrollAnimation();
  const [active, setActive] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const featured = dealerships[active];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Portfolio"
          title="Our Dealerships"
          subtitle="Franchise dealerships across the Midwest and beyond — operational and scaling."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Featured dealership — large showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-4 mb-4">
            {/* Main image */}
            <Link
              href={`/portfolio/${featured.slug}`}
              className="group relative block overflow-hidden rounded-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={featured.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-[400px] md:h-[500px] bg-[#1a1a2e]"
                >
                  {featured.heroImage ? (
                    <Image
                      src={featured.heroImage}
                      alt={featured.name}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2d2d44] to-[#1a1a2e] flex items-center justify-center">
                      <span className="font-display text-5xl text-[#3d4355] tracking-widest">
                        {featured.name.split(" ")[0]}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-8 z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-xs font-mono tracking-widest uppercase text-green-400">
                        {featured.status}
                      </span>
                      <span className="text-white/30 mx-1">|</span>
                      <span className="text-white/60 text-xs font-mono tracking-wider">
                        {featured.location}
                      </span>
                    </div>

                    <h3 className="font-display text-3xl md:text-4xl font-bold text-white tracking-wide mb-3 group-hover:text-gold-300 transition-colors duration-500">
                      {featured.name}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {featured.brands.map((brand) => (
                        <span
                          key={brand}
                          className="px-3 py-1 text-xs font-mono tracking-wider text-white/80 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-white/50 group-hover:text-gold-400 transition-colors duration-500">
                      <span className="text-sm font-mono tracking-wider">
                        View Dealership
                      </span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Link>

            {/* Dealership selector strip — vertical */}
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {dealerships.map((d, i) => {
                const isActive = i === active;
                return (
                  <motion.button
                    key={d.slug}
                    variants={staggerItem}
                    onClick={() => setActive(i)}
                    className={`group relative flex-shrink-0 overflow-hidden rounded-xl text-left transition-all duration-500 ${
                      isActive
                        ? "ring-2 ring-gold-400 ring-offset-2 ring-offset-background"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div className="relative w-36 h-20 lg:w-full lg:h-[calc((500px-2.5rem)/6)] bg-[#1a1a2e]">
                      {d.heroImage ? (
                        <Image
                          src={d.heroImage}
                          alt={d.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 144px, 340px"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2d2d44] to-[#1a1a2e]" />
                      )}

                      <div className="absolute inset-0 bg-black/40" />

                      <div className="absolute inset-0 flex items-center p-3 z-10">
                        <div className="min-w-0">
                          <p className="font-display text-xs lg:text-sm font-bold text-white truncate tracking-wide">
                            {d.name}
                          </p>
                          <p className="text-[10px] font-mono text-white/60 truncate">
                            {d.location}
                          </p>
                        </div>
                      </div>

                      {isActive && (
                        <motion.div
                          layoutId="portfolio-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <MagneticButton href="/portfolio" variant="outline">
            View Full Portfolio
          </MagneticButton>
        </div>
      </div>

      {/* Scrolling photo strip */}
      <div ref={galleryRef} className="overflow-hidden mt-16">
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
      </div>
    </section>
  );
}
