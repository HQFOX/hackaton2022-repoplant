import {
  HvCard,
  HvCardHeader,
  HvCardContent,
  HvTypography,
  HvActionBar,
  HvActionsGeneric,
  HvTag,
} from "@hitachivantara/uikit-react-core";
import theme from "@hitachivantara/uikit-react-core/dist/theme";
import React from "react";
import useStyles from "./styles";

const cardRenderer = (data: any, viewConfiguration: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  return (
    <HvCard
      bgcolor="atmo1"
      selectable={viewConfiguration.isSelectable}
      selected={data.checked}
    >
      <HvCardHeader title={data.headerTitle} className={classes.title} />
      <HvCardContent>
        <HvTypography>{data.description}</HvTypography>
      </HvCardContent>
      <HvCardContent>
        <HvTypography variant="highlightText">
          Created by: {data.creator}
        </HvTypography>
      </HvCardContent>
      <HvCardContent>
        <HvTag label="Storage" type="categorical" />
        <HvTag label="Product" type="categorical" />
        <HvTag label="Data Platform" type="categorical" />
        <HvTag color="cviz2" label="Storage" type="categorical" />
        <HvTag color="cviz2" label="Product" type="categorical" />
        <HvTag color="cviz2" label="Data Platform" type="categorical" />
      </HvCardContent>
      <HvActionBar aria-label="Leaf">
        <div style={{ flex: 1 }} />
        <HvActionsGeneric
          id={data.id}
          actions={viewConfiguration.actions}
          maxVisibleActions={viewConfiguration.maxVisibleActions}
          actionsCallback={viewConfiguration.actionsCallback}
        />
      </HvActionBar>
    </HvCard>
  );
};

export default cardRenderer;
