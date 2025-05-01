import { ThumbUpOffAlt } from "@mui/icons-material";
import { Button, Divider, Typography } from "@mui/material";

export function Project({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.open(link, "_blank")}
        startIcon={<ThumbUpOffAlt />}
      >
        {title}
      </Button>
      <Typography variant="body1" sx={{ marginTop: "10px", color: "#b0bec5" }}>
        {description}
      </Typography>
      <Divider sx={{ margin: "20px 0" }} />
    </>
  );
}
