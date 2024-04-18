"use client";

import { sendEmail } from "@/actions/sendEmail";
import { Mulish } from "next/font/google";
import { motion } from "framer-motion";
import { toast } from "sonner";
import SubmitBtn from "./SubmitBtn";
import styles from "@/styles/contact/contact.module.scss";
import Link from "next/link";

const mulish = Mulish({ subsets: ["latin"] });

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className={styles.contact}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <h1 className={styles.title}>Contact me</h1>
      <p>
        Please contact me directly at{" "}
        <Link href="mailto:juanfernando.avendanoa@gmail.com">
          juanfernando.avendanoa@gmail.com
        </Link>{" "}
        or through this form.
      </p>

      <form
        className={styles.form}
        action={async (formData) => {
          toast.promise(
            async () => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                return;
              }
            },
            {
              loading: "Sending email...",
              success: "Email sent successfully!",
              error: "Error sending email",
            }
          );
        }}
      >
        <input
          className={`${styles.input} ${mulish.className}`}
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className={`${styles.textarea} ${mulish.className}`}
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
