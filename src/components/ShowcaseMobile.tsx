"use client";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import styles from "@/styles/homeMobile.module.scss";

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
      <motion.button
        style={{
          border,
          boxShadow,
        }}
        onClick={() => router.push("/about")}
      >
        About me
      </motion.button>
    </motion.div>
  );
}

export default ShowcaseMobile;
