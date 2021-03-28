import React from 'react';
import style from './Container.module.css';
import MovieCard from "./movie";

export default function Container(){

    return (
        <div className={style.container}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    )
}