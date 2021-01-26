import { Page } from "typings/pages";
import { data as pageData } from "lib/api/pages";

const getSelection = (data: Page[], pathname: string): Page | undefined => {
  let selection;

  data.forEach((item) => {
    if (item.path === pathname) selection = { ...item };
    else if (item.data && pathname.indexOf(item.path) > -1)
      selection = getSelection(item.data, pathname);
  });

  return selection;
};

const isTopLevelPage = (pathname: string): boolean =>
  pageData.find((item) => item.path === pathname) !== undefined;

export { getSelection, isTopLevelPage };
