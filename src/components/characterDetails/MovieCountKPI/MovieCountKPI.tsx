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
import { MovieCountKPIProps } from "./index";
import { useCharactersFilmCount } from "./data";
import useStyles from "./styles";

const MovieCountKPI: React.FC<MovieCountKPIProps> = ({ count }) => {
  const { hv } = useTheme();
  const { t } = useTranslation();
  const classes = useStyles();

  const { data } = useCharactersFilmCount();

  const filmCountAvg =
    data?.allPeople.people
      .map((people) => people.filmConnection.totalCount)
      .reduce((a, b) => {
        return a + b;
      }) / data?.allPeople.totalCount;
  const diff = count - filmCountAvg;

  return (
    <HvCard bgcolor="atmo1">
      <HvCardHeader
        title={t("components.characterDetails.movieCountKPI.title")}
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
              "components.characterDetails.movieCountKPI.more"
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
              "components.characterDetails.movieCountKPI.less"
            )}`}</HvTypography>
          </>
        )}
      </HvCardContent>
    </HvCard>
  );
};
export default MovieCountKPI;
