import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  HvButton,
  HvTypography,
  HvLabel,
  HvBaseInput,
} from "@hitachivantara/uikit-react-core";

import Message from "../Message";
import useStyles from "./styles";

interface RecoverFormProps {
  onSubmit: (email: string) => void;
  onCancel: () => void;
  status: string;
}

const RecoverForm: React.FC<RecoverFormProps> = ({
  onSubmit,
  onCancel,
  status,
}: RecoverFormProps) => {
  const { t } = useTranslation("login");
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const isPending = status === "pending";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <div className={classes.root}>
      <HvTypography variant="mTitle">{t("recoverForm.title")}</HvTypography>

      {(isError || isSuccess) && (
        <Message
          message={{
            error: t("recoverForm.error"),
            success: t("recoverForm.success"),
          }}
          status={status}
        />
      )}

      <HvTypography variant="normalText">
        {t("recoverForm.subtitle")}
      </HvTypography>

      <HvLabel id="email-label" label={t("recoverForm.email.label")}>
        <HvBaseInput
          id="email-input"
          placeholder={t("recoverForm.email.placeholder")}
          value={email}
          inputProps={{ autoFocus: true }}
          onChange={(
            evt: React.ChangeEvent<HTMLInputElement>,
            value: string
          ): string => {
            setEmail(evt.target.value);
            return value;
          }}
        />
      </HvLabel>

      <HvButton
        type="submit"
        category="ghost"
        className={classes.cancel}
        onClick={onCancel}
      >
        {t("recoverForm.cancel")}
      </HvButton>

      <HvButton
        type="submit"
        category="primary"
        className={classes.recover}
        onClick={() => onSubmit(email)}
        disabled={isPending}
      >
        {isPending
          ? t("recoverForm.submit.recovering")
          : t("recoverForm.submit.recover")}
      </HvButton>
    </div>
  );
};

export default RecoverForm;
