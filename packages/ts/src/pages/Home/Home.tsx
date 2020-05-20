import React from "react";
import { useTranslation } from "react-i18next";
import { HvTypography } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { AssetInventory } from "components/home";
import { HomeStyles } from ".";

const Home: React.FC<HomeStyles> = ({ classes }) => {
  const { t } = useTranslation();

  return (
    <div>
      <HvTypography variant="3xlTitle" className={classes.title}>
        {t("pages.home.assets")}
      </HvTypography>
      <AssetInventory />
    </div>
  );
};

export default withLayout(Home);
