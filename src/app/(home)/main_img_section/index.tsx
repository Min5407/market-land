"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const MainImgSection = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.5, 1], [1, 2.5, 1]);
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.45, 0.9],
    ["0%", "10%", "40%", "40%"],
  );

  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);

  return (
    <div className="mt-[-15rem] overflow-x-clip">
      <section className="relative h-[300vh]" ref={imageContainerRef}>
        <motion.div
          style={{ scale, x, opacity }}
          className="sticky inset-0 flex justify-center"
        >
          <Image
            src="/images/hero-img.png"
            alt="hero"
            width={1000}
            height={1000}
            priority
          />
        </motion.div>
      </section>
    </div>
  );
};

export default MainImgSection;
