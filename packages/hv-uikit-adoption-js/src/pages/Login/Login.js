import React from "react";
import PropTypes from "prop-types";
import LoginForm from "components/login/LoginForm";
import withLayout from "lib/hocs/withLayout";

const Login = ({ classes, login }) => {
  return (
    <div className={classes.root}>
      <LoginForm login={login} />
    </div>
  );
};

Login.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  login: PropTypes.func.isRequired
};

export default withLayout(Login, true);
