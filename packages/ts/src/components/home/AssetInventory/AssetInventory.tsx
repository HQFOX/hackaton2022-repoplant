import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Cards, List } from "@hv/uikit-react-icons";
import { HvAssetInventory, HvCardView, HvListView } from "@hv/uikit-react-core";
import { fetchAssets } from "lib/api/assets";
import configuration from "./configuration";
import { cardRenderer, rowRenderer } from "./renderers";
import actions from "./actions";

const AssetInventory = () => {
  const history = useHistory();
  const { t } = useTranslation();
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

  const labels = {
    sort: t("components.home.assetInventory.sortLabel"),
    search: t("components.home.assetInventory.searchLabel"),
    cardView: t("components.home.assetInventory.cardViewLabel"),
    listView: t("components.home.assetInventory.listViewLabel")
  };

  return (
    <HvAssetInventory
      values={data}
      configuration={configuration}
      actions={actions}
      actionsCallback={handleAction}
      labels={{ placeholder: labels.search }}
      searchProps={{ ariaLabel: labels.search }}
      sortProps={{ labels: { select: labels.sort } }}
      multibuttonProps={[
        { id: "card", "aria-label": labels.cardView, title: labels.cardView },
        { id: "list", "aria-label": labels.listView, title: labels.listView }
      ]}>
      <HvCardView id="card" icon={<Cards />} renderer={cardRenderer} />
      <HvListView id="list" icon={<List />} renderer={rowRenderer} />
    </HvAssetInventory>
  );
};

export default AssetInventory;
