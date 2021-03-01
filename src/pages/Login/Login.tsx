import React, { useContext } from "react";
import { HvLogin } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { LoginForm, RecoverForm } from "components/login";
import { AuthContext } from "lib/context/AuthContext";
import {
  RecoverContext,
  RecoverContextProvider,
} from "lib/context/RecoverContext";
import background from "assets/background.png";
import { LoginProps } from "./index";

const Login: React.FC<LoginProps> = () => {
  const { login, authStatus } = useContext(AuthContext);
  const { activeForm, recoverStatus, recover, setActiveForm } = useContext(
    RecoverContext
  );

  return (
    <RecoverContextProvider>
      <HvLogin background={background}>
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
