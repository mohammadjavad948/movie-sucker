import axios from "axios";
import {API_KEY, ENDPOINT} from "../env";

export function discover(page: number){
    return axios.get(`${ENDPOINT}/discover/movie?api_key=${API_KEY}&page=${page}`)
}

export function allGenres(){
    return axios.get(`${ENDPOINT}/genre/movie/list?api_key=${API_KEY}`)
}

export function search(query: string){
    return axios.get(`${ENDPOINT}/search/movie?api_key=${API_KEY}&query=${encodeURI(query)}`)
}

export function details(id: string){
    return axios.get(`${ENDPOINT}/movie/${id}?api_key=${API_KEY}`)
}