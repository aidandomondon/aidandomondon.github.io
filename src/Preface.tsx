import React from 'react';
import Container from '@mui/material/Container';
import { CUSTOM_DARK_BLUE, CUSTOM_WHITE } from './colors';

export default function Preface(): React.ReactElement {
    const style: React.CSSProperties = {
        textAlign: 'center',
        fontSize: '2em',
        justifyContent: 'top',
        // letterSpacing: -7,
        // lineHeight: 0.75,
        opacity: 0.9,
        color: CUSTOM_DARK_BLUE,
        padding: 0
    }
    return (
        <Container style={style} maxWidth={false}>
            <p style={{textShadow: '1px 2px 2px rgba(0, 0, 0, 0.20)', marginLeft: -3, marginTop: -3, marginBottom: -1.5}}>
                Software engineer,
                <br/>
                Amateur mathematician
            </p>
        </Container>
    )
}