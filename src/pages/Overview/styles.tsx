import { createStyles } from "@material-ui/core";

const styles = () =>
  createStyles({
    item: {
      textAlign: "right",
      "& button:first-child": {
        marginRight: 10,
      },
      "@media (max-width: 960px)": {
        textAlign: "left",
      },
    },
  });

export default styles;
