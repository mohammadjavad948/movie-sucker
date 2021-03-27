import React from 'react';
import {Typography} from "@material-ui/core";

export default function TopBar(){
    return (
       <div>
           <Typography variant={"h6"}>
               Movie Sucker
           </Typography>
           <hr/>
       </div>
    )
}