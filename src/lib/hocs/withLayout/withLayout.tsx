import React, { useState } from "react";
import clsx from "clsx";
import { HvContainer } from "@hv/uikit-react-core";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { useLocation } from "react-router-dom";

import { Header, Footer, VerticalNavigation } from "components/layout";
import NavigationContext from "lib/NavigationContext";
import { isTopLevelPage } from "lib/utils/path";
import useStyles from "./styles";

const withLayout = <P extends {}>(
  Component: React.ComponentType<P>,
  hasFooter = false
): React.FC<P> => (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { pathname } = useLocation();

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <NavigationContext.Provider value={{ isOpen, toggleOpen }}>
      <Header />
      <div
        className={clsx(classes.section, {
          [classes.bigTopSpacing]: isMdUp && !isTopLevelPage(pathname),
          [classes.hasFooter]: hasFooter,
        })}
      >
        <VerticalNavigation />
        <HvContainer maxWidth="xl">
          <Component {...props} />
        </HvContainer>
      </div>
      {hasFooter && <Footer />}
    </NavigationContext.Provider>
  );
};

export default withLayout;
