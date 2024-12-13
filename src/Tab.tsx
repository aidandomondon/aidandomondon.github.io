import React, { useState, useCallback, useEffect } from 'react';

export interface TabProps {
    tabKey: number;
    label: string;
    selected: number;
    onClick;
}

const styleObject = (backgroundColor: string, color: string): React.CSSProperties => {
    return {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: '0.5em',
        marginRight: '0.5em',
        backgroundColor: backgroundColor,
        color: color,
    }
}
export default function Tab(props: TabProps) {

    const [style, setStyle] = useState<React.CSSProperties>(
        // Specifies that the background color of the button starts black
        // and the text color of the button starts white
        styleObject('black', 'white')
    );

    const focusButtonColorScheme = useCallback(() => {
        setStyle(styleObject('white', 'black'));
    }, []);

    const blurButtonColorScheme = useCallback(() => {
        setStyle(styleObject('black', 'white'));
    }, []);

    useEffect(() => {
        if (props.selected === props.tabKey) {
            focusButtonColorScheme();
        } else {
            blurButtonColorScheme();
        }
    }, [props.selected, props.tabKey, focusButtonColorScheme, blurButtonColorScheme]);

    return (
        <div
            style={style}
            // onMouseOver={handleMouseOver}
            // onMouseLeave={handleMouseLeave}
            onClick={props.onClick}
        >
            <p style={style}>{props.label}</p>
        </div>
    )
}