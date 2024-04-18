"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import styles from "@/styles/contact/button.module.scss";

const colors = ["#8A2BE2", "#FF007F", "#4682B4", "#3CB371"];
export default function SubmitBtn() {
  const color = useMotionValue(colors[0]);
  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);
  const border = useMotionTemplate`2px solid ${color}`;
  const textColor = useMotionTemplate`${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.button
      type="submit"
      style={{
        border,
        color: textColor,
        boxShadow,
      }}
      className={styles.button}
    >
      <span>Submit</span>
      <FaPaperPlane className={styles.icon} />{" "}
    </motion.button>
  );
}
