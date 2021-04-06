import React from 'react';
import style from './MovieDetail.module.css';
import {Chip, Typography} from "@material-ui/core";
import {useSpring, a} from "react-spring";

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

    const animation = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })

    return (
        <a.img
            src={
                url ? `https://image.tmdb.org/t/p/w400${url}` :
                    'https://www.urbanbrush.net/en/wp-content/uploads/edd/2018/03/web-20180320131623142828.png'
            }
            alt={url}
            height="300"
            width="200"
            className={style.image}
            style={animation}
        />
    )
}

// @ts-ignore
function TitleAndDetail({movie}){

    const animation = useSpring({
        from: {
            translateY: '10px',
            opacity: 0
        },
        to: {
            translateY: '0px',
            opacity: 1
        }
    })

    function generateChips(el: {name: string}, index: number){
        return <Chip variant={"outlined"} label={el.name} style={{marginLeft: '10px', marginTop: '10px'}} key={index}/>
    }

    return (
        <a.div style={animation}>
            <Typography variant="h5">
                {movie.title}
            </Typography>
            <Typography variant="body1" style={{maxWidth: '500px', marginTop: '10px', filter: 'brightness(0.9)'}} component="p">
                {movie.overview}
            </Typography>
            <div>
                {movie.genres.map(generateChips)}
            </div>
        </a.div>
    )
}