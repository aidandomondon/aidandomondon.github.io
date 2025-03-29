import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import * as React from 'react';
import ExperienceItem from './experienceItem';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

export default function WorkExperience() {
  return<Timeline
  sx={{
    [`& .${timelineItemClasses.root}:before`]: {
      flex: 0,
      padding: 0,
    },
  }}
  >
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color='secondary'/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper>
          <ExperienceItem
            time="Jan – May 2025"
            title="Research Assistant @ Northeastern University"
            content={<p>Building software to automate mutation testing in JavaScript.</p>}
          ></ExperienceItem>
        </Paper>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color='secondary'/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper>
          <ExperienceItem
            time="Jan – Dec 2024" 
            title="Data Scientist @ Northeastern University x UC Irvine"
            content={
                <Stack direction='column'>
                    <p>Helped jumpstart a university initiative to collect and analyze data on student internship experiences.</p>
                    <u>Works</u>
                    <p>
                        Arum, R., Mcdossi, O., Couts, F., Valencia Lopez, E. E., and Domondon, A. 2024.
                        “Leveraging Institutional Data to Improve College-to-Career Transitions” Northeastern University (June 5).
                    </p>
                </Stack>}
          ></ExperienceItem>
        </Paper>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color='secondary'/>
      </TimelineSeparator>
      <TimelineContent>
        <Paper>
          <ExperienceItem
            time="Spring 2023" 
            title="Software Engineer @ New Age Micro, LLC."
            content={<p>Wrote 40+ end-to-end tests for a web application that manages clients' cryptographic keys.</p>}
          ></ExperienceItem>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
}