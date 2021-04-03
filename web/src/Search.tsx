import React, {FC, useEffect, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import {useSpring, a, config} from "react-spring";
import {Search as SearchIcon} from '@material-ui/icons';
import {allGenres, search as searchApi} from './api/api';
import style from './components/Container.module.css';
import MovieCard from "./components/movie";

export default function Search(){

    const [genres, setGenres] = useState([]);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        allGenres()
            .then(res => {
                setGenres(res.data.genres);
            })
            .catch(console.log)
    }, []);

    function search(query: string){
        searchApi(query).then(data => {
            setMovie(data.data.results);
            console.log(data)
        }).catch(console.log)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}>
            <SearchBox searchClick={search}/>
            <div className={style.container} style={{marginTop: '20px'}}>
                {movie.map((el, index) => <MovieCard genres={genres} data={el} key={index}/>)}
            </div>
        </div>
    )
}

interface SearchBoxI{
    searchClick: (query: string) => void
}

const AnimatedInput = a(TextField)

const SearchBox: FC<SearchBoxI> = (props) => {

    const [query, setQuery] = useState('');
    const [hover, setHover] = useState(false);
    const width = useSpring({
        width: hover ? 250 : 222
    })

    function mouse(){
        setHover(!hover);
    }

    function keyBoard(event: React.KeyboardEvent<HTMLDivElement>){
        if (event.keyCode !== 13) return null;

        props.searchClick(query);
    }

    function click(){
        props.searchClick(query);
    }

    return (
        <div style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <AnimatedInput
                id="outlined-basic"
                label="Search"
                variant="outlined"
                onKeyUp={keyBoard}
                onChange={e => setQuery(e.target.value)}
                style={width}
                onMouseEnter={mouse}
                onMouseLeave={mouse}
                autoComplete={"off"}
            />
           <SearchButton searchClick={click}/>
        </div>
    )
}

const AnimatedButton = a(Button);

// @ts-ignore
function SearchButton(props){

    const [hover, setHover] = useState(false);
    const animation = useSpring({
        borderRadius: hover ? 25 : 5,
        config: config.wobbly
    })

    function mouse(){
        setHover(!hover);
    }

    return (
        <AnimatedButton
            variant={"contained"}
            color={"secondary"}
            onClick={() => props.searchClick()}
            style={{
                minWidth: 'unset',
                padding: '14px 14px',
                borderRadius: animation.borderRadius.to(x => `${x}px`)
            }}
            onMouseEnter={mouse}
            onMouseLeave={mouse}
        >
            <SearchIcon/>
        </AnimatedButton>
    )
}