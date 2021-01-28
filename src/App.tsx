import React, { Suspense } from "react";
import { Router } from "react-router-dom";
import GlobalProvider from "lib/providers/GlobalProvider";
import DataProvider from "lib/providers/DataProvider";
import history from "lib/utils/history";
import Routes from "lib/routes";
import "lib/i18n";

const App: React.FC = () => (
  <GlobalProvider>
    <DataProvider>
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </Router>
    </DataProvider>
  </GlobalProvider>
);

export default App;
