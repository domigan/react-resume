"use client";

import { Button, Stack, Typography } from "@mui/material";
import { styles } from "@/app/styles";

export default function HeaderSummary() {
  return (
    <>
      <Stack sx={styles.sectionBox} spacing={2}>
        <Typography variant="h5" sx={styles.subHeader}>
          Summary
        </Typography>
        <Typography>
          Experienced software engineer striving to make deliverables on web and
          mobile platforms, with a strong desire to build tools that empower
          creatives. Working closely with product and design teams, I strive to
          write functional, responsive, and concise code on front- and back-end
          systems and services to meet the needs of the user.
        </Typography>
        <Typography>
          As a true Greater Boston native, I currently reside in Wakefield with
          my wife and two children. Not only am I a software engineer, but I am
          also an independent music producer and DJ. I have been nominated for a
          Boston Music Award, released three full length albums, and many EPs
          and singles. My other hobbies include snowboarding, golf, disc golf,
          viewing fine film and television, and travelling with my family.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/Resume_Colin_Baillie_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF Resume
        </Button>
      </Stack>
    </>
  );
}
