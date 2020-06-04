import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { AppState } from "typings/state";
import { redirect } from "store/pages/thunks";
import { getAssetsData } from "store/data/thunks";
import styles from "./styles";
import AssetInventory from "./AssetInventory";

const mapStateToProps = ({ data }: AppState) => ({
  assets: data.assets
});

const mapDispatchToProps = (dispatch: Dispatch) =>
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
