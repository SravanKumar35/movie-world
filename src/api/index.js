import axios from "axios";

const API_KEY = "570637b45cc88103b2bddfc0d68a2f1e";
const PARAMS = `api_key=${API_KEY}&language=en-US&region=IN`;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

const popularEndPoint = (page) =>
  `/popular?api_key=${API_KEY}&language=en-US&page=${page}&region=IN`;
const nowPlayingEndPoint = (page) =>
  `/now_playing?api_key=${API_KEY}&language=en-US&page=${page}&region=IN`;

export const popularAPI = (page) => api.get(popularEndPoint(page));
export const nowPlayingAPI = (page) => api.get(nowPlayingEndPoint(page));
