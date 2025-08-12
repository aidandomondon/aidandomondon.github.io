import { Stack } from "@mui/material";
import About from "./about";
import Projects from "./projects";
import Experience from "./experience";
import Education from "./education";
import TabsContainer from "./tabs";
import { Typography } from "@mui/material";

export default function Body() {
    return (
        <Stack
            spacing={10}
            direction='row'
            alignItems='center'
            sx={{ marginLeft: '2em', marginRight: '2em' }}
        >
            <About></About>
            {/* <TabsContainer></TabsContainer> */}
            <Stack direction='column' spacing={3}>
                <Typography variant='body1' align='left'>
                    <b>Aidan Domondon</b>
                    &nbsp;is a software developer and graduate researcher at Northeastern University.
                    &nbsp;He has a passion for building impactful technology.
                </Typography>
                <Typography variant='body1' align='left'>Overview</Typography>
                <Projects />
                <Experience />
                <Education />
            </Stack>
        </Stack>
    );
}