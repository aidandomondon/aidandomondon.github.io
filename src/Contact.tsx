import React, { useEffect, useState } from 'react';
import { CUSTOM_DARK_BLUE, CUSTOM_WHITE } from './colors';
import Stack from '@mui/material/Stack';

export default function Contact() {
    return (
        <Stack
            direction={'row'}
            spacing={5}
            justifyContent='space-evenly'
            alignItems='center'
        >
            <ContactCard
                style={{ backgroundColor: 'rgb(0, 114, 177)' }}
                href='https://www.linkedin.com/in/aidan-domondon'
                displayText='LinkedIn'
            />
            <ContactCard
                style={{ backgroundColor: 'rgb(242, 80, 34)', letterSpacing: '-0.13em' }}
                href='m&#97;i&#108;to&#58;&#100;o%&#54;D%6&#70;n&#100;%6F%6&#69;%2E&#97;&#64;nor&#37;74h&#101;&#97;st%6&#53;&#114;n%2E&#101;du'
                displayText='E&nbsp;-&nbsp;M&nbsp;a&nbsp;i&nbsp;l&nbsp;'
            />
            <ContactCard
                style={{ backgroundColor: 'rgb(142, 71, 254' }}
                href='https://github.com/aidandomondon'
                displayText='GitHub'
            />
        </Stack >
    )
}
const baseStyle: React.CSSProperties = {
    color: CUSTOM_WHITE,
    backgroundColor: CUSTOM_DARK_BLUE,
    padding: '2em',
    alignContent: 'center',
    width: '15%',
    aspectRatio: 1,
    borderRadius: '50%',
}
interface ContactCardProps {
    style: React.CSSProperties;
    href: string;
    displayText: string;
}
function ContactCard(props: ContactCardProps) {
    const [hovered, setHovered] = useState<boolean>(false)

    function handleMouseEnter() {
        setHovered(true);
    }

    function handleMouseLeave() {
        setHovered(false);
    }

    return (
        <a
            style={{
                ...baseStyle,
                ...props.style,
                justifySelf: 'center',
                textDecoration: 'none',
                boxShadow: hovered ? '0px 0px 20px black' : '',
                transition: 'box-shadow 0.15s ease-in-out'
            }}
            href={props.href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {props.displayText}
        </a>
    )
}