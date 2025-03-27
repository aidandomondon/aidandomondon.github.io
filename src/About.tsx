import React from 'react';
import { CUSTOM_DARK_BLUE } from './colors';
import Stack from '@mui/material/Stack';
import { Card } from '@mui/material';

export default function About() {
    return (
        <Stack
            direction={'column'}
            spacing={5}
            justifyContent={'space-evenly'}
        >
            <div style={{textAlign: 'left', padding: 20, borderRadius: 25, backgroundColor: 'rgb(255, 239, 64)', boxShadow: '0 0 15px'}}>
                Dear Visitor,
                <br/><br/>
                Welcome to my personal website; I am Aidan.
                <br/><br/>
                I made this site to share a bit about myself.
                <ul>
                    <li>For a chronological history of my professional engagements, see the tab labeled “HISTORY”.</li>
                    <br/>
                    <li>To contact me, please reach out via one of the modes linked on the tab labeled “CONTACT”.</li>
                </ul>
                I also make YouTube videos about interesting topics in math. 
                Check out one I made about Bayes's Theorem below.
                <br/><br/>
                <div style={{textAlign: 'right'}}>
                Sincerely,
                <br/>
                Aidan
                </div>
            </div>
            <iframe 
                className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/-M197_U-e3w?modestbranding=1`}
                height='500'
                width='max-content'
                style={{borderRadius: 25, boxShadow: '0 0 15px'}}
            >
            </iframe>
        </Stack >
    )
}