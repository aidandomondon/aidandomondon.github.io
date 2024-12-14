import React from 'react';
import Container from '@mui/material/Container';
import { CUSTOM_DARK_BLUE } from '../colors';

export default function TopBar(): React.ReactElement {
    const style: React.CSSProperties = {
        // position: 'fixed',
        top: 0,
        padding: '0.3em',
        // backgroundColor: 'white',
        opacity: 0.8,
        color: CUSTOM_DARK_BLUE,
    }
    return (
        <Container style={style} maxWidth={false}>
            <h1
                style={{ fontSize: '3em', margin: -5 }}
            >
                aidan domondon
            </h1>
        </Container>
    )
}