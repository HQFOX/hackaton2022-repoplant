import React, { useState } from "react";
import { Header, Footer, VerticalNavigation } from "components/layout";
import NavigationContext from "../../NavigationContext";

const withLayout = <P extends {}>(
  Component: React.ComponentType<P>,
  hasFooter = false
): React.FC<P> => props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <NavigationContext.Provider value={{ isOpen, toggleOpen }}>
      <Header />
      <div style={{ paddingTop: "50px", display: "flex" }}>
        <VerticalNavigation />
        <main style={{ flexGrow: 1, padding: "30px 15px 0 15px" }}>
          <Component {...(props as P)} />
        </main>
      </div>
      {hasFooter && <Footer />}
    </NavigationContext.Provider>
  );
};

export default withLayout;
