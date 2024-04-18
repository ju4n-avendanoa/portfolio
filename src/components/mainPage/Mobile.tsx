"use client";

import { motion } from "framer-motion";
import CarreerTypeAnimation from "./CarreerTypeAnimation";
import styles from "@/styles/home/home.module.scss";
import Photo from "./Photo";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Mobile() {
  return (
    <motion.section
      variants={textVariants}
      initial="initial"
      animate="animate"
      className={styles.mobile}
    >
      <motion.div
        className={styles.name}
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={textVariants}>Hi!, I&apos;m Juan</motion.h1>
        <CarreerTypeAnimation />
      </motion.div>
      <Photo />
      <motion.p className={styles.intro} variants={textVariants}>
        Welcome to my portfolio! I&apos;m a passionate Fullstack developer from
        Colombia. I strive to deliver excellence in every project.
        <br />
        <br />
        Let&apos;s create something remarkable together!
      </motion.p>
    </motion.section>
  );
}

export default Mobile;
