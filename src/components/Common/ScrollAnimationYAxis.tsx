"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export default function ScrollAnimationYAxis({
  children,
  className = "",
  delay = 0,
  duration = 1,
  yOffset = 50,
}: ScrollAnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}


