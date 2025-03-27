import React from 'react';
import { CUSTOM_DARK_BLUE } from './colors'
import { Stack } from '@mui/material';
import HistoryItem from './HistoryItem';

const textStyle: React.CSSProperties = {
    color: CUSTOM_DARK_BLUE,
    fontFamily: 'Times New Roman'
};
export default function History() {
    return (
        <Stack direction='column' alignItems='center' spacing={10}>
            <HistoryItem 
                time="Jan – May 2025" 
                title="Research Assistant @ Northeastern University"
                description={<p>Building software to automate mutation testing in JavaScript.</p>}
            />

            <HistoryItem 
                time="Jan – Dec 2024" 
                title="Data Scientist @ Northeastern University x UC Irvine"
                description={
                    <Stack direction='column'>
                        <p>Helped jumpstart a university initiative to collect and analyze data on student internship experiences.</p>
                        <u>Works</u>
                        <p>
                            Arum, R., Mcdossi, O., Couts, F., Valencia Lopez, E. E., and Domondon, A. 2024.
                            “Leveraging Institutional Data to Improve College-to-Career Transitions” Northeastern University (June 5).
                        </p>
                    </Stack>
                }
            />
            
            <HistoryItem 
                time="Spring 2023" 
                title="Software Engineer @ New Age Micro, LLC."
                description={<p>Wrote 40+ end-to-end tests for a web application that manages clients' cryptographic keys.</p>}
            />

            
        </Stack>
    );
}