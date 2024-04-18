"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";
import Links from "./Links";
import styles from "@/styles/navbar/navbar.module.scss";

const variants = {
  open: {
    clipPath: "circle(1200px at calc(100% - 50px) 50px)",
    transition: {
      duration: 1,
    },
  },
  closed: {
    clipPath: "circle(15px at calc(100% - 50px) 30px)",
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  },
};

function MenuMobile() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className={styles.menu} animate={open ? "open" : "closed"}>
      <motion.div
        variants={variants}
        className={styles.bg}
        initial={open ? "open" : "closed"}
        animate={open ? "open" : "closed"}
      >
        <Links onClick={() => setOpen(false)} />
      </motion.div>
      <ToggleButton toggle={() => setOpen((prev) => !prev)} />
    </motion.div>
  );
}

export default MenuMobile;
