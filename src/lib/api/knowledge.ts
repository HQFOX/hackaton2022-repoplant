import useSWR from "swr";
import axios from "axios";

const BASE_URL = window.location.origin;

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useKnowledgeList = (path = "") =>
  useSWR(`${BASE_URL}/knowledge.json`, fetcher, { suspense: true });
