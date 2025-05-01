"use client";

import React, { useEffect, useState } from "react";
import { list_tracks, start_stream } from "../actions/actions";
import { genres, random_genre } from "../actions/utils";
import { AudiusTrack } from "@/types/Audius.type";
import { Box } from "@mui/material";
import Playback from "../player/Playback";
import Queue from "../player/Queue";
import Vinyl from "./Vinyl";
import "../../globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

export type MusicState = {
  playing: boolean;
  queue: AudiusTrack[];
  queue_index: number;
  selected_track: AudiusTrack | null;
  audio: HTMLAudioElement | null;
  selected_genre: string;
  disabled: boolean;
};

const initState: MusicState = {
  playing: false,
  queue: [],
  queue_index: 0,
  selected_track: null,
  audio: null,
  selected_genre: genres[0],
  disabled: false,
};

export default function Turntable() {
  const [state, setState] = useState(initState);

  const play = async () => {
    const { selected_track } = state;
    if (selected_track) {
      setState({ ...state, disabled: true });
      const audio = await start_stream(selected_track.id);

      if (audio) {
        audio.onemptied = (e) => {
          e.stopPropagation();
          skip();
          play();
        };
        setState({ ...state, playing: true, audio, disabled: true });
      } else {
        console.error("Error starting audio stream");
        setState({ ...state, playing: false });
      }
    }
  };

  const skip = async () => {
    stop();
    let { queue, queue_index } = state;
    if (queue.length - 1 === queue_index) {
      queue = await list_tracks(random_genre());
      queue_index = 0;
    } else {
      queue_index++;
    }
    const selected_track = queue[queue_index];
    setState({ ...state, selected_track, queue_index });
    play();
  };

  const stop = () => {
    const { playing, audio } = state;
    if (playing && audio) {
      audio.pause();
      setState({ ...state, playing: false });
    }
  };

  const select_genre = async (genre: string) => {
    stop();
    const queue = await list_tracks(genre);
    const selected_track = queue && queue.length ? queue[0] : null;
    setState({ ...state, queue, selected_track, selected_genre: genre });
  };

  useEffect(() => {
    const fetchTracks = async () => {
      const queue = await list_tracks(state.selected_genre);
      const selected_track = queue && queue.length ? queue[0] : null;
      setState({ ...state, queue, selected_track });
    };
    fetchTracks();
  }, []);

  useEffect(() => {
    if (state.playing && state.audio) {
      setState({ ...state, disabled: false });
    }
  }, [state.playing, state.audio]);

  const { selected_track, playing, selected_genre, queue, queue_index } = state;
  return (
    <>
      <Box className="playback-queue-container">
        {selected_track && (
          <div className="track-container">
            <AnimatedBackground fillParent={true} />
            <Playback
              disabled={state.disabled}
              play={play}
              skip={skip}
              playing={playing}
              title={selected_track.title}
              user={selected_track.user}
              link={selected_track.permalink}
              select_genre={select_genre}
              selected_genre={selected_genre}
            />
          </div>
        )}
        <Queue queue={queue} queue_index={queue_index} />
      </Box>
      <Box className="vinyl-container col-8">
        {selected_track && selected_track.artwork && (
          <Vinyl artwork={selected_track.artwork} playing={playing} />
        )}
      </Box>
    </>
  );
}
