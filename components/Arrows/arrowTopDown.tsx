"use client";

import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ArrowTopDown() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.svg
      width="23"
      height="225"
      viewBox="0 0 23 225"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M10.8842 224.06C11.4699 224.646 12.4196 224.646 13.0055 224.061L22.5538 214.517C23.1398 213.931 23.14 212.982 22.5544 212.396C21.9687 211.81 21.019 211.81 20.433 212.395L11.9457 220.878L3.46248 212.391C2.87683 211.805 1.92709 211.805 1.34116 212.391C0.755226 212.976 0.754992 213.926 1.34063 214.512L10.8842 224.06ZM10.5 -0.00036895L10.4451 222.999L13.4451 223L13.5 0.00036895L10.5 -0.00036895Z"
        fill="black"
      />
    </motion.svg>
  );
}
