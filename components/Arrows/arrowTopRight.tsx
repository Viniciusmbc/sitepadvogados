"use client";

import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ArrowTopRight() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.svg
      ref={ref}
      width="350"
      height="24"
      viewBox="0 0 378 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ x: -350 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1.85 }}
        d="M374.071 13.0607C374.657 12.4749 374.657 11.5251 374.071 10.9393L364.525 1.3934C363.94 0.807612 362.99 0.807612 362.404 1.3934C361.818 1.97918 361.818 2.92893 362.404 3.51472L370.889 12L362.404 20.4853C361.818 21.0711 361.818 22.0208 362.404 22.6066C362.99 23.1924 363.94 23.1924 364.525 22.6066L374.071 13.0607ZM0.989258 13.5H373.011V10.5H0.989258V13.5Z"
        fill="black"
      />
    </motion.svg>
  );
}
