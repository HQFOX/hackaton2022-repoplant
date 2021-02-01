import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    display: "flex",
  },
  container: {
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.hv.spacing.md,
      paddingBottom: theme.hv.spacing.md,
    },
    [theme.breakpoints.down("sm")]: {
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      /* @ts-ignore */
      paddingTop: `${theme.hv.spacing.md / 2}px`,
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      /* @ts-ignore */
      paddingBottom: `${theme.hv.spacing.md / 2}px`,
    },
  },
  hasFooter: {
    minHeight: "calc(100vh - 50px)",
  },
  component: {
    flexGrow: 1,
  },
  /* hasMargins: {
    padding: `${theme.hv.spacing.md}px ${
      Number.parseInt(theme.hv.spacing.md, 2) / 2
    }px 0 ${Number.parseInt(theme.hv.spacing.md, 2) / 2}px`,
  }, */
}));

export default useStyles;
