import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: "100%",
    zIndex: theme.zIndex.appBar - 2,
    left: 0,
    height: 72,
    [theme.breakpoints.up("md")]: {
      paddingLeft: `${theme.spacing(4)}px`,
      paddingRight: `${theme.spacing(4)}px`,
      marginTop: `-${theme.spacing(4)}px`,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: `${theme.spacing(2)}px`,
      paddingRight: `${theme.spacing(2)}px`,
      marginTop: `-${theme.spacing(2)}px`,
    },
  },
  background: {
    background: theme.hv.palette.atmosphere.atmo2,
    opacity: 0.75,
    width: "100%",
    height: "100%",
  },
  content: {
    width: "100%",
    padding: theme.hv.spacing.xs,
    display: "flex",
    position: "relative",
    top: -62,
    alignItems: "center",
    justifyItems: "center",
    background: theme.hv.palette.atmosphere.atmo1,
  },
  name: {
    width: "100%",
  },
  actions: {
    minWidth: "130px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

export default styles;
