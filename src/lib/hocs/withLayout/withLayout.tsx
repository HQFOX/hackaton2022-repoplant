import React, { useContext } from "react";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { HvContainer } from "@hv/uikit-react-core";
import { Footer, VerticalNavigation } from "components/layout";
import { AuthContext } from "lib/context/AuthContext";
import { isTopLevelPage } from "lib/utils/path";
import useStyles from "./styles";

const withLayout = <P extends {}>(
  Component: React.ComponentType<P>,
  hasFooter = false
): React.FC<P> => (props) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { isAuthed } = useContext(AuthContext);
  const hasSecondLevel = !isTopLevelPage(pathname);

  return (
    <>
      <div
        className={clsx(classes.section, {
          [classes.hasFooter]: hasFooter,
        })}
      >
        <VerticalNavigation />
        <HvContainer
          maxWidth="xl"
          className={clsx(classes.container, {
            [classes.isAuthed]: isAuthed,
            [classes.hasSecondLevel]: isAuthed && hasSecondLevel,
          })}
        >
          <Component {...props} />
        </HvContainer>
      </div>
      {hasFooter && <Footer />}
    </>
  );
};

export default withLayout;
