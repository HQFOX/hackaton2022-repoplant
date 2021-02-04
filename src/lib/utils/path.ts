import { Page } from "typings/pages";
import { pages } from "lib/api/pages";

const getSelectedPage = (
  pathname: string,
  data: Page[] = pages
): Page | undefined => {
  let selectedPage;

  data.forEach((item) => {
    const hasPath = pathname.includes(item.path);

    if (hasPath) {
      selectedPage = item.data
        ? getSelectedPage(pathname, item.data)
        : { ...item };
    }
  });

  return selectedPage;
};

const isTopLevelPage = (pathname: string): boolean => {
  return !!pages.find((item) => item.path === pathname);
};

export { getSelectedPage, isTopLevelPage };
