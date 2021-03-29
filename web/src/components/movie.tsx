import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 185,
    },
});

// @ts-ignore
export default function MovieCard({data}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
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
        </Card>
    );
}