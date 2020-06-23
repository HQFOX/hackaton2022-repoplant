import { createStyles } from "@material-ui/core";

const styles = () =>
  createStyles({
    section: {
      minHeight: "100vh",
      paddingTop: "50px",
      display: "flex"
    },
    hasFooter: {
      minHeight: "calc(100vh - 40px)"
    },
    component: {
      flexGrow: 1
    },
    hasMargins: {
      padding: "30px 15px 0 15px"
    }
  });

export default styles;
