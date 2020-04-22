import React from "react";
import PropTypes from "prop-types";
import HvLogin from "@hv/uikit-react-core/dist/Login";

const LoginForm = ({ login }) => (
  <HvLogin login={credentials => login(credentials)} />
);

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginForm;
