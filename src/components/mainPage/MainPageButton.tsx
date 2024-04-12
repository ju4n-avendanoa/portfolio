"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useRouter } from "next-nprogress-bar";
import { useEffect } from "react";
import styles from "@/styles/home.module.scss";

const colors = ["#8A2BE2", "#FF007F", "#4682B4", "#3CB371"];

type Props = {
  buttonName: string;
  icon: any; // Add icon prop of type IconType
};

function MainPageButton({ buttonName, icon }: Props) {
  const color = useMotionValue(colors[0]);
  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const router = useRouter();

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <div className={styles.buttons}>
      <motion.button
        style={{
          border,
          boxShadow,
        }}
        onClick={() => router.push("/about")}
      >
        <span>{buttonName}</span>
        {icon}
      </motion.button>
    </div>
  );
}

export default MainPageButton;
