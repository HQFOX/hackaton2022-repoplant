import React, { useEffect, useState } from "react";
import { HvProvider, HvUiKitThemeNames } from "@hv/uikit-react-core";
import { useMediaQuery } from "@material-ui/core";
import { setCookie, getCookie } from "lib/utils/cookie";

const wicked: HvUiKitThemeNames = "wicked";
const dawn: HvUiKitThemeNames = "dawn";

export interface ThemeContextType {
  theme: HvUiKitThemeNames;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: wicked,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const initialTheme = getCookie("theme") === wicked ? wicked : dawn;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState<HvUiKitThemeNames>(initialTheme);

  useEffect(() => {
    setTheme(getCookie("theme") || (prefersDarkMode && wicked) || dawn);
  }, [prefersDarkMode]);

  const toggleTheme = () => {
    const newTheme = theme === dawn ? wicked : dawn;
    setTheme(newTheme);
    setCookie({ key: "theme", value: newTheme });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <HvProvider uiKitTheme={theme}>{children}</HvProvider>
    </ThemeContext.Provider>
  );
};
