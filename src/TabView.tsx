import React, { useState } from 'react';
import { Container } from '@mui/material';
import Tab from './Tab';
import { Stack, Box } from '@mui/material';
import TabContent from './TabContent';

export default function TabView() {
    const tabButtonBarStyle: React.CSSProperties = {
        backgroundColor: 'black',
        opacity: 0.5,
        color: 'white',
        fontSize: '1em',
    }
    const tabContentStyle: React.CSSProperties = {
        backgroundColor: 'white',
        opacity: 0.5,
        color: 'black',
        fontSize: '1em',
    }
    const [selected, setSelected] = useState<number>(-1);
    return (
        <Stack spacing={0}>
            <Container sx={tabButtonBarStyle} maxWidth={false}>
                <Stack style={{ justifyContent: 'left' }} direction={'row'} padding={0}>
                    <Tab tabKey={0} label={'Timeline'} selected={selected} onClick={() => setSelected(0)} />
                    <Tab tabKey={1} label={'Skills'} selected={selected} onClick={() => setSelected(1)} />
                    <Tab tabKey={2} label={'Contact'} selected={selected} onClick={() => setSelected(2)} />
                </Stack>
            </Container>
            <Box sx={tabContentStyle}>
                <TabContent tabKey={0} />
                <TabContent tabKey={1} />
                <TabContent tabKey={2} />
            </Box>
        </Stack>
    )
}