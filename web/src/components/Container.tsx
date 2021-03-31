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

    useEffect(() => {
        allGenres()
            .then(res => {
                setGenres(res.data.genres);
            })
            .catch(console.log)
    }, []);

    useEffect(() => {
        setMovie([]);

        discover(page)
            .then(res => {
                setMovie(res.data.results)
                setMaxPage(res.data.total_pages)
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
            {movie.length === 0 ? <Loading height={250} width={250}/> : ''}

            {movie.map((el, index) => <MovieCard data={el} key={index}/>)}
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