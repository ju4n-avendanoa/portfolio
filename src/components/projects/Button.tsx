"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

type Props = {
  text: string;
  icon: any;
  link: string;
};

const colors = ["#8A2BE2", "#FF007F", "#4682B4", "#3CB371"];

function Button({ text, icon, link }: Props) {
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
    <Link href={link} target="_blank" style={{ textDecoration: "none" }}>
      <motion.button
        type="submit"
        style={{
          border,
          color: textColor,
          boxShadow,
        }}
      >
        <span>{text}</span>
        {icon}
      </motion.button>
    </Link>
  );
}

export default Button;
