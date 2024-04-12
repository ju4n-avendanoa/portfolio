import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import MainPageButton from "@/components/mainPage/MainPageButton";
import Showcase from "@/components/Showcase";
import Mobile from "@/components/mainPage/Mobile";
import Laptop from "@/components/mainPage/Laptop";
import styles from "@/styles/home.module.scss";

function MainPage() {
  return (
    <Showcase>
      <section className={styles.main}>
        <Mobile />
        <Laptop />
        <div className={styles.buttons}>
          <MainPageButton
            buttonName={"About"}
            icon={<FaArrowUpRightFromSquare className={styles.buttons} />}
          />
          <MainPageButton
            buttonName={"Download CV"}
            icon={<IoMdDownload className={styles.buttons} />}
          />
        </div>
      </section>
    </Showcase>
  );
}

export default MainPage;
