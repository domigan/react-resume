import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";

export default function Track({
  title,
  artist,
  link,
  displayHeader = false,
}: {
  displayHeader?: boolean;
  title: string;
  artist: string;
  link: string;
}) {
  return (
    <Link
      href={`https://www.audius.co${link}`}
      target={"_blank"}
      sx={{
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#00793d",
        width: "100%",
        display: "flex-column",
        "&:hover": {
          backgroundColor: "#00793d",
        },
        margin: "5px",
      }}
    >
      <Grid container spacing={2} width={"100%"}>
        {displayHeader && (
          <Grid>
            <Typography
              variant="h6"
              component="div"
              className="queue-header"
              sx={{ padding: "10px" }}
            >
              Now playing:
            </Typography>
          </Grid>
        )}
        <Grid>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {artist}
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: "italic" }}>
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
}
