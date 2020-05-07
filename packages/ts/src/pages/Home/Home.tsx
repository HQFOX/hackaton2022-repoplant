import React from "react";
import { HvTypography } from "@hv/uikit-react-core/dist";
import withLayout from "lib/hocs/withLayout";
import { AssetInventory } from "components/home";

const Home: React.FC = () => (
  <div>
    <HvTypography variant="3xlTitle" style={{ marginLeft: 15 }}>
      Assets
    </HvTypography>
    <AssetInventory />
  </div>
);

export default withLayout(Home);
