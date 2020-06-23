import React, { useState } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import VerticalNavigation from "components/layout/VerticalNavigation";
import NavigationContext from "../../NavigationContext";
import styles from "./styles";

const withLayout = (Component, hasFooter = false, hasMargins = true) =>
  withStyles(styles, { name: "withLayout" })(props => {
    const [isOpen, setIsOpen] = useState(false);
    const { classes } = props;

    const toggleOpen = () => {
      setIsOpen(prevState => !prevState);
    };

    return (
      <NavigationContext.Provider value={{ isOpen, toggleOpen }}>
        <Header />
        <div className={clsx(classes.section, hasFooter && classes.hasFooter)}>
          <VerticalNavigation />
          <main
            className={clsx(
              classes.component,
              hasMargins && classes.hasMargins
            )}>
            <Component {...props} />
          </main>
        </div>
        {hasFooter && <Footer />}
      </NavigationContext.Provider>
    );
  });

export default withLayout;
