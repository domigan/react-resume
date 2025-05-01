import React from "react";
import Button from "@mui/material/Button";
import { Box, Stack, Typography } from "@mui/material";
import Track from "./Track";
import { Search } from "./Search";
import { Stop, PlayArrow, SkipNext } from "@mui/icons-material";
import { AudiusUser } from "@/types/Audius.type";

export default function Playback({
  play,
  stop,
  skip,
  playing,
  title,
  user,
  link,
  select_genre,
  selected_genre,
}: {
  play: () => void;
  stop: () => void;
  skip: () => void;
  playing: boolean;
  title: string;
  user: AudiusUser;
  link: string;
  select_genre: (genre: string) => void;
  selected_genre: string;
}) {
  return (
    <Stack className="controls" spacing={2}>
      <Stack direction={"row"} spacing={2}>
        {!playing && (
          <Button variant="contained" onClick={play} endIcon={<PlayArrow />}>
            {/* <PlayArrowIcon /> */}
            PLAY
          </Button>
        )}
        {playing && (
          <Button
            variant="contained"
            className="playback-btn"
            onClick={stop}
            endIcon={<Stop />}
          >
            {/* <StopIcon /> */}
            STOP
          </Button>
        )}
        <Button
          variant="contained"
          className="playback-btn"
          onClick={skip}
          endIcon={<SkipNext />}
        >
          {/* <SkipNextIcon /> */}
          NEXT
        </Button>
      </Stack>
      <Track title={title} artist={user.name} link={link} />
      <Search onChange={select_genre} selected_genre={selected_genre} />
    </Stack>
  );
}
