import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material';

export default function Header() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ top: 0, backgroundImage: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 90%)` }}>
        <Toolbar>
          <Typography variant="h5">
            Aidan Domondon
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={e => window.open('/AidanMDomondonResume.pdf', '_blank')}>
              <h5 style={{ marginTop: 0, marginBottom: 0 }}>CV</h5>
          </IconButton>
          <IconButton color="inherit" href='https://www.linkedin.com/in/aidan-domondon'>
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href='https://github.com/aidandomondon'>
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
