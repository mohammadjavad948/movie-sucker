import React, {FC, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import {useSpring, a, config} from "react-spring";
import {Search as SearchIcon} from '@material-ui/icons';

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