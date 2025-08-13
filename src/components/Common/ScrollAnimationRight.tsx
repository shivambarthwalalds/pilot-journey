"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  xOffset?: number;
}

export default function ScrollAnimationRight({
  children,
  className = "",
  delay = 0,
  duration = 1,
  xOffset = 50, // Positive value moves from right to left
}: ScrollAnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: xOffset }} // Start from right (xOffset)
      whileInView={{ opacity: 1, x: 0 }} // Move to original position
      transition={{ duration, delay }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}
