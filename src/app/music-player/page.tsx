import React from "react";
import Turntable from "./visualizer/Turntable";
import Box from "@mui/material/Box";
import AnimatedBackground from "@/components/AnimatedBackground";
import { styles } from "../styles";
import "../globals.css";

export default function Page() {
  return (
    <Box sx={styles.musicPlayer}>
      <AnimatedBackground />
      <Turntable />
    </Box>
  );
}
