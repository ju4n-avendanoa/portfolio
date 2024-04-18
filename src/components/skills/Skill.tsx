import styles from "@/styles/about/skill.module.scss";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
};

function Skill({ image, name }: Props) {
  return (
    <div className={styles.skill}>
      <Image
        width={50}
        height={50}
        src={image}
        alt={name}
        className={styles.icon}
      />
      <h4>{name}</h4>
    </div>
  );
}

export default Skill;
