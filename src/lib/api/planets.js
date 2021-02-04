import useSWR from "swr";
import axios from "axios";

const API_URL = "https://swapi.dev/api/";

export const fetchPlanets = (url = `${API_URL}planets/`) =>
  axios(url).then((res) => res.data);

// const fetch = (url, results = []) =>
//   axios(url).then((res) => {
//     const { data } = res;
//     results.push(...data.results);
//     return data.next ? fetch(data.next, results) : results;
//   });

// export const fetchPlanets = (url = `${API_URL}planets/`) => {
//   const { data, error } = useSWR(url, fetch);

//   return {
//     data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };
