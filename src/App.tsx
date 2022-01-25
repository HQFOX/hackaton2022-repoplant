import React, { Suspense } from "react";

import { VerticalNavigation, Header } from "components/layout";
import GlobalProvider from "lib/providers/GlobalProvider";
import Routes from "lib/routes";
import "lib/i18n";

const App: React.FC = () => (
  <Suspense fallback>
    <GlobalProvider>
      <VerticalNavigation />
      <Header />
      <Routes />
    </GlobalProvider>
  </Suspense>
);

export default App;
