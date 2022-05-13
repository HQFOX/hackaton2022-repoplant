import React from "react";
import {
  HvCard,
  HvCardHeader,
  HvCardContent,
  HvTypography,
  HvTag,
  HvActionBar,
  HvActionsGeneric,
  HvDropDownMenu,
  HvButton,
  HvCardMedia,
} from "@hitachivantara/uikit-react-core";
import { useHistory } from "react-router-dom";
import { Project } from "types/project";
import useStyles from "./styles";

import example from "../../../../assets/ExampleImage.png";

interface AssetCardProps {
  data: Project;
}

const AssetCard: React.FC<AssetCardProps> = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <HvCard bgcolor="atmo1" onClick={() => history.push(`/asset/1`)}>
      <HvCardHeader title={data.title} className={classes.title} />
      <HvCardContent>
        <HvTypography>Multi Cloud</HvTypography>
      </HvCardContent>
      <HvCardMedia image={example} />
      <HvActionBar aria-label="Leaf">
        <div style={{ flex: 1 }} />
        <HvButton category="ghost">View</HvButton>
        <HvDropDownMenu
          onClick={(e, item) => console.log(item.label)}
          dataList={[{ label: "Delete" }, { label: "Update" }]}
        />
      </HvActionBar>
    </HvCard>
  );
};

export default AssetCard;
