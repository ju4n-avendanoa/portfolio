"use client";

import { usePathname } from "next/navigation";
import styles from "@/styles/navbar/navbar.module.scss";
import Link from "next/link";

const items = ["Home", "About", "Projects", "Contact"];

function Menu() {
  const path = usePathname();

  return (
    <ul className={styles.links}>
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={`/${item.toLocaleLowerCase()}`}
            className={
              path === `/${item.toLocaleLowerCase()}`
                ? styles.active
                : styles.list
            }
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
