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
import { StarshipCountKPIProps } from "./index";
import { useCharactersStarshipCount } from "./data";
import useStyles from "./styles";

const StarshipCountKPI: React.FC<StarshipCountKPIProps> = ({ count }) => {
  const { hv } = useTheme();
  const { t } = useTranslation();
  const classes = useStyles();

  const { data } = useCharactersStarshipCount();

  const starshipCountAvg =
    data?.allPeople.people
      .map((people) => people.starshipConnection.totalCount)
      .reduce((a, b) => {
        return a + b;
      }) / data?.allPeople.totalCount;
  const diff = count - starshipCountAvg;

  return (
    <HvCard bgcolor="atmo1">
      <HvCardHeader
        title={t("components.characterDetails.starshipCountKPI.title")}
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
              "components.characterDetails.starshipCountKPI.more"
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
              "components.characterDetails.starshipCountKPI.less"
            )}`}</HvTypography>
          </>
        )}
      </HvCardContent>
    </HvCard>
  );
};
export default StarshipCountKPI;
