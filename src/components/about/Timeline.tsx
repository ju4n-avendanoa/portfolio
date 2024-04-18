"use client";

import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { TimelineDot } from "@mui/lab";
import { createTheme } from "@mui/material/styles";
import { FaDatabase } from "react-icons/fa6";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import ExperienceCard from "./ExperienceCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import Timeline from "@mui/lab/Timeline";
import iconStyles from "@/styles/about/iconTimeline.module.scss";
import styles from "@/styles/about/timeline.module.scss";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true;
  }
}

function TimelineComponent() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 376,
        md: 768,
        lg: 1025,
        xl: 1441,
        xxl: 2561,
      },
    },
  });
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Timeline
      className={styles.timeline}
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          ...(isMobile && {
            flex: 0,
            padding: 0,
          }),
        },
      }}
      position={isLaptop ? "alternate" : undefined}
    >
      <TimelineItem className={styles.timelineItem}>
        <TimelineSeparator className={styles.timelineSeparator}>
          <FaDatabase className={iconStyles.timelineIcon} />
          <TimelineConnector
            className={`${styles.timelineConnector} ${styles.connector1}`}
          />
        </TimelineSeparator>
        <TimelineContent className={styles.timelineContent}>
          <ExperienceCard
            title="Data Analyst"
            company="Grupo UMA"
            date="2022-2023"
            description="I provided data analysis support to the Corporate Audit Department across six countries, leveraging SQL database querying for efficient extraction and analysis. This included developing and implementing dashboards for continuous monitoring in key areas such as manufacturing, production, procurement, inventory management, and accounts payable."
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={styles.timelineItem}>
        <TimelineSeparator className={styles.timelineSeparator}>
          <HiMiniComputerDesktop className={iconStyles.timelineIcon} />
          <TimelineConnector
            className={`${styles.timelineConnector} ${styles.connector2}`}
          />
        </TimelineSeparator>
        <TimelineContent className={styles.timelineContent}>
          <ExperienceCard
            title="Software Developer"
            company="Freelancer"
            date="2023-present"
            description="Initiating my path as a software developer, I delve into the realm of coding and application development. Engaged in ongoing studies while actively crafting practical applications."
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={styles.timelineItem}>
        <TimelineSeparator className={styles.timelineSeparator}>
          <FaMoneyCheckAlt className={iconStyles.timelineIcon} />
          <TimelineConnector
            className={`${styles.timelineConnector} ${styles.connector3}`}
          />
          <TimelineDot
            // color="secondary"
            style={{
              textAlign: "center",
              width: "20px",
              height: "20px",
              margin: "4px auto",
              backgroundColor: "lightblue",
            }}
          />
        </TimelineSeparator>
        <TimelineContent className={styles.timelineContent}>
          <ExperienceCard
            title="Digital Trafficker"
            company="Freelancer"
            date="2023-present"
            description="I implement a dropshipping strategy, using Facebook Ads and Instagram Ads to drive sales and effectively reach target audiences."
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default TimelineComponent;
