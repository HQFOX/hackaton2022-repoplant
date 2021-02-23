import React from "react";
import { useTranslation } from "react-i18next";
import { CountKPI } from "components/common";
import { avg } from "lib/utils/measures";
import { StarshipCountKPIProps } from "./index";
import { useCharactersStarshipCount } from "./data";

const StarshipCountKPI: React.FC<StarshipCountKPIProps> = ({ count }) => {
  const { t } = useTranslation();

  const { data } = useCharactersStarshipCount();

  const starshipCountAvg = avg(
    data?.allPeople.people.map((people) => people.starshipConnection.totalCount)
  );

  return (
    <CountKPI
      title={t("components.characterDetails.starshipCountKPI.title")}
      count={count}
      diff={count - starshipCountAvg}
    />
  );
};
export default StarshipCountKPI;
