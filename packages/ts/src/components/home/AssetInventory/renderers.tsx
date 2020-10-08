import React, { useState } from "react";
import {
  HvCard,
  HvCardHeader,
  HvCardContent,
  HvActionContainer,
  HvActionsGeneric,
  HvCheckBox
} from "@hv/uikit-react-core";
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
      semantic={sema}
      selectable={viewConfiguration.isSelectable}
    >
      <HvCardHeader
        title={data.headerTitle}
        icon={Icon && <Icon semantic={sema} />} />
      <HvCardContent>{<CardContent values={data} />}</HvCardContent>
      <HvActionContainer>
        {viewConfiguration.isSelectable && (
          <HvCheckBox
            onChange={viewConfiguration.onSelection}
            value={data.id}
            inputProps={{ "aria-label": `Select ${data.id}` }}
          />
        )}
        <HvActionsGeneric
          actions={viewConfiguration.actions}
          actionsCallback={viewConfiguration.actionsCallback}
          maxVisibleActions={viewConfiguration.maxVisibleActions} />
      </HvActionContainer>
    </HvCard>
  );
};
