import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  HvButton,
  HvTypography,
  HvFormElement,
  HvLabel,
  HvBaseInput
} from "@hv/uikit-react-core";

const DUMMY_CREDENTIALS = { username: "someUser", passwor: "somePassword" };

const LoginForm = ({ classes, login }) => {
  const [inputValue, setInputValue] = useState("");
  const [status, setstatus] = useState("standBy");

  const handleSubmit = evt => {
    evt.preventDefault();
    login(DUMMY_CREDENTIALS);
  };

  const Login = () => (
    <HvFormElement classes={{ root: classes.root }}>
      <HvTypography variant="mTitle">Welcome</HvTypography>
      <HvLabel label="Username" classes={{ root: classes.input }}>
        <HvBaseInput placeholder="Enter text" />
      </HvLabel>
      <HvLabel label="Password" classes={{ root: classes.input }}>
        <HvBaseInput
          placeholder="Enter text"
          inputProps={{
            type: "password"
          }}
        />
      </HvLabel>
      <HvButton
        type="submit"
        category="primary"
        className={clsx(classes.button, classes.sentenceCase)}>
        Login
      </HvButton>
    </HvFormElement>
  );

  return <Login />;

  // return (
  //   <form className={classes.root} onSubmit={evt => handleSubmit(evt)}>
  //     <div className={classes.title}>
  //       <HvTypography variant="mTitle">Title</HvTypography>
  //     </div>

  //     <div className={classes.inputUser}>
  //       <HvInput
  //         labels={{
  //           inputLabel: "Username",
  //           placeholder: "",
  //           infoText: ""
  //         }}
  //         name="username"
  //         password={false}
  //         autoFocus
  //       />
  //     </div>

  //     <div className={classes.inputPassword}>
  //       <HvInput
  //         labels={{
  //           inputLabel: "Password",
  //           placeholder: "",
  //           infoText: ""
  //         }}
  //         name="password"
  //         password
  //       />
  //     </div>

  //     <div className={classes.buttonsContainer}>
  //       <HvButton
  //         type="submit"
  //         category="primary"
  //         className={clsx(classes.button, classes.sentenceCase)}>
  //         Login
  //       </HvButton>
  //     </div>
  //   </form>
  // );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginForm;
