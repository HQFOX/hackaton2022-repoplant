import React from "react";
import {
  HvTypography,
  HvCard,
  HvCardHeader,
  HvCardContent,
} from "@hitachivantara/uikit-react-core";

import useStyles from "./styles";

interface DetailsKPIProps {
  title: string;
  subtitle: React.ReactNode;
}

const DetailsKPI: React.FC<DetailsKPIProps> = ({ title, subtitle }) => {
  const classes = useStyles();

  return (
    <HvCard bgcolor="transparent">
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
