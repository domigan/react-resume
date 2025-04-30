import { Box } from "@mui/material";
import AnimatedBackground from "./components/AnimatedBackground";
import { styles } from "./styles";
import Main from "./Main";

export default function Resume() {
  return (
    <Box sx={styles.container}>
      <AnimatedBackground />
      <Main />
    </Box>
  );
}
