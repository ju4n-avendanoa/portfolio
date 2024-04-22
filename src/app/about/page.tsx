"use client";

import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { motion } from "framer-motion";
import { GoGear } from "react-icons/go";
import { IoBag } from "react-icons/io5";
import { FaInfo } from "react-icons/fa";
import SkillsGrid from "@/components/about/SkillsGrid";
import Skill from "@/components/skills/Skill";
import styles from "@/styles/about/about.module.scss";
import TimelineComponent from "@/components/about/Timeline";
import EducationCard from "@/components/about/EducationCard";
import iconStyles from "@/styles/about/aboutIcon.module.scss";

function page() {
  return (
    <main className={styles.main}>
      <motion.section
        className={styles.biography}
        variants={{
          hidden: { opacity: 0, y: 0.75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <div className={styles.headers}>
          <h1>About</h1>
          <FaInfo className={iconStyles.icon} />
        </div>
        <p>
          After graduating as a mechanical engineer, I embarked on a new journey
          in full-stack web development. With a strong foundation in both
          front-end and back-end technologies, I am currently expanding my
          skills through certification in web development. My expertise ranges
          from crafting engaging user interfaces to developing robust
          server-side applications. The transition into web development was
          driven by a pursuit of fulfillment and a passion for meaningful work.
          Now, I am actively seeking a full-time position as a software
          developer, eager to contribute my skills and passion to meaningful
          projects.
        </p>
      </motion.section>
      <motion.section
        className={styles.skills}
        variants={{
          hidden: { opacity: 0, y: 0.75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <div className={styles.headers}>
          <h2 className={styles.seccionTitle}>Skills</h2>

          <IoExtensionPuzzleSharp className={iconStyles.icon} />
        </div>
        <p>
          I emphasize key abilities to tackle challenges and deliver effective
          solutions, while also reinforcing my existing skills.
        </p>
        <div className={styles.grid}>
          <SkillsGrid title="Frontend">
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              name="HTML"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              name="CSS"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              name="JavaScript"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              name="React"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
              name="SASS"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              name="TailwindCSS"
            />
          </SkillsGrid>
          <SkillsGrid title="Backend">
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              name="NextJS"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              name="TypeScript"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
              name="NodeJS"
            />
            <div className={styles.customSkill}>
              <svg
                viewBox="0 0 128 128"
                style={{
                  fill: "#ffffff",
                }}
                className={styles.icon}
              >
                <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
              </svg>
              <h2>Express</h2>
            </div>
            <div className={styles.customSkill}>
              <svg
                viewBox="0 0 128 128"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10%",
                }}
                className={styles.icon}
              >
                <path
                  fill="#2d3748"
                  d="M66.457.014a6.308 6.308 0 0 0-5.812 3.028l-47.87 78.072a6.379 6.379 0 0 0 .048 6.748l23.568 37.186a6.387 6.387 0 0 0 7.22 2.683l68.012-20.407a6.37 6.37 0 0 0 3.96-8.765l-43.72-94.85A6.298 6.298 0 0 0 66.46.014Zm1.795 23.95a2.348 2.348 0 0 1 2.448 1.433l30.16 69.784a2.39 2.39 0 0 1-1.512 3.241l-46.996 14.024a2.39 2.39 0 0 1-3.024-2.76l16.83-83.812a2.353 2.353 0 0 1 2.099-1.91z"
                ></path>
              </svg>
              <h2>Prisma</h2>
            </div>
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
              name="MySQL"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              name="PostgreSQL"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              name="MongoDB"
            />
          </SkillsGrid>
          <SkillsGrid title="Technologies">
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
              name="AWS"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              name="Git"
            />
            <div className={styles.customSkill}>
              <svg viewBox="0 0 128 128" className={styles.icon}>
                <g fill="#ffffff">
                  <path d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
                  <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                </g>
              </svg>
              <h2>Github</h2>
            </div>
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
              name="Docker"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
              name="NPM"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
              name="VSCode"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg"
              name="Insomnia"
            />
          </SkillsGrid>
          <SkillsGrid title="Learning">
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              name="Java"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
              name="Spring"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              name="React Native"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
              name="NestJS"
            />
          </SkillsGrid>
        </div>
      </motion.section>
      <motion.section
        className={styles.experience}
        variants={{
          hidden: { opacity: 0, y: 0.75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <div className={styles.headers}>
          <h2 className={styles.seccionTitle}>Experience</h2>
          <IoBag className={iconStyles.icon} />
        </div>
        <p className={styles.description}>
          Work history reflecting a commitment to excellence and a
          results-oriented approach.
        </p>
        <TimelineComponent />
      </motion.section>
      <motion.section
        className={styles.education}
        variants={{
          hidden: { opacity: 0, y: 0.75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <div className={styles.headers}>
          <h2 className={styles.seccionTitle}>Education</h2>
          <FaGraduationCap className={iconStyles.icon} />
        </div>
        <p className={styles.description}>
          Academic background providing a solid foundation to tackle the
          challenges of the professional world.
        </p>
        <div className={styles.degrees}>
          <EducationCard
            degree="Mechanical Engineer"
            year="2023"
            university="University of Antioquia - Colombia"
            icon={<GoGear className={styles.icon} />}
          />
          <EducationCard
            degree="Web Developer"
            year="2023-Present"
            university="Digital House - Argentina"
            icon={<FaLaptopCode className={styles.icon} />}
          />
        </div>
      </motion.section>
    </main>
  );
}

export default page;
