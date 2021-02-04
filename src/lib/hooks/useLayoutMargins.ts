import { useMediaQuery, useTheme } from "@material-ui/core";
import { isTopLevelPage } from "lib/utils/path";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_MARGIN = 44;
const EXTRA_MARGIN = 84;

const useLayoutMargins = () => {
  const [top, setTop] = useState<number>(DEFAULT_MARGIN);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { pathname } = useLocation();

  useEffect(() => {
    const hasExtraMargin = isMdUp && !isTopLevelPage(pathname);
    const margin = hasExtraMargin ? EXTRA_MARGIN : DEFAULT_MARGIN;

    setTop(margin);
  }, [theme, isMdUp, pathname]);

  return { top };
};

export default useLayoutMargins;
