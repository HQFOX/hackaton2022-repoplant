import { makeStyles, alpha, hexToRgb } from "@material-ui/core";

import { HEADER_HEIGHT } from "lib/utils/layout";

const styles = makeStyles((theme) => ({
  error: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  loading: {
    display: "flex",
    width: "100%",
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    transition: "background-Color .2s ease",
    backgroundColor: alpha(hexToRgb(theme.hv.palette.atmosphere.atmo1), 0.8),
    zIndex: theme.zIndex.drawer,
  },
}));

export default styles;
