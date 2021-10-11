import axios from "axios";

const API_KEY = "570637b45cc88103b2bddfc0d68a2f1e";
const PARAMS = `?api_key=${API_KEY}&language=en-US`;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

const popularEndPoint = (page) => `/popular${PARAMS}&page=${page}&region=IN`;
const nowPlayingEndPoint = (page) =>
  `/now_playing${PARAMS}&page=${page}&region=IN`;
const movieDetailEndpoint = (id) => `${id}${PARAMS}`;
const castEndpoint = (id) => `${id}/credits${PARAMS}`;

export const popularAPI = (page) => api.get(popularEndPoint(page));
export const nowPlayingAPI = (page) => api.get(nowPlayingEndPoint(page));
export const movieDetailAPI = (id) => api.get(movieDetailEndpoint(id));
export const castAPI = (id) => api.get(castEndpoint(id));
