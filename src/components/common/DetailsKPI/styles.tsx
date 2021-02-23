import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  titleRoot: {
    paddingBottom: 5,
  },
  titleText: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...theme.hv.typography.highlightText,
  },
  content: {
    display: "flex",
    alignItems: "center",
    justify: "flex-start",
    paddingBottom: "0px !important",
  },
  contentText: {
    textTransform: "capitalize",
  },
  indicatorIcon: {
    marginLeft: theme.hv.spacing.sm,
    marginRight: theme.hv.spacing.sm,
  },
}));
export default styles;
