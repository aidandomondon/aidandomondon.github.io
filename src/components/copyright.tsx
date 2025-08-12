import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';

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

export default function Copyright() {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, width: '100%' }}>
      <Stack position="fixed" direction='row' sx={{ bottom: 0, width: '100vw' }}>
        <Item><Typography variant='caption'>© 2025 Aidan Domondon</Typography></Item>
        <Item><Box sx={{ flexGrow: 1 }} /></Item>
      </Stack>
    </AppBar>
  )
}