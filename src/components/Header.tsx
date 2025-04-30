import { Paper, Typography } from "@mui/material";
import { styles } from "@/app/styles";

export default function HeaderSummary() {
  return (
    <div style={styles.headerPaper}>
      <Typography variant="h3" align="center" sx={styles.headerTitle}>
        Colin Baillie
      </Typography>
      <Typography variant="h6" align="center" sx={styles.headerSubtitle}>
        Wakefield, MA | (339) 927-5951 | domigan16@gmail.com
      </Typography>
    </div>
  );
}
