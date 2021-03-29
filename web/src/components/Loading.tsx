import Lottie from "react-lottie";
import React from "react";
import animationData from "../lotties/loading.json";

// @ts-ignore
export default function Loading(props){

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Lottie options={defaultOptions} {...props}/>
    )
}