import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => {
  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  /* @ts-ignore */
  const halfMd = theme.hv.spacing.md / 2;

  return {
    root: {
      position: "sticky",
      zIndex: theme.zIndex.appBar - 1,
      left: 0,
      height: "calc(32px + 10px + 10px + 10px + 10px)",
      [theme.breakpoints.up("md")]: {
        marginLeft: `-${theme.hv.spacing.md}px`,
        marginRight: `-${theme.hv.spacing.md}px`,
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: `-${halfMd}px`,
        marginRight: `-${halfMd}px`,
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
        width: `calc(100% - ${theme.hv.spacing.md}px - ${theme.hv.spacing.md}px)`,
        margin: `${theme.hv.spacing.xs}px ${theme.hv.spacing.md}px ${theme.hv.spacing.xs}px ${theme.hv.spacing.md}px`,
      },
      [theme.breakpoints.down("sm")]: {
        width: `calc(100% - ${halfMd}px - ${halfMd}px)`,
        margin: `${theme.hv.spacing.xs}px ${halfMd}px ${theme.hv.spacing.xs}px ${halfMd}px`,
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
  };
});

export default styles;
