import React from "react";
import { useTranslation } from "react-i18next";
import { Level0Good as Good } from "@hv/uikit-react-icons";
import { HvGrid, HvTypography } from "@hv/uikit-react-core";

const Kpis: React.FC = () => {
  const { t } = useTranslation();

  const labels = {
    title: t("components.details.kpis.title"),
    indicator: t("components.details.kpis.indicator"),
    comparisonIndicatorInfo: t("components.details.kpis.comparisonIndicatorInfo"),
    comparisonIndicator: t("components.details.kpis.comparisonIndicator")
  };

  return (
    <>
      <HvGrid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <HvTypography variant="highlightText">{labels.title}</HvTypography>
        <div style={{display: "inline-flex", marginTop: "10px", minHeight: "16px", alignItems: "flex-end", marginBottom: "10px"}}>
          <HvTypography variant={"lTitle"}>{labels.indicator}</HvTypography>
        </div>
        <HvTypography variant="highlightText">{labels.comparisonIndicator}</HvTypography>
        <HvTypography variant="vizText">{labels.comparisonIndicatorInfo}</HvTypography>
      </HvGrid>
      <HvGrid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <HvTypography variant="highlightText">{labels.title}</HvTypography>
        <div style={{display: "inline-flex", marginTop: "10px", minHeight: "16px", alignItems: "flex-end", marginBottom: "10px"}}>
          <div style={{marginRight: "10px", height: "40px", display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "transparent"}}>
            <Good semantic="sema1" />
          </div>
          <HvTypography variant={"lTitle"}>{labels.indicator}</HvTypography>
        </div>
      </HvGrid>
      <HvGrid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <HvTypography variant="highlightText">{labels.title}</HvTypography>
        <div style={{display: "inline-flex", marginTop: "10px", minHeight: "16px", alignItems: "flex-end", marginBottom: "10px"}}>
          <HvTypography variant={"lTitle"}>{labels.indicator}</HvTypography>
        </div>
      </HvGrid>
    </>
  );
};

export default Kpis;
