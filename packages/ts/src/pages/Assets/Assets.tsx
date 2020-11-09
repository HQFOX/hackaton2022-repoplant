import React from "react";
import { useTranslation } from "react-i18next";
import { HvTypography } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { AssetInventory } from "components/assets";
import { AssetsStyles } from ".";

const Assets: React.FC<AssetsStyles> = ({ classes }) => {
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

export default withLayout(Assets);
