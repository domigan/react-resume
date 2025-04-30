"use client";

import {
  Box,
  Typography,
  Stack,
  Tabs,
  Tab,
  Divider,
  Paper,
} from "@mui/material";
import { styles } from "./styles";
import Expando from "./components/Expando";
import { exp, skills } from "./colin.data";
import LikeList from "./components/LikeList";
import EducationSummary from "./components/EducationSummary";
import React from "react";
import HeaderSummary from "./components/HeaderSummary";

export default function Main() {
  const [value, setValue] = React.useState("one");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper elevation={3} sx={styles.headerPaper}>
        <Typography variant="h3" align="center" sx={styles.headerTitle}>
          Colin Baillie
        </Typography>
        <Typography variant="h6" align="center" sx={styles.headerSubtitle}>
          Wakefield, MA | (339) 927-5951 | domigan16@gmail.com
        </Typography>
      </Paper>
      <Divider sx={styles.divider} />
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Summary" />
        <Tab value="two" label="Skills" />
        <Tab value="three" label="Experience" />
        <Tab value="four" label="Education" />
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
      {value === "four" && (
        <Box sx={styles.sectionBox}>
          <EducationSummary />
        </Box>
      )}
    </>
  );
}
