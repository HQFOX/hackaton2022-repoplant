import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@material-ui/core";
import { Top, Bottom } from "@hitachivantara/uikit-react-icons";
import {
  HvTypography,
  HvCard,
  HvCardHeader,
  HvCardContent,
} from "@hitachivantara/uikit-react-core";

import useStyles from "./styles";

interface CountKPIProps {
  title: React.ReactNode;
  count: number;
  diff: number;
}

const CountKPI: React.FC<CountKPIProps> = ({ title, count, diff }) => {
  const { t } = useTranslation("common");
  const { hv } = useTheme();
  const classes = useStyles();

  return (
    <HvCard
      classes={{
        sema0: classes.cardBorder,
      }}
      bgcolor="transparent"
    >
      <HvCardHeader
        title={title}
        classes={{
          root: classes.titleRoot,
          title: classes.titleText,
        }}
      />
      <HvCardContent className={classes.content}>
        <HvTypography variant="mTitle">{count}</HvTypography>
        {diff > 0 && (
          <>
            <Top
              color={hv.palette.semantic.sema1}
              className={classes.indicatorIcon}
            />
            <HvTypography variant="vizText">{`${diff.toFixed(2)} ${t(
              "countKPI.more"
            )}`}</HvTypography>
          </>
        )}
        {diff < 0 && (
          <>
            <Bottom
              color={hv.palette.semantic.sema3}
              className={classes.indicatorIcon}
            />
            <HvTypography variant="vizText">{`${Math.abs(diff).toFixed(2)} ${t(
              "countKPI.less"
            )}`}</HvTypography>
          </>
        )}
      </HvCardContent>
    </HvCard>
  );
};
export default CountKPI;
