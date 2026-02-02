"use client";

import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import MagneticButton from "@/components/ui/MagneticButton";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function InvestorPortalPage() {
  return (
    <PageLayout>
      <section className="py-32 md:py-48">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="w-20 h-20 rounded-2xl bg-gold-400/10 flex items-center justify-center mx-auto mb-8"
          >
            <svg
              className="w-10 h-10 text-gold-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </motion.div>

          <motion.span
            variants={fadeInUp}
            className="inline-block text-gold-400 font-mono text-sm tracking-[0.2em] uppercase mb-6"
          >
            Investor Portal
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-5xl md:text-6xl font-bold text-cream-50 tracking-tight mb-6"
          >
            Coming <span className="text-gold-gradient">Soon</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-navy-300 max-w-xl mx-auto leading-relaxed mb-4"
          >
            Our secure investor portal is under development. Once live, you&apos;ll have
            access to:
          </motion.p>

          <motion.div variants={fadeInUp} className="space-y-3 text-left max-w-md mx-auto mb-10">
            {[
              "Real-time portfolio performance dashboards",
              "Quarterly financial reports and K-1 documents",
              "Dealership-level operating metrics",
              "Distribution history and projections",
              "Direct communication with our IR team",
              "Document vault for fund materials",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-navy-300 text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton href="/contact" variant="primary" size="lg">
              Get Notified at Launch
            </MagneticButton>
            <MagneticButton href="/" variant="outline">
              Back to Home
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>
    </PageLayout>
  );
}
