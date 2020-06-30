import { fetchAssets } from "lib/api/assets";
import {
  fetchTimeSeriesData,
  fetchSalesData,
  fetchTableData
} from "lib/api/data";
import { setAssetData, setTableData, setLineData, setBarData } from "./actions";

export const getAssetsData = () => async dispatch => {
  const { data } = await fetchAssets();
  dispatch(setAssetData(data));
};

export const getTableData = () => async dispatch => {
  const { data } = await fetchTableData();
  dispatch(setTableData(data));
};

export const getLineData = () => async dispatch => {
  const { data } = await fetchTimeSeriesData();
  dispatch(setLineData(data));
};

export const getBarData = () => async dispatch => {
  const { data } = await fetchSalesData();
  dispatch(setBarData(data));
};