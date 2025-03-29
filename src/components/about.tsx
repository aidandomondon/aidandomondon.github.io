import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function About() {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Item>
          <Avatar
            alt='Aidan Domondon'
            src='/profile.jpg'
            sx={{ width: 108, height: 108 }}
          >
          </Avatar>
        </Item>
        <Item>
          <Typography variant='body1'>
            <b>I'm Aidan - Software engineer and aspiring mathematician. </b>
            I graduated from Northeastern University in 2025 with a combined degree of CS and math and am looking for roles in __.
          </Typography>
        </Item>
      </Stack>
    </Box>
  )
}