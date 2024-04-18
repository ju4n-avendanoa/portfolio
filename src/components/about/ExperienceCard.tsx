import styles from "@/styles/about/experienceCard.module.scss";
import { Mulish } from "next/font/google";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const mulish = Mulish({ subsets: ["latin"] });
type Props = {
  title: string;
  company: string;
  date: string;
  description: string;
};

function ExperienceCard({ title, company, date, description }: Props) {
  return (
    <div className={mulish.className}>
      <div className={styles.experienceCard}>
        <div className={styles.experienceCardHeader}>
          <p>{title}</p>
          <p>{company}</p>
          <h5>{date}</h5>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
