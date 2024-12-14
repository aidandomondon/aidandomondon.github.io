// Filename - components/Footer.js

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";

const Footer = () => {
    return (
        <Box sx={{
            padding: '5% 2.5%',
            background: 'black',
            // position: absolute;
            bottom: 0,
            width: '95%',

            '@media (max-width: 1000px)': {
                // padding: '70px 30px',
            },
        }}>
            <h1
                style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                A Computer Science Portal for Geeks!
            </h1>
            <Container style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                maxWidth: '1000px',
                margin: '0 auto',
                /* background: red; */
            }}>
                <p
                    style={{
                        color: "white",
                        textAlign: "center",
                        marginTop: "10px",
                    }}
                >
                    © 2024 Aidan Domondon. All rights reserved.
                </p>
            </Container>
        </Box>
    );
};
export default Footer;