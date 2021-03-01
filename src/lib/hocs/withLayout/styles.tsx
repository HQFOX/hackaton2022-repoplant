import { makeStyles } from "@material-ui/core";

const DEFAULT_MARGIN = 44;
const EXTRA_MARGIN = 84;

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    display: "flex",
  },
  container: {
    marginTop: `calc(${DEFAULT_MARGIN}px + ${
      Number(theme.hv.spacing.md) / 2
    }px)`,
  },
  notAuthed: {
    marginTop: DEFAULT_MARGIN,
    padding: 0,
  },
  hasSecondLevel: {
    [theme.breakpoints.up("md")]: {
      marginTop: `calc(${EXTRA_MARGIN}px + ${theme.hv.spacing.md}px)`,
    },
  },
  hasFooter: {
    [theme.breakpoints.up("md")]: {
      minHeight: "calc(100vh - 40px)",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(100vh - 90px)",
    },
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
