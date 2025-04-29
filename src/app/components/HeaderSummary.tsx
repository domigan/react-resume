import { Box, Divider, Paper, Typography } from "@mui/material"
import { styles } from "../styles"

export default function HeaderSummary() {
    return (
        <>
            {/* Header Section */}
            <Paper
                elevation={3}
                sx={styles.headerPaper}
            >
                <Typography variant="h3" align="center" sx={styles.headerTitle}>
                    Colin Baillie
                </Typography>
                <Typography variant="h6" align="center" sx={styles.headerSubtitle}>
                    Wakefield, MA | (339) 927-5951 | domigan16@gmail.com
                </Typography>
            </Paper>

            <Divider sx={styles.divider} />

            {/* Summary Section */}
            <Box sx={styles.sectionBox}>
                <Typography variant="h5" sx={styles.subHeader}>
                    Summary
                </Typography>
                <Typography>
                    Experienced software engineer striving to make deliverables on web and mobile platforms, with a strong
                    desire to build tools that empower creatives. Working closely with product and design teams, I strive to
                    write functional, responsive, and concise code on front- and back-end systems and services to meet the
                    needs of the users and stakeholders.
                </Typography>
            </Box>
        </>
    )
}