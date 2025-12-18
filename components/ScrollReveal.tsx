"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  width = "100%",
  delay = 0,
  duration = 0.8,
  yOffset = 50,
  className = "",
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div
      ref={ref}
      style={{ width, overflow: "hidden" }}
      className={className}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: [0.25, 0.25, 0, 1] }} // Apple-like ease
      >
        {children}
      </motion.div>
    </div>
  );
};
