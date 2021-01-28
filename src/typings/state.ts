import { AuthState } from "./auth";

export type DeepPartial<T> = T extends Function
  ? T
  : T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

// The top-level state object
export interface AppState {
  readonly auth: AuthState;
}

export type TestAppState = DeepPartial<AppState>;
