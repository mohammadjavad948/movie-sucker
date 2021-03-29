import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useSpring, a, config} from "react-spring";
import style from './Movie.module.css';

const AnimatedCard = a(Card);

const useStyles = makeStyles({
    root: {
        width: 185,
    },
});

// @ts-ignore
export default function MovieCard({data}) {
    const classes = useStyles();
    const [hover, setHover] = useState(false);

    const props = useSpring({
        width: hover ? 210 : 185,
        config: config.wobbly
    });

    function Mouse(){
        setHover(!hover)
    }

    return (
        <AnimatedCard className={classes.root} style={{
            width: props.width.to(x => `${x}px`),
            position: 'relative'
        }}
        onMouseEnter={Mouse}
        onMouseLeave={Mouse}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={data.title}
                    height="278"
                    image={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    title={data.title}
                />
                <Rate />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h5">
                        {data.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </AnimatedCard>
    );
}

function Rate(){

    return (
        <div className={style.circle}>
            7
            <svg viewBox="0 0 36 36" className={style.svg}>
                <path
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#444"
                    strokeWidth="3"
                    strokeDasharray="75, 100"
                />
            </svg>
        </div>
    )
}