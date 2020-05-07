import React from "react";
import PropTypes from "prop-types";
import { HvGrid, HvTypography } from "@hv/uikit-react-core/dist";
import withLayout from "lib/hocs/withLayout";
import BarChart from "components/details/BarChart";
import Kpis from "components/details/Kpis";
import LineChart from "components/details/LineChart";
import Table from "components/details/Table";

const Details = ({ classes }) => {
  return (
    <HvGrid container>
      <HvGrid container item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Kpis />
      </HvGrid>
      <HvGrid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Table />
      </HvGrid>
      <HvGrid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <HvTypography variant="mTitle" className={classes.title}>
          Insight
        </HvTypography>
        <LineChart />
      </HvGrid>
      <HvGrid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <HvTypography variant="mTitle" className={classes.title}>
          Story
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
