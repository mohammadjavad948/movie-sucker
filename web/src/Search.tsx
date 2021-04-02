import React from 'react';
import {Button, TextField} from "@material-ui/core";

export default function Search(){
    return (
        <div>
            <SearchBox />
        </div>
    )
}

function SearchBox(){

    return (
        <div style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <TextField id="outlined-basic" label="Search" variant="outlined" />
            <Button variant={"contained"} color={"secondary"}>Go</Button>
        </div>
    )
}