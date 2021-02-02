import React from "react";
import {
  HvTypography,
  HvCard,
  HvCardHeader,
  HvCardContent,
} from "@hv/uikit-react-core";
import { Top, Bottom } from "@hv/uikit-react-icons";
import { useTheme } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { VehicleCountKPIProps } from "./index";
import { useCharactersVehicleCount } from "./data";
import useStyles from "./styles";

const VehicleCountKPI: React.FC<VehicleCountKPIProps> = ({ count }) => {
  const { hv } = useTheme();
  const { t } = useTranslation();
  const classes = useStyles();

  const { data } = useCharactersVehicleCount();

  const vehicleCountAvg =
    data?.allPeople.people
      .map((people) => people.vehicleConnection.totalCount)
      .reduce((a, b) => {
        return a + b;
      }) / data?.allPeople.totalCount;
  const diff = count - vehicleCountAvg;

  return (
    <HvCard bgcolor="atmo1">
      <HvCardHeader
        title={t("components.characterDetails.vehicleCountKPI.title")}
      />
      <HvCardContent className={classes.content}>
        <HvTypography variant="xlTitle">{count}</HvTypography>
        {diff > 0 && (
          <>
            <Top
              color={hv.palette.semantic.sema1}
              className={classes.indicatorIcon}
            />
            <HvTypography variant="normalText">{`${diff.toFixed(2)} ${t(
              "components.characterDetails.vehicleCountKPI.more"
            )}`}</HvTypography>
          </>
        )}
        {diff < 0 && (
          <>
            <Bottom
              color={hv.palette.semantic.sema3}
              className={classes.indicatorIcon}
            />
            <HvTypography variant="normalText">{`${Math.abs(diff).toFixed(
              2
            )} ${t(
              "components.characterDetails.vehicleCountKPI.less"
            )}`}</HvTypography>
          </>
        )}
      </HvCardContent>
    </HvCard>
  );
};
export default VehicleCountKPI;
