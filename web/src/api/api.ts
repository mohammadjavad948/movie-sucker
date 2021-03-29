import axios from "axios";
import {API_KEY, ENDPOINT} from "../env";

export function discover(){
    return  axios.get(`${ENDPOINT}/discover/movie?api_key=${API_KEY}`)
}