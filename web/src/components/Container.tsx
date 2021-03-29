import React, {useEffect, useState} from 'react';
import style from './Container.module.css';
import MovieCard from "./movie";
import Loading from "./Loading";
import {discover} from "../api/api";

export default function Container(){

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        discover()
            .then(res => {
                setMovie(res.data.results)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <div className={style.container}>
            {movie.length === 0 ? <Loading height={250} width={250}/> : ''}

            {movie.map((el, index) => <MovieCard data={el} key={index}/>)}
        </div>
    )
}