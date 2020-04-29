import { fetchPages } from "lib/api/pages";
import { setPages } from "./actions";

const getPages = () => async dispatch => {
  const pages = await fetchPages();
  dispatch(setPages(pages));
};

export { getPages };
