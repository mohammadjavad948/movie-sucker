import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { details } from './api/api';
import Loading from './components/Loading';


export default function Detail(){

    // @ts-ignore
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        details(id)
        .then(res => {
            setLoading(false);
            setMovie(res.data);
        })
        .catch((e) => {
            console.log(e.response);
        });
        //@ts-ignore
    }, [])

    return (
        <div>
            {/*// @ts-ignore */}
            {loading ? <Loading height={250} width={250}/> : movie.title}
        </div>
    )
}