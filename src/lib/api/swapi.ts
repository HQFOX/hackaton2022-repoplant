import useSWR from "swr";
import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useStarships = (path = "") =>
  useSWR(`${BASE_URL}starships/${path}`, fetcher);

export const useFilms = (path = "") =>
  useSWR(`${BASE_URL}films/${path}`, fetcher);

export const fetchFilms = (urls: [] = []) => {
  const promises = urls.map((url) => fetcher(url));
  return Promise.all(promises).then((values) => values);
};
