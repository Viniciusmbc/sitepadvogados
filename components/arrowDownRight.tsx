"use client";

import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const variants = {
  initial: {
    strokeWidth: 2,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1, when: "afterChildren", staggerChildren: 1 },
  },
  hover: {
    strokeWidth: 4,
  },
};
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
      ref={ref}
      width="338"
      height="23"
      viewBox="0 0 338 23"
      initial="hidden"
      animate={control}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0.94568 9.93303C0.356407 10.5153 0.350737 11.465 0.933016 12.0543L10.4218 21.6571C11.0041 22.2463 11.9538 22.252 12.5431 21.6697C13.1324 21.0875 13.138 20.1377 12.5557 19.5485L4.12127 11.0127L12.6571 2.57819C13.2463 1.99591 13.252 1.04618 12.6697 0.456909C12.0874 -0.132364 11.1377 -0.138034 10.5484 0.444245L0.94568 9.93303ZM337.009 11.5L2.00894 9.50003L1.99103 12.5L336.991 14.5L337.009 11.5Z"
        fill="black"
        variants={variants}
        custom={1}
      />
    </motion.svg>
  );
}
