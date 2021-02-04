import React from "react";
import clsx from "clsx";
import { HvContainer } from "@hv/uikit-react-core";
import { Footer, VerticalNavigation } from "components/layout";
import useLayoutMargins from "lib/hooks/useLayoutMargins";
import useStyles from "./styles";

const withLayout = <P extends {}>(
  Component: React.ComponentType<P>,
  hasFooter = false
): React.FC<P> => (props) => {
  const classes = useStyles();
  const { top } = useLayoutMargins();

  return (
    <>
      <div
        style={{ marginTop: top }}
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
    </>
  );
};

export default withLayout;
