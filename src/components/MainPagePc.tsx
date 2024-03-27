import CarreerTypeAnimation from "@/components/CarreerTypeAnimation";
import ImageWithFallback from "@/components/ImageWithFallback";
import Showcase from "@/components/ShowCasePc";
import styles from "@/styles/homePc.module.scss";

function MainPagePc() {
  return (
    <section className={styles.pc}>
      <Showcase>
        <section>
          <div>
            <div className={styles.text}>
              <div className={styles.name}>
                <h1>Hi!, I&apos;m Juan</h1>
                <CarreerTypeAnimation />
              </div>
              <p className={styles.intro}>
                Welcome to my portfolio! I&apos;m Juan, a passionate Fullstack
                developer. With a strong commitment to quality and
                collaboration, I strive to deliver excellence in every project I
                undertake. Let&apos;s create something remarkable together!
              </p>
            </div>
            <ImageWithFallback
              src="https://res.cloudinary.com/dhjqarghy/image/upload/c_crop,h_850/v1710967077/portfolio/foto_perfil-removebg_e1itcq.png"
              width={1000}
              height={1000}
              alt="profile"
              fallbackSrc=""
              priority
              className={styles.photo}
            />
          </div>
          <div>
            <div className={styles.name}>
              <h1>Hi!, I&apos;m Juan</h1>
              <CarreerTypeAnimation />
            </div>
            <ImageWithFallback
              src="https://res.cloudinary.com/dhjqarghy/image/upload/c_crop,h_850/v1710967077/portfolio/foto_perfil-removebg_e1itcq.png"
              width={1000}
              height={1000}
              alt="profile"
              fallbackSrc=""
              priority
              className={styles.photo}
            />
            <p className={styles.intro}>
              Welcome to my portfolio! I&apos;m Juan, a passionate Fullstack
              developer. With a strong commitment to quality and collaboration,
              I strive to deliver excellence in every project I undertake.
              Let&apos;s create something remarkable together!
            </p>
          </div>
        </section>
      </Showcase>
    </section>
  );
}

export default MainPagePc;
