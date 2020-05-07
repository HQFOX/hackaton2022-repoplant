import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Cards, List } from "@hv/uikit-react-icons/dist";
import { HvAssetInventory } from "@hv/uikit-react-core/dist";
import { fetchAssets } from "lib/api/assets";
import CardView from "../CardView";
import ListView from "../ListView";
import configuration from "./configuration";
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
      <CardView id="card" icon={<Cards />} />
      <ListView id="list" icon={<List />} />
    </HvAssetInventory>
  );
};

AssetInventory.propTypes = {};

export default AssetInventory;
