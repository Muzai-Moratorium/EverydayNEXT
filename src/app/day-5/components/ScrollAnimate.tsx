"use client";

import type React from "react";
import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface ScrollAnimateProps {
  children: ReactNode;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
  visibleClassName?: string;
}

export const ScrollAnimate: React.FC<ScrollAnimateProps> = ({
  children,
  threshold = 0.3,
  triggerOnce = true,
  className = "",
  visibleClassName = "",
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <div ref={ref} className={`${className} ${inView ? visibleClassName : ""}`}>
      {children}
    </div>
  );
};

console.log("ScrollAnimate module loaded");
