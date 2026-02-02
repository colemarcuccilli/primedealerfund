"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import GoldDivider from "@/components/ui/GoldDivider";
import MagneticButton from "@/components/ui/MagneticButton";

const articles: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  "why-auto-dealerships-are-the-next-frontier": {
    title: "Why Auto Dealerships Are the Next Frontier in Private Equity",
    category: "Market Analysis",
    date: "January 2025",
    readTime: "8 min read",
    content: [
      "The U.S. automotive retail industry generates over $1.2 trillion in annual revenue, yet remains remarkably fragmented. The top 10 dealer groups control less than 10% of the market — a level of fragmentation that would be unthinkable in most industries of this scale.",
      "This fragmentation creates an extraordinary opportunity for well-capitalized, operationally savvy investors. Unlike technology or healthcare, where consolidation has been driven by massive PE firms for decades, automotive retail has largely been overlooked by institutional capital.",
      "Why? Historically, dealerships were family-run businesses passed down through generations. The expertise required to operate them — managing OEM relationships, floor plan financing, service operations, and complex F&I products — created a barrier to entry that kept financial buyers at bay.",
      "That's changing. A new generation of operator-investors is emerging, combining deep automotive expertise with institutional capital management. The result is a playbook for acquiring underperforming dealerships, implementing operational improvements, and generating consistent returns.",
      "The economics are compelling. Franchise dealerships operate seven distinct profit centers: new vehicle sales, used vehicle sales, finance & insurance, service, parts, body shop, and fleet. This diversification provides natural resilience — when new car sales slow, service and used vehicle departments typically strengthen.",
      "Add to this the hard asset backing (real estate, inventory, franchise rights), territorial exclusivity from OEM franchise agreements, and recession-resistant demand (Americans need vehicles regardless of economic cycles), and you have an asset class that deserves serious attention from sophisticated investors.",
    ],
  },
  "90-day-turnaround-methodology": {
    title: "The 90-Day Turnaround: How We Transform Underperforming Dealerships",
    category: "Operations",
    date: "December 2024",
    readTime: "12 min read",
    content: [
      "Every dealership acquisition begins with the same question: How quickly can we transform this underperforming operation into a market leader? At Coleman Prime, the answer is 90 days.",
      "Our methodology isn't theoretical — it was developed through hands-on experience acquiring and turning around franchise dealerships across the southeastern United States. The playbook is battle-tested and repeatable.",
      "Days 1-7: The Assessment Phase. Before we change anything, we listen and learn. Our team conducts a comprehensive operational audit covering every department, every process, every metric. We interview key staff, analyze historical financials, and benchmark performance against top-performing dealers in the same brand and market.",
      "Days 8-30: Quick Wins. Armed with data, we implement immediate high-impact improvements. This typically includes inventory right-sizing, pricing strategy optimization, digital marketing overhaul, and process standardization across departments. These changes often produce visible results within weeks.",
      "Days 31-60: The Transformation. This is where the real work happens. We restructure compensation plans to align incentives, implement comprehensive training programs, overhaul the F&I product menu, expand service department capacity, and upgrade the customer experience from first contact to delivery.",
      "Days 61-90: Optimization and Sustainment. With new systems in place, we focus on fine-tuning performance, establishing KPI dashboards for real-time management, and building the culture of accountability and excellence that sustains results long-term.",
    ],
  },
};

const defaultArticle = {
  title: "Article",
  category: "Insights",
  date: "2024",
  readTime: "5 min read",
  content: [
    "This article is coming soon. Check back for the full content.",
    "In the meantime, explore our other insights and analysis on automotive retail investing.",
  ],
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles[slug] || defaultArticle;

  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/insights"
              className="text-navy-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Insights
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-gold-400 font-mono text-xs tracking-wider uppercase">
                {article.category}
              </span>
              <span className="text-navy-700">&middot;</span>
              <span className="text-navy-500 text-xs">{article.readTime}</span>
              <span className="text-navy-700">&middot;</span>
              <span className="text-navy-500 text-xs">{article.date}</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream-50 tracking-tight mb-8 leading-tight">
              {article.title}
            </h1>
          </motion.div>

          <GoldDivider className="mb-12" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-navy-300 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <div className="mt-16 p-8 rounded-2xl bg-navy-900/50 border border-navy-800/50 text-center">
            <h3 className="font-display text-xl font-semibold text-cream-50 mb-2">
              Interested in Learning More?
            </h3>
            <p className="text-navy-400 text-sm mb-6">
              Schedule a consultation to discuss how these insights apply to your investment goals.
            </p>
            <MagneticButton href="/contact" variant="primary">
              Request Consultation
            </MagneticButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
