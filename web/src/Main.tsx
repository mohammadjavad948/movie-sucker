import React from 'react';
import style from './main.module.css';
import TopBar from "./components/TopBar";
import Container from "./components/Container";
import {Switch, Route} from "react-router-dom";

export default function Main(){
    return (
            <div className={style.container}>
                <TopBar />
                <Switch>
                    <Route path="/search">
                        search
                    </Route>
                    <Route path="/">
                        <Container />
                    </Route>
                </Switch>
            </div>
    )
}