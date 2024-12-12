import React from 'react';
import Container from '@mui/material/Container';

export default function TopBar(): React.ReactElement {
    const style: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        padding: '1em',
        color: 'darkorchid',
        borderBottom: 'solid',
        borderBottomColor: 'grey'
    }
    return (
        <Container style={style} maxWidth={false}><h1>Aidan Domondon</h1></Container>
    )
}