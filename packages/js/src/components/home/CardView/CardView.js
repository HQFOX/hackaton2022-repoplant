import React from "react";
import {
  HvCard,
  HvCardHeader,
  HvCardContent,
  HvActionContainer,
  HvActionsGeneric,
  HvCardView
} from "@hv/uikit-react-core";
import { getStatus } from "../utils";
import CardContent from "./CardContent";

const cardRenderer = (data, viewConfiguration) => {
  const { Icon, sema } = getStatus(data.status);
  const StyledIcon = Icon && <Icon semantic={sema} />;

  return (
    <HvCard
      semantic={sema}
      onChange={viewConfiguration.onSelection}
      selectable={viewConfiguration.isSelectable}
    >
      <HvCardHeader
        title={data.headerTitle}
        icon={StyledIcon} />
      <HvCardContent>{<CardContent values={data} />}</HvCardContent>
      <HvActionContainer>
        <HvActionsGeneric
          actions={viewConfiguration.actions}
          actionsCallback={viewConfiguration.actionsCallback}
          maxVisibleActions={viewConfiguration.maxVisibleActions} />
      </HvActionContainer>
    </HvCard>
  );
};

const CardView = props => <HvCardView renderer={cardRenderer} {...props} />;

CardView.propTypes = {};

export default CardView;
