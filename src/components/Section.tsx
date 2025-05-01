import { styles } from "@/app/styles";
import { Box, Typography } from "@mui/material";

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box sx={styles.sectionBox}>
      <Typography variant="h5" sx={{ marginBottom: "10px", color: "#90caf9" }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
