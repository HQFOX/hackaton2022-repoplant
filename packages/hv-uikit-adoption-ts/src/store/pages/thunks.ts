import { Dispatch } from "redux";
import { fetchPages } from "lib/api/pages";
import { PagesState } from "typings/pages";
import { setPages } from "./actions";

const getPages = () => async (dispatch: Dispatch): Promise<void> => {
  const pages: PagesState = await fetchPages();
  dispatch(setPages(pages));
};

export { getPages };
