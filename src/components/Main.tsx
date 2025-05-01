"use client";

import React from "react";
import {
  Box,
  Typography,
  Stack,
  Tabs,
  Tab,
  Divider,
  Button,
} from "@mui/material";
import { styles } from "../app/styles";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Expando from "./Expando";
import { exp, skills } from "../app/colin.data";
import LikeList from "./LikeList";
import Accolades from "./Accolades";
import HeaderSummary from "./HeaderSummary";
import Header from "./Header";
import { Section } from "./Section";
import { Project } from "./Project";

export default function Main() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const sections: Record<string, React.ReactNode> = {
    one: <HeaderSummary />,
    two: (
      <Section title="Skills">
        <LikeList title="Skills" body={skills} />
      </Section>
    ),
    three: (
      <Section title="Experience">
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
      </Section>
    ),
    four: (
      <Box sx={styles.sectionBox}>
        <Accolades />
      </Box>
    ),
    five: (
      <Section title="Projects">
        <Project
          title="Discius Music Player"
          description="A music player that uses the Audius API to play music. It is built with React and TypeScript. It is a work in progress and is not fully designed yet. Adding more features and improving the design is on my to-do list."
          link="/discius"
        />
        <Divider sx={styles.divider} />
        <Project
          title="Music Production Home Page"
          description="My personal music production home page. It is a constant work in progress as I am releasing new music and updating the site. It is built with raw HTML, CSS, and JavaScript. Uses a variety of embedded players to play music. Essentially a code golf project to see how small I can make my site while still being functional."
          link="http://domigan.co/lin"
        />
      </Section>
    ),
  };

  return (
    <div style={styles.card}>
      <Header />
      <Divider sx={styles.divider} />
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        variant="scrollable"
      >
        <Tab value="one" label="Summary" />
        <Tab value="two" label="Skills" />
        <Tab value="three" label="Experience" />
        <Tab value="four" label="Accolades" />
        <Tab value="five" label="Projects" />
      </Tabs>
      <Divider sx={{ backgroundColor: "#424242", marginY: "20px" }} />
      {sections[value]}
    </div>
  );
}
