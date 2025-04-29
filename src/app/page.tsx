"use client";

import { Box, Typography, Divider, Stack } from "@mui/material";
import AnimatedBackground from "./components/AnimatedBackground";
import { styles } from "./styles";
import Expando from "./components/Expando";
import { exp, skills } from "./colin.data";
import LikeList from "./components/LikeList";
import HeaderSummary from "./components/HeaderSummary";
import EducationSummary from "./components/EducationSummary";

export default function Resume() {
  return (
    <Box sx={styles.container}>
      <AnimatedBackground />
      <HeaderSummary />
      <Divider sx={{ backgroundColor: "#424242", marginY: "20px" }} />
      {/* Skills Section */}
      <Box sx={{ marginBottom: "20px" }}>
        <LikeList title="Skills" body={skills} />
      </Box>
      <Divider sx={styles.divider} />

      {/* Experience Section */}
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

      {/* Education Section */}
      <EducationSummary />
    </Box>
  );
}
