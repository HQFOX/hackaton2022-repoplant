import React, { useState, Suspense } from "react";
import { Provider } from "react-redux";
import { HvProvider, HvUiKitThemeNames } from "@hv/uikit-react-core";
import { Router } from "react-router-dom";
import { store } from "store";
import { setCookie, getCookie } from "lib/utils/cookie";
import history from "lib/utils/history";
import ThemeContext from "lib/ThemeContext";
import Routes from "lib/routes";
import DataProvider from "lib/providers/DataProvider";
import "lib/i18n";

const App: React.FC = () => {
  const initialTheme = getCookie("theme") === "wicked" ? "wicked" : "dawn";
  const [theme, setTheme] = useState<HvUiKitThemeNames>(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme === "dawn" ? "wicked" : "dawn";
    setTheme(newTheme);
    setCookie({ key: "theme", value: newTheme });
  };

  return (
    <Provider store={store}>
      <DataProvider>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <HvProvider uiKitTheme={theme}>
            <Router history={history}>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes />
              </Suspense>
            </Router>
          </HvProvider>
        </ThemeContext.Provider>
      </DataProvider>
    </Provider>
  );
};

export default App;
