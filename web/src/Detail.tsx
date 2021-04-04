import React from 'react';
import { useParams } from 'react-router-dom';


export default function Detail(){

    // @ts-ignore
    const {id} = useParams();

    return (
        <div>
            {id}
        </div>
    )
}