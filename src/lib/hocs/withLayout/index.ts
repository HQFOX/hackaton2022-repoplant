import { useMediaQuery, useTheme } from "@material-ui/core";
import { isTopLevelPage } from "lib/utils/path";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useLayoutMargins = () => {
  const [margin, setMargin] = useState<number>(0);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { pathname } = useLocation();

  useEffect(() => {
    if (isMdUp && !isTopLevelPage(pathname)) {
      setMargin(84);
    } else {
      setMargin(44);
    }
  }, [theme, isMdUp, pathname]);

  return margin;
};

export { default } from "./withLayout";
