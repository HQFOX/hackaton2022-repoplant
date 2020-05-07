import React from "react";
import { HvGrid, HvTypography } from "@hv/uikit-react-core/dist";
import withLayout from "lib/hocs/withLayout";
import { BarChart, Kpis, LineChart, Table } from "components/details";
import { DetailsProps } from ".";

const Details: React.FC<DetailsProps> = ({ classes }: DetailsProps) => {
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

export default withLayout(Details);
