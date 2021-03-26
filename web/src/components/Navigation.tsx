import React, {useState} from "react";
import {Fab} from "@material-ui/core";
import style from './Navigation.module.css';
import {useSpring, a, config} from 'react-spring';

export default function Navigation(){
    return (
        <div className={style.navigation}>
            <Search />
        </div>
    )
}

function Search() {
    const [state, setState] = useState(false);

    const props = useSpring({
        scale: state ? 1.2 : 1,
        rotate: state ? 365 : 0,
        config: config.wobbly
    });

    function Mouse() {
        setState(!state)
    }

    return (
        <Fab size={"medium"} style={{overflow: 'hidden'}} onMouseEnter={Mouse} onMouseLeave={Mouse}>
            <svg viewBox="0 0 500 500">
                <a.g style={{
                    scale: props.scale,
                    rotate: props.rotate.interpolate(e => `${e}deg`)
                }}>
                    <circle className={style.searchCircle1} cx="202.828" cy="203.475" r="82.105"/>
                    <rect className={style.searchRect} x="353.878" y="247.075" width="50.553" height="138.616" transform="matrix(0.694708, -0.719292, 0.719292, 0.694708, -179.108673, 365.228607)" data-bx-origin="0.471 0.494"/>
                </a.g>
            </svg>
        </Fab>
    )
}