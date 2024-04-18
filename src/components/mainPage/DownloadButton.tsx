"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";
import styles from "@/styles/home/home.module.scss";

const colors = ["#8A2BE2", "#FF007F", "#4682B4", "#3CB371"];

type Props = {
  buttonName: string;
  icon: any;
};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

function DownloadButton({ buttonName, icon }: Props) {
  const color = useMotionValue(colors[0]);

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <a
      href="https://res.cloudinary.com/dhjqarghy/image/upload/fl_attachment/v1713454171/portfolio/Juan_Avendano_CV_ssp49z.pdf"
      download
      className={styles.buttons}
    >
      <motion.button
        variants={variants}
        initial="initial"
        animate="animate"
        style={{
          border,
          boxShadow,
        }}
      >
        <span>{buttonName}</span>
        {icon}
      </motion.button>
    </a>
  );
}

export default DownloadButton;
