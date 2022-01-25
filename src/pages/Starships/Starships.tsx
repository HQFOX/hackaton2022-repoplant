import React from "react";
import { HvGrid } from "@hitachivantara/uikit-react-core";

import StarshipsTable from "components/starships/StarshipsTable";
import { Container } from "components/layout";

const Starships: React.FC = () => {
  return (
    <Container>
      <HvGrid container>
        <HvGrid item xs={12}>
          <StarshipsTable />
        </HvGrid>
      </HvGrid>
    </Container>
  );
};

export default Starships;
