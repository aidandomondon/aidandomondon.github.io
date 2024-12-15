import React from 'react';
import { CUSTOM_DARK_BLUE } from './colors';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';

export default function Contact() {
    return (
        <Stack
            direction={'row'}
            spacing={10}
            justifyContent={'space-evenly'}
        >
            <ContactCard
                style={{}}
                href='https://www.linkedin.com/in/aidan-domondon'
                displayText='LinkedIn'
            />
            <ContactCard
                style={{ letterSpacing: '-0.13em' }}
                href='m&#97;i&#108;to&#58;&#100;o%&#54;D%6&#70;n&#100;%6F%6&#69;%2E&#97;&#64;nor&#37;74h&#101;&#97;st%6&#53;&#114;n%2E&#101;du'
                displayText='E&nbsp;-&nbsp;M&nbsp;a&nbsp;i&nbsp;l'
            />
            <ContactCard
                style={{}}
                href='https://github.com/aidandomondon'
                displayText='GitHub'
            />
        </Stack >
    )
}
const baseStyle: React.CSSProperties = {
    color: CUSTOM_DARK_BLUE,
    padding: '2em',
}
interface ContactCardProps {
    style: React.CSSProperties;
    href: string;
    displayText;
}
function ContactCard(props: ContactCardProps) {
    return (
        <a style={{ ...baseStyle, ...props.style, justifySelf: 'center'}} href={props.href}>
            <i>{props.displayText}</i>
        </a>
    )
}