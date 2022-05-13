import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.hvSpacing(0, 0, "sm", 0),
  },
  kpis: {
    display: "flex",
  },
  timestamp: {
    paddingRight: theme.hv.spacing.xs,
    borderRight: `solid 1px ${theme.hv.palette.accent.acce1}`,
    marginRight: theme.hv.spacing.xs,
  },
  timestamp2: {
    padding: theme.hvSpacing(0, "xs"),
  },
  columnSplitter: {
    background: theme.hv.palette.accent.acce1,
    width: "1px",
    height: "16px",
    marginRight: theme.hv.spacing.xs,
  },
  icon: {
    margin: theme.hvSpacing(0, "xs"),
  },
}));

export default useStyles;
