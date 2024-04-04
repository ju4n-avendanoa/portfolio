"use client";

import { TypeAnimation } from "react-type-animation";
import styles from "@/styles/carreer.module.scss";

export default function CarreerTypeAnimation() {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={["I am an engineer", 2000, "I am a full-stack developer", 2000]}
      repeat={Infinity}
      className={styles.carreer}
    />
  );
}
