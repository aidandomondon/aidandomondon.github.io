import { List, ListItemText } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export default function Experience() {
    return (<Stack direction='column' alignItems='start'>
        <Stack direction='row' spacing={1} alignItems='center'>
            <BusinessCenterIcon fontSize='large' />
            <Typography variant='body1' align='left'>Experience</Typography>
        </Stack>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
            <ListItemText sx={{ display: 'list-item' }}>
                <Typography variant='body2' align='left'>
                    <b>Jan 2025 – Present</b> • <i>Research Assistant</i> • Northeastern University
                </Typography>
            </ListItemText>
            <ListItemText sx={{ display: 'list-item' }}>
                <Typography variant='body2' align='left'>
                    <b>Jan 2024 – Jan 2025</b> • <i>Data Science Co-op</i> • UC Irvine x Northeastern University
                </Typography>
            </ListItemText>
            <ListItemText sx={{ display: 'list-item' }}>
                <Typography variant='body2' align='left'>
                    <b>Jan 2023 – May 2023</b> • <i>Software Engineer (Co-op)</i> • New Age Micro, LLC
                </Typography>
            </ListItemText>
        </List>
    </Stack>)
}