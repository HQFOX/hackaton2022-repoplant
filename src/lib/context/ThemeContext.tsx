import React from "react";
import { HvProvider } from "@hv/uikit-react-core";
import { HvUiKitThemeNames } from "@hv/uikit-react-core";
import useTheme from "lib/hooks/useTheme";
export interface ThemeContextType {
  theme: HvUiKitThemeNames;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: "wicked",
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  console.log("ttt");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <HvProvider uiKitTheme={theme}>{children}</HvProvider>
    </ThemeContext.Provider>
  );
};
