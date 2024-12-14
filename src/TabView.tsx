import React, { useState } from 'react';
import { Container } from '@mui/material';
import Tab from './Tab';
import { Stack, Box } from '@mui/material';
import { CUSTOM_DARK_BLUE, CUSTOM_WHITE } from './colors';

export default function TabView() {
    const tabButtonBarStyle: React.CSSProperties = {
        backgroundColor: CUSTOM_DARK_BLUE,
        opacity: 0.9,
        color: 'rgb(232, 227, 220)',
        fontSize: '1em',
    }
    const tabContentStyle: React.CSSProperties = {
        backgroundColor: CUSTOM_WHITE,
        opacity: 0.9,
        color: CUSTOM_DARK_BLUE,
        fontSize: '1em',
    }
    const [selected, setSelected] = useState<number>(-1);
    return (
        <Stack spacing={0}>
            <Container sx={tabButtonBarStyle} maxWidth={false}>
                <Stack style={{ justifyContent: 'left' }} direction={'row'} padding={0}>
                    <Tab tabKey={0} label={'HISTORY'} selected={selected} setSelected={setSelected} />
                    <Tab tabKey={1} label={'SKILLS'} selected={selected} setSelected={setSelected} />
                    <Tab tabKey={2} label={'CONTACT'} selected={selected} setSelected={setSelected} />
                </Stack>
            </Container>
            <Box sx={tabContentStyle}>
                {
                    {
                        0: <p>a</p>,
                        1: <p>b</p>,
                        2: <p>c</p>
                    }[selected]
                }
            </Box>
        </Stack>
    )
}