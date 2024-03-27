"use client";

import CarreerTypeAnimation from "@/components/CarreerTypeAnimation";
import ImageWithFallback from "@/components/ImageWithFallback";
import Showcase from "@/components/ShowcaseMobile";
import styles from "@/styles/homeMobile.module.scss";
import { motion } from "framer-motion";

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

function MainPageMobile() {
  return (
    <section className={styles.mobile}>
      <Showcase>
        <motion.section
          variants={textVariants}
          initial="initial"
          animate="animate"
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
          <ImageWithFallback
            src="https://res.cloudinary.com/dhjqarghy/image/upload/c_crop,h_850/v1710967077/portfolio/foto_perfil-removebg_e1itcq.png"
            width={1000}
            height={1000}
            alt="profile"
            fallbackSrc=""
            className={styles.photo}
            priority
          />
          <div className={styles.background1} />
          <div className={styles.background2} />
          <div className={styles.background3} />
          <motion.p className={styles.intro} variants={textVariants}>
            Welcome to my portfolio! I&apos;m Juan, a passionate Fullstack
            developer. I strive to deliver excellence in every project.
            <br />
            <br />
            Let&apos;s create something remarkable together!
          </motion.p>
        </motion.section>
      </Showcase>
    </section>
  );
}

export default MainPageMobile;
