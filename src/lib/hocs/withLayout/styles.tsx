import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  section: {
    minHeight: "100vh",
    paddingTop: "60px",
    display: "flex",
  },
  bigTopSpacing: {
    paddingTop: "100px",
  },
  hasFooter: {
    minHeight: "calc(100vh - 40px)",
  },
  component: {
    flexGrow: 1,
  },
  hasMargins: {
    padding: "30px 15px 0 15px",
  },
}));

export default useStyles;
