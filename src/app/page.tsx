import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import MainPageButton from "@/components/mainPage/MainPageButton";
import DownloadButton from "@/components/mainPage/DownloadButton";
import Showcase from "@/components/mainPage/Showcase";
import Mobile from "@/components/mainPage/Mobile";
import Laptop from "@/components/mainPage/Laptop";
import styles from "@/styles/home/home.module.scss";

function MainPage() {
  return (
    <Showcase>
      <section className={styles.main}>
        <Mobile />
        <Laptop />
        <div className={styles.buttons}>
          <MainPageButton
            buttonName={"About"}
            icon={<FaArrowUpRightFromSquare />}
          />
          <DownloadButton buttonName={"Download CV"} icon={<IoMdDownload />} />
        </div>
      </section>
    </Showcase>
  );
}

export default MainPage;
