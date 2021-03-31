import React from 'react';
import {IconButton, Typography} from "@material-ui/core";
import style from './TopBar.module.css';
import {useThemeStore} from "../stores/ThemeStore";
import {useSpring, a, config} from "react-spring";
import {useHistory} from 'react-router-dom';

export default function TopBar() {
    const history = useHistory();

    function home(){
        history.push('/');
    }

    return (
        <div>
            <div className={style.topBar}>
                <Typography variant={"h6"} style={{cursor: 'pointer'}} onClick={home}>
                    Movie Sucker
                </Typography>
                <ChangeThemeButton/>
            </div>
            <hr/>
        </div>
    );
}

function ChangeThemeButton(){
    const {theme, dark, light} = useThemeStore();

    const props = useSpring({
        x: theme === 'dark' ? 0 : -33,
        rotate: theme === 'dark' ? 0 : 365,
        config: config.wobbly
    });

    function changeTheme(){
        if (theme === 'dark'){
            light();
        }else if(theme === 'light'){
            dark();
        }
    }

    return (
        <IconButton size={"small"} onClick={changeTheme}>
            <svg viewBox="0 0 500 500" style={{width: '35px'}}>
                <g transform="matrix(1.049067, 0, 0, 1.049067, 0.540671, 7.368187)">
                    <a.g style={{
                        rotate: props.rotate.to(x => `${x}deg`),
                        transformOrigin: '48% 46%'
                    }}>
                        <circle style={{stroke: theme === 'dark' ? '#ffffff' : '#000000'}} className={style.circle} cx="240.227" cy="232.751" r="98.185"/>
                        <path style={{fill: theme === 'dark' ? '#ffffff' : '#000000'}} d="M 236.981 79.165 L 262.336 123.081 L 211.626 123.081 L 236.981 79.165 Z" data-bx-shape="triangle 211.626 79.165 50.71 43.916 0.5 0 1@23060611"/>
                        <path style={{fill: theme === 'dark' ? '#ffffff' : '#000000'}} d="M 241.844 327.165 L 267.199 371.081 L 216.489 371.081 L 241.844 327.165 Z" data-bx-shape="triangle 216.489 327.165 50.71 43.916 0.5 0 1@47dc006d" transform="matrix(-0.999979, 0.006476, -0.006476, -0.999979, 482.701782, 708.82959)" data-bx-origin="0.674 0.815"/>
                        <path style={{fill: theme === 'dark' ? '#ffffff' : '#000000'}} d="M 325.25 74.651 L 350.605 118.567 L 299.895 118.567 L 325.25 74.651 Z" data-bx-shape="triangle 299.895 74.651 50.71 43.916 0.5 0 1@2a6c0509" transform="matrix(0, 1, -1, 0, 464.561005, -91.257332)"/>
                        <path style={{fill: theme === 'dark' ? '#ffffff' : '#000000'}} d="M 241.844 327.165 L 267.199 371.081 L 216.489 371.081 L 241.844 327.165 Z" data-bx-shape="triangle 216.489 327.165 50.71 43.916 0.5 0 1@47dc006d" transform="matrix(-0.006476, -0.999979, 0.999979, -0.006476, -239.754547, 479.71344)" data-bx-origin="0.674 0.815"/>
                        <path style={{fill: theme === 'dark' ? '#ffffff' : '#000000'}} d="M 296.074 60.873 L 321.429 104.789 L 270.719 104.789 L 296.074 60.873 Z" data-bx-shape="triangle 270.719 60.873 50.71 43.916 0.5 0 1@38332ee2" transform="matrix(0.707107, 0.707107, -0.707107, 0.707107, 179.19429, -126.528282)"/>
                        <path style={{fill: theme === 'dark' ? '#ffffff' : '#000000'}} d="M 241.844 327.165 L 267.199 371.081 L 216.489 371.081 L 241.844 327.165 Z" data-bx-shape="triangle 216.489 327.165 50.71 43.916 0.5 0 1@47dc006d" transform="matrix(-0.711671, -0.702513, 0.702513, -0.711671, 74.016792, 744.862183)" data-bx-origin="0.674 0.815"/>
                        <path style={{fill: theme === 'dark' ? '#ffffff' : '#000000'}} d="M 282.296 75.461 L 307.651 119.377 L 256.941 119.377 L 282.296 75.461 Z" data-bx-shape="triangle 256.941 75.461 50.71 43.916 0.5 0 1@ae6ac330"  transform="matrix(0.707107, -0.707107, 0.707107, 0.707107, -125.799324, 269.324432)"/>
                        <path style={{fill: theme === 'dark' ? '#ffffff' : '#000000'}} d="M 241.844 327.165 L 267.199 371.081 L 216.489 371.081 L 241.844 327.165 Z" data-bx-shape="triangle 216.489 327.165 50.71 43.916 0.5 0 1@47dc006d" transform="matrix(-0.702513, 0.711671, -0.711671, -0.702513, 746.164185, 394.559723)" data-bx-origin="0.674 0.815"/>
                    </a.g>
                </g>
                <a.circle style={{
                    fill: theme === 'dark' ? '#ffffff' : '#000000',
                    translateX: props.x.to(x => `${x}px`)
                }} cx="251.049" cy="251.049" r="65.059"/>
            </svg>
        </IconButton>
    )
}