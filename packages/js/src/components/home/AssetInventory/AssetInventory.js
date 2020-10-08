import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Cards, List } from "@hv/uikit-react-icons";
import { HvAssetInventory } from "@hv/uikit-react-core";
import CardView from "../CardView";
import ListView from "../ListView";
import configuration from "./configuration";
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
      searchProps={{ "aria-label": labels.search }}
      sortProps={{ labels: { select: labels.sort } }}
      multibuttonProps={[
        { id: "card", icon: <Cards />, "aria-label": labels.cardView, title: labels.cardView  },
        { id: "list", icon: <List />, "aria-label": labels.listView, title: labels.listView }
      ]}>
      <CardView id="card" />
      <ListView id="list" />
    </HvAssetInventory>
  );
};

AssetInventory.propTypes = {
  redirect: PropTypes.func,
  assets: PropTypes.arrayOf(Object),
  getAssetsData: PropTypes.func
};

export default AssetInventory;
