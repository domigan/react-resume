import React from "react";
import List from "@mui/material/List";
import Track from "./Track";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import { AudiusTrack } from "@/types/Audius.type";
import { Box, Stack } from "@mui/material";

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
    <List className="track-queue w-full">
      {queue.slice(queue_index + 1).map((track, index) => {
        const { artwork } = track;
        const source = artwork ? artwork["150x150"] : "/img/vinyl_img.png";
        return (
          <ListItem
            className={"queue-item w-full"}
            key={`${track.id}_${index}`}
          >
            <Stack direction="row" spacing={2} width={"100%"}>
              <Box className="col-3">
                {source && (
                  <img
                    src={source}
                    className={`album-art-queue`}
                    alt="logo"
                    width="60"
                    height="60"
                  />
                )}
              </Box>
              <Box className="col-9">
                <Track
                  title={track.title}
                  artist={track.user.name}
                  link={track.permalink}
                />
              </Box>
            </Stack>
          </ListItem>
        );
      })}
    </List>
  );
}
