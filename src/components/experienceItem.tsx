import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { ReactElement } from 'react';

type ExperienceItemProps = {
  title: string
  time: string
  content: ReactElement
}

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme).palette.text.primary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const HeadingItem = styled(Box)(({ theme }) => ({
  backgroundColor: (theme).palette.primary.main,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  ...theme.applyStyles('dark', {
    backgroundColor: '#fff',
  }),
}));

export default function ExperienceItem(props: ExperienceItemProps) {
  return <Box sx={{ width: '100%' }}>
    <Stack>
      <Item><Stack spacing={2} direction='row'>
        <HeadingItem><b>{props.time}</b></HeadingItem>
        <HeadingItem><b>{props.title}</b></HeadingItem>
      </Stack></Item>
      <Item>
        {props.content}
      </Item>
    </Stack>
</Box>
}