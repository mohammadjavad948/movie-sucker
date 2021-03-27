import React from 'react';
import style from './main.module.css';
import TopBar from "./components/TopBar";


export default function Main(){
    return (
        <div className={style.container}>
            <TopBar />
        </div>
    )
}