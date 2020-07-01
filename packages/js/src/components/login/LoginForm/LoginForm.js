import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import {
  HvButton,
  HvTypography,
  HvFormElement,
  HvLabel,
  HvBaseInput,
  HvCheckBox
} from "@hv/uikit-react-core";
import Message from "../Message";

const DUMMY_CREDENTIALS = { username: "admin", password: "password" };

const LoginForm = ({ classes, onSubmit, onForgot, status }) => {
  const { t } = useTranslation();
  const [credentials, setCredentials] = useState(DUMMY_CREDENTIALS);
  const isPending = status === "pending";
  const isError = status === "error";

  const handleChange = (evt, key) => {
    const newCredentials = {
      ...credentials,
      ...{ [key]: evt.target.value }
    };
    setCredentials(newCredentials);
  };

  return (
    <div className={classes.root}>
      <HvTypography variant="mTitle">
        {t("pages.login.loginForm.title")}
      </HvTypography>

      {isError && (
        <Message
          message={{
            error: t("pages.login.loginForm.error")
          }}
          status={status}
        />
      )}

      <HvLabel
        id="username-label"
        label={t("pages.login.loginForm.username.label")}
        classes={{ root: classes.input }}>
        <HvBaseInput
          id="username-input"
          placeholder={t("pages.login.loginForm.username.plaholder")}
          value={credentials.username}
          inputProps={{ autoFocus: true }}
          onChange={evt => handleChange(evt, "username")}
        />
      </HvLabel>

      <HvLabel
        id="password-label"
        label={t("pages.login.loginForm.password.label")}
        classes={{ root: classes.input }}>
        <HvBaseInput
          id="password-input"
          placeholder={t("pages.login.loginForm.password.placeholder")}
          value={credentials.password}
          inputProps={{
            type: "password"
          }}
          onChange={evt => handleChange(evt, "password")}
        />
      </HvLabel>

      <HvCheckBox
        classes={{
          container: classes.checkBox,
          labelTypography: classes.checkBoxTypography
        }}
        label={t("pages.login.loginForm.remember")}
      />

      <HvButton
        type="submit"
        category="primary"
        className={clsx(classes.login, classes.sentenceCase)}
        onClick={() => onSubmit(credentials)}
        disabled={isPending}>
        {isPending
          ? t("pages.login.loginForm.submit.logging")
          : t("pages.login.loginForm.submit.login")}
      </HvButton>

      <HvButton
        category="ghost"
        classes={{
          root: classes.forgot
        }}
        className={clsx(classes.sentenceCase)}
        onClick={onForgot}
        disabled={isPending}>
        {t("pages.login.loginForm.forgot")}
      </HvButton>
    </div>
  );
};

LoginForm.propTypes = {
  /**
   * The classes object to be applied into the root object.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to root.
     */
    root: PropTypes.string.isRequired,
    /**
     * Styles applied to input.
     */
    input: PropTypes.string.isRequired,
    /**
     * Styles applied to checkbox.
     */
    checkBox: PropTypes.string.isRequired,
    /**
     * Styles applied to checkboxTypography.
     */
    checkBoxTypography: PropTypes.string.isRequired,
    /**
     * Styles applied to login.
     */
    login: PropTypes.string.isRequired,
    /**
     * Styles applied to sentenceCase.
     */
    sentenceCase: PropTypes.string.isRequired,
    /**
     * Styles applied to forgot.
     */
    forgot: PropTypes.string.isRequired
  }).isRequired,
  /**
   * Callback to trigger on login action.
   */
  onSubmit: PropTypes.func.isRequired,
  /**
   * Callback to trigger on forgot action.
   */
  onForgot: PropTypes.func.isRequired,
  /**
   * Login status.
   */
  status: PropTypes.string.isRequired
};

export default LoginForm;
