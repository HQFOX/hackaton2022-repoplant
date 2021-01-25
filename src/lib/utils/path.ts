import { Page } from "typings/pages";

const getSelection = (data: Page[], pathname: string): Page | undefined => {
  let selection;

  data.forEach((item) => {
    if (item.path === pathname) selection = { ...item };
    else if (item.data && pathname.indexOf(item.path) > -1)
      selection = getSelection(item.data, pathname);
  });

  return selection;
};

export { getSelection };
