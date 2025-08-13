"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  xOffset?: number;
  index?: number; // Dynamically assigned for delay calculation
  gap?: number; // Gap between animations
}

export default function ScrollAnimationLeft({
  children,
  className = "",
  delay = 0,
  duration = 1,
  xOffset = -60, // Change from yOffset to xOffset for left to right movement
  index = 0,
  gap = 0, // Default delay gap is 2 seconds
}: ScrollAnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, x: xOffset }} // Start from the left (-xOffset)
      whileInView={{ opacity: 1, x: 0 }} // Move to the original position
      transition={{ duration, delay: index * gap }}
      // transition={{ duration, delay }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}
