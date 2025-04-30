"use client";

import {
  Box,
  Typography,
  Stack,
  Tabs,
  Tab,
  Divider,
  Button,
} from "@mui/material";
import { styles } from "./styles";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Expando from "../components/Expando";
import { exp, skills } from "./colin.data";
import LikeList from "../components/LikeList";
import Accolades from "../components/Accolades";
import React from "react";
import HeaderSummary from "../components/HeaderSummary";
import Header from "../components/Header";

export default function Main() {
  const [value, setValue] = React.useState("one");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />
      <Divider sx={styles.divider} />
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        variant="fullWidth"
      >
        <Tab value="one" label="Summary" />
        <Tab value="two" label="Skills" />
        <Tab value="three" label="Experience" />
        <Tab value="four" label="Accolades" />
        <Tab value="five" label="Projects" />
      </Tabs>
      <Divider sx={{ backgroundColor: "#424242", marginY: "20px" }} />
      {value === "one" && <HeaderSummary />}
      {/* Skills Section */}
      {value === "two" && (
        <Box sx={{ marginBottom: "20px" }}>
          <Typography
            variant="h5"
            sx={{ marginBottom: "10px", color: "#90caf9" }}
          >
            Skills
          </Typography>
          <LikeList title="Skills" body={skills} />
        </Box>
      )}
      {/* Experience Section */}
      {value === "three" && (
        <Box sx={styles.sectionBox}>
          <Typography
            variant="h5"
            sx={{ marginBottom: "10px", color: "#90caf9" }}
          >
            Experience
          </Typography>

          <Stack spacing={2}>
            {exp.map((job, index) => (
              <Expando
                key={index}
                title={job.company}
                subtitle={`${job.jobTitle} | ${job.location} | ${job.dates}`}
                body={job.details}
              />
            ))}
          </Stack>
        </Box>
      )}
      {/* Education Section */}
      {value === "four" && (
        <Box sx={styles.sectionBox}>
          <Accolades />
        </Box>
      )}
      {value === "five" && (
        <Box sx={styles.sectionBox}>
          <Typography
            variant="h5"
            sx={{ marginBottom: "10px", color: "#90caf9" }}
          >
            Projects
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.open("/discius", "_blank");
            }}
            startIcon={<ThumbUpOffAltIcon />}
          >
            Discius Music Player
          </Button>
          <Typography
            variant="body1"
            sx={{ marginTop: "10px", color: "#b0bec5" }}
          >
            A music player that uses the Audius API to play music. It is built
            with React and TypeScript. It is a work in progress and is not fully
            designed yet. Adding more features and improving the design is on my
            to-do list.
          </Typography>

          <Divider sx={styles.divider} />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.open("http://domigan.co/lin", "_blank");
            }}
            startIcon={<ThumbUpOffAltIcon />}
          >
            Music Production Home Page
          </Button>
          <Typography
            variant="body1"
            sx={{ marginTop: "10px", color: "#b0bec5" }}
          >
            My personal music production home page. It is a constant work in
            progress as I am releasing new music and updating the site. It is
            built with raw HTML, CSS, and JavaScript. Uses a variety of embeded
            players to play music. Essentially a code golf project to see how
            small I can make my site while still being functional.
          </Typography>
        </Box>
      )}
    </>
  );
}
