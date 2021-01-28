import { Page } from "typings/pages";
import { pages } from "lib/api/pages";

const getSelectedPage = (data: Page[], pathname: string): Page | undefined => {
  let selectedPage;

  data.forEach((item) => {
    if (item.path === pathname) selectedPage = { ...item };
    else if (item.data && pathname.indexOf(item.path) > -1)
      selectedPage = getSelectedPage(item.data, pathname);
  });

  return selectedPage;
};

const isTopLevelPage = (pathname: string): boolean =>
  pages.find((item) => item.path === pathname) !== undefined;

export { getSelectedPage, isTopLevelPage };
