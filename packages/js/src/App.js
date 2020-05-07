import React, { Suspense, useState } from "react";
import { Provider } from "react-redux";
import { HvProvider } from "@hv/uikit-react-core/dist";
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "store";
import { setCookie, getCookie } from "lib/utils/cookie";
import ThemeContext from "lib/ThemeContext";
import Routes from "lib/routes";
import "../config/i18n";

const App = () => {
  const [theme, setTheme] = useState(getCookie("theme") || "wicked");

  const toggleTheme = () => {
    const newTheme = theme === "dawn" ? "wicked" : "dawn";
    setTheme(newTheme);
    setCookie({ key: "theme", value: newTheme });
  };

  console.log("theme", theme);

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
