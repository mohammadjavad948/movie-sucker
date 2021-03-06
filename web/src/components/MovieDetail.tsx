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
function AnimatedText({ children, ...props }) {
    const Animation = (i: number) =>
        useSpring({ opacity: 1, from: { opacity: 0 }, delay: i * 5 });

    return children.split("").map((item: string, index: number) => (
        <a.span key={index} style={Animation(index)} {...props}>
            {item}
        </a.span>
    ));
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

    return (
        <a.div style={animation}>
            <Typography variant="h5">
                {movie.title} - {movie.vote_average} / 10
            </Typography>
            <Typography variant="body1" style={{maxWidth: '500px', marginTop: '10px', filter: 'brightness(0.9)'}} component="p">
                <AnimatedText>
                    {movie.overview}
                </AnimatedText>
            </Typography>
            <Typography variant="body1" style={{marginTop: '10px'}}>
                release : {new Date(movie.release_date).toDateString()}
            </Typography>
            <Genres movie={movie}/>
           <Languages movie={movie}/>
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
             className={style.genresChip}
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

// @ts-ignore
function Languages({movie}){

    const animation = useTrail(movie.spoken_languages.length, {
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
    });

    function generateLanguageChips(props: any, index: number){
        return (
            <AnimatedChip
                variant={"outlined"}
                style={{marginLeft: '10px', marginTop: '10px', opacity: props.opacity}}
                label={movie.spoken_languages[index].english_name}
                key={index}
            />
        )
    }

    return (
        <div style={{marginTop: '20px'}}>
            <Typography variant="body1">Languages</Typography>
            {animation.map(generateLanguageChips)}
        </div>
    )
}