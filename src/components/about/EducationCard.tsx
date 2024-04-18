import styles from "@/styles/about/educationCard.module.scss";

type Props = {
  degree: string;
  year: string;
  university: string;
  icon: any;
};

function EducationCard({ degree, year, university, icon }: Props) {
  return (
    <article className={styles.educationCard}>
      <div className={styles.info}>
        <h4>{degree}</h4>
        <h5>{year}</h5>
        <h5>{university}</h5>
      </div>
      <div>{icon}</div>
    </article>
  );
}

export default EducationCard;
