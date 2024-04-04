"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ReactNode, useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import styles from "@/styles/home.module.scss";

const colors = ["#8A2BE2", "#FF007F", "#4682B4", "#3CB371"];

function ShowcaseMobile({ children }: { children: ReactNode }) {
  const router = useRouter();
  const color = useMotionValue(colors[0]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
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
    <motion.div
      className={styles.showcase}
      style={{
        backgroundImage,
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: "0px",
          zIndex: "0",
        }}
      >
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      {children}
      <div className={styles.buttons}>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          onClick={() => router.push("/about")}
        >
          <span>About me</span>
          <FaArrowUpRightFromSquare className={styles.buttonIcon} />
        </motion.button>

        <motion.button
          style={{
            border,
            boxShadow,
          }}
        >
          <span>Download CV</span>
          <IoMdDownload className={styles.buttonIcon} />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ShowcaseMobile;
