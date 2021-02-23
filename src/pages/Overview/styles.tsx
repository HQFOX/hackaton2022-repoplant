import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    [theme.breakpoints.up("xs")]: {
      width: 210,
      height: 100,
      margin: "120px 0",
    },
    [theme.breakpoints.down("xs")]: {
      width: 210,
      height: 100,
      margin: "40px 0",
    },
  },
  card: {
    height: 330,
    "& .HvCard-semanticBar": {
      backgroundColor: "#facd2d",
    },
  },
  img: {
    height: 200,
  },
}));

export default useStyles;
