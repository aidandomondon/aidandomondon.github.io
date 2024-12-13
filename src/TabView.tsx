import React, { useState } from 'react';
import { Container } from '@mui/material';
import Tab from './Tab';
import { Stack } from '@mui/material';

export default function TabView() {
    const style: React.CSSProperties = {
        backgroundColor: 'black',
        opacity: 0.5,
        color: 'white',
        fontSize: '1em',
    }
    const [selected, setSelected] = useState<number>(-1);
    return (
        <Container sx={style} maxWidth={false}>
            <Stack style={{ justifyContent: 'left' }} direction={'row'} padding={0}>
                <Tab tabKey={0} label={'Timeline'} selected={selected} onClick={() => setSelected(0)}/>
                <Tab tabKey={1} label={'Skills'} selected={selected} onClick={() => setSelected(1)}/>
                <Tab tabKey={2} label={'Contact'} selected={selected} onClick={() => setSelected(2)}/>
            </Stack>
        </Container>
    )
}