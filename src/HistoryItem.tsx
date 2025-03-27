import { Paper, Stack } from '@mui/material';
import { CUSTOM_WHITE, CUSTOM_DARK_BLUE } from './colors';
import React, { ReactElement } from 'react';
import { JSXSource } from 'react/jsx-dev-runtime';

export interface HistoryItemProps {
    time: string
    title: string
    description: ReactElement
}

export default function HistoryItem(props: HistoryItemProps) {
    return (
        <div>
            <Paper elevation={3}>
                <Stack direction='column' justifyContent='space-between' margin={0} spacing={0}>
                    {/* Time and Title */}
                    <Stack direction='row' alignSelf='stretch' spacing={0}>
                        <h4 style={{ 
                            color: CUSTOM_WHITE, 
                            backgroundColor: CUSTOM_DARK_BLUE, 
                            padding: 15, 
                            marginTop: 0, marginBottom: 0,
                            display: 'flex'
                        }}>
                            {props.time}
                        </h4>
                        <h4 style={{ 
                            color: CUSTOM_DARK_BLUE, 
                            backgroundColor: 'rgba(63, 67, 64, 0.25)', 
                            padding:15, 
                            marginTop: 0, marginBottom: 0,
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            {props.title}
                        </h4>
                    </Stack>

                    {/* Description or blurb */}
                    {<div style={{padding: '5%'}}>{props.description}</div>}
                </Stack>
            </Paper>
        </div >
    )
}