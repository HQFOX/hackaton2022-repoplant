const PagesActions = {
    SET_PAGES: "@@pages/SET_PAGES"
  };
  
  const setPages = pages => ({
    type: PagesActions.SET_PAGES,
    pages
  });
  
  export { PagesActions, setPages };
  