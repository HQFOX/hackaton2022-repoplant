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
} from "@hitachivantara/uikit-react-core";
import { useHistory } from "react-router-dom";
import { Project } from "types/project";
import useStyles from "./styles";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <HvCard bgcolor="atmo1" onClick={() => history.push(`/project/1`)}>
      <HvCardHeader title={data.title} className={classes.title} />
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
        <HvButton category="ghost">View</HvButton>
        <HvDropDownMenu
          onClick={(e, item) => console.log(item.label)}
          dataList={[{ label: "Delete" }, { label: "Update" }]}
        />
      </HvActionBar>
    </HvCard>
  );
};

export default ProjectCard;
