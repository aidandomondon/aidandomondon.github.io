import React from 'react';
import Container from '@mui/material/Container';
import { CUSTOM_DARK_BLUE } from './colors';

export default function TopBar(): React.ReactElement {
    const style: React.CSSProperties = {
        // position: 'fixed',
        top: 0,
        padding: '0.6em',
        // backgroundColor: 'white',
        opacity: 0.9,
        color: 'rgb(182, 60, 60)'//'rgb(51, 51, 178)'// CUSTOM_DARK_BLUE,
    }
    return (
        <Container style={style} maxWidth={false}>
            <h1
                style={{ fontSize: '3em', margin: -5 }}
            >
                Aidan&nbsp;Domondon
            </h1>
        </Container>
    )
}