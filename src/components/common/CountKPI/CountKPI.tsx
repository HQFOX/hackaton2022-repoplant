import React from "react";
import {
  HvTypography,
  HvCard,
  HvCardHeader,
  HvCardContent,
} from "@hv/uikit-react-core";
import { Top, Bottom } from "@hv/uikit-react-icons";
import { useTheme } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { CountKPIProps } from "./index";
import useStyles from "./styles";

const CountKPI: React.FC<CountKPIProps> = ({ title, count, diff }) => {
  const { hv } = useTheme();
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <HvCard
      classes={{
        sema0: classes.cardBorder,
      }}
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
              "components.common.countKPI.more"
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
              "components.common.countKPI.less"
            )}`}</HvTypography>
          </>
        )}
      </HvCardContent>
    </HvCard>
  );
};
export default CountKPI;
