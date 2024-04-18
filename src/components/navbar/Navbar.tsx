import styles from "@/styles/navbar/navbar.module.scss";
import MenuMobile from "./sidemenu/MenuMobile";
import Menu from "./Menu";
import Link from "next/link";
import ImageWithFallback from "../ImageWithFallback";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.social}>
        <Link href="/home" style={{ textDecoration: "none" }}>
          <h4 className={styles.logo}>Juan Dev</h4>
        </Link>
        <Link
          href="https://www.linkedin.com/in/ju4n-avendanoa/"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <ImageWithFallback
            src={
              "https://res.cloudinary.com/dhjqarghy/image/upload/v1713415843/portfolio/linkedin-icon-svgrepo-com_fqnev6.svg"
            }
            alt="linkedin"
            width={20}
            height={20}
            fallbackSrc=""
            style={{
              backgroundColor: "white",
              borderRadius: "2px",
            }}
          />
        </Link>
        <Link
          href="https://github.com/ju4n-avendanoa"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <ImageWithFallback
            src={
              "https://res.cloudinary.com/dhjqarghy/image/upload/v1713415828/portfolio/github-142-svgrepo-com_r2gqe2.svg"
            }
            alt="github"
            width={20}
            height={20}
            fallbackSrc=""
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              padding: "1px",
            }}
          />
        </Link>
      </div>
      <MenuMobile />
      <Menu />
    </nav>
  );
}

export default Navbar;
