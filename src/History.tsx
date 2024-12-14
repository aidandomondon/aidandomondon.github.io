import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineDot from '@mui/lab/TimelineDot';
import { CUSTOM_DARK_BLUE, CUSTOM_WHITE } from './colors'

export default function History() {
    return (
        <div>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent color={CUSTOM_DARK_BLUE} fontFamily={'Times New Roman'}>
                        Winter 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Last Semester @ Northeastern University</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color={CUSTOM_DARK_BLUE} fontFamily={'Times New Roman'}>
                        Fall 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Data Analysis Consultant @ UCI MUST Lab</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color={CUSTOM_DARK_BLUE}>
                        Winter 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Data Science Co-op @ Northeastern University</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color={CUSTOM_DARK_BLUE}>
                        Spring 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Software Engineer Co-op @ New Age Micro, LLC.</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color={CUSTOM_DARK_BLUE}>
                        Fall 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>First Semester @ Northeastern University</TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}