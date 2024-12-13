import React from 'react';
import { Container } from '@mui/material';
import Timeline from './Timeline';
import Skills from './Skills';
import Contact from './Contact';
import { Stack } from '@mui/material';

export default function TabView() {
    const style: React.CSSProperties = {
        backgroundColor: 'black',
        opacity: 0.5,
        color: 'white',
        fontSize: '1em',
    }
    return (
        <Container sx={style} maxWidth={false}>
            <Stack style={{justifyContent: 'left'}} direction={'row'} padding={0}>
                <Timeline />
                <Skills />
                <Contact />
            </Stack>
        </Container>
    )
}