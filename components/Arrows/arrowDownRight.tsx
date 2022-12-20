"use client";

import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ArrowDownRight() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.svg
      width="378"
      height="24"
      viewBox="0 0 378 24"
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ x: 380 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.6,
          duration: 2,
          ease: "easeOut",
        }}
        d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM378 10.5L2 10.5V13.5L378 13.5V10.5Z"
        fill="black"
      />
    </motion.svg>
  );
}
