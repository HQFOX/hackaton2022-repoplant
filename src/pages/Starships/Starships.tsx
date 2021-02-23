import React from "react";
import { HvGrid } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { StarshipsTable } from "components/starships";
import { StarshipsProps } from ".";

const Starships: React.FC<StarshipsProps> = () => {
  return (
    <HvGrid container>
      <HvGrid item xs={12}>
        <StarshipsTable />
      </HvGrid>
    </HvGrid>
  );
};

export default withLayout(Starships);
