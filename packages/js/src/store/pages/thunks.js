import { push } from "connected-react-router";
import { fetchPages } from "lib/api/pages";
import { setPages } from "./actions";

const getPages = () => async dispatch => {
  const pages = await fetchPages();
  dispatch(setPages(pages));
};

const redirect = path => dispatch => {
  dispatch(push(path));
};

export { getPages, redirect };
