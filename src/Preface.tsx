import React from 'react';
import Container from '@mui/material/Container';

export default function Preface(): React.ReactElement {
    const style: React.CSSProperties = {
        textAlign: 'left',
        fontSize: '2.5em',
        backgroundColor: 'black',
        justifyContent: 'top',
        letterSpacing: -8,
        lineHeight: 0.75,
        opacity: 0.5,
        color: 'white',
        padding: 0
    }
    return (
        <Container style={style} maxWidth={false}>
            <h2 style={{marginLeft: -3, marginTop: -3, marginBottom: -1.5}}>
                Senior
                <br/>
                from NORTHEASTERN university
                <br/>
                in Compsci & Math
            </h2>
        </Container>
    )
}