import React, { useState, Suspense } from "react";
import { Provider } from "react-redux";
import { HvProvider, HvUiKitThemeNames } from "@hv/uikit-react-core/dist";

import { ConnectedRouter } from "connected-react-router";
import { store, history } from "store";
import { setCookie, getCookie } from "lib/utils/cookie";
import ThemeContext from "lib/ThemeContext";
import Routes from "lib/routes";
import "../config/i18n";

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
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <HvProvider uiKitTheme={theme}>
          <ConnectedRouter history={history}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes />
            </Suspense>
          </ConnectedRouter>
        </HvProvider>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
