import { RouterState } from "connected-react-router";
import { AuthState } from "./auth";
import { PagesState } from "./pages";

// The top-level state object
export interface AppState {
  readonly auth: AuthState;
  readonly pages: PagesState;
  readonly router: RouterState;
}
