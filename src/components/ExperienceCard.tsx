import styles from "@/styles/experienceCard.module.scss";

type Props = {
  title: string;
  company: string;
  date: string;
  description: string;
};

function ExperienceCard({ title, company, date, description }: Props) {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.experienceCardHeader}>
        <p>{title}</p>
        <p>{company}</p>
        <h5>{date}</h5>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default ExperienceCard;
