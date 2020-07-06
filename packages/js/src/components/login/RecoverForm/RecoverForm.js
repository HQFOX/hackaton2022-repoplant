import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  HvButton,
  HvTypography,
  HvLabel,
  HvBaseInput
} from "@hv/uikit-react-core";
import Message from "../Message";

const RecoverForm = ({ classes, onSubmit, onCancel, status }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const isPending = status === "pending";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <div className={classes.root}>
      <HvTypography variant="mTitle" classes={{ root: classes.title }}>
        {t("pages.login.recoverForm.title")}
      </HvTypography>

      {(isError || isSuccess) && (
        <Message
          message={{
            error: t("pages.login.recoverForm.error"),
            success: t("pages.login.recoverForm.success")
          }}
          status={status}
        />
      )}

      <HvTypography variant="normalText" classes={{ root: classes.subtitle }}>
        {t("pages.login.recoverForm.subtitle")}
      </HvTypography>

      <HvLabel
        id="email-label"
        label={t("pages.login.recoverForm.email.label")}>
        <HvBaseInput
          id="email-input"
          placeholder={t("pages.login.recoverForm.email.placeholder")}
          value={email}
          inputProps={{ autoFocus: true }}
          onChange={evt => setEmail(evt.target.value)}
        />
      </HvLabel>

      <HvButton
        type="submit"
        category="ghost"
        className={classes.cancel}
        onClick={onCancel}>
        {t("pages.login.recoverForm.cancel")}
      </HvButton>

      <HvButton
        type="submit"
        category="primary"
        className={classes.recover}
        onClick={() => onSubmit(email)}
        disabled={isPending}>
        {isPending
          ? t("pages.login.recoverForm.submit.recovering")
          : t("pages.login.recoverForm.submit.recover")}
      </HvButton>
    </div>
  );
};

RecoverForm.propTypes = {
  /**
   * The classes object to be applied into the root object.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to root.
     */
    root: PropTypes.string.isRequired,
    /**
     * Styles applied to title.
     */
    title: PropTypes.string.isRequired,
    /**
     * Styles applied to subtitle.
     */
    subtitle: PropTypes.string.isRequired,
    /**
     * Styles applied to recover.
     */
    recover: PropTypes.string.isRequired,
    /**
     * Styles applied to cancel.
     */
    cancel: PropTypes.string.isRequired
  }).isRequired,
  /**
   * Callback to trigger on recover action.
   */
  onSubmit: PropTypes.func.isRequired,
  /**
   * Callback to trigger on cancel recover action.
   */
  onCancel: PropTypes.func.isRequired,
  /**
   * Recover status.
   */
  status: PropTypes.string.isRequired
};

export default RecoverForm;
