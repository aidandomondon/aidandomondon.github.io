import React from 'react';
import Container from '@mui/material/Container';

export default function TopBar(): React.ReactElement {
    const style: React.CSSProperties = {
        position: 'sticky',
        top: 0,
        padding: '0.3em',
        // backgroundColor: 'white',
        opacity: 0.5,
        color: 'black',
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