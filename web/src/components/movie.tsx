import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useSpring, a} from "react-spring";

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
        width: hover ? 280 : 185
    });

    function Mouse(){
        setHover(!hover)
    }

    return (
        <AnimatedCard className={classes.root} style={{
            width: props.width.to(x => `${x}px`)
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
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h5">
                        {data.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </AnimatedCard>
    );
}