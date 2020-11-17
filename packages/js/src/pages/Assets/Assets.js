import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { HvTypography } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import AssetInventory from "components/assets/AssetInventory";

const Assets = ({ classes }) => {
  const { t } = useTranslation();

  return (
    <div>
      <HvTypography variant="3xlTitle" className={classes.title}>
        {t("pages.assets.title")}
      </HvTypography>
      <AssetInventory />
    </div>
  );
};

Assets.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withLayout(Assets);
