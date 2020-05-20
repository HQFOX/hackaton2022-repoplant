import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { HvGrid, HvTypography } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import BarChart from "components/details/BarChart";
import Kpis from "components/details/Kpis";
import LineChart from "components/details/LineChart";
import Table from "components/details/Table";

const Details = ({ classes }) => {
  const { t } = useTranslation();

  return (
    <HvGrid container>
      <HvGrid container item xs={12}>
        <Kpis />
      </HvGrid>
      <HvGrid item xs={12}>
        <Table />
      </HvGrid>
      <HvGrid item xs={12}>
        <HvTypography variant="mTitle" className={classes.title}>
          {t("pages.details.insight")}
        </HvTypography>
        <LineChart />
      </HvGrid>
      <HvGrid item xs={12}>
        <HvTypography variant="mTitle" className={classes.title}>
          {t("pages.details.story")}
        </HvTypography>
        <BarChart />
      </HvGrid>
    </HvGrid>
  );
};

Details.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withLayout(Details);
