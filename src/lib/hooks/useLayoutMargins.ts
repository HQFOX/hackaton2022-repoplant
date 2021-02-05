import { useMediaQuery, useTheme } from "@material-ui/core";
import { isTopLevelPage } from "lib/utils/path";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_MARGIN = 44;
const EXTRA_MARGIN = 84;

const getMargin = (isMdUp, pathname) => {
  const hasExtraMargin = isMdUp && !isTopLevelPage(pathname);
  return hasExtraMargin ? EXTRA_MARGIN : DEFAULT_MARGIN;
}

const useLayoutMargins = () => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [top, setTop] = useState<number>(getMargin(isMdUp, pathname));

  useEffect(() => {
    setTop(getMargin(isMdUp, pathname));
  }, [isMdUp, pathname]);

  return { top };
};

export default useLayoutMargins;
