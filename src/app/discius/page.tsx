import AnimatedBackground from "@/components/AnimatedBackground";
import "../globals.css";
import { list_tracks, start_stream } from "./actions/actions";
import Turntable from "./visualizer/Turntable";

export default function Discius() {
  return (
    <>
      <AnimatedBackground invert={true} />
      <Turntable start_stream={start_stream} list_tracks={list_tracks} />
    </>
  );
}
