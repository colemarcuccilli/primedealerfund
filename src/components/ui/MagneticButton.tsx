"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-display font-medium tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-gold-500 to-gold-400 text-[#1a1a2e] hover:from-gold-400 hover:to-gold-300 shadow-lg shadow-gold-500/20",
    secondary:
      "bg-navy-800 text-cream-50 hover:bg-navy-700 border border-navy-700",
    outline:
      "bg-transparent text-gold-400 border border-gold-400/50 hover:border-gold-400 hover:bg-gold-400/10",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm rounded-lg",
    md: "px-8 py-3.5 text-base rounded-xl",
    lg: "px-10 py-4.5 text-lg rounded-xl",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {href ? (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      ) : (
        <button type={type} onClick={onClick} className={combinedClassName}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
