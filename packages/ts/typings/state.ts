import { RouterState } from "connected-react-router";
import { AuthState } from "./auth";
import { DataState } from "./data";
import { PagesState } from "./pages";

export type DeepPartial<T> = T extends Function
  ? T
  : T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

// The top-level state object
export interface AppState {
  readonly auth: AuthState;
  readonly data: DataState;
  readonly pages: PagesState;
  readonly router: RouterState;
}

export type TestAppState = DeepPartial<AppState>;
