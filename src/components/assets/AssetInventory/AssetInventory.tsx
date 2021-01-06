import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Cards, Fail, List } from "@hv/uikit-react-icons";
import {
  HvAssetInventory,
  HvCardView,
  HvEmptyState,
  HvListView,
} from "@hv/uikit-react-core";
import { actions, configuration } from "./utils";
import cardRenderer from "./Card";
import rowRenderer from "./Row";

const AssetInventory = ({ assets, getAssetsData }) => {
  const { t } = useTranslation();

  useEffect(() => {
    getAssetsData();
  }, [getAssetsData]);

  const labels = {
    search: t("components.assets.assetInventory.searchLabel"),
    cardView: t("components.assets.assetInventory.cardViewLabel"),
    listView: t("components.assets.assetInventory.listViewLabel"),
    noMessage: t("components.assets.assetInventory.noMessageLabel"),
  };

  return assets.length ? (
    <HvAssetInventory
      id="hv-assetinventory"
      values={assets}
      configuration={configuration}
      onSelection={(event) => console.log(event.target)}
      isSelectable
      actions={actions}
      actionsCallback={(e, id, action) =>
        console.log(`You have pressed action ${action.label}`)
      }
      searchProps={{ "aria-label": labels.search }}
      multibuttonProps={[
        {
          id: "card-button",
          icon: <Cards />,
          "aria-label": labels.cardView,
        },
        { id: "list-button", icon: <List />, "aria-label": labels.listView },
      ]}
      emptyComponent={
        <HvEmptyState
          message={labels.noMessage}
          icon={<Fail iconSize="S" color="acce1" />}
        />
      }
    >
      <HvCardView id="card" renderer={cardRenderer} />
      <HvListView id="list" renderer={rowRenderer} />
    </HvAssetInventory>
  ) : null;
};

export default AssetInventory;
