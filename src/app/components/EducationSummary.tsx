import { Box, Divider, Paper, Typography } from "@mui/material"
import { styles } from "../styles"

export default function EducationSummary() {
    return (
        <Box sx={styles.sectionBox}>
            <Typography variant="h5" sx={styles.subHeader}>
                Education
            </Typography>
            <Box>
                <Typography variant="h6" sx={{ color: "#b0bec5" }}>
                    University of Massachusetts - Lowell
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#757575" }}>
                    Bachelor of Science in Computer Science
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#757575" }}>
                    Degree Awarded: May 17, 2014
                </Typography>
            </Box>
        </Box>
    )
}