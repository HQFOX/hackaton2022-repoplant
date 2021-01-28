import React, { useContext } from "react";
import { HvLogin } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { LoginForm, RecoverForm } from "components/login";
import { AuthContext, RecoverContext } from "lib/context/AuthContext";
import { useRecover } from "lib/hooks/useAuth";
import { LoginProps } from "./index";

const Login: React.FC<LoginProps> = () => {
  const { login, authStatus } = useContext(AuthContext);
  const { recoverStatus, activeForm, setActiveForm, recover } = useRecover();

  return (
    <RecoverContext.Provider
      value={{
        recoverStatus,
        activeForm,
        setActiveForm,
        recover,
      }}
    >
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
    </RecoverContext.Provider>
  );
};

export default withLayout(Login, true);
