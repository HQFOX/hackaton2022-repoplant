import React, { useState } from "react";
import clsx from "clsx";
import { HvContainer } from "@hv/uikit-react-core";

import { Header, Footer, VerticalNavigation } from "components/layout";
import NavigationContext from "lib/NavigationContext";
import useStyles from "./styles";
import { useLayoutMargins } from ".";

const withLayout = <P extends {}>(
  Component: React.ComponentType<P>,
  hasFooter = false
): React.FC<P> => (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const margin = useLayoutMargins();

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <NavigationContext.Provider value={{ isOpen, toggleOpen }}>
      <Header />
      <div
        style={{ paddingTop: margin }}
        className={clsx(classes.section, {
          [classes.hasFooter]: hasFooter,
        })}
      >
        <VerticalNavigation />
        <HvContainer maxWidth="xl" className={classes.container}>
          <Component {...props} />
        </HvContainer>
      </div>
      {hasFooter && <Footer />}
    </NavigationContext.Provider>
  );
};

export default withLayout;
