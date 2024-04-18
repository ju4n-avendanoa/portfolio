import Link from "next/link";
import React from "react";
import styles from "@/styles/notFound.module.scss";

function NotFound() {
  return (
    <section className={styles.notFound}>
      <h2>Page not found</h2>
      <p>
        Please try again or come back to the main page{" "}
        <Link href={"/home"}>here</Link>
      </p>
    </section>
  );
}

export default NotFound;
