import React from "react";
import { NavigationContextType } from "typings/navigation";
import useNavigation from "lib/hooks/useNavigation";

export const NavigationContext = React.createContext<NavigationContextType>({
  isOpen: false, // VerticalNavigation
  toggleOpen: () => {},
  activePage: undefined,
});

export const NavigationContextProvider = ({ children }) => {
  const { isOpen, toggleOpen, activePage } = useNavigation();

  console.log("nnn");

  return (
    <NavigationContext.Provider value={{ isOpen, toggleOpen, activePage }}>
      {children}
    </NavigationContext.Provider>
  );
};
