import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
      <Stack direction="row" spacing={3}>
        <Item>
          <Stack direction="column" alignContent='center' spacing={2}>
            <Avatar
              alt='Aidan Domondon'
              src='/profile.jpg'
              sx={{ width: 208, height: 208 }}
            >
            </Avatar>
            <Stack direction='column'>
              <Typography variant='body1' align='center'>
                  <b>Aidan Domondon</b>
              </Typography>
              <Stack direction='row' justifyContent='center'>
                <IconButton color="inherit" href='https://www.linkedin.com/in/aidan-domondon'>
                  <LinkedInIcon />
                </IconButton>
                <IconButton color="inherit">
                  <EmailIcon href='m&#97;i&#108;to&#58;&#100;o%&#54;D%6&#70;n&#100;%6F%6&#69;%2E&#97;&#64;nor&#37;74h&#101;&#97;st%6&#53;&#114;n%2E&#101;du' />
                </IconButton>
                <IconButton color="inherit" href='https://github.com/aidandomondon'>
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Item>
      </Stack>
    </Box>
  )
}