import React from "react";
import { useTranslation } from "react-i18next";
import {
  HvGrid,
  HvTypography,
  HvCard,
  HvCardHeader,
} from "@hv/uikit-react-core";

import withLayout from "lib/hocs/withLayout";
import { OverviewProps, useSpaceships } from "./index";

const Overview: React.FC<OverviewProps> = () => {
  const { t } = useTranslation();

  const { data } = useSpaceships();

  return (
    <>
      <HvGrid container alignItems="center">
        <HvGrid item xs={4} md={8}>
          <HvTypography variant="xlTitle">
            {t("pages.overview.title")}
          </HvTypography>
        </HvGrid>
      </HvGrid>
      <HvGrid container alignItems="center">
        {data?.allStarships.edges.map(({ node: { id, name, model } }) => (
          <HvGrid key={id} item xs={3}>
            <HvCard bgcolor="atmo1">
              <HvCardHeader title={name} subheader={model} />
            </HvCard>
          </HvGrid>
        ))}
      </HvGrid>
    </>
  );
};

export default withLayout(Overview);
