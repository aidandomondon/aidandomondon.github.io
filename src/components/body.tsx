import { Stack, useTheme } from "@mui/material";
import Projects from "./projects";
import Experience from "./experience";
import Education from "./education";
import { Typography } from "@mui/material";

export default function Body() {
    const theme = useTheme();
    return (
        <Stack direction='column' spacing={3} marginRight='25%'>
            <Typography variant='body1' align='left'>
                <Typography display='inline' sx={{
                    background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 90%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>Aidan Domondon</Typography> is a software developer and graduate researcher at Northeastern University. He has a passion for building impactful technology.
            </Typography>
            <Projects />
            <Experience />
            <Education />
        </Stack>
    );
}