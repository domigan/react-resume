import { Divider, Stack, Typography } from "@mui/material";
import { styles } from "@/app/styles";
import ContactChip from "./ContactChip";
import { Email, LocationCity, PhoneCallback } from "@mui/icons-material";
import { info } from "@/app/colin.data";
import Contact from "./Contact";

export default function HeaderSummary() {
  return (
    <div style={styles.headerPaper}>
      <Typography variant="h2" align="center" sx={styles.headerTitle}>
        {info.name}
      </Typography>
      <Typography variant="body1" align="center" sx={styles.headerTitle}>
        {info.title}
      </Typography>
      <Contact />
    </div>
  );
}
