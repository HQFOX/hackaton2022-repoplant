import React, { useState, useEffect } from "react";
import { NavigationContextType } from "typings/navigation";
import { useLocation } from "react-router-dom";
import { Page } from "typings/pages";
import { getActivePath } from "lib/utils/path";

export const NavigationContext = React.createContext<NavigationContextType>({
  isOpen: false, // VerticalNavigation
  toggleOpen: () => {},
  activePage: undefined,
});

export const NavigationContextProvider = ({ children }) => {
  const { pathname } = useLocation();
  const initialPath = getActivePath(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState<Page | undefined>(initialPath);

  useEffect(() => {
    const activePath = getActivePath(pathname);
    setActivePage(activePath);
  }, [pathname]);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <NavigationContext.Provider value={{ isOpen, toggleOpen, activePage }}>
      {children}
    </NavigationContext.Provider>
  );
};
