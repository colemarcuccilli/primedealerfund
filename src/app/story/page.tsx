"use client";

import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import GoldDivider from "@/components/ui/GoldDivider";
import MagneticButton from "@/components/ui/MagneticButton";
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const timeline = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Kyle Coleman identifies an opportunity in the fragmented automotive dealership market. Begins acquiring underperforming franchise dealerships in Georgia.",
  },
  {
    year: "2019",
    title: "First Turnaround",
    description: "Coleman Chrysler Dodge Jeep Ram in Macon, GA is acquired and transformed. Revenue doubles within 18 months through operational excellence.",
  },
  {
    year: "2021",
    title: "The Playbook",
    description: "The 90-Day Turnaround methodology is formalized. Repeatable process for transforming underperforming dealerships into top-performers.",
  },
  {
    year: "2023",
    title: "Portfolio Growth",
    description: "Multi-dealership operations established. Strategic partnerships with major OEMs solidified. Ralph Marcuccilli joins as strategic advisor.",
  },
  {
    year: "2024",
    title: "Fund Formation",
    description: "Prime Dealer Fund is established to bring institutional capital to automotive retail. Target: $50M initial fund to acquire 8-12 dealerships.",
  },
  {
    year: "2025",
    title: "Scaling Nationally",
    description: "Active capital deployment across southeastern U.S. markets. Pipeline of qualified acquisition targets in strategic territories.",
  },
];

const turnaroundSteps = [
  {
    day: "Days 1-7",
    title: "Assessment",
    description: "Complete operational audit — staffing, inventory, F&I performance, service department efficiency, customer satisfaction metrics.",
  },
  {
    day: "Days 8-30",
    title: "Quick Wins",
    description: "Implement immediate improvements: inventory optimization, pricing strategy, digital marketing overhaul, process standardization.",
  },
  {
    day: "Days 31-60",
    title: "Transformation",
    description: "Staff training and culture shift, F&I product restructuring, service department expansion, customer experience overhaul.",
  },
  {
    day: "Days 61-90",
    title: "Optimization",
    description: "Fine-tune operations, establish KPI tracking, implement ongoing training programs, solidify vendor relationships.",
  },
];

function TimelineSection() {
  const { ref, isInView } = useScrollAnimation();
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="Timeline"
          title="Our Journey"
          subtitle="From a single dealership to an institutional-grade investment platform."
        />
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/50 via-gold-400/20 to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                variants={i % 2 === 0 ? slideInLeft : slideInRight}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <span className="text-gold-400 font-mono text-sm tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-cream-50 mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-navy-950 border-2 border-gold-400 z-10 mt-1" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TurnaroundSection() {
  const { ref, isInView } = useScrollAnimation();
  return (
    <section className="py-24 md:py-32 bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="The Playbook"
          title="90-Day Turnaround"
          subtitle="Our proven methodology transforms underperforming dealerships into market leaders."
        />
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {turnaroundSteps.map((step) => (
            <motion.div
              key={step.day}
              variants={staggerItem}
              className="p-8 rounded-2xl bg-navy-950/50 border border-navy-800/30"
            >
              <span className="text-gold-400 font-mono text-xs tracking-wider uppercase">
                {step.day}
              </span>
              <h3 className="font-display text-lg font-semibold text-cream-50 mt-2 mb-3">
                {step.title}
              </h3>
              <p className="text-navy-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function StoryPage() {
  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold-400 font-mono text-sm tracking-[0.2em] uppercase mb-6"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 tracking-tight mb-6"
          >
            Built by <span className="text-gold-gradient">Operators</span>,
            <br />
            Not Wall Street
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed"
          >
            Prime Dealer Fund was born from hands-on dealership operations — not a
            spreadsheet. Our team has bought, fixed, and scaled dealerships from the
            ground up, developing a repeatable playbook that drives consistent returns.
          </motion.p>
        </div>
      </section>

      <GoldDivider />
      <TimelineSection />
      <TurnaroundSection />

      <section className="py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream-50 mb-6">
            Meet the Team Behind the Fund
          </h2>
          <p className="text-navy-300 mb-8">
            Learn about the operators and advisors driving Prime Dealer Fund.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton href="/team" variant="primary">
              Meet the Team
            </MagneticButton>
            <MagneticButton href="/contact" variant="outline">
              Schedule a Call
            </MagneticButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
