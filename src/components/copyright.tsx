import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AppBar } from '@mui/material';

export default function Copyright() {
  return (
    <Stack direction='row' sx={{ width: '100%', justifyContent: 'start', alignSelf: 'end' }}>
      <Typography variant='caption'>© 2025 Aidan Domondon</Typography>
    </Stack>
  )
}