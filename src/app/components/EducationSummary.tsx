import { Box, Stack, Typography } from "@mui/material";
import { styles } from "../styles";

export default function EducationSummary() {
  return (
    <Stack sx={styles.sectionBox} spacing={2}>
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
      <Box>
        <Typography variant="h6" sx={{ color: "#b0bec5" }}>
          Malden Catholic High School
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "#757575" }}>
          Diploma Awarded: May 17, 2008
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ color: "#b0bec5" }}>
          Boy Scouts of America - Troop 728 Reading, MA
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "#757575" }}>
          Eagle Scout Rank Awarded: September 2007
        </Typography>
      </Box>
    </Stack>
  );
}
