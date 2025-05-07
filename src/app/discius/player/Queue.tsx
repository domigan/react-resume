import React from "react";
import List from "@mui/material/List";
import Track from "./Track";
import ListItem from "@mui/material/ListItem";
import { AudiusTrack } from "@/types/Audius.type";
import { Box, Grid, Typography } from "@mui/material";

export default function Queue({
  queue,
  queue_index,
}: {
  queue: AudiusTrack[];
  queue_index: number;
}) {
  if (queue.length - 1 === queue_index) {
    return <div />;
  }
  return (
    <Box
      sx={{
        maxHeight: "500px",
        overflowY: "auto",
        fontSize: "small",
        border: "5px solid #00793d",
      }}
    >
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          className="queue-header"
          sx={{ padding: "10px" }}
        >
          Up next:
        </Typography>
        {queue.slice(queue_index + 1).map((track, index) => {
          const { artwork } = track;
          const source = artwork ? artwork["150x150"] : "/img/vinyl_img.png";
          return (
            <ListItem
              className={"w-full"}
              key={`${track.id}_${index}`}
              sx={{
                padding: "10px",
                margin: "0px",
              }}
            >
              <Grid container spacing={2} width={"100%"}>
                <Grid sx={{ opacity: 1 }}>
                  {source && (
                    <img
                      src={source}
                      className={`album-art-queue`}
                      alt="logo"
                      width="75"
                      height="75"
                    />
                  )}
                </Grid>
                <Grid>
                  <Track
                    title={track.title}
                    artist={track.user.name}
                    link={track.permalink}
                  />
                </Grid>
              </Grid>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
