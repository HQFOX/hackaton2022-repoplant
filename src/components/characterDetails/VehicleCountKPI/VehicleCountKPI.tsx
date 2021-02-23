import React from "react";
import { useTranslation } from "react-i18next";
import { CountKPI } from "components/common";
import { avg } from "lib/utils/measures";
import { VehicleCountKPIProps } from "./index";
import { useCharactersVehicleCount } from "./data";

const VehicleCountKPI: React.FC<VehicleCountKPIProps> = ({ count }) => {
  const { t } = useTranslation();

  const { data } = useCharactersVehicleCount();

  const vehicleCountAvg = avg(
    data?.allPeople.people.map((people) => people.vehicleConnection.totalCount)
  );

  return (
    <CountKPI
      title={t("components.characterDetails.vehicleCountKPI.title")}
      count={count}
      diff={count - vehicleCountAvg}
    />
  );
};
export default VehicleCountKPI;
