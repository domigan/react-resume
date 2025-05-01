import React from "react";
import Button from "@mui/material/Button";
import { Grid, Stack } from "@mui/material";
import Track from "./Track";
import { Search } from "./Search";
import { Stop, PlayArrow, SkipNext } from "@mui/icons-material";
import { AudiusUser } from "@/types/Audius.type";

export default function Playback({
  disabled,
  play,
  skip,
  playing,
  title,
  user,
  link,
  select_genre,
  selected_genre,
}: {
  disabled: boolean;
  play: () => void;
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
      <Grid container spacing={2} className="playback-btns">
        <Grid>
          <Button
            disabled={disabled}
            className="playback-btn"
            variant="contained"
            onClick={play}
            endIcon={playing ? <Stop /> : <PlayArrow />}
          >
            {playing ? "STOP" : "PLAY"}
          </Button>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            className="playback-btn"
            onClick={skip}
            endIcon={<SkipNext />}
          >
            {/* <SkipNextIcon /> */}
            NEXT
          </Button>
        </Grid>

        <Grid width={"100%"}>
          <Track title={title} artist={user.name} link={link} />
        </Grid>
      </Grid>
      <Search onChange={select_genre} selected_genre={selected_genre} />
    </Stack>
  );
}
