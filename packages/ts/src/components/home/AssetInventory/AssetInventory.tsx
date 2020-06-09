import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Cards, List } from "@hv/uikit-react-icons";
import { HvAssetInventory, HvCardView, HvListView } from "@hv/uikit-react-core";
import configuration from "./configuration";
import { cardRenderer, rowRenderer } from "./renderers";
import actions from "./actions";

const AssetInventory = ({ redirect, assets, getAssetsData }) => {
  const { t } = useTranslation();

  const handleAction = (event, id, action) => {
    redirect(`/asset/${action.id}`);
  };

  useEffect(() => {
    getAssetsData();
  }, [getAssetsData]);

  const labels = {
    sort: t("components.home.assetInventory.sortLabel"),
    search: t("components.home.assetInventory.searchLabel"),
    cardView: t("components.home.assetInventory.cardViewLabel"),
    listView: t("components.home.assetInventory.listViewLabel")
  };

  return (
    <HvAssetInventory
      values={assets}
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
