import React from "react";
import { Router } from "react-router-dom";
import { Header } from "components/layout";
import GlobalProvider from "lib/providers/GlobalProvider";
import DataProvider from "lib/providers/DataProvider";
import history from "lib/utils/history";
import Routes from "lib/routes";
import "lib/i18n";

const App: React.FC = () => (
  <DataProvider>
    <Router history={history}>
      <GlobalProvider>
        <Header />
        <Routes />
      </GlobalProvider>
    </Router>
  </DataProvider>
);

export default App;
