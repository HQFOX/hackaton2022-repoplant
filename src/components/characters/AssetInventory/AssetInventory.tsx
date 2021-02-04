import React from "react";
import { useTranslation } from "react-i18next";
import { Cards, Fail, List } from "@hv/uikit-react-icons";
import {
  HvAssetInventory,
  HvCardView,
  HvEmptyState,
  // HvListView,
} from "@hv/uikit-react-core";
import { usePeople } from "./data";
import { actions, configuration } from "./utils";
import cardRenderer from "./Card";
// import rowRenderer from "./Row";

const AssetInventory = () => {
  const { t } = useTranslation();

  console.log("People");

  const { data } = usePeople();

  const labels = {
    search: t("components.characters.assetInventory.searchLabel"),
    cardView: t("components.characters.assetInventory.cardViewLabel"),
    listView: t("components.characters.assetInventory.listViewLabel"),
    noMessage: t("components.characters.assetInventory.noMessageLabel"),
  };

  const people = data?.allPeople.edges.map(({ node }) => ({ ...node }));

  return data ? (
    <HvAssetInventory
      id="hv-assetinventory"
      values={people}
      configuration={configuration}
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
    </HvAssetInventory>
  ) : null;
};

export default AssetInventory;
