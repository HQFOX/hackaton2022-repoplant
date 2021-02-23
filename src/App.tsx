import React from "react";
import { Router } from "react-router-dom";
import { Header } from "components/layout";
import DataProvider from "lib/providers/DataProvider";
import ContextProvider from "lib/providers/ContextProvider";
import history from "lib/utils/history";
import Routes from "lib/routes";
import "lib/i18n";

const App: React.FC = () => (
  <DataProvider>
    <Router history={history}>
      <ContextProvider>
        <Header />
        <Routes />
      </ContextProvider>
    </Router>
  </DataProvider>
);

export default App;
