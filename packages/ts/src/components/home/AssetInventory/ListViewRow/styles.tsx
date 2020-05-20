import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    timestamp: {
      padding: `2px ${theme.hv.spacing.xs}px 0 ${theme.hv.spacing.xs}px`,
      marginRight: theme.spacing("xs"),
      borderRight: `1px solid ${theme.hv.palette.accent.acce1}`
    },
    descriptionContainer: {
      display: "inline-flex"
    },
    schedule: {
      paddingTop: 2
    },
    icon: {
      margin: theme.spacing(0, "xs")
    }
  });

export default styles;
