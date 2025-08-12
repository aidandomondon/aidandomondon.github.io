import { List, ListItemText } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ConstructionIcon from '@mui/icons-material/Construction';

const listStyle = { listStyleType: 'disc', pl: 4 }
const listItemStyle = { display: 'list-item' }

export default function Projects() {
  return (
    <Stack direction='column' alignItems='start'>
      <Stack direction='row' spacing={1} alignItems='center'>
        <ConstructionIcon fontSize='large' />
        <Typography variant='body1' align='left'>Recent Projects</Typography>
      </Stack>
      <List sx={listStyle}>
        <ListItemText sx={listItemStyle}>
          <Typography variant='body2' align='left'>
            <b>Come Back Sunday:</b> mental-health-aware social media app
          </Typography>
        </ListItemText>
        <ListItemText sx={listItemStyle}>
          <Typography variant='body2' align='left'>
            <b>Tarragon:</b> privacy-focused, offline chatbot that can analyze users' documents
          </Typography>
        </ListItemText>
      </List>
    </Stack>
  )
}