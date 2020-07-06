import React from "react";
import { HvLoginContainer } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { LoginForm, RecoverForm } from "components/login";
import { LoginProps } from "./index";

const Login: React.FC<LoginProps> = ({
  login,
  recover,
  setActiveForm,
  auth
}: LoginProps) => {
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

export default withLayout(Login, true, false);
