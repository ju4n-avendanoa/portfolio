"use client";

import { useRef } from "react";
import styles from "@/styles/projects/projects.module.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ImageWithFallback from "../ImageWithFallback";
import Button from "./Button";
import { FaGithub } from "react-icons/fa6";
import { BsLink45Deg } from "react-icons/bs";

const items = [
  {
    id: 1,
    title: "World bnb",
    img: "https://res.cloudinary.com/dhjqarghy/image/upload/v1713396066/portfolio/footballresults.vercel.app_c3yo61.png",
    desc: "This web platform offers users the ability to register and list their properties for rental. With an intuitive interface, users can upload property images, set prices, and manage bookings. Visitors can search and filter properties based on their preferences, as well as make reservations for available dates. This application provides a comprehensive experience for those looking to rent or monetize their properties efficiently and securely.",
    github: "https://github.com/ju4n-avendanoa/Worldbnb",
    productionLink: "https://worldbnb.vercel.app",
  },
  {
    id: 2,
    title: "Task Manager",
    img: "https://res.cloudinary.com/dhjqarghy/image/upload/v1713396065/portfolio/my-task-organizer.vercel.app_genxms.png",
    desc: "Designed for maximum customization, this task management tool allows users to create columns and add tasks to each one. Its standout feature is its drag-and-drop functionality, enabling users to organize tasks and columns fluidly and according to their specific needs. With a minimalist and user-friendly interface, users can create, edit, and delete tasks, as well as rearrange columns with just a few clicks. This tool is ideal for teams and individuals seeking a flexible and efficient way to manage their projects and daily tasks.",
    github: "https://github.com/ju4n-avendanoa/TaskManager",
    productionLink: "https://my-task-organizer.vercel.app",
  },
  {
    id: 3,
    title: "Football Results",
    img: "https://res.cloudinary.com/dhjqarghy/image/upload/v1713396066/portfolio/footballresults.vercel.app_c3yo61.png",
    desc: "This web application provides football fans with a comprehensive experience of tracking match results and team statistics from the major leagues across the Americas and Europe. Users can explore the latest match results, check league standings, and access detailed team statistics. This application offers fans a convenient way to stay updated on their favorite teams and closely follow the action in the world of football.",
    github: "https://github.com/ju4n-avendanoa/FootballResults",
    productionLink: "https://footballresults.vercel.app",
  },
];

const Project = ({ item }: { item: any }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 0.75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className={styles.imageContainer}
          ref={ref}
        >
          <ImageWithFallback
            src={item.img}
            alt="project-picture"
            width={1000}
            height={1000}
            fallbackSrc=""
          />
        </motion.div>
        <motion.div
          className={styles.textContainer}
          style={{ y }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <div className={styles.buttons}>
            <Button text="GitHub" icon={<FaGithub />} link={item.github} />
            <Button
              text="Live"
              icon={<BsLink45Deg />}
              link={item.productionLink}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className={styles.portfolio} ref={ref}>
      <div className={styles.progress}>
        <h1>Projects</h1>
        <motion.div
          style={{ scaleX }}
          className={styles.progressBar}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Project item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
