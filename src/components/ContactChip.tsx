import React, { useState } from "react";
import { Button, Chip, Popover, Typography } from "@mui/material";
import { styles } from "@/app/styles";

interface ContactChipProps {
  label: string;
  value: string;
  Icon: React.ReactElement;
}

const ContactChip: React.FC<ContactChipProps> = ({ label, value, Icon }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button variant="text" onClick={handleOpen}>
        <Chip
          icon={Icon || undefined}
          variant="outlined"
          color="secondary"
          label={label}
          sx={{ padding: "10px", fontWeight: "700" }}
          style={styles.chip}
        />
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography sx={{ padding: "10px" }}>{value}</Typography>
      </Popover>
    </>
  );
};

export default ContactChip;
