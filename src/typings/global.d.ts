import { HvTheme } from "@hv/uikit-react-core";

// extend Material-UI's theme to use `theme.hv` object
declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    hv: HvTheme;
  }

  interface ThemeOptions {
    hv?: HvTheme;
  }
}

declare global {
  interface Window {
    INITIAL_REDUX_STATE: any;
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";

declare module "jsonwebtoken";
