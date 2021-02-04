import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Page } from "typings/pages";
import { pages } from "lib/api/pages";
import { getSelectedPage } from "lib/utils/path";

const useNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState<Page | undefined>(undefined);
  const { pathname } = useLocation();

  useEffect(() => {
    const selectedPage = getSelectedPage(pathname, pages);
    setActivePage(selectedPage);
  }, [pathname]);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { isOpen, toggleOpen, activePage };
};

export default useNavigation;
