import { action } from "typesafe-actions";
import {
  DataActions,
  AssetsData,
  TableData,
  LineData,
  BarData
} from "typings/data";

// Use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
//
export const setAssetData = (assets: AssetsData) =>
  action(DataActions.SET_ASSETS, assets);

export const setTableData = (table: TableData) =>
  action(DataActions.SET_TABLE, table);

export const setLineData = (line: LineData) =>
  action(DataActions.SET_LINE, line);

export const setBarData = (bar: BarData) => action(DataActions.SET_BAR, bar);
