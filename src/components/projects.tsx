import Card from '@mui/material/Card';
import { CardActions, CardContent } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ConstructionIcon from '@mui/icons-material/Construction';
import { IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  cardActions: ReactNode;
  sx?: object;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <Card
      variant='outlined'
      sx={{
        borderRadius: '15px',
        borderStyle: 'solid',
        backgroundColor: 'rgba(0,0,0,0.25)',
        ...props.sx
      }}
    >
      <CardContent>
        <Typography variant='body2' align='left'>
          <b>{props.title}</b>
        </Typography>
        <Typography variant='body2' align='left'>
          {props.description}
        </Typography>
      </CardContent>
      {props.cardActions}
    </Card>
  )
}

export default function Projects() {
  return (
    <Stack direction='column' alignItems='start' spacing={1}>
      <Stack direction='row' spacing={1} alignItems='center'>
        <ConstructionIcon fontSize='large' />
        <Typography variant='body1' align='left'>Recent Projects</Typography>
      </Stack>
      <Stack direction='row' spacing={1}>
        <ProjectCard 
          title="Come Back Sunday"
          description="Mental-health-conscious social media app"
          cardActions={(
            <CardActions>
              <Tooltip title="Launch Site">
                <IconButton color="inherit" href='https:comebacksunday.pythonanywhere.com'>
                  <LaunchIcon/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Visit GitHub">
                <IconButton color="inherit" href='https://github.com/aidandomondon/comebacksunday'>
                  <GitHubIcon/>
                </IconButton>
              </Tooltip>
            </CardActions>
          )}
        />
        <ProjectCard 
          title="Tarragon" 
          description="Privacy-focused, offline chatbot that reasons over users' documents"
          cardActions={(
            <CardActions>
              <Tooltip title="Visit GitHub">
                <IconButton color="inherit" href='https://github.com/aidandomondon/tarragon'>
                  <GitHubIcon/>
                </IconButton>
              </Tooltip>
            </CardActions>
          )}
        />
      </Stack>
    </Stack>
  )
}