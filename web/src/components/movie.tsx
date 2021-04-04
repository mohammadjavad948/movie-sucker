import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useSpring, a, config} from "react-spring";
import style from './Movie.module.css';
import {useThemeStore} from "../stores/ThemeStore";
import {Chip, useTheme} from "@material-ui/core";
import {useHistory} from 'react-router-dom';

const AnimatedCard = a(Card);

const useStyles = makeStyles({
    root: {
        width: 185,
    },
});

// @ts-ignore
export default function MovieCard({data, genres}) {
    const classes = useStyles();
    const [hover, setHover] = useState(false);
    const theme = useTheme();
    const history = useHistory();

    const props = useSpring({
        y: hover ? -10 : 0,
        config: config.wobbly
    });

    function Mouse(){
        setHover(!hover)
    }

    function click(){
        history.push('/movie/' + data.id);
    }

    function generateChips(el: string, index: number){
        return (
            <Chip
                size={"small"}
                label={genres.find((e: any) => e.id === el).name}
                variant="outlined"
                key={index}
            />
        )
    }

    return (
        <AnimatedCard className={classes.root} style={{
            translateY: props.y.to(x => `${x}px`),
            backgroundColor: theme.palette.background.default,
            position: 'relative'
        }}
        onMouseEnter={Mouse}
        onMouseLeave={Mouse} onClick={click}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={data.title}
                    height="278"
                    image={data.poster_path ? `https://image.tmdb.org/t/p/w185${data.poster_path}` : 'https://www.urbanbrush.net/en/wp-content/uploads/edd/2018/03/web-20180320131623142828.png'}
                    title={data.title}
                />
                <Rate rate={data.vote_average}/>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h5">
                        {data.title}
                    </Typography>
                    <div className={style.genres}>
                        {data.genre_ids.map(generateChips)}
                    </div>
                </CardContent>
            </CardActionArea>
        </AnimatedCard>
    );
}

// @ts-ignore
function Rate({rate}){

    const {theme} = useThemeStore();

    const props = useSpring({
        from: {x: 0},
        to: {x: rate},
        config: { mass: 1, tension: 180, friction: 12, duration: 2000 },
        delay: 500
    })

    function colorCreator(rate: number){
        if (rate >= 8){
            return '#11d144'
        } else if (rate >= 6){
            return '#a1d111'
        } else if (rate >= 4){
            return '#e8de1c'
        }else if (rate >= 2){
            return '#f0991f'
        }else {
            return '#f7450f'
        }
    }

    return (
        <div className={style.circle} style={{
            background: theme === 'dark' ? 'black' : 'white',
            color: theme === 'light' ? 'black' : 'white'
        }}>
            <a.span>{props.x.to((x: number) => x.toFixed(1))}</a.span>
            <svg viewBox="0 0 36 36" className={style.svg}>
                <a.path
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={props.x.to(colorCreator)}
                    strokeWidth="3"
                    strokeDasharray={props.x.to((x: number) => `${x * 10}, 100`)}
                />
            </svg>
        </div>
    )
}