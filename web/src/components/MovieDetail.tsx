import React from 'react';
import style from './MovieDetail.module.css';

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
        </div>
    )
}

// @ts-ignore
function Poster({url}){

    return (
        <img
            src={
                url ? `https://image.tmdb.org/t/p/w185${url}` :
                    'https://www.urbanbrush.net/en/wp-content/uploads/edd/2018/03/web-20180320131623142828.png'
            }
            alt={url}
            height="278"
            width="185"
            className={style.image}
        />
    )
}