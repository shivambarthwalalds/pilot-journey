"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  xOffset?: number;
  index?: number;
  gap?: number;
  direction?: "left" | "right"; // New prop to decide direction
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  duration = 1,
  xOffset = 50, // Default offset for animation
  index = 0,
  gap = 0,
  direction = "left", // Default direction is left to right
}: ScrollAnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: direction === "left" ? -xOffset : xOffset }} // Move from left (-xOffset) or right (xOffset)
      whileInView={{ opacity: 1, x: 0 }} // Moves to original position
      transition={{ duration, delay: index * gap }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}
