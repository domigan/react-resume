import { Stack, Typography } from "@mui/material";
import { styles } from "@/app/styles";
import ContactChip from "./ContactChip";
import { Email, LocationCity, PhoneCallback } from "@mui/icons-material";

export default function HeaderSummary() {
  return (
    <div style={styles.headerPaper}>
      <Typography variant="h3" align="center" sx={styles.headerTitle}>
        Colin Baillie
      </Typography>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <Stack direction={"row"} spacing={2} sx={styles.headerSubtitle}>
          <ContactChip
            label="locale"
            value="Boston, MA"
            Icon={<LocationCity />}
          />
          <ContactChip
            label="email"
            value="domigan16@gmail.com"
            Icon={<Email />}
          />
          <ContactChip
            label="cell"
            value="(339) 927-5951"
            Icon={<PhoneCallback />}
          />
        </Stack>
      </div>
    </div>
  );
}
