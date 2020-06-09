import React from "react";
import { HvCard, HvCardView } from "@hv/uikit-react-core";
import { getStatus } from "../utils";
import CardContent from "./CardContent";

const cardRenderer = (data, viewConfiguration) => {
  const { Icon, sema } = getStatus(data.status);
  const StyledIcon = <Icon semantic={sema} />;

  return (
    <HvCard
      icon={StyledIcon}
      headerTitle={data.headerTitle}
      innerCardContent={<CardContent values={data} icon={StyledIcon} />}
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

const CardView = props => <HvCardView renderer={cardRenderer} {...props} />;

CardView.propTypes = {};

export default CardView;
