import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { redirect } from "store/pages/thunks";
import { getAssetsData } from "store/data/thunks";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import AssetInventory from "./AssetInventory";

const mapStateToProps = ({ data }) => ({
  assets: data.assets
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAssetsData,
      redirect
    },
    dispatch
  );

export default withStyles(styles, { name: "AssetInventory" })(
  connect(mapStateToProps, mapDispatchToProps)(AssetInventory)
);
