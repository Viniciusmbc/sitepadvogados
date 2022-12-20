"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
import personalizado from "../public/personalizado.jpg";

export default function CardsHome({
  src,
  titulo,
  texto,
  alt,
}: {
  src: string | StaticImageData;
  titulo: string;
  texto: string;
  alt: string;
}) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className=" flex flex-col p-9 h-[412px] w-96 border border-white shadow-md bg-[#f8fafd] rounded-3xl"
    >
      <picture className=" shadow-md rounded-3xl mx-auto mb-6 bg-white w-28 h-28 flex justify-center items-center ">
        <Image src={src} width={64} height={64} alt={alt} />
      </picture>

      <h3 className=" mb-4 text-2xl font-extrabold mx-auto text-center">
        {titulo}
      </h3>
      <p className=" text-center text-black text-lg">{texto}</p>
    </motion.div>
  );
}
