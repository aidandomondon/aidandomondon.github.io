import React from 'react';
import Stack from '@mui/material/Stack';

export default function Projects() {
    return (
        <Stack textAlign='left'>
            <h2>Around The World</h2>
            <p>
                <i>Around The World</i> was a website that allowed visitors 
                to find the point on the other side of the globe 
                directly beneath them (known as their <i>antipode</i>). 
                <br/>
                <br/>
                The goal was to encourage visitors to consider the question: <i>what is happening below me at this
                very moment?</i>
                <br/>
                <br/>
                To this end, it displayed the local weather and time,
                as well as short snippets about nearby attractions (taken from nearby Wikipedia
                entries).
                <br/>
                <br/>
                Complimenting this all was a working counter of how many people within a 20 km radius 
                of their antipode had visited the website.
                <br/>
                <br/>
                In April 2025, I had to take Around the World down due to
                operating costs (mostly AWS).
            </p>
        </Stack>
    )
}