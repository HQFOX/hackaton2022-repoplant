import React from "react";
import { useTranslation } from "react-i18next";

import { useVehicleCountQuery, VehicleCountQuery } from "generated/graphql";
import { CountKPI } from "components/common";
import { avg } from "lib/utils/measures";

interface VehicleCountKPIProps {
  count: number;
}

const VehicleCountKPI: React.FC<VehicleCountKPIProps> = ({ count }) => {
  const { t } = useTranslation("characterDetails");
  const { data } = useVehicleCountQuery();

  const vehicleCount: VehicleCountQuery[] | undefined =
    data?.allPeople?.people?.map(
      (person) => person?.vehicleConnection?.totalCount as VehicleCountQuery
    );

  const vehicleCountAvg = avg(vehicleCount as number[]);

  return (
    <CountKPI
      title={t("kpis.vehicleCountKPI.title")}
      count={count}
      diff={count - vehicleCountAvg}
    />
  );
};
export default VehicleCountKPI;
