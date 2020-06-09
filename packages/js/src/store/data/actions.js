export const DataActions = {
  SET_ASSETS: "@@data/SET_ASSETS",
  SET_TABLE: "@@data/SET_TABLE",
  SET_LINE: "@@data/SET_LINE",
  SET_BAR: "@@data/SET_BAR"
};

export const setAssetData = assetData => ({
  type: DataActions.SET_ASSETS,
  assets: assetData
});

export const setTableData = tableData => ({
  type: DataActions.SET_TABLE,
  table: tableData
});

export const setLineData = lineData => ({
  type: DataActions.SET_LINE,
  line: lineData
});

export const setBarData = barData => ({
  type: DataActions.SET_BAR,
  bar: barData
});
