import React from "react";
import { useHistory } from "react-router-dom";
import { HvButton, HvTypography } from "@hv/uikit-react-core";
import { Backwards } from "@hv/uikit-react-icons";
import { GlobalActionsProps } from "./index";
import useStyles from "./styles";

const Footer: React.FC<GlobalActionsProps> = ({ name, children }) => {
  const classes = useStyles();
  const { goBack } = useHistory();

  return (
    <div className={classes.root}>
      <div className={classes.background} />
      <div className={classes.content}>
        <div>
          <HvButton icon onClick={goBack}>
            <Backwards />
          </HvButton>
        </div>
        <HvTypography
          variant="sectionTitle"
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
