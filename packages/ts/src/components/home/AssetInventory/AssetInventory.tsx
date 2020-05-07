import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Cards, List } from "@hv/uikit-react-icons/dist";
import {
  HvAssetInventory,
  HvCardView,
  HvListView
} from "@hv/uikit-react-core/dist";
import { fetchAssets } from "lib/api/assets";
import configuration from "./configuration";
import { cardRenderer, rowRenderer } from "./renderers";
import actions from "./actions";

const AssetInventory = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  const handleAction = (event, id) => {
    history.push(`/asset/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAssets();
      // @ts-ignore
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <HvAssetInventory
      values={data}
      configuration={configuration}
      actions={actions}
      actionsCallback={handleAction}>
      <HvCardView id="card" icon={<Cards />} renderer={cardRenderer} />
      <HvListView id="list" icon={<List />} renderer={rowRenderer} />
    </HvAssetInventory>
  );
};

export default AssetInventory;
