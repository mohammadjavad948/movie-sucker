import axios from "axios";
import {API_KEY, ENDPOINT} from "../env";

export function discover(page: number){
    return axios.get(`${ENDPOINT}/discover/movie?api_key=${API_KEY}&page=${page}`)
}

export function genres(){
    return axios.get(`${ENDPOINT}/genre/movie/list?api_key=${API_KEY}`)
}