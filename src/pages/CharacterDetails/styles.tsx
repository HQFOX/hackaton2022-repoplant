import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: 72,
  },
  title: {
    paddingTop: theme.hv.spacing.xs,
    marginBottom: theme.hv.spacing.md,
    borderTop: `1px solid ${theme.hv.palette.atmosphere.atmo4}`,
  },
  icon: {
    margin: `${theme.hv.spacing.md}px 0`,
    border: `3px solid ${theme.hv.palette.atmosphere.atmo4}`,
    borderRadius: 75,
    width: 125,
    height: 125,
  },
  table: {
    marginBottom: theme.hv.spacing.md,
  },
}));

export default styles;
