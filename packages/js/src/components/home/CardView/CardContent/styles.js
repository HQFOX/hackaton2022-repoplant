import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    content: {
      padding: theme.spacing(0, "sm", 0, "sm")
    },
    item: {
      padding: theme.spacing(0, 0, "sm", 0)
    },
    text: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    kpis: {
      display: "flex"
    },
    timestamp: {
      paddingRight: theme.spacing("xs"),
      marginRight: theme.spacing("xs"),
      borderRight: `1px solid ${theme.hv.palette.accent.acce1}`
    }
  });

export default styles;
