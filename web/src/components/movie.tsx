import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useSpring, a, config} from "react-spring";

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
        width: hover ? 280 : 185,
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
        <div style={{
            width: '40px',
            height: '40px',
            background: 'white',
            borderRadius: '50%',
            position: 'absolute',
            top: '20px',
            right: '20px'
        }}>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" strokeDashoffset={50}>
                <circle cx="20" cy="20" r="18" style={{
                    fill: 'none',
                    stroke: 'rgb(148 255 0)',
                    strokeWidth: '3px'
                }}/>
            </svg>
        </div>
    )
}