import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import StopIcon from "@mui/icons-material/Stop";
// import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function Playback({
  play,
  stop,
  skip,
  playing,
}: {
  play: () => void;
  stop: () => void;
  skip: () => void;
  playing: boolean;
}) {
  return (
    <Stack direction="row" className="controls" spacing={2}>
      {!playing && (
        <Button variant="contained" onClick={play}>
          {/* <PlayArrowIcon /> */}
          PLAY
        </Button>
      )}
      {playing && (
        <Button variant="contained" className="playback-btn" onClick={stop}>
          {/* <StopIcon /> */}
          STOP
        </Button>
      )}
      <Button variant="contained" className="playback-btn" onClick={skip}>
        {/* <SkipNextIcon /> */}
        NEXT
      </Button>
    </Stack>
  );
}
