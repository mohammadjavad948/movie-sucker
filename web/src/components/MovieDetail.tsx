import React from 'react';
import style from './MovieDetail.module.css';
import {Chip, Typography} from "@material-ui/core";
import {useSpring, a, useTrail} from "react-spring";

// @ts-ignore
export default function MovieDetail({movie}){

    return (
        <div className={style.container}>
            <FirstRow movie={movie}/>
        </div>
    )
}

/*
 * FirstRow => first row that contains image and details about movie
 * Poster => component that shows movie poster
 * TitleAndDetail => component that shows title, description, genres and languages
 */

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


    function generateLanguageChips(el: {english_name: string}, index: number){
        return <Chip variant={"outlined"} label={el.english_name} style={{marginLeft: '10px', marginTop: '10px'}} key={index}/>
    }

    return (
        <a.div style={animation}>
            <Typography variant="h5">
                {movie.title} - {movie.vote_average} / 10
            </Typography>
            <Typography variant="body1" style={{maxWidth: '500px', marginTop: '10px', filter: 'brightness(0.9)'}} component="p">
                {movie.overview}
            </Typography>
            <Typography variant="body1" style={{marginTop: '10px'}}>
                release : {new Date(movie.release_date).toDateString()}
            </Typography>
            <Genres movie={movie}/>
            <div style={{marginTop: '20px'}}>
                <Typography variant="body1">Languages</Typography>
                {movie.spoken_languages.map(generateLanguageChips)}
            </div>
        </a.div>
    )
}

const AnimatedChip = a(Chip);

// @ts-ignore
function Genres({movie}){

    const animation = useTrail(movie.genres.length, {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            duration: 200
        },
        delay: 500
    })

    function generateGenresChips(props: any, index: number){
        return (
            <AnimatedChip
             variant={"outlined"}
             style={{marginLeft: '10px', marginTop: '10px', opacity: props.opacity}}
             label={movie.genres[index].name}
             key={index}
             />
        )
    }
    
    return (
        <div>
            {animation.map(generateGenresChips)}
        </div>
    )
}