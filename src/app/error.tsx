"use client";

import Link from "next/link";
import React from "react";
import styles from "@/styles/notFound.module.scss";

function Error() {
  return (
    <section className={styles.notFound}>
      <h2>There was an error</h2>
      <p>
        Please try again or come back to the main page{" "}
        <Link href={"/home"}>here</Link>
      </p>
    </section>
  );
}

export default Error;
