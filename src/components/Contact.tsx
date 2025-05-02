import { LocationCity, Email, PhoneCallback } from "@mui/icons-material";
import { Stack } from "@mui/material";
import ContactChip from "./ContactChip";
import { info } from "@/app/colin.data";

export default function Contact({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <Stack
      spacing={1}
      direction={isMobile ? "column" : "row"}
      alignItems={"center"}
      sx={{
        padding: "10px",
        justifyContent: "center",
        borderRadius: "10px",
        marginY: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <ContactChip label="locale" value={info.locale} Icon={<LocationCity />} />
      <ContactChip label="email" value={info.email} Icon={<Email />} />
      <ContactChip label="cell" value={info.cell} Icon={<PhoneCallback />} />
    </Stack>
  );
}
