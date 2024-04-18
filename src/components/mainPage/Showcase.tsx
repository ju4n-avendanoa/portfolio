"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { ReactNode, useEffect } from "react";
import styles from "@/styles/home/showcase.module.scss";

const colors = ["#8A2BE2", "#FF007F", "#4682B4", "#3CB371"];

function Showcase({ children }: { children: ReactNode }) {
  const color = useMotionValue(colors[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(130% 140% at 50% 0%, #121212 50%, ${color})`;

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <motion.main
      className={styles.showcase}
      style={{
        backgroundImage,
      }}
    >
      {children}
    </motion.main>
  );
}

export default Showcase;
