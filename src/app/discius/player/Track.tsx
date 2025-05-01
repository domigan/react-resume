import { Box, Typography } from "@mui/material";
import React from "react";

export default function Track({
  title,
  artist,
  link,
}: {
  title: string;
  artist: string;
  link: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography variant="body1" sx={{ color: "aquamarine" }}>
        Artist: {artist}
      </Typography>
      <a href={`https://www.audius.co${link}`} target={"_blank"}>
        <Typography variant="body1" sx={{ color: "aquamarine" }}>
          Title: {title}
        </Typography>
      </a>
    </Box>
  );
}
