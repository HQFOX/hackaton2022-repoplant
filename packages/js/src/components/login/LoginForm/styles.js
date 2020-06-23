const styles = theme => ({
  root: {
    minWidth: "250px",
    width: "300px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: `${theme.hv.spacing.lg}px`,
    "& h3": {
      textAlign: "center"
    }
  },
  input: {
    marginTop: 35
  },
  button: {
    width: 120,
    float: "right",
    marginTop: `${theme.hv.spacing.lg}px`
  },
  buttonsContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: `${theme.hv.spacing.lg}px`
  },
  sentenceCase: {
    textTransform: `full-size-kana`
  }
});

export default styles;
