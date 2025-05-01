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
    <div className="track-info">
      <Box>
        <Typography variant="body1" sx={{ color: "aquamarine" }}>
          Artist: {artist}
        </Typography>
      </Box>
      <Box>
        <i>
          <a href={`https://www.audius.co${link}`} target={"_blank"}>
            <Typography variant="body1" sx={{ color: "aquamarine" }}>
              Title: {title}
            </Typography>
          </a>
        </i>
      </Box>
    </div>
  );
}
