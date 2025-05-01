import React from "react";
import { Button, Chip, Tooltip } from "@mui/material";
import { styles } from "@/app/styles";

interface ContactChipProps {
  label: string;
  value: string;
  Icon: React.ReactElement;
}

const ContactChip: React.FC<ContactChipProps> = ({ label, value, Icon }) => {
  return (
    <Tooltip title={value}>
      <Button variant="text">
        <Chip
          icon={Icon || undefined}
          variant="outlined"
          color="secondary"
          size="small"
          label={label}
          style={styles.chip}
        />
      </Button>
    </Tooltip>
  );
};

export default ContactChip;
