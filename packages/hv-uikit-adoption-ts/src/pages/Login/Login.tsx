import React from "react";
import withLayout from "lib/hocs/withLayout";
import { LoginForm } from "components/login";
import { LoginProps } from "./index";

const Login: React.FC<LoginProps> = ({ classes, login }: LoginProps) => {
  return (
    <div className={classes.root}>
      <LoginForm login={login} />
    </div>
  );
};

export default withLayout(Login, true);
