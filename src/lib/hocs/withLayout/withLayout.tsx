import React, { useState } from "react";
import clsx from "clsx";
import { Header, Footer, VerticalNavigation } from "components/layout";
import NavigationContext from "lib/NavigationContext";
import useStyles from "./styles";

const withLayout = <P extends {}>(
  Component: React.ComponentType<P>,
  hasFooter = false,
  hasMargins = true
): React.FC<P> => props => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const toggleOpen = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <NavigationContext.Provider value={{ isOpen, toggleOpen }}>
      <Header />
      <div className={clsx(classes.section, hasFooter && classes.hasFooter)}>
        <VerticalNavigation />
        <main
          className={clsx(classes.component, hasMargins && classes.hasMargins)}>
          <Component {...props} />
        </main>
      </div>
      {hasFooter && <Footer />}
    </NavigationContext.Provider>
  );
};

export default withLayout;
