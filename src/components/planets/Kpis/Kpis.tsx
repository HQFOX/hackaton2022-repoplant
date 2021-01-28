import React from "react";
import { useTranslation } from "react-i18next";
import { Level0Good as Good } from "@hv/uikit-react-icons";
import { HvGrid, HvKpi, HvTypography } from "@hv/uikit-react-core";

const Kpis: React.FC = () => {
  const { t } = useTranslation();

  const labels = {
    title: t("components.planets.kpis.title"),
    indicator: t("components.planets.kpis.indicator"),
    comparisonIndicatorInfo: t(
      "components.planets.kpis.comparisonIndicatorInfo"
    ),
    comparisonIndicator: t("components.planets.kpis.comparisonIndicator"),
  };

  return (
    <>
      <HvGrid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <HvKpi
          labels={labels}
          visualComparison={
            <HvTypography variant="highlightText">
              {labels.comparisonIndicator}
            </HvTypography>
          }
        />
      </HvGrid>
      <HvGrid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <HvKpi labels={labels} visualIndicator={<Good semantic="sema1" />} />
      </HvGrid>
      <HvGrid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <HvKpi labels={labels} />
      </HvGrid>
    </>
  );
};

export default Kpis;
