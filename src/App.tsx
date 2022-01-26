import React from "react";
import { HashRouter as Router } from "react-router-dom";

import { VerticalNavigation, Header } from "components/layout";
import GlobalProvider from "lib/providers/GlobalProvider";
import Routes from "lib/routes";
import "lib/i18n";

const App: React.FC = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <GlobalProvider>
      <VerticalNavigation />
      <Header />
      <Routes />
    </GlobalProvider>
  </Router>
);

export default App;
