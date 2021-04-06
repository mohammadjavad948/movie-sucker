import React, {useEffect, useState} from 'react';
import style from './Container.module.css';
import MovieCard from "./movie";
import Loading from "./Loading";
import {allGenres, discover} from "../api/api";
import {Button} from "@material-ui/core";

export default function Container(){

    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        allGenres()
            .then(res => {
                setGenres(res.data.genres);
                setLoading(false);
            })
            .catch(console.log)
    }, []);

    useEffect(() => {
        setLoading(true);

        discover(page)
            .then(res => {
                setMovie(res.data.results)
                setMaxPage(res.data.total_pages)
                setLoading(false);
            })
            .catch(e => {
                console.log(e)
            });

    }, [page]);

    function nextPage(){
        setPage(page + 1)
    }

    function previusPage(){
        setPage(page - 1)
    }

    return (
        <div className={style.container}>
            {
                loading ?
                    <Loading height={250} width={250}/> :
                    movie.map((el, index) => <MovieCard genres={genres} data={el} key={index}/>)
            }

            <div className={style.buttons}>
                <Button variant="contained" color="primary" onClick={previusPage} disabled={page === 1}>
                    Previous
                </Button>
                <span>page {page} / {maxPage}</span>
                <Button variant="contained" color="primary" onClick={nextPage} disabled={page === maxPage}>
                    Next
                </Button>
            </div>
        </div>
    )
}