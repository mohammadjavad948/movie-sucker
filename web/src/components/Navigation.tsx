import React from "react";
import {Fab} from "@material-ui/core";
import style from './Navigation.module.css';

export default function Navigation(){
    return (
        <div className={style.navigation}>
            <Fab size={"medium"}>S</Fab>
        </div>
    )
}