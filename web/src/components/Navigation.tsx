import React, {useRef, useState} from "react";
import {Fab} from "@material-ui/core";
import style from './Navigation.module.css';
import {useSpring, a, config} from 'react-spring';
import {redFlame1, redFlame2, yellowFlame1, yellowFlame2} from "./svgPoints";

export default function Navigation(){
    return (
        <div className={style.navigation}>
            <Back />
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

function Back(){
    const [intervalId, setIntervalId] = useState();

    const [state, setState] = useState(false);
    // @ts-ignore
    let stateRef: boolean = useRef(false);

    const props = useSpring({
        scale: state ? 0.9 : 1,
        red: state ? redFlame2: redFlame1,
        yellow: state ? yellowFlame2 : yellowFlame1,
        config: config.wobbly,
    });

    function MouseIn() {
        const id = setInterval(() => {
            console.log('interval')
            stateRef = !stateRef;
            setState(stateRef)
        }, 200);

        // @ts-ignore
        setIntervalId(id);
    }

    function MouseOut(){
        // @ts-ignore
        clearInterval(intervalId);
    }

    return (
        <Fab size={"medium"} onMouseEnter={MouseIn} onMouseLeave={MouseOut}>
            <svg viewBox="0 0 500 500">
                <a.g style={{
                    scale: props.scale,
                    transformOrigin: 'center center'
                }}>
                    <polygon className={style.backFlash} points="70.524 289.23 85.2 306.729 173.258 222.623 257.364 308.422 271.476 292.053 174.387 191.577" transform="matrix(0, -1, 1, 0, -78.999489, 420.999512)"/>
                </a.g>
                <a.polygon className={style.backFlame1} points={props.red}/>
                <a.polygon className={style.backFlame2} points={props.yellow}/>
            </svg>
        </Fab>
    )
}