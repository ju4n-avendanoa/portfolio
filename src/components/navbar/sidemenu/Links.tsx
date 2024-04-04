import { motion } from "framer-motion";
import styles from "@/styles/navbar/navbar.module.scss";
import Link from "next/link";

const items = ["Home", "About", "Projects", "Contact"];

const variants = {
  open: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

type Props = {
  onClick: () => void;
};

function Links({ onClick }: Props) {
  return (
    <motion.ul className={styles.links} variants={variants}>
      {items.map((item, index) => (
        <motion.li key={index} variants={itemVariants}>
          <Link
            href={`/${item.toLocaleLowerCase()}`}
            className={styles.list}
            onClick={() => onClick()}
          >
            {item}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default Links;
