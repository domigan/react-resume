import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack, List, ListItem } from "@mui/material";
import { styles } from "../styles";
import UnfoldMoreDoubleIcon from '@mui/icons-material/UnfoldMoreDouble';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export default function LikeList({
    title,
    body
}: {
    title: string;
    body: string[];
}) {
    return (
        <List>
            {body.map((line, index) => (
                <ListItem key={`ListItem-${title}-${index}`}>
                    <Stack direction={"row"} spacing={3}>
                        <ThumbUpOffAltIcon />
                        <Typography sx={{ color: `#a${index}a${index}ee` }}>
                            {line}
                        </Typography>
                    </Stack>
                </ListItem>
            ))}
        </List>);
}