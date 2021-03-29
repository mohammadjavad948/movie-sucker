import React from 'react';
import style from './main.module.css';
import TopBar from "./components/TopBar";
import Container from "./components/Container";


export default function Main(){
    return (
        <div className={style.container}>
            <TopBar />
            <Container />
        </div>
    )
}