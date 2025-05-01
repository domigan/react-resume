"use client";

import React, { useMemo } from "react";
import { Box, Stack, Tabs, Tab, Divider } from "@mui/material";
import { styles } from "../app/styles";
import Expando from "./Expando";
import { experience, projects, skills } from "../app/colin.data";
import LikeList from "./LikeList";
import Accolades from "./Accolades";
import HeaderSummary from "./HeaderSummary";
import Header from "./Header";
import { Section } from "./Section";
import { Project } from "./Project";

export default function Main() {
  const [tabValue, setTabValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
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
          {experience.map((job, index) => (
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
        {projects.map((project, index) => (
          <Project
            key={`project-${index}`}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </Section>
    ),
  };

  const isMobile = useMemo(() => {
    return typeof window !== "undefined" && window.innerWidth < 600;
  }, [window]);

  return (
    <div style={styles.card}>
      <Header />
      <Divider sx={styles.divider} />
      <Tabs
        value={tabValue}
        onChange={handleChange}
        centered={true}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        variant={isMobile ? "scrollable" : "fullWidth"}
        sx={{
          marginBottom: "20px",
          backgroundImage: "linear-gradient(45deg, #1e1e1e, #424242)",
          backgroundColor: "#424242",
          borderRadius: "10px",
        }}
      >
        <Tab value="one" label="Summary" />
        <Tab value="two" label="Skills" />
        <Tab value="three" label="Experience" />
        <Tab value="four" label="Accolades" />
        <Tab value="five" label="Projects" />
      </Tabs>
      <Divider sx={{ backgroundColor: "#424242", marginY: "20px" }} />
      {sections[tabValue]}
    </div>
  );
}
