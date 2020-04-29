import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HvTypography from "@hv/uikit-react-core/dist/Typography";
import HvGrid from "@hv/uikit-react-core/dist/Grid";
import withLayout from "lib/hocs/withLayout";
import { fetchAsset } from "lib/api/assets";

const Asset = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAsset(id);
      setData(result);
    };
    fetchData();
  });

  return (
    <HvGrid container>
      <HvGrid item xl={12}>
        <HvTypography variant="3xlTitle">{data.headerTitle}</HvTypography>
        <br />
        <HvTypography variant="normalText">{data.relatedAssets}</HvTypography>
      </HvGrid>
    </HvGrid>
  );
}

export default withLayout(Asset);
