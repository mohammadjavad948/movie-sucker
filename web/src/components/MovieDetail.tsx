import React from 'react';
import style from './MovieDetail.module.css';
import {Typography} from "@material-ui/core";

// @ts-ignore
export default function MovieDetail({movie}){

    return (
        <div className={style.container}>
            <FirstRow movie={movie}/>
        </div>
    )
}

// @ts-ignore
function FirstRow({movie}){

    return (
        <div className={style.firstRow}>
            <Poster url={movie.poster_path}/>
            <TitleAndDetail movie={movie}/>
        </div>
    )
}

// @ts-ignore
function Poster({url}){

    return (
        <img
            src={
                url ? `https://image.tmdb.org/t/p/w400${url}` :
                    'https://www.urbanbrush.net/en/wp-content/uploads/edd/2018/03/web-20180320131623142828.png'
            }
            alt={url}
            height="300"
            width="200"
            className={style.image}
        />
    )
}

// @ts-ignore
function TitleAndDetail({movie}){

    return (
        <div>
            <Typography variant="h5">
                {movie.title}
            </Typography>
            <Typography variant="body1" style={{maxWidth: '500px'}} component="p">
                {movie.overview}
            </Typography>
        </div>
    )
}