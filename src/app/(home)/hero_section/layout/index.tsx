"use client";
import { ReactNode, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const Layout = ({ children }: { children: ReactNode }) => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: layoutRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.5]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (!layoutRef.current) return;
      layoutRef.current.style.setProperty("--hero-bg-img-x", `${clientX}px`);
      layoutRef.current.style.setProperty("--hero-bg-img-y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.section
      ref={layoutRef}
      style={{ opacity }}
      className="bg-hero-bg-img flex h-screen flex-col items-center "
    >
      <motion.div style={{ scale }}>{children}</motion.div>
    </motion.section>
  );
};

export default Layout;
