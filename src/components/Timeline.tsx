import {
  Timeline,
  TimelineSeparator,
  TimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaDatabase } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";

function TimelineComponent() {
  return (
    <Timeline position="alternate-reverse" style={{ width: "100vw" }}>
      <TimelineItem>
        <TimelineSeparator style={{ height: "250px", gap: "10px" }}>
          <FaDatabase
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "lightblue",
              padding: "5px",
              borderRadius: "20%",
              color: "black",
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Grupo UMA
          <div style={{ border: "1px solid red" }}>afafs</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator style={{ height: "250px", gap: "10px" }}>
          <HiMiniComputerDesktop
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "lightblue",
              padding: "5px",
              borderRadius: "50%",
              color: "black",
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Successadvs</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <FaMoneyCheckAlt
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "lightblue",
              padding: "5px",
              borderRadius: "30%",
              color: "black",
            }}
          />
        </TimelineSeparator>
        <TimelineContent>Succasdsadfsdsadess</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default TimelineComponent;
