import React from "react";
import PropTypes from "prop-types";
import { HvGrid } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import LoginForm from "components/login";
import background from "./img/bg.svg";

const Login = ({ classes, login }) => (
  <HvGrid
    container
    className={classes.container}
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "100%",
      margin: 0
    }}>
    <HvGrid
      item
      xs={false}
      sm={false}
      md={8}
      lg={8}
      xl={8}
      className={classes.panelPosition}>
      <div className={classes.root} />
    </HvGrid>
    <HvGrid
      item
      xs={12}
      sm={12}
      md={5}
      lg={5}
      xl={5}
      className={classes.rightContainer}>
      <LoginForm login={login} />
    </HvGrid>
  </HvGrid>
);

Login.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  login: PropTypes.func.isRequired
};

export default withLayout(Login, true, false);
