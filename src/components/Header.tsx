import { Divider, Stack, Typography } from "@mui/material";
import { styles } from "@/app/styles";
import ContactChip from "./ContactChip";
import { Email, LocationCity, PhoneCallback } from "@mui/icons-material";
import { info } from "@/app/colin.data";

export default function HeaderSummary({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  return (
    <div style={styles.headerPaper}>
      <Typography variant="h2" align="center" sx={styles.headerTitle}>
        {info.name}
      </Typography>
      <Typography variant="body1" align="center" sx={styles.headerTitle}>
        {info.title}
      </Typography>
      <Divider sx={styles.divider} />
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={2}
        justifyContent={"center"}
      >
        <ContactChip
          label="locale"
          value={info.locale}
          Icon={<LocationCity />}
        />
        <ContactChip label="email" value={info.email} Icon={<Email />} />
        <ContactChip label="cell" value={info.cell} Icon={<PhoneCallback />} />
      </Stack>
    </div>
  );
}
