import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import Track from "./Track";
import { Search } from "./Search";
import { Stop, PlayArrow, SkipNext } from "@mui/icons-material";

export default function Playback({
  play,
  stop,
  skip,
  playing,
  title,
  artist,
  link,
  select_genre,
  selected_genre,
}: {
  play: () => void;
  stop: () => void;
  skip: () => void;
  playing: boolean;
  title: string;
  artist: string;
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
        <Track title={title} artist={artist} link={link} />
      </Stack>
      <Search onChange={select_genre} selected_genre={selected_genre} />
    </Stack>
  );
}
