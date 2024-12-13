import React from 'react';
import { Tabs } from '@mui/material';
import Timeline from './Timeline';
import Skills from './Skills';
import Contact from './Contact';

export default function TabView() {
    return (
        <Tabs>
            <Timeline />
            <Skills />
            <Contact />
        </Tabs>
    )
}