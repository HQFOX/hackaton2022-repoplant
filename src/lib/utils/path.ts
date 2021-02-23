import pages from "lib/api/pages";
import { Page } from "typings/pages";

const getActivePath = (
  pathname: string,
  data: Page[] = pages
): Page | undefined => {
  let activePath;

  data.forEach((item) => {
    const hasPath = pathname.includes(item.path);

    if (hasPath) {
      activePath = item.data ? getActivePath(pathname, item.data) : { ...item };
    }
  });

  return activePath;
};

const isTopLevelPage = (pathname: string): boolean => {
  return !!pages.find((item) => item.path === pathname);
};

export { getActivePath, isTopLevelPage };
