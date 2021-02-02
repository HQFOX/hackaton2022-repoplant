import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  content: {
    display: "flex",
    alignItems: "center",
    Justify: "flex-start",
  },
  indicatorIcon: {
    marginLeft: theme.hv.spacing.sm,
    marginRight: theme.hv.spacing.sm,
  },
}));
export default styles;
