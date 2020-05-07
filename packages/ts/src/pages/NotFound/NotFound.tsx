import React from "react";
import HvTypography from "@hv/uikit-react-core/dist/Typography";
import HvGrid from "@hv/uikit-react-core/dist/Grid";
import { useTranslation } from "react-i18next";
import withLayout from "lib/hocs/withLayout";
import { NotFoundProps } from "./index";

const NotFound: React.FC<NotFoundProps> = ({ classes }: NotFoundProps) => {
  const { t } = useTranslation();

  return (
    <HvGrid container>
      <HvGrid item xl={12}>
        <HvTypography variant="3xlTitle" className={classes.title}>
          {t("pages.notFound.title")}
        </HvTypography>
      </HvGrid>
    </HvGrid>
  );
};

export default withLayout(NotFound);
