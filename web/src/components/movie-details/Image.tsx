import React, {FC} from "react";
interface imageinterface{
    url:string;
}
export const Image: FC<imageinterface> =(propt) =>{
    return (<div><img src={propt.url} /> </div>)
}
