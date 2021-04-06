import React from 'react';
import style from './main.module.css';
import TopBar from "./components/TopBar";
import Container from "./components/Container";
import {Switch, Route} from "react-router-dom";
import Search from "./Search";
import Detail from './Detail';
import {Typography} from "@material-ui/core";

export default function Main(){
    return (
            <div className={style.container}>
                <TopBar />
                <Switch>
                    <Route path="/movie/:id">
                        <Detail />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/">
                        <Container />
                    </Route>
                </Switch>
                <div style={{marginTop: '80px'}}>
                    <Typography variant={"caption"}>
                        made with love by javad & awref
                    </Typography>
                </div>
            </div>
    )
}