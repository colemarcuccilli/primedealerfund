"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import GoldDivider from "@/components/ui/GoldDivider";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

const articles: Article[] = [
  {
    slug: "why-auto-dealerships-are-the-next-frontier",
    title: "Why Auto Dealerships Are the Next Frontier in Private Equity",
    excerpt: "The automotive retail industry represents a $1.2 trillion opportunity that institutional capital is only beginning to discover. Here's why smart money is moving in.",
    category: "Market Analysis",
    date: "January 2025",
    readTime: "8 min read",
  },
  {
    slug: "90-day-turnaround-methodology",
    title: "The 90-Day Turnaround: How We Transform Underperforming Dealerships",
    excerpt: "Our proprietary methodology for turning bottom-quartile dealerships into top-decile performers. A deep dive into the operational playbook.",
    category: "Operations",
    date: "December 2024",
    readTime: "12 min read",
  },
  {
    slug: "ev-transition-dealership-opportunity",
    title: "The EV Transition: Threat or Opportunity for Dealership Investors?",
    excerpt: "Electric vehicles are reshaping automotive retail. We analyze why the transition actually creates more opportunities for well-positioned dealer groups.",
    category: "Industry Trends",
    date: "November 2024",
    readTime: "10 min read",
  },
  {
    slug: "franchise-dealership-economics-explained",
    title: "Franchise Dealership Economics: Seven Profit Centers Explained",
    excerpt: "Understanding the multi-layered revenue model that makes franchise dealerships one of the most resilient business models in America.",
    category: "Education",
    date: "October 2024",
    readTime: "7 min read",
  },
  {
    slug: "southeastern-us-dealership-market",
    title: "Why the Southeastern U.S. Is the Best Market for Dealership Acquisitions",
    excerpt: "Population growth, favorable regulations, and fragmented competition make the Southeast an ideal hunting ground for dealership acquisitions.",
    category: "Market Analysis",
    date: "September 2024",
    readTime: "6 min read",
  },
  {
    slug: "accredited-investor-guide-alternatives",
    title: "The Accredited Investor's Guide to Alternative Auto Investments",
    excerpt: "A comprehensive guide for accredited investors considering automotive retail as part of their alternative investment allocation.",
    category: "Education",
    date: "August 2024",
    readTime: "15 min read",
  },
];

const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, isInView } = useScrollAnimation();

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

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
            Insights
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 tracking-tight mb-6"
          >
            Market <span className="text-gold-gradient">Intelligence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed"
          >
            Analysis, insights, and perspectives on automotive retail investing
            from our team of operators and strategists.
          </motion.p>
        </div>
      </section>

      <GoldDivider />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-mono tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-gold-400 text-[#1a1a2e]"
                    : "bg-navy-900/50 text-navy-400 hover:text-cream-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((article) => (
                <motion.div
                  key={article.slug}
                  variants={staggerItem}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Link
                    href={`/insights/${article.slug}`}
                    className="block group p-8 rounded-2xl bg-navy-900/50 border border-navy-800/50 hover:border-gold-400/30 transition-all duration-500 h-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-gold-400 font-mono text-xs tracking-wider uppercase">
                        {article.category}
                      </span>
                      <span className="text-navy-700">&middot;</span>
                      <span className="text-navy-500 text-xs">{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-cream-50 mb-3 group-hover:text-gold-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-navy-400 text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <span className="text-navy-500 text-xs">{article.date}</span>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
