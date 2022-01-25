import React, { useContext } from "react";
import { HvLogin, HvFooter } from "@hitachivantara/uikit-react-core";

import {
  RecoverContext,
  RecoverContextProvider,
} from "lib/context/RecoverContext";
import { AuthContext } from "lib/context/AuthContext";
import { Container } from "components/layout";
import { LoginForm, RecoverForm } from "components/login";
import background from "assets/background.png";

const Login: React.FC = () => {
  const { login, authStatus } = useContext(AuthContext);
  const { activeForm, recoverStatus, recover, setActiveForm } =
    useContext(RecoverContext);

  return (
    <RecoverContextProvider>
      <Container fullScreen>
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
      </Container>
      <HvFooter />
    </RecoverContextProvider>
  );
};

export default Login;
