"use client";

import styles from "@/styles/navbar/navbar.module.scss";
import MenuMobile from "./sidemenu/MenuMobile";
import Menu from "./Menu";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h4>Juan Dev</h4>
      <MenuMobile />
      <Menu />
    </nav>
  );
}

export default Navbar;
