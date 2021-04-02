import React, {FC, useState} from 'react';
import {Button, TextField} from "@material-ui/core";

export default function Search(){

    function search(query: string){

    }

    return (
        <div>
            <SearchBox searchClick={search}/>
        </div>
    )
}

interface SearchBoxI{
    searchClick: (query: string) => void
}

const SearchBox: FC<SearchBoxI> = (props) => {

    const [query, setQuery] = useState('');

    function keyBoard(event: React.KeyboardEvent<HTMLDivElement>){
        if (event.keyCode !== 13) return null;

        props.searchClick(query);
    }

    return (
        <div style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                onKeyUp={keyBoard}
                onChange={e => setQuery(e.target.value)}
            />
            <Button
                variant={"contained"}
                color={"secondary"}
                onClick={() => props.searchClick(query)}
            >
                Go
            </Button>
        </div>
    )
}