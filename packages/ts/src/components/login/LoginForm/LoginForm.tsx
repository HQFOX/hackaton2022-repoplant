import React from "react";
import { HvLogin } from "@hv/uikit-react-core";
import { AuthCredentials } from "typings/auth";
import { LoginFormProps } from "./index";

const LoginForm: React.FC<LoginFormProps> = ({ login }: LoginFormProps) => (
  <HvLogin login={async (credentials: AuthCredentials) => login(credentials)} />
);

export default LoginForm;
