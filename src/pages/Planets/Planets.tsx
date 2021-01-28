import React from "react";
import { HvGrid } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { Kpis, Table } from "components/planets";
import { PlanetsProps } from ".";

const Planets: React.FC<PlanetsProps> = () => {
  return (
    <HvGrid container>
      <HvGrid container item xs={12}>
        <Kpis />
      </HvGrid>
      <HvGrid item xs={12}>
        <Table />
      </HvGrid>
    </HvGrid>
  );
};

export default withLayout(Planets);
