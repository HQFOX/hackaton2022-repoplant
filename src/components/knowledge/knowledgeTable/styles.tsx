import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  table: {
    "& th, & td": {
      padding: "0 10px",
    },
    "& div": {
      cursor: "pointer",
      paddingLeft: 5,
      "&:first-child": {
        padding: 0,
      },
    },
  },
}));

export default styles;
