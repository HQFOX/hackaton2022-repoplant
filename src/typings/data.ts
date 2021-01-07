// Use enums for better autocompletion of action type names.
//
// We use the `@@context/ACTION_TYPE` convention,
// to follow the convention of Redux's `@@INIT` action.
export enum DataActions {
  SET_ASSETS = "@@data/SET_ASSETS",
  SET_TABLE = "@@data/SET_TABLE",
  SET_LINE = "@@data/SET_LINE",
  SET_BAR = "@@data/SET_BAR",
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export type AssetsData = object[];
export type TableData = object[];
export type LineData = object[];
export type BarData = object[];

export interface DataState {
  assets: AssetsData;
  table: TableData;
  line: LineData;
  bar: BarData;
}
