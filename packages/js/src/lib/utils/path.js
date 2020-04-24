const getSelection = (data, pathname) => {
  let selection;

  data.forEach(item => {
    if (item.path === pathname) selection = { ...item };
    if (item.data) getSelection(item.data, pathname);
  });

  return selection;
};

export { getSelection };
