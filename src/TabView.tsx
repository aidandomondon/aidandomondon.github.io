import React, { useState } from 'react';
import { Container } from '@mui/material';
import Tab from './Tab';
import { Stack, Box } from '@mui/material';
import { CUSTOM_DARK_BLUE, CUSTOM_WHITE } from './colors';
import History from './History';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

export default function TabView() {
    const tabButtonBarStyle: React.CSSProperties = {
        backgroundColor: CUSTOM_DARK_BLUE,
        opacity: 0.9,
        color: CUSTOM_WHITE,
        fontSize: '1em',
    }
    const tabContentStyle: React.CSSProperties = {
        opacity: 0.9,
        color: CUSTOM_DARK_BLUE,
        fontSize: '1em',
        display: 'grid',
        position: 'relative'
    }
    const [selected, setSelected] = useState<number>(-1);
    return (
        <Stack spacing={0}>
            <Container sx={tabButtonBarStyle} maxWidth={false} disableGutters={true}>
                <Stack style={{ justifyContent: 'left' }} direction={'row'} padding={0}>
                    <Tab tabKey={0} label={'HISTORY'} selected={selected} setSelected={setSelected} />
                    <Tab tabKey={1} label={'PROJECTS'} selected={selected} setSelected={setSelected} />
                    <Tab tabKey={2} label={'ABOUT'} selected={selected} setSelected={setSelected} />
                    <Tab tabKey={3} label={'CONTACT'} selected={selected} setSelected={setSelected} />
                </Stack>
            </Container>
            <Box sx={tabContentStyle}>
                <TabContent tabKey={0} selected={selected}>
                    <History />
                </TabContent>
                <TabContent tabKey={1} selected={selected}>
                    <Projects />
                </TabContent>
                <TabContent tabKey={2} selected={selected}>
                    <About />
                </TabContent>
                <TabContent tabKey={3} selected={selected}>
                    <Contact />
                </TabContent>
            </Box>
        </Stack>
    )
}

interface TabContentProps {
    tabKey: number;
    children: React.ReactNode;
    selected: number;
}
function TabContent(props: TabContentProps) {
    return (
        <div
            style={{
                visibility: props.selected === props.tabKey ? 'visible' : 'hidden',
                backgroundColor: CUSTOM_WHITE,
                gridRow: 1, gridColumn: 1,
                height: 'fit-content',
                paddingLeft: '10%',
                paddingRight: '10%',
                paddingTop: '5%',
                paddingBottom: '5%'
            }}
        >
            {props.children}
        </div>
    )
}