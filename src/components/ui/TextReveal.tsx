"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TextRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
}

export default function TextReveal({
  text,
  className = "",
  tag: Tag = "p",
  delay = 0,
}: TextRevealProps) {
  const { ref, isInView } = useScrollAnimation({ margin: "-50px" });
  const words = text.split(" ");

  return (
    <Tag className={className} ref={ref as React.Ref<HTMLHeadingElement & HTMLParagraphElement>}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.05,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
