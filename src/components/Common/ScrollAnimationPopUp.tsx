"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  scaleFrom?: number;
}

export default function ScrollAnimationPopUp({
  children,
  className = "",
  delay = 0,
  duration = 0.8, // Faster pop-up effect
  scaleFrom = 0.5, // Starts from 50% of original size
}: ScrollAnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: scaleFrom }} // Small and invisible
      whileInView={{ opacity: 1, scale: 1 }} // Fully visible and normal size
      transition={{ duration, delay, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}
