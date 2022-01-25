import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import {
  HvButton,
  HvTypography,
  HvLabel,
  HvBaseInput,
  HvCheckBox,
} from "@hitachivantara/uikit-react-core";

import Message from "../Message";
import useStyles from "./styles";

interface LoginFormProps {
  onSubmit: (credentials: AuthCredentials) => void;
  onForgot: () => void;
  status: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onForgot,
  status,
}: LoginFormProps) => {
  const { t } = useTranslation("login");
  const classes = useStyles();

  const [credentials, setCredentials] = useState<AuthCredentials>({
    username: "admin",
    password: "password",
  });

  const isPending = status === "pending";
  const isError = status === "error";

  const handleChange = (value: string, key: string): void => {
    const newCredentials: AuthCredentials = {
      ...credentials,
      ...{ [key]: value },
    };
    setCredentials(newCredentials);
  };

  return (
    <div className={classes.root}>
      <HvTypography variant="mTitle" className={classes.title}>
        {t("loginForm.title")}
      </HvTypography>

      {isError && (
        <Message
          message={{
            error: t("loginForm.error"),
          }}
          status={status}
        />
      )}

      <HvLabel
        id="username-label"
        label={t("loginForm.username.label")}
        classes={{ root: classes.input }}
      >
        <HvBaseInput
          id="username-input"
          placeholder={t("loginForm.username.placeholder")}
          value={credentials.username}
          inputProps={{ autoFocus: true }}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement>,
            value: string
          ): string => {
            handleChange(value, "username");
            return value;
          }}
        />
      </HvLabel>

      <HvLabel
        id="password-label"
        label={t("loginForm.password.label")}
        classes={{ root: classes.input }}
      >
        <HvBaseInput
          id="password-input"
          placeholder={t("loginForm.password.placeholder")}
          value={credentials.password}
          inputProps={{
            type: "password",
          }}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement>,
            value: string
          ): string => {
            handleChange(value, "password");
            return value;
          }}
        />
      </HvLabel>

      <HvCheckBox
        classes={{
          container: classes.checkBox,
        }}
        label={t("loginForm.remember")}
      />

      <HvButton
        type="submit"
        category="primary"
        className={clsx(classes.login, classes.sentenceCase)}
        onClick={() => onSubmit(credentials)}
        disabled={isPending}
      >
        {isPending
          ? t("loginForm.submit.logging")
          : t("loginForm.submit.login")}
      </HvButton>

      <HvButton
        category="ghost"
        classes={{
          root: classes.forgot,
        }}
        className={clsx(classes.sentenceCase)}
        onClick={onForgot}
        disabled={isPending}
      >
        {t("loginForm.forgot")}
      </HvButton>
    </div>
  );
};

export default LoginForm;
