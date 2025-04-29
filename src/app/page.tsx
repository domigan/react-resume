import { Box, Typography, Paper, Divider, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import UnfoldMoreDoubleIcon from '@mui/icons-material/UnfoldMoreDouble';

export default function Resume() {
  return (
    <Box
      sx={{
        backgroundColor: "#121212", // Dark background
        minHeight: "100vh",
        padding: "20px",
        color: "#e0e0e0", // Light text color
        width: "70%",
        margin: "0 auto",
      }}
    >
      {/* Header Section */}
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          backgroundColor: "#1e1e1e", // Slightly lighter dark background
          marginBottom: "20px",
        }}
      >
        <Typography variant="h3" align="center" sx={{ color: "#90caf9" }}>
          Colin Baillie
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: "#b0bec5" }}>
          Wakefield, MA | (339) 927-5951 | domigan16@gmail.com
        </Typography>
      </Paper>

      <Divider sx={{ backgroundColor: "#424242", marginY: "20px" }} />

      {/* Summary Section */}
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="h5" sx={{ marginBottom: "10px", color: "#90caf9" }}>
          Summary
        </Typography>
        <Typography>
          Experienced software engineer striving to make deliverables on web and mobile platforms, with a strong
          desire to build tools that empower creatives. Working closely with product and design teams, I strive to
          write functional, responsive, and concise code on front- and back-end systems and services to meet the
          needs of the users and stakeholders.
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: "#424242", marginY: "20px" }} />

      {/* Experience Section */}
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="h5" sx={{ marginBottom: "10px", color: "#90caf9" }}>
          Experience
        </Typography>

        {/* 1up Health */}
        <Accordion>
          <AccordionSummary expandIcon={<UnfoldMoreDoubleIcon />} sx={{ backgroundColor: "#1e1e1e" }}>
            <Typography sx={{ color: "#90caf9" }}>1up Health - Senior Software Engineer</Typography>
            <Typography sx={{ color: "#b0bec5", marginLeft: "auto" }}>Boston, MA (Remote) | Oct 2024 – April 2025</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - Contributed to a new console application that allowed users to interact with the FHIR (fast health
              interoperability resource) API to search patient records.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Cinapse */}
        <Accordion>
          <AccordionSummary expandIcon={<UnfoldMoreDoubleIcon />} sx={{ backgroundColor: "#1e1e1e" }}>
            <Typography sx={{ color: "#90caf9" }}>Cinapse - Senior Software Engineer</Typography>
            <Typography sx={{ color: "#b0bec5", marginLeft: "auto" }}>Los Angeles, CA (Remote) | Jan 2022 – June 2024</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - Built a complex web application for assistant directors and production managers on film and television
              production sets to schedule their shoots.
            </Typography>
            <Typography>
              - Built application mainly in Node.JS with TypeScript, React, Next.js, Prisma, and PostgreSQL.
            </Typography>
            <Typography>
              - Contributed to building real-time collaboration within the app, the “day out of days” scheduling
              algorithm, and reporting features that allowed the user to print and save custom formatted full-color
              schedules.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Reggora */}
        <Accordion>
          <AccordionSummary expandIcon={<UnfoldMoreDoubleIcon />} sx={{ backgroundColor: "#1e1e1e" }}>
            <Typography sx={{ color: "#90caf9" }}>Reggora, Inc. - Senior Software Developer</Typography>
            <Typography sx={{ color: "#b0bec5", marginLeft: "auto" }}>Boston, MA | August 2020 – Dec 2021</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - Contributed new features on multiple platforms used by lenders and appraisers using Python, React,
              mongoDB.
            </Typography>
            <Typography>
              - Participated in a support team for solving real-time issues experienced by clients.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* SyncOnSet */}
        <Accordion>
          <AccordionSummary expandIcon={<UnfoldMoreDoubleIcon />} sx={{ backgroundColor: "#1e1e1e" }}>
            <Typography sx={{ color: "#90caf9" }}>SyncOnSet Technologies - Software Engineer</Typography>
            <Typography sx={{ color: "#b0bec5", marginLeft: "auto" }}>Boston, MA | July 2018 – July 2020</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - Contributed to re-writing software used by major television and motion picture studios on the sets of
              high-budget productions using Agile development process.
            </Typography>
            <Typography>
              - Developed primarily in React, using TypeScript, Redux, Hapi, Node.js, npm, mySQL & Docker.
            </Typography>
            <Typography>
              - Worked closely with product owner to develop and implement UX/UI using Zepplin.io.
            </Typography>
            <Typography>
              - Maintained legacy budgeting application in PHP using the Yii framework.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}