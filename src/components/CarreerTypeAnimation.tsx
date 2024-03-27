"use client";

import { TypeAnimation } from "react-type-animation";
import styles from "@/styles/homePc.module.scss";

export default function CarreerTypeAnimation() {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={["I am an engineer", 2000, "I am a full-stack developer", 2000]}
      style={{
        fontSize: "25px",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
      }}
      repeat={Infinity}
      className={styles.animatedText}
    />
  );
}
