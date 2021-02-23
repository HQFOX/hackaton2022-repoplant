import React from "react";
import { useTranslation } from "react-i18next";
import { CountKPI } from "components/common";
import { avg } from "lib/utils/measures";
import { MovieCountKPIProps } from "./index";
import { useCharactersFilmCount } from "./data";

const MovieCountKPI: React.FC<MovieCountKPIProps> = ({ count }) => {
  const { t } = useTranslation();

  const { data } = useCharactersFilmCount();

  const filmCountAvg = avg(
    data?.allPeople.people.map((people) => people.filmConnection.totalCount)
  );

  return (
    <CountKPI
      title={t("components.characterDetails.movieCountKPI.title")}
      count={count}
      diff={count - filmCountAvg}
    />
  );
};
export default MovieCountKPI;
