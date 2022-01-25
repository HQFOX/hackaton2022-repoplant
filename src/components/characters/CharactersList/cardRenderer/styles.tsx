import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    "& .HvCard-semanticBar": {
      backgroundColor: "#facd2d",
    },
  },
  item: {
    paddingBottom: theme.hv.spacing.sm,
  },
  kpis: {
    display: "flex",
  },
  timestamp: {
    paddingRight: theme.hv.spacing.xs,
    borderRight: `solid 1px ${theme.hv.palette.accent.acce1}`,
    marginRight: theme.hv.spacing.xs,
  },
}));

export default useStyles;
