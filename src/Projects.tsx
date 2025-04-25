import React from 'react';
import Stack from '@mui/material/Stack';

export default function Projects() {
    return (
        <Stack
            textAlign='left'
        >
            <h2>Tarragon</h2>
            <p>
                Tarragon is an <i>offline</i>, desktop application to which users can upload sensitive, private documents,
                and communicate with a chatbot that can answer questions, citing
                specific facts taken from the documents.
            </p>
            <br />
            <img style={{ 'filter': 'drop-shadow(0 0 0.75rem black)', 'maxWidth': '100%', 'maxHeight': '100%' }} src='TarragonUpload.png'></img>
            <br />
            <br />
            <img style={{ 'filter': 'drop-shadow(0 0 0.75rem black)', 'maxWidth': '100%', 'maxHeight': '100%' }} src='TarragonFirstChat.png'></img>
            <br />
            <p>
                Users have full ownership over their data, and can completely wipe the application
                and chatbot's memory, empowering them with complete control over their data.
            </p>
            <br />
            <img style={{ 'filter': 'drop-shadow(0 0 0.75rem black)', 'maxWidth': '100%', 'maxHeight': '100%' }} src='TarragonWipe.png'></img>
            <br />

            <h2>Around The World</h2>
            <p>
                <i>Around The World</i> was a website that allowed visitors
                to find the point on the other side of the globe
                directly beneath them (known as their <i>antipode</i>).
            </p>
            <br />
            <img style={{ 'filter': 'drop-shadow(0 0 0.75rem black)', 'maxWidth': '100%', 'maxHeight': '100%' }} src='AroundTheWorldHomepage.png'></img>
            <br />
            <p>
                The goal was to encourage visitors to consider the question: <i>what is happening below me at this
                    very moment?</i>
            </p>
            <p>
                To this end, it displayed the local weather and time,
                as well as short snippets about nearby attractions (taken from nearby Wikipedia
                entries).
            </p>
            <br />
            <img style={{ 'filter': 'drop-shadow(0 0 0.75rem black)', 'maxWidth': '100%', 'maxHeight': '100%' }} src='AroundTheWorldDetails.png'></img>
            <br />
            <p>
                Complimenting this all was a working counter of how many people within a 20 km radius
                of their antipode had visited the website.
            </p>
            <br />
            <img style={{ 'filter': 'drop-shadow(0 0 0.75rem black)', 'maxWidth': '100%', 'maxHeight': '100%' }} src='AroundTheWorldCheckIns.png'></img>
            <br />
            <p>
                In April 2025, I had to take Around the World down due to
                operating costs. The website was served to the public by hosting it on an AWS EC2 instance.
                <br />
                <br />
                The check-in counter was made possible with AWS Lambdas...
            </p>
            <br />
            <img style={{ 'filter': 'drop-shadow(0 0 0.75rem black)', 'maxWidth': '100%', 'maxHeight': '100%' }} src='AroundTheWorldLambdas.png'></img>
            <br />
            <p>
                ... and an AWS S3 bucket.
            </p>
            <br />
            <img style={{ 'filter': 'drop-shadow(0 0 0.75rem black)', 'maxWidth': '100%', 'maxHeight': '100%' }} src='AroundTheWorldS3.png'></img>
            <br />
        </Stack>
    )
}