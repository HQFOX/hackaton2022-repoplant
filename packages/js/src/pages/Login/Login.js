import React from "react";
import PropTypes from "prop-types";
import { HvLoginContainer } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { LoginForm, RecoverForm } from "components/login";

const Login = ({ login, recover, setActiveForm, auth }) => {
  const { activeForm, authStatus, recoverStatus } = auth;
  const showRecover = activeForm === "recover";

  return (
    <HvLoginContainer>
      {showRecover ? (
        <RecoverForm
          status={recoverStatus}
          onSubmit={async email => recover(email)}
          onCancel={() => setActiveForm("login")}
        />
      ) : (
        <LoginForm
          status={authStatus}
          onSubmit={async credentials => login(credentials)}
          onForgot={() => setActiveForm("recover")}
        />
      )}
    </HvLoginContainer>
  );
};

Login.propTypes = {
  /**
   * Callback to trigger on login action.
   */
  login: PropTypes.func.isRequired,
  /**
   * Callback to trigger on recover action.
   */
  recover: PropTypes.func.isRequired,
  /**
   * Callback to trigger on onCancel and onForgot action.
   */
  setActiveForm: PropTypes.func.isRequired,
  /**
   * The auth state object.
   */
  auth: PropTypes.shape({
    /**
     * The form to render.
     */
    activeForm: PropTypes.string.isRequired,
    /**
     * The auth status.
     */
    authStatus: PropTypes.string.isRequired,
    /**
     * The recover status.
     */
    recoverStatus: PropTypes.string.isRequired
  }).isRequired
};

export default withLayout(Login, true, false);
