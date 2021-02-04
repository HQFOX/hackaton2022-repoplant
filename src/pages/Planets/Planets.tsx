import React from "react";
import { HvGrid } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { PlanetsTable } from "components/planets";
import { PlanetsProps } from ".";

const Planets: React.FC<PlanetsProps> = () => {
  return (
    <HvGrid container>
      <HvGrid item xs={12}>
        <PlanetsTable />
      </HvGrid>
    </HvGrid>
  );
};

export default withLayout(Planets);
