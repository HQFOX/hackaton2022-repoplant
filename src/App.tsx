import React from "react";
import { DummyContextProvider } from "lib/context/DummyContext";
import "lib/i18n";

const App: React.FC = () => (
  <DummyContextProvider>
    <div>hey</div>
  </DummyContextProvider>
);

export default App;
