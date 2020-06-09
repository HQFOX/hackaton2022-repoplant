import React from "react";
import { useTranslation } from "react-i18next";
import { HvGrid, HvTypography } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { BarChart, Kpis, LineChart, Table } from "components/details";
import { DetailsProps } from ".";

const Details: React.FC<DetailsProps> = ({ classes }: DetailsProps) => {
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

export default withLayout(Details);
