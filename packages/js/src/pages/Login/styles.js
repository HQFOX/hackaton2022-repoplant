import { createStyles } from "@material-ui/core";

const styles = () =>
  createStyles({
    root: {
      height: "calc(100vh - 50px - 30px - 40px)", // header + padding, footer
      "& > div": {
        margin: 0
      }
    }
  });

export default styles;
