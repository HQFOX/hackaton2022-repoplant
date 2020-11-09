import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  console.log("theme: ", theme);

  return {
    timestamp2: {
      padding: `0 ${theme.hv.spacing.xs}px`
    },
    columnSplitter: {
      background: theme.hv.palette.accent.acce1,
      width: "1px",
      height: "16px",
      marginRight: theme.hv.spacing.xs
    },
    icon: {
      margin: theme.hv.spacing.xs
    }
  };
});

export default useStyles;
