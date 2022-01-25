import useSWR from "swr";
import axios from "axios";

const BASE_URL = "https://swapi.py4e.com/api/";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useStarships = (path = "") =>
  useSWR(`${BASE_URL}starships/${path}`, fetcher, { suspense: true });

export const useFilms = (path = "") =>
  useSWR(`${BASE_URL}films/${path}`, fetcher, { suspense: true });
