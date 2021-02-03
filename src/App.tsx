import React from "react";
import GlobalProvider from "lib/providers/GlobalProvider";
import DataProvider from "lib/providers/DataProvider";
import Routes from "lib/routes";
import "lib/i18n";

const App: React.FC = () => (
  <GlobalProvider>
    <DataProvider>
      <Routes />
    </DataProvider>
  </GlobalProvider>
);

export default App;
