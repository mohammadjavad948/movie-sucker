import React from "react";
import {AppBar, Button, IconButton, InputBase, Toolbar, Typography} from "@material-ui/core";

export default function NavBar(){
    return (
        <AppBar position="static" color={"primary"}>
            <Toolbar>
                <Typography variant="h6">
                    Movie Sucker
                </Typography>
            </Toolbar>
        </AppBar>
    )
}