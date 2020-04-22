import React from "react";
import PropTypes from "prop-types";
import HvTypography from "@hv/uikit-react-core/dist/Typography";
import HvGrid from "@hv/uikit-react-core/dist/Grid";
import { useTranslation } from "react-i18next";
import withLayout from "lib/hocs/withLayout";
import AssetInventory from "components/overview/AssetInventory";

const Overview = ({ classes }) => {
  const { t } = useTranslation();

  return (
    <HvGrid container>
      <HvGrid item xl={12}>
        <HvTypography variant="3xlTitle" className={classes.title}>
          {t("pages.overview.title")}
        </HvTypography>
      </HvGrid>
      <HvGrid item xl={12}>
        <AssetInventory />
      </HvGrid>
    </HvGrid>
  );
};

Overview.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withLayout(Overview);
