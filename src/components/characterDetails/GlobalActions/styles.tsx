import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    zIndex: theme.zIndex.appBar - 1,
    left: 0,
    height: "calc(32px + 10px + 10px + 10px + 10px)",
    [theme.breakpoints.up("md")]: {
      marginLeft: `-${theme.spacing(4)}px`,
      marginRight: `-${theme.spacing(4)}px`,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: `-${theme.spacing(2)}px`,
      marginRight: `-${theme.spacing(2)}px`,
    },
  },
  background: {
    background: theme.hv.palette.atmosphere.atmo2,
    opacity: 0.75,
    height: "100%",
    width: "100%",
  },
  content: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${theme.spacing(4)}px - ${theme.spacing(4)}px)`,
      margin: `${theme.hv.spacing.xs}px ${theme.hv.spacing.md}px ${theme.hv.spacing.xs}px ${theme.hv.spacing.md}px`,
    },
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% - ${theme.spacing(2)}px - ${theme.spacing(2)}px)`,
      margin: `${theme.hv.spacing.xs}px ${theme.spacing(2)}px ${
        theme.hv.spacing.xs
      }px ${theme.spacing(2)}px`,
    },
    margin: `${theme.hv.spacing.xs}px ${theme.hv.spacing.md}px ${theme.hv.spacing.xs}px ${theme.hv.spacing.md}px`,
    padding: theme.hv.spacing.xs,
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    background: theme.hv.palette.atmosphere.atmo1,
    position: "absolute",
    zIndex: 1,
    top: 0,
  },
  name: {
    width: "100%",
  },
  actions: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

export default styles;
