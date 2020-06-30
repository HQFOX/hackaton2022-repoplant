import React from "react";
import { HvCard } from "@hv/uikit-react-core";
import ListViewRow from "./ListViewRow";
import CardContent from "./CardContent";
import { getStatus } from "../utils";

export const rowRenderer = (value, index) => (
  <ListViewRow
    status={getStatus(value.status)}
    value={value}
    id={value.id + index}
    key={value.id + index}
  />
);

export const cardRenderer = (data, viewConfiguration) => {
  const { Icon, sema } = getStatus(data.status);

  return (
    <HvCard
      icon={Icon && <Icon semantic={sema} />}
      headerTitle={data.headerTitle}
      innerCardContent={<CardContent values={data} />}
      semantic={sema}
      checkboxProps={{ value: data.id }}
      onChange={viewConfiguration.onSelection}
      isSelectable={viewConfiguration.isSelectable}
      actions={viewConfiguration.actions}
      maxVisibleActions={viewConfiguration.maxVisibleActions}
      actionsCallback={viewConfiguration.actionsCallback}
    />
  );
};