import React from "react";
import Turntable from "./visualizer/Turntable";
import "../globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Discius() {
  return (
    <>
      <AnimatedBackground invert={true} />
      <Turntable />
    </>
  );
}
