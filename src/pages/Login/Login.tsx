import React, { useContext } from "react";
import { HvLogin } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { LoginForm, RecoverForm } from "components/login";
import {
  AuthContext,
  RecoverContext,
  RecoverContextProvider,
} from "lib/context/AuthContext";
import { LoginProps } from "./index";

const Login: React.FC<LoginProps> = () => {
  const { login, authStatus } = useContext(AuthContext);
  const { activeForm, recoverStatus, recover, setActiveForm } = useContext(
    RecoverContext
  );

  return (
    <RecoverContextProvider>
      <HvLogin>
        {activeForm === "recover" ? (
          <RecoverForm
            status={recoverStatus}
            onSubmit={async (email) => recover(email)}
            onCancel={() => setActiveForm("login")}
          />
        ) : (
          <LoginForm
            status={authStatus}
            onSubmit={async (credentials) => login(credentials)}
            onForgot={() => setActiveForm("recover")}
          />
        )}
      </HvLogin>
    </RecoverContextProvider>
  );
};

export default withLayout(Login, true);
