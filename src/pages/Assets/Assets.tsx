import React from "react";
import withLayout from "lib/hocs/withLayout";
import { AssetInventory } from "components/assets";
import { AssetsStyles } from ".";

const Assets: React.FC<AssetsStyles> = () => {
  return <AssetInventory />;
};

export default withLayout(Assets);
