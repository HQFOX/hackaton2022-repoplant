import React from "react";
import { useTranslation } from "react-i18next";

import { useFilmCountQuery, FilmCountQuery } from "generated/graphql";
import { CountKPI } from "components/common";
import { avg } from "lib/utils/measures";

interface MovieCountKPIProps {
  count: number;
}

const MovieCountKPI: React.FC<MovieCountKPIProps> = ({ count }) => {
  const { t } = useTranslation("characterDetails");
  const { data } = useFilmCountQuery();

  const filmTotalCount: FilmCountQuery[] | undefined =
    data?.allPeople?.people?.map(
      (person) => person?.filmConnection?.totalCount as FilmCountQuery
    );

  const filmCountAvg = avg(filmTotalCount as number[]);

  return (
    <CountKPI
      title={t("kpis.movieCountKPI.title")}
      count={count}
      diff={count - filmCountAvg}
    />
  );
};
export default MovieCountKPI;
