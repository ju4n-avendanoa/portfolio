import ImageWithFallback from "@/components/ImageWithFallback";
import styles from "@/styles/home/Photo.module.scss";

function Photo() {
  return (
    <div className={styles.photoContainer}>
      <ImageWithFallback
        src="https://res.cloudinary.com/dhjqarghy/image/upload/c_crop,h_850/v1710967077/portfolio/foto_perfil-removebg_e1itcq.png"
        width={1000}
        height={1000}
        alt="profile"
        fallbackSrc=""
        className={styles.photo}
        priority
      />
      <div className={styles.greenBackground} />
      <div className={styles.pinkBackground} />
      <div className={styles.purpleBackground} />
    </div>
  );
}

export default Photo;
