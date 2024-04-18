import styles from "@/styles/about/skillsGrid.module.scss";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

function SkillsGrid({ children, title }: Props) {
  return (
    <section className={styles.skillsGrid}>
      <h2 className={styles.title}>{title}</h2>
      <section className={styles.skills}>{children}</section>
    </section>
  );
}

export default SkillsGrid;
