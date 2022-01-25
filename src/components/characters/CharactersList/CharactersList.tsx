import React from "react";
import { useTranslation } from "react-i18next";
import { Cards, Fail, List } from "@hitachivantara/uikit-react-icons";
import {
  HvAssetInventory,
  HvCardView,
  HvEmptyState,
} from "@hitachivantara/uikit-react-core";

import { useGetPeopleQuery, Person } from "generated/graphql";
import { actions, configuration } from "./utils";
import cardRenderer from "./cardRenderer";

const CharactersList = () => {
  const { t } = useTranslation("characters");
  const { data } = useGetPeopleQuery();

  const labels = {
    search: t("list.searchLabel"),
    cardView: t("list.cardView.label"),
    listView: t("list.listViewLabel"),
    noMessage: t("list.noMessageLabel"),
  };

  const people: Person[] | undefined = data?.allPeople?.edges?.map(
    (edge) =>
      ({
        ...edge?.node,
      } as Person)
  );

  return data ? (
    <HvAssetInventory
      id="hv-assetinventory"
      values={people as { id: string }[]}
      configuration={configuration}
      actions={actions}
      actionsCallback={(e, id, action) =>
        // eslint-disable-next-line no-console
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
          message={t("list.noMessageLabel")}
          icon={<Fail iconSize="S" color="acce1" />}
        />
      }
    >
      <HvCardView id="card" renderer={cardRenderer} />
    </HvAssetInventory>
  ) : null;
};

export default CharactersList;
