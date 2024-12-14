// Filename - Header.js

import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import Timeline from "@mui/icons-material/Timeline";
import Extension from "@mui/icons-material/Extension";
import AssignmentInd from "@mui/icons-material/AssignmentInd";

export default function Header(props: { showName: boolean }) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem>
                    <h1>Menu</h1>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Timeline></Timeline>
                        </ListItemIcon>
                        <ListItemText primary={"Timeline"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Extension></Extension>
                        </ListItemIcon>
                        <ListItemText primary={"Skills"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AssignmentInd></AssignmentInd>
                        </ListItemIcon>
                        <ListItemText primary={"Resume"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="static" color="transparent">
            <Toolbar>
                {/*Inside the IconButton, we 
                    can render various icons*/}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>

                {props.showName ? <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Aidan Domondon
                </Typography> : null}
            </Toolbar>
        </AppBar>
    );
}
