"use client";

import styles from "@/styles/navbar/navbar.module.scss";
import Menu from "./sidemenu/Menu";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h4>Juan Dev</h4>
      <Menu />
    </nav>
  );
}

export default Navbar;
