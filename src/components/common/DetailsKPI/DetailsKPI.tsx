import React from "react";
import {
  HvTypography,
  HvCard,
  HvCardHeader,
  HvCardContent,
} from "@hv/uikit-react-core";
import { DetailsKPIProps } from "./index";
import useStyles from "./styles";

const DetailsKPI: React.FC<DetailsKPIProps> = ({ title, subtitle }) => {
  const classes = useStyles();

  return (
    <HvCard>
      <HvCardHeader
        title={title}
        classes={{
          root: classes.titleRoot,
          title: classes.titleText,
        }}
      />
      <HvCardContent className={classes.content}>
        <HvTypography variant="normalText" className={classes.contentText}>
          {subtitle || "-"}
        </HvTypography>
      </HvCardContent>
    </HvCard>
  );
};
export default DetailsKPI;
