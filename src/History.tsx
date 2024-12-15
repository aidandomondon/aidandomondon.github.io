import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineDot from '@mui/lab/TimelineDot';
import { CUSTOM_DARK_BLUE } from './colors'

const textStyle: React.CSSProperties = {
    color: CUSTOM_DARK_BLUE,
    fontFamily: 'Times New Roman'
};
export default function History() {
    return (
        <div>
            <Timeline sx={{ justifyContent: 'left' }}>
                <TimelineItem>
                    <TimelineOppositeContent style={textStyle}>
                        Winter 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={textStyle}>Last Semester @ Northeastern University</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent style={textStyle}>
                        Fall 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={textStyle}>Data Analysis Consultant @ UCI MUST Lab</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent style={textStyle}>
                        Winter 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={textStyle}>Data Science Co-op @ Northeastern University</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent style={textStyle}>
                        Spring 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={textStyle}>Software Engineer Co-op @ New Age Micro, LLC.</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent style={textStyle}>
                        Fall 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={textStyle}>First Semester @ Northeastern University</TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}