import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Stack,
} from "@mui/material";
import { styles } from "../styles";
import UnfoldMoreDoubleIcon from "@mui/icons-material/UnfoldMoreDouble";
import LikeList from "./LikeList";

export default function Expando({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle: string;
  body: string[];
}) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<UnfoldMoreDoubleIcon sx={styles.accordionHeader} />}
        sx={styles.accordionHeader}
      >
        <Stack>
          <Typography sx={styles.headerTitle}>{title}</Typography>
          <Typography sx={styles.headerSubtitle}>{subtitle}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={styles.accordionBody}>
        <LikeList title={title} body={body} />
      </AccordionDetails>
    </Accordion>
  );
}
