import React from 'react';
import Container from '@mui/material/Container';

export default function Preface(): React.ReactElement {
    const style: React.CSSProperties = {
        textAlign: 'left',
        fontSize: '0.75em',
        padding: '1em',
        color: 'darkorchid',
        borderBottomColor: 'grey'
    }
    return (
        <Container style={style} maxWidth={false}>
            <h2>Preface</h2>
            <p style={{ color: 'grey' }}>
                I’m Aidan, a fourth year student at Northeastern University studying Computer Science and Mathematics.
                <br />
                <br />
                I tried to design this website to be a convenient way for you to explore what I have to offer and to see if it aligns with what you’re looking for.
                <br />
                <br />
                If you have any ideas for how this experience could be improved, I’d be happy to hear them.
            </p>
        </Container>
    )
}