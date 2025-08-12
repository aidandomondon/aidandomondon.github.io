import { List, ListItemText } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import SchoolIcon from '@mui/icons-material/School';

export default function Education() {
    return (<Stack direction='column' alignItems='start' alignContent='center'>
        <Stack direction='row' spacing={1} alignItems='center'>
            <SchoolIcon fontSize='large' />
        <Typography variant='body1' align='left'>Education</Typography>
        </Stack>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
            <ListItemText sx={{ display: 'list-item' }}>
                <Typography variant='body2' align='left'>
                    (Present) <b>M.S. Computer Science</b> • Northeastern University
                </Typography>
            </ListItemText>
            <ListItemText sx={{ display: 'list-item' }}>
                <Typography variant='body2' align='left'>
                    <b>B.S. Computer Science & Mathematics</b> • Northeastern University
                </Typography>
            </ListItemText>
        </List>
    </Stack>)
}