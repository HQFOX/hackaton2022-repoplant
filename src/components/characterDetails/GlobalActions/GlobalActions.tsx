import React from "react";
import { useHistory } from "react-router-dom";
import { HvButton, HvTypography } from "@hv/uikit-react-core";
import { Backwards } from "@hv/uikit-react-icons";
import { useLayoutMargins } from "lib/hocs/withLayout";
import { GlobalActionsProps } from "./index";
import useStyles from "./styles";

const Footer: React.FC<GlobalActionsProps> = ({ name, children }) => {
  const classes = useStyles();
  const { goBack } = useHistory();

  const margin = useLayoutMargins();

  return (
    <div
      className={classes.root}
      style={{
        top: margin,
        marginTop: -margin + 30,
      }}
    >
      <div className={classes.background} />
      <div className={classes.content}>
        <div>
          <HvButton icon onClick={goBack}>
            <Backwards />
          </HvButton>
        </div>
        <HvTypography
          variant="xxlTitle"
          component="h1"
          className={classes.name}
        >
          {name}
        </HvTypography>
        <div className={classes.actions}>{children}</div>
      </div>
    </div>
  );
};
export default Footer;
