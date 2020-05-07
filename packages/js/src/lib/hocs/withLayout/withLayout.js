import React, { useState } from "react";
import { withStyles } from "@material-ui/core";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import VerticalNavigation from "components/layout/VerticalNavigation";
import NavigationContext from "../../NavigationContext";
import styles from "./styles";

const withLayout = (Component, hasFooter = false) =>
  withStyles(styles, { name: "withLayout" })(props => {
    const [isOpen, setIsOpen] = useState(false);
    const { classes } = props;

    const toggleOpen = () => {
      setIsOpen(prevState => !prevState);
    };

    return (
      <NavigationContext.Provider value={{ isOpen, toggleOpen }}>
        <Header />
        <div className={classes.section}>
          <VerticalNavigation />
          <main className={classes.component}>
            <Component {...props} />
          </main>
        </div>
        {hasFooter && <Footer />}
      </NavigationContext.Provider>
    );
  });

export default withLayout;
