import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import HvAssetInventory from "@hv/uikit-react-core/dist/AssetInventory";
import HvCardView from "@hv/uikit-react-core/dist/AssetInventory/CardView";
import HvListView from "@hv/uikit-react-core/dist/AssetInventory/ListView";
import Cards from "@hv/uikit-react-icons/dist/Cards";
import List from "@hv/uikit-react-icons/dist/List";
import CardRender from "../CardRender";
import ListRender from "../ListRender";
import configuration from "./configuration";
import { fetchAssets } from "../../../lib/api/assets";

const actions = [{ id: "details", label: "Details", disabled: false }];

const AssetInventory = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  const handleAction = id => {
    history.push(`/asset/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAssets();
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    data.length > 0 && (
      <HvAssetInventory
        values={data}
        configuration={configuration}
        actions={actions}
        maxVisibleActions={3}
        actionsCallback={handleAction}>
        <HvCardView id="card" icon={<Cards />} renderer={CardRender} />
        <HvListView id="list" icon={<List />} renderer={ListRender} />
      </HvAssetInventory>
    )
  );
};

export default AssetInventory;
