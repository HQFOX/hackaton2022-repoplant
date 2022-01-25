import React from "react";
import { useTranslation } from "react-i18next";

import { useStarshipCountQuery, StarshipCountQuery } from "generated/graphql";
import { CountKPI } from "components/common";
import { avg } from "lib/utils/measures";

interface StarshipCountKPIProps {
  count: number;
}

const StarshipCountKPI: React.FC<StarshipCountKPIProps> = ({ count }) => {
  const { t } = useTranslation("characterDetails");
  const { data } = useStarshipCountQuery();

  const starshipCount: StarshipCountQuery[] | undefined =
    data?.allPeople?.people?.map(
      (person) => person?.starshipConnection?.totalCount as StarshipCountQuery
    );

  const starshipCountAvg = avg(starshipCount as number[]);

  return (
    <CountKPI
      title={t("kpis.starshipCountKPI.title")}
      count={count}
      diff={count - starshipCountAvg}
    />
  );
};
export default StarshipCountKPI;
