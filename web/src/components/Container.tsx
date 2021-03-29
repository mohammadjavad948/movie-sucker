import React, {useEffect, useState} from 'react';
import style from './Container.module.css';
import MovieCard from "./movie";
import axios from 'axios';
import {API_KEY, ENDPOINT} from "../env";
import Lottie from 'react-lottie';
import animationData from '../lotties/loading.json';

export default function Container(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`${ENDPOINT}/discover/movie?api_key=${API_KEY}`)
            .then(res => {
                setMovie(res.data.results)
            })
    }, [])

    return (
        <div className={style.container}>
            {movie.length === 0 ?
                <Lottie
                options={defaultOptions}
                height={250}
                width={250}/> : ''
            }
            {movie.map((el, index) => <MovieCard data={el} key={index}/>)}
        </div>
    )
}